# Paranneting Website

A static, no-build website for Paranneting, built around Anne Reboa's real bio, philosophy, services, and pricing. Plain HTML/CSS/JS, uploads straight to GitHub and hosts free on GitHub Pages.

**Brand:** cream / espresso / rose-brown, storybook-editorial feel. Playfair Display (headings) + Lora (body).

## What's in here

```
paranneting-site/
├── index.html                         Home
├── about.html                         Anne's real bio + "Our Philosophy"
├── services.html                      1-on-1 Coaching / Workshops / Membership (tabbed)
├── blog.html                          Blog index
├── blog-reading-is-foundational.html  First real blog post
├── contact.html                       Contact form + real social links
├── collaborate.html                   Brand/partnership page (linked from footer)
├── css/style.css
├── js/main.js                         Mobile nav, tab switching, form handling
└── README.md
```

## Before you upload: 2 things still need real setup

### 1. Stripe Payment Link for the $4.99/mo membership

The membership "Join the Membership" / "Join This" buttons on `index.html` and `services.html` currently point to `#` (they have a `data-stripe-link-placeholder="true"` attribute so they're easy to find).

Since you already have Stripe set up:
1. In your Stripe Dashboard, go to **Payment Links** and create one for the $4.99/month recurring price.
2. Copy the link Stripe gives you (looks like `https://buy.stripe.com/xxxxxxxx`).
3. Find every `href="#" data-stripe-link-placeholder="true"` in `index.html` and `services.html` and replace `#` with your real Payment Link.
4. You can remove the `data-stripe-link-placeholder="true"` attribute once it's live, it's just a marker to help you find them.

### 2. Contact form

`contact.html` points to `https://formspree.io/f/YOUR_FORM_ID`. Create a free form at [formspree.io](https://formspree.io) and swap in your real form ID so messages land in an inbox. Per your call, `annereboa@gmail.com` isn't shown publicly on the site, it only needs to go into Formspree's notification settings.

## What's real vs. placeholder right now

- **Real, from Anne's own writing:** About page bio, the four "Our Philosophy" points, the full "Reading Is Foundational" blog post, all Services pricing/copy, the $4.99/mo membership details.
- **Booking link:** used throughout is `https://buymeacoffee.com/paranneting/extras`, swap it across all files if it ever changes.
- **Not yet built:** testimonials and a shop/digital-products section. These will get added once there's real content, rather than faking them.

## Uploading to GitHub

### Option A: No coding tools (easiest)
1. Go to [github.com](https://github.com), log in, click **+** then **New repository**.
2. Name it (e.g. `paranneting-website`), keep it **Public**, don't add a README (you already have one), click **Create repository**.
3. Click **uploading an existing file**.
4. Drag in everything from this folder (`index.html`, `css/`, `js/`, etc.) at once, GitHub preserves the folder structure.
5. Commit with a message like "Site overhaul with real content."

### Option B: Git
```bash
cd paranneting-site
git init
git add .
git commit -m "Site overhaul with real content"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/paranneting-website.git
git push -u origin main
```

If you're pushing this as an update to your existing repo instead of a new one, copy these files over your existing local clone and run:
```bash
git add .
git commit -m "Site overhaul with real content"
git push
```

## GitHub Pages (if not already set up)
Settings → Pages → Source: **Deploy from a branch** → Branch: **main**, folder **/ (root)** → Save. Live in 1–2 minutes at your `github.io` URL or your custom domain if already connected.

## Making future edits
- Small text tweaks: edit the file directly on GitHub (pencil icon) and commit.
- Bigger changes: edit locally or ask Claude, then re-upload/push.
- All colors and fonts live in `css/style.css` under `:root` at the top.
