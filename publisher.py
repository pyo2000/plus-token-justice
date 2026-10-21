from __future__ import annotations

import json
import os
import random
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent
POSTS_FILE = ROOT / "posts.json"
STATE_FILE = ROOT / "schedule.json"
UTC = timezone.utc
CADENCE = "random-24-48-hours-v1"


def load_json(path: Path, default: dict) -> dict:
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, data: dict) -> None:
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def random_interval() -> timedelta:
    return timedelta(minutes=random.randint(24 * 60, 48 * 60))


def initialize_schedule(now: datetime) -> dict:
    return {
        "cadence": CADENCE,
        "next_base": (now + random_interval()).isoformat(timespec="minutes"),
        "extra_slots": [],
        "published_slots": [],
        "recent_template_ids": [],
    }


def main() -> None:
    now = datetime.now(UTC).replace(second=0, microsecond=0)
    posts = load_json(POSTS_FILE, {"posts": []})
    state = load_json(STATE_FILE, {})
    if state.get("cadence") != CADENCE or "next_base" not in state:
        state = initialize_schedule(now)

    templates = posts.get("templates") or []
    if not templates:
        raise SystemExit("Add at least one translated post before enabling automatic publishing.")

    due = []
    next_base = datetime.fromisoformat(state["next_base"])
    if next_base < now - timedelta(hours=48):
        # Skip stale slots after a long workflow pause instead of publishing a backlog at once.
        next_base = now + random_interval()
        state["next_base"] = next_base.isoformat(timespec="minutes")
        state["extra_slots"] = []
    if next_base <= now:
        due.append((next_base.isoformat(timespec="minutes"), "regular"))
        state["next_base"] = (next_base + random_interval()).isoformat(timespec="minutes")
        if random.random() < 0.4:
            extra = next_base + timedelta(minutes=random.randint(6 * 60, 12 * 60))
            state.setdefault("extra_slots", []).append(extra.isoformat(timespec="minutes"))

    state["extra_slots"] = [
        slot for slot in state.get("extra_slots", [])
        if datetime.fromisoformat(slot) >= now - timedelta(hours=48)
    ]
    due.extend((slot, "extra") for slot in state["extra_slots"] if slot <= now.isoformat(timespec="minutes"))
    due = sorted(due)[:1]

    for slot, _kind in due:
        recent_ids = state.setdefault("recent_template_ids", [])
        available = [template for template in templates if template["template_id"] not in recent_ids[-3:]]
        if not available:
            available = templates
        template = random.choice(available)
        publication = json.loads(json.dumps(template))
        publication.pop("template_id", None)
        publication["id"] = f"appeal-{datetime.fromisoformat(slot).strftime('%Y%m%d-%H%M')}"
        publication["published"] = slot
        posts["posts"].append(publication)
        recent_ids.append(template["template_id"])
        state["recent_template_ids"] = recent_ids[-3:]
        state["published_slots"].append(slot)
        if _kind == "extra":
            state["extra_slots"].remove(slot)

    save_json(POSTS_FILE, posts)
    save_json(STATE_FILE, state)
    print(f"Published {len(due)} post(s)." if due else "No publication due.")
    if output_path := os.environ.get("GITHUB_OUTPUT"):
        with Path(output_path).open("a", encoding="utf-8") as output:
            output.write(f"published={'true' if due else 'false'}\n")


if __name__ == "__main__":
    main()
