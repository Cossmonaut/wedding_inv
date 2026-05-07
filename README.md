# Wedding Invitation

A polished, professional two‑page wedding invitation template with smooth animated transitions and a purple‑themed palette. The design is fully configurable via `config.js`. **Now with GitHub Pages support and individual guest links!**

## Features

- **Two‑page layout** – Overview and details pages switched with «Подробнее» / «Назад» buttons.
- **Purple color theme** – Rich violet/indigo palette with warm pink accents.
- **Professional typography** – Playfair Display for headlines, Montserrat for UI, Cormorant Garamond for elegant italics.
- **Smooth page transitions** – CSS fade/scale animations when switching pages.
- **Floating emojis** – Gentle drifting emojis (including a dinosaur for the bride) in the background layer.
- **Responsive card** – Centered card with subtle gradient border and shadow.
- **Template‑driven** – All main text, colors and labels are set in `config.js` for easy customization.
- **Individual guest links** – Each guest sees their own name and message via `?guest=ID` URL parameter.

## Quick Start

### For Guests (Mobile Phone)

Each guest receives a personal link like:
```
https://ВАШ_ЛОГИН.github.io/wedding-invitation/?guest=andrew_nastya
```

When they open it on their phone, they see:
- ✅ Their names in the header
- ✅ A personal sweet message
- ✅ One-click RSVP confirmation
- ✅ Link to the group chat

### For Wedding Organizers

See **[QUICK_START.md](QUICK_START.md)** for the complete table of guest IDs and links.

## How to Deploy to GitHub Pages

See **[GITHUB_PAGES_GUIDE.md](GITHUB_PAGES_GUIDE.md)** for step-by-step instructions with screenshots.

**Quick summary:**
1. Create a GitHub repository
2. Upload all files
3. Enable **Settings → Pages** (branch: main, folder: root)
4. Wait 1-2 minutes for the site to go live
5. Share individual guest links

## Files

- `index.html` – Main page with two sections and navigation.
- `style.css` – Theme, layout, animations and responsive rules.
- `config.js` – Data and color configuration (edit this to customize).
- `guests_list.json` – Guest data (names, messages).
- `GITHUB_PAGES_GUIDE.md` – Full deployment guide.
- `QUICK_START.md` – Quick reference for guest links.
- `README.md` – This file.

## Customisation tips

- Replace `doodle.png` and `dino.png` with your own illustrations.
- Adjust the purple palette by editing the CSS variables in `:root` (or override via `config.js`).
- Add or remove floating emojis by editing the `createFloatingEmojis()` function.
- Change fonts by updating the Google Fonts link in `<head>`.
- Add new guests in `config.js` → `guest_data` section.

## Guest Personalization

The site reads the `?guest=ID` parameter from the URL and displays:
- Custom names for that guest
- Personal sweet message
- Same event details for everyone

Example: `?guest=alexey_anna` shows "Алексей и Анна" with their message.

---

Created with love for Андрей and Настя’s wedding.
# wedding_inv
