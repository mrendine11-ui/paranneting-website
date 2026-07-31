# Paranneting Website

A static, no-build website for Paranneting — Home, About, Services, Resources, Collaborate, and Contact pages. Plain HTML/CSS/JS, so it uploads straight to GitHub and hosts for free on GitHub Pages, no build tools required.

**Brand:** cream / espresso / rose-brown palette, Playfair Display (headings) + Lora (body), matching the earlier Paranneting site.

## What's in here

```
paranneting-site/
├── index.html          Home
├── about.html
├── services.html
├── resources.html
├── collaborate.html
├── contact.html         Includes a contact form (needs Formspree — see below)
├── css/style.css        All styling, colors, and fonts live here
├── js/main.js           Mobile nav toggle + basic form handling
└── README.md            This file
```

## Before you upload: 3 things to update

1. **Social links** — In every page's footer (and on the Contact page), the Instagram/TikTok/Facebook icons point to `#` placeholders. Search each file for `aria-label="Instagram"` etc. and swap in the real URLs.
2. **Contact form** — The form in `contact.html` points to `https://formspree.io/f/YOUR_FORM_ID`. Create a free form at [formspree.io](https://formspree.io), and replace `YOUR_FORM_ID` with the ID it gives you so messages land in an inbox.
3. **Booking link** — Currently set to `https://tr.ee/_DA8OAI5lu` in the nav, hero, and footer of every page. Update if that link ever changes (find-and-replace across all `.html` files).

## Option A: Upload with no coding tools (easiest)

1. Go to [github.com](https://github.com) and log in (or create a free account).
2. Click the **+** in the top right → **New repository**.
3. Name it something like `paranneting-website`. Keep it **Public** (required for free GitHub Pages). Don't check "Add a README" since you already have one. Click **Create repository**.
4. On the new repo page, click **uploading an existing file**.
5. Drag in the entire contents of this folder (not the folder itself — select `index.html`, `about.html`, the `css` folder, the `js` folder, etc., all at once) and drop them into the upload area. GitHub will preserve the folder structure.
6. Scroll down, add a commit message like "Initial site upload," and click **Commit changes**.

## Option B: Upload with Git (if you're comfortable with the terminal)

```bash
cd paranneting-site
git init
git add .
git commit -m "Initial site upload"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/paranneting-website.git
git push -u origin main
```

## Turning it into a live website (GitHub Pages)

1. In your repository on GitHub, click **Settings** (top right of the repo).
2. In the left sidebar, click **Pages**.
3. Under "Build and deployment" → "Source," select **Deploy from a branch**.
4. Under "Branch," choose **main** and folder **/ (root)**, then click **Save**.
5. Wait 1–2 minutes, then refresh the page. GitHub will show you a live URL, something like:
   `https://YOUR-USERNAME.github.io/paranneting-website/`
6. That's your live site. Every time you upload new changes to the `main` branch, it updates automatically within a minute or two.

## Using a custom domain (optional)

If you want it at `paranneting.com` instead of the github.io URL:
1. In the same **Settings → Pages** screen, enter your domain under "Custom domain" and save. GitHub will create a `CNAME` file in your repo automatically.
2. At your domain registrar (GoDaddy, Namecheap, etc.), add a CNAME record pointing to `YOUR-USERNAME.github.io`.
3. DNS changes can take up to 24 hours to fully propagate.

## Making future edits

- Small text changes: click the pencil icon on any file directly on GitHub, edit, and commit.
- Bigger changes: edit locally in a text editor (or ask Claude), then re-upload via Option A or push via Option B.
- All colors and fonts are controlled from `css/style.css` under the `:root` section at the top, so a palette or font change only needs to happen in one place.
