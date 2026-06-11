# Sushen Kumar — Personal Portfolio & Security Directory

A premium, production-grade portfolio website built using **Next.js 16 (App Router)** and **TypeScript**. The application features a modern glassmorphism aesthetic, fully responsive layouts (supporting up to 150%+ browser zoom levels), theme-compatible light/dark modes, and a secure contact endpoint integrated with the **Resend API**.

🌐 Live Demo: [https://sushen-kumar.vercel.app](https://sushen-kumar.vercel.app)

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Vanilla CSS (Modern CSS variables, flexbox, grid, glassmorphism filters, and clip-path geometries)
- **Email Dispatch:** Resend SDK & Secure API Route Handler
- **Spam Prevention:** Honeypot fields & In-memory IP rate limiter
- **Hosting:** Vercel (Continuous Deployment linked to GitHub)

---

## 🚀 Key Features

### 1. Interactive & Alternating Sections
- **Hero:** Centered single-column layout highlighting primary tags: `CYBERSECURITY RESEARCHER • SECURITY AUTOMATION • AI ENGINEERING`.
- **About Me:** Blue slanted gradient section featuring a profile view and three strength columns: *Cybersecurity Research*, *Security Automation*, and *AI Engineering*.
- **Skills:** Glassmorphic horizontal rows with category tints, tag pills, and hover animations.
- **Certifications:** Left-aligned vertical timeline showing the latest credentials first (including NPTEL, Fortinet, Cybrary, Cisco, and SAP Analytics Cloud) with verification links.
- **Projects:** Interactive carousel displaying detailed specifications across general info and technical highlights columns.
- **Contact Me:** Translucent glass cards featuring glowing brand links for Email, GitHub, LinkedIn, and Instagram.

### 2. Secure Contact Form API
- Built-in Next.js Route Handler (`/api/contact`) that compiles and dispatches messages to `sushen.d3v@gmail.com`.
- **Spam Protection:** An invisible honeypot field (`_honeypot`) silently rejects bot submissions.
- **Rate Limiting:** In-memory sliding-window IP rate limiter restricting submissions to **3 per 10 minutes** per IP to prevent spam attacks.
- **Client & Server Validation:** Double-layered input validation with custom error toasts.

### 3. Light & Dark Themes
- Theme toggle is synchronized instantly via a script in the document `<head>` to prevent flashes of light-mode during page loads.
- Global CSS custom variables automatically shift colors, gradients, and shadows to maintain high contrast.

---

## 📁 Project Structure

```
sushen-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Secure email dispatcher endpoint
│   ├── globals.css              # Main stylesheet (variables, animations, custom utility classes)
│   ├── layout.tsx               # Next.js Metadata, Google Fonts, theme loader
│   └── page.tsx                 # Core page composer (glow blobs, scroll progress tracker)
├── components/
│   ├── About.tsx                # About introduction & Strengths cards
│   ├── Certifications.tsx       # Vertical timeline certifications list
│   ├── Contact.tsx              # Brand card links & email forms
│   ├── Footer.tsx               # Copyright footer
│   ├── Hero.tsx                 # Clean centered intro layout
│   ├── Navbar.tsx               # Header, theme switcher, and mobile drawer
│   ├── Projects.tsx             # Double-text-column projects carousel
│   ├── Skills.tsx               # Horizontal glassmorphism skills rows
│   └── Toast.tsx                # Context-based custom notification system
├── lib/
│   └── rate-limit.ts            # Thread-safe in-memory rate-limiter
├── public/
│   └── assets/                  # Profile photo and static assets
├── .env.example                 # Environment variables template
├── next.config.ts               # Next.js configurations
└── tsconfig.json                # TypeScript compiler configuration
```

---

## 💻 Local Development

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/alive-xd/PortFolio.git
   cd PortFolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Vercel Deployment & CI/CD

Since the project is already linked to Vercel and connected to your GitHub repository, any future changes made will deploy automatically:

1. **Commit and push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Update project details"
   git push
   ```
2. **Vercel Auto-deploy:**
   Vercel will detect the new commit on the `main` branch, run the build command (`npm run build`), and update your live domain **`https://sushen-kumar.vercel.app`** automatically.

*Note: Make sure that `RESEND_API_KEY` is added under the Environment Variables tab in your Vercel Project Settings.*
