from __future__ import annotations

import html
import json
import re
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parent
SITE = "https://pyo2000.github.io/plus-token-justice"
LANGUAGE_NAMES = {"en": "English", "ko": "한국어", "de": "Deutsch", "zh": "中文", "ja": "日本語"}


def clean_text(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def article_page(post: dict, language: str, translation: dict) -> str:
    post_id = quote(post["id"], safe="")
    canonical = f"{SITE}/posts/{post_id}/{language}/"
    title = html.escape(translation["title"])
    body = "\n".join(f"<p>{html.escape(paragraph)}</p>" for paragraph in translation["body"].split("\n\n") if paragraph.strip())
    description = html.escape(clean_text(translation["body"])[:160])
    alternates = "\n".join(
        f'<link rel="alternate" hreflang="{html.escape(code)}" href="{SITE}/posts/{post_id}/{quote(code)}/">'
        for code in post["translations"]
    )
    default_language = "en" if "en" in post["translations"] else language
    alternates += f'\n<link rel="alternate" hreflang="x-default" href="{SITE}/posts/{post_id}/{quote(default_language)}/">'
    language_links = " · ".join(
        f'<a href="{SITE}/posts/{post_id}/{quote(code)}/" lang="{html.escape(code)}">{html.escape(LANGUAGE_NAMES.get(code, code))}</a>'
        for code in post["translations"]
    )
    published = html.escape(post["published"][:10])
    category = html.escape(post.get("category", "Public appeal"))
    structured_data = json.dumps(
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": translation["title"],
            "datePublished": post["published"],
            "inLanguage": language,
            "mainEntityOfPage": canonical,
            "publisher": {"@type": "Organization", "name": "Justice for PlusToken Victims"},
        },
        ensure_ascii=False,
    ).replace("<", "\\u003c")
    return f'''<!doctype html>
<html lang="{html.escape(language)}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title} | Justice for PlusToken Victims</title>
  <meta name="description" content="{description}">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="{canonical}">
  {alternates}
  <link rel="stylesheet" href="../../../styles.css">
  <meta property="og:type" content="article">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:url" content="{canonical}">
  <script type="application/ld+json">{structured_data}</script>
</head>
<body>
  <header class="topbar"><a class="brand" href="{SITE}/">JUSTICE <span>FOR VICTIMS</span></a><a class="quiet-link" href="{SITE}/#about">About this campaign</a></header>
  <main style="max-width:850px;margin:64px auto;padding:0 24px">
    <p class="eyebrow">{category} · {LANGUAGE_NAMES.get(language, language)}</p>
    <article><h1 style="font:400 clamp(34px,5vw,52px)/1.15 Georgia,serif;letter-spacing:-.02em">{title}</h1>
      <nav aria-label="Available languages">{language_links}</nav>
      <p class="post-meta">{published}</p><div class="post-body">{body}</div>
    </article>
    <p><a href="{SITE}/">← Return to campaign home</a></p>
  </main>
</body>
</html>
'''


def main() -> None:
    feed = json.loads((ROOT / "posts.json").read_text(encoding="utf-8-sig"))
    published_dates = [post.get("published", "")[:10] for post in feed.get("posts", []) if post.get("published")]
    urls = {f"{SITE}/": max(published_dates, default="")}
    for post in feed.get("posts", []):
        post_id = quote(post["id"], safe="")
        lastmod = post.get("published", "")[:10]
        for language, translation in post.get("translations", {}).items():
            if not translation.get("title") or not translation.get("body"):
                continue
            relative = Path("posts") / post_id / language / "index.html"
            output = ROOT / relative
            output.parent.mkdir(parents=True, exist_ok=True)
            output.write_text(article_page(post, language, translation), encoding="utf-8")
            urls[f"{SITE}/{relative.as_posix().removesuffix('index.html')}"] = lastmod

    entries = "\n".join(
        f"  <url><loc>{html.escape(url)}</loc><lastmod>{date}</lastmod></url>"
        for url, date in sorted(urls.items())
    )
    (ROOT / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f"{entries}\n</urlset>\n",
        encoding="utf-8",
    )
    (ROOT / "robots.txt").write_text(
        "User-agent: *\nAllow: /\nSitemap: " + SITE + "/sitemap.xml\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
