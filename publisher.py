from __future__ import annotations

import json
import random
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent
POSTS_FILE = ROOT / "posts.json"
STATE_FILE = ROOT / "schedule.json"
UTC = timezone.utc


def week_start(moment: datetime) -> datetime:
    monday = moment.date() - timedelta(days=moment.weekday())
    return datetime.combine(monday, datetime.min.time(), tzinfo=UTC)


def load_json(path: Path, default: dict) -> dict:
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, data: dict) -> None:
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def make_week_schedule(start: datetime) -> list[str]:
    # A variable weekly count keeps the cadence within the requested range.
    count = random.randint(1, 7)
    seconds_in_week = 7 * 24 * 60 * 60
    offsets = sorted(random.sample(range(0, seconds_in_week), count))
    return [(start + timedelta(seconds=offset)).isoformat(timespec="seconds") for offset in offsets]


def main() -> None:
    now = datetime.now(UTC).replace(minute=0, second=0, microsecond=0)
    posts = load_json(POSTS_FILE, {"posts": []})
    state = load_json(STATE_FILE, {})
    start = week_start(now)
    week_key = start.date().isoformat()

    if state.get("week") != week_key:
        state = {"week": week_key, "slots": make_week_schedule(start), "published_slots": []}

    templates = posts.get("templates") or posts.get("posts") or []
    if not templates:
        raise SystemExit("Add at least one translated post before enabling automatic publishing.")

    due = [slot for slot in state["slots"] if slot <= now.isoformat(timespec="seconds") and slot not in state["published_slots"]]
    for slot in due:
        template = templates[len(posts["posts"]) % len(templates)]
        publication = json.loads(json.dumps(template))
        publication["id"] = f"appeal-{datetime.fromisoformat(slot).strftime('%Y%m%d-%H%M')}"
        publication["published"] = slot
        posts["posts"].append(publication)
        state["published_slots"].append(slot)

    save_json(POSTS_FILE, posts)
    save_json(STATE_FILE, state)
    if due:
        print(f"Published {len(due)} post(s).")
    else:
        print("No publication due.")


if __name__ == "__main__":
    main()
