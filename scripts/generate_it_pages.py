"""Generate static fallbacks for the IT service routes from their shared content."""

import html
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
pages = json.loads((ROOT / "assets" / "it-leistungen.json").read_text(encoding="utf-8"))


def escape(value):
    return html.escape(value, quote=True)


def list_items(items):
    return "".join(f"<li>{escape(item)}</li>" for item in items)


for page in pages:
    url = f"https://easytechit.de/it/{page['slug']}/"
    title = escape(page["title"])
    description = escape(page["description"])
    faq = "".join(
        f"<details><summary>{escape(question)}</summary><p>{escape(answer)}</p></details>"
        for question, answer in page["faq"]
    )
    others = "".join(
        f'<li><a href="/it/{escape(other["slug"])}/">{escape(other["short"])}</a></li>'
        for other in pages if other["slug"] != page["slug"]
    )
    output = f"""<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <meta name="description" content="{description}">
  <link rel="canonical" href="{url}">
  <link rel="icon" type="image/png" href="/assets/EasyTech%20Logo.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#111111">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{url}">
  <meta property="og:site_name" content="EasyTech IT-Solutions">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:image" content="https://easytechit.de/assets/EasyTech%20Logo.png">
  <meta property="og:locale" content="de_DE">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{title}">
  <meta name="twitter:description" content="{description}">
  <meta name="twitter:image" content="https://easytechit.de/assets/EasyTech%20Logo.png">
  <script type="module" crossorigin src="/assets/index-CBKwgmPr.js"></script>
  <link rel="stylesheet" href="/assets/index-CJZBfvzu.css">
  <link rel="stylesheet" href="/css/easytech-nav.css">
  <link rel="stylesheet" href="/css/it-startseite.css?v=2">
</head>
<body>
  <div id="root">
    <main class="it-home it-service-page">
      <section class="it-detail-hero"><div class="it-wrap">
        <a href="/#leistungen" class="it-back">← Alle Leistungen</a>
        <h1>{escape(page["heading"])}</h1><p>{escape(page["intro"])}</p>
        <div class="it-actions"><a class="it-button it-button-primary" href="/kontakt/">Anfrage senden</a><a class="it-button it-button-light" href="tel:+4960479974441">Jetzt anrufen</a></div>
      </div></section>
      <section class="it-section"><div class="it-wrap it-detail-copy"><h2>{escape(page["benefit"])}</h2><p>{escape(page["text"])}</p><ul>{list_items(page["items"])}</ul></div></section>
      <section class="it-section it-section-soft"><div class="it-wrap it-detail-copy"><h2>So gehen wir vor</h2><ol>{list_items(page["steps"])}</ol></div></section>
      <section class="it-section"><div class="it-wrap it-detail-copy"><h2>Häufige Fragen</h2><div class="it-faq">{faq}</div></div></section>
      <section class="it-section it-section-soft"><div class="it-wrap it-detail-copy"><h2>Ihr Anliegen besprechen</h2><p>Kontaktieren Sie uns für Unterstützung in Altenstadt, der Wetterau und Umgebung.</p><div class="it-actions"><a class="it-button it-button-primary" href="/kontakt/">Kontaktformular</a><a class="it-button it-button-outline" href="tel:+4960479974441">Anrufen</a><a class="it-button it-button-outline" href="https://wa.me/4960479974441" target="_blank" rel="noopener noreferrer">WhatsApp schreiben</a></div><h3>Weitere IT-Leistungen</h3><ul>{others}</ul></div></section>
    </main>
  </div>
  <script src="/js/easytech-nav.js"></script>
  <script src="/js/seo-quality.js?v=23"></script>
</body>
</html>
"""
    target = ROOT / "it" / page["slug"] / "index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(output, encoding="utf-8")
