# Orbit — News, Research & Measurable Progress

> *"Progress isn't about what you planned. Progress is about what actually happened."*

Orbit is an editorial-first product launch website and movement hub inspired by Google's *The Keyword* (`blog.google`). It features high-performance 120 FPS native scrolling, Material You (Material 3) organic SVG shape masks, and an automated serverless backend powered by Google Apps Script, Google Sheets, and Gmail.

---

## 🛰️ Features

- **Google Editorial Design System:** Recreates the typography, layout rhythm, and pill-button aesthetic of Google's flagship publication.
- **Dual-Variant Category Hubs (`topic.html`):**
  - **Variant A:** Category hub layout with featured hero banner and full feed.
  - **Variant B:** Compact sub-product leaf layout with direct feed and cross-category tags.
- **Component-Driven Story Reader (`article.html`):** Dynamic 9-block layout engine (`feature-drop`, `editorial`, `changelog`).
- **Interactive Material 3 Snapping Carousel:** Touch and mouse-wheel carousel featuring organic SVG shape masks (4-leaf clover, squircle, scalloped cloud, rounded diamond).
- **Automated Cloud Backend:**
  - Form submissions automatically stream into **Google Sheets** (`Sheet1!B8:F`).
  - Real-time KPI summary recalculations (`Total Responses`, `Would Use Orbit`, `Interest Rate (%)`).
  - **Instant User Welcome Email:** Sends a personalized welcome confirmation with their target goal.
  - **Instant Admin Lead Alert:** Notifies the team on every new signup.

---

## 📂 Project Structure

```
Orbit Launch Page/
├── index.html                  # Main editorial landing page & waitlist registration
├── topic.html                  # Dynamic dual-variant category/subtopic explorer
├── article.html                # Modular story reader with 9 component blocks
├── research.html               # Dedicated deep-dive research hub
├── articles.js                 # Central headless CMS data store
├── article-blocks.css          # Block styles for article layouts
├── related-carousel.css        # Snapping carousel styles & organic SVG clip-paths
├── related-carousel.js         # Interactive carousel controller & progress tracker
├── preferences-dropdown.css    # Google Blog style preferences drawer
├── preferences-dropdown.js     # Dropdown logic & active region pill handler
├── google-sheets-sync.gs       # Complete Google Apps Script webhook code
└── .gitignore                  # Standard repository ignore file
```

---

## 🚀 How to Run Locally

Because Orbit is built with standard web technologies (HTML5, Tailwind CSS, Vanilla Modern JS), no build steps or heavy node dependencies are required.

Simply open `index.html` in your web browser:
```bash
# Using VS Code Live Server, or python:
python -m http.server 3000
```
Then navigate to `http://localhost:3000`.

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Orbit Launch Page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/orbit.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Deploy! Instant global Edge CDN, free automatic SSL, and zero configuration needed.

---

## 📄 License

MIT License. Designed and built with ❤️ by the Orbit Team.
