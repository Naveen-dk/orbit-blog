# Orbit — Everything Revolves Around Your Goals

A modern, venture-backed startup landing page and blog platform for **Orbit**, the AI-powered goal operating system that helps users measure real progress toward their goals through directional guidance, daily check-ins, and progress analytics.

---

## 🚀 Live Features & Architecture

### 1. Brand & Design System
- **Theme**: Dark Mode with `#050816` background, `#2563EB` primary, `#60A5FA` secondary, and `#FFFFFF` typography.
- **Visual Aesthetic**: Inspired by Linear, Arc, Notion, Vercel, and Stripe with glassmorphism (`backdrop-filter: blur(16px)`), subtle radial glow gradients, and rounded geometry.
- **Interactive Orbital Canvas**: Real-time gravitational particle simulation with celestial satellites representing goals orbiting the user.

### 2. Website Structure
1. **Landing Page (`#home`)**:
   - **Hero Section**: High-impact headline, subheadline, CTA buttons (`[Join Early Access]`, `[Read Our Story]`), active supporter counter, and 3D animated orbital rings.
   - **Problem Section**: Clear contrast between the fragmented approach (to-do lists, habit trackers, motivational videos) and the Orbit vector trajectory solution.
   - **Orbit Solution Section**: Interactive cards for **Orbit Score**, **Daily Check-ins**, **AI Insights**, **SkillGPS Roadmaps**, **Growth Analytics**, and **Streak Tracking**.
   - **Interactive Feature Preview Console**: Live dashboard mockup displaying:
     - Orbit Score: **78**
     - Consistency: **89%**
     - Weekly Progress: **+12%**
     - Current Goal: **Become a Full Stack Developer** (with interactive toggles for SaaS and Marathon goals).
     - Interactive **"Complete Daily Check-in"** simulator with live telemetry boost and celebratory confetti.
   - **Why Orbit Exists**: Core philosophical manifesto on tracking progress instead of tasks.
   - **Social Proof**: Real user testimonials from students, developers, and founders.
   - **Build In Public**: Direct links to GitHub, X/Twitter, and LinkedIn.

2. **About Orbit (`#about`)**:
   - The origin story, mission statement, and tailored solutions for our target audiences: Students, Developers, Founders, Freelancers, Professionals, and Self-improvement enthusiasts.

3. **Blog Platform (`#blog`) — Google Material Design 3 Spec**:
   - Recreates the clean UI of **News from Google** (`blog.google`) as specified in the reference screenshots:
     - **Horizontal Snap-Carousel Hero**: Smooth horizontal scrolling with custom `<` and `>` controls and a progress indicator bar.
     - **Rounded Geometry & Soft Elevation**: 24px and 28px border radii with subtle pastel gradients.
     - **Google News Newsletter Banner**: Pill-shaped subscription card with inline email input.
     - **"More Updates" & "What's New"**: Filterable card grids with topic pills (`Productivity`, `AI Insights`, `SkillGPS`, `Build In Public`).
     - **All 5 Featured Articles with Full Reading Modal**:
       1. *Why Most Goals Fail*
       2. *The Problem With Motivation*
       3. *Progress Beats Productivity*
       4. *Building Orbit In Public*
       5. *How To Stay Consistent For 100 Days*

4. **Join Early Access / Waitlist (`#waitlist`)**:
   - High-converting waitlist form collecting Name, Email, Role, and Biggest Goal.
   - Dynamic counter starting at `148+ early supporters` with persistent browser local storage.
   - Multi-colored confetti burst on submission, queue position confirmation (`#149`), and instant referral link generator.

5. **Contact (`#contact`)**:
   - Direct message form, founder contact details, and interactive FAQ accordion.

6. **Footer**:
   - Full brand navigation, status indicator ("All Systems Operational • Alpha 1.0"), and social channels.

---

## 🛠 Tech Stack
- **HTML5 & Modern Web APIs** (History Hash Routing, LocalStorage, Canvas 2D)
- **Tailwind CSS CDN** (utility layout engine)
- **Custom CSS Engine (`styles.css`)** (Custom cubic-bezier easing `cubic-bezier(0.2, 0, 0, 1)`, glassmorphism, responsive snap-carousel)
- **Lucide Icons** (lightweight vector icons)
- **JavaScript ES6+ (`app.js`)** (Orbital physics, confetti generator, reactive goal switcher, modal reader)

---

## 🌐 Running Locally
Simply open `index.html` in any modern web browser:
```bash
# Double click index.html or serve using any static web server:
npx serve .
# or
python -m http.server 3000
```
