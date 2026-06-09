# securify-corp-website

Public organization website for Securify.

This is a lightweight static site for a consumer cybersecurity startup. The site
is designed to satisfy organization verification needs, including Apple
Developer Program enrollment, while avoiding product, roadmap, screenshot,
tactic, architecture, investor, or launch details.

## Site posture

- Static HTML and CSS only.
- No analytics, cookies, trackers, forms, newsletter, login, or client-side
  JavaScript.
- `robots.txt` blocks indexing while the public site remains low-disclosure.
- Public copy should remain concise, calm, and non-revealing.
- Do not add fake addresses, phone numbers, team members, social links, or
  investor names.

## Local startup

From the repository root:

```sh
python3 -m http.server 4173
```

Open:

```text
http://localhost:4173/
```

To stop the server, press `Ctrl-C` in the terminal running it.

If port `4173` is already in use, choose another local port:

```sh
python3 -m http.server 4174
```

Then open `http://localhost:4174/`.

## Verification checklist

Before publishing changes, check:

- The home page renders on desktop and mobile without horizontal overflow.
- The hero says `Building safer digital experiences`.
- The footer says `© 2026 Securify AI, Inc. All rights reserved.`
- Contact links use `mailto:support@securifyapp.com` or
  `mailto:hello@securifyapp.com`.
- `robots.txt` contains:

```text
User-agent: *
Disallow: /
```

Also scan for accidental over-disclosure:

```sh
rg -n "coming soon|scam|browser protection|messaging protection|roadmap|App Store|threat intelligence|newsletter|analytics|cookie|login|<form|investor|screenshot|architecture|acquisition" index.html styles.css robots.txt privacy-policy/index.html
```

The command should return no matches.

## Deploying to GitHub Pages

1. Push this repository to the `main` branch on GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. The included workflow at `.github/workflows/deploy-pages.yml` will publish
   the site automatically on every push to `main`.
