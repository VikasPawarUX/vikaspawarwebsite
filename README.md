# Vikas Pawar — Design & Play

A standalone, responsive portfolio redesign. Static HTML, CSS and JavaScript with no runtime dependencies.

Preview: `python3 -m http.server 4173 --directory dist`

Content and original artwork come from https://www.vikaspawar.online. Résumé, Figma case study, LinkedIn, store destinations and privacy policy link to existing pages. Featured compositions are new, using the original app icons. The original Color Sign iOS link pointed to a different game; this version uses its Android destination. The old privacy policy stays linked rather than being rewritten.

The website is isolated from the surrounding GiveAndGo application. Deploy `dist/` to any static host. Sites identity is in `.openai/hosting.json`.

Advertising text is served from `dist/ads.txt` and `dist/app-ads.txt`. Update both with the ad provider’s supplied plain text, then redeploy.
