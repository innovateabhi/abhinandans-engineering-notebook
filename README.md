# The Engineering Notebook — Abhinandan Roy
> **Personal Engineering Portfolio & Technical Journal**  
> *Software Engineering | Full-Stack Development | Cloud & DevOps*

An interactive, production-ready digital engineering notebook documenting software architecture, cloud infrastructure, Linux systems, DevOps, and full-stack SaaS experiments.

---

## 📖 Design Philosophy & Aesthetic Identity

Inspired by the tactile warmth of handcrafted engineering journals, this portfolio moves away from generic SaaS landing pages and dark neon cards. It features:

- **Editorial Paper Aesthetic**: Natural warm paper tones (`#F6F3E9`, `#FCFAF4`), deep ink typography (`#26382F`), sage green accents (`#69816D`), and burnt terracotta (`#C57550`).
- **Graph-Paper Grid**: Subtle 24px and 16px notebook grid rules with margin guides.
- **Editorial Typography**: Pairing classical serif headlines (*Fraunces*) with clean technical sans (*DM Sans*), monospaced telemetry (*JetBrains Mono*), and restrained handwritten annotations (*Caveat*).
- **Technical Schematics**: Meaningful SVG system architecture blueprints instead of arbitrary marketing graphics.
- **Docket Cards & Paper Stamps**: Distinctive status badges (`IN DEVELOPMENT`, `40 HOURS CERTIFIED`, `ENGINEERING LAB`).

---

## 📑 Chapter Structure

1. **Chapter 01 — Hello, World! / Introduction**: Hero journal page, personal introduction, core credentials, and interactive terminal telemetry.
2. **Chapter 02 — The Human Behind the Code**: Systems philosophy, academic journey at Dev Bhoomi Uttarakhand University (Class of 2028), and first-principles engineering mindset.
3. **Chapter 03 — Things I've Built**: 6 substantial engineering projects with dynamic case studies:
   - `01. Cloud Cost Optimizer — SaaS Platform` (In Development)
   - `02. Restaurant POS & QR Food Ordering SaaS` (In Development)
   - `03. SkillTwin — Skills & Competency Platform` (In Development)
   - `04. Linux Advanced System Monitoring` (Webel Internship Verified)
   - `05. Business Automation & Workflow Orchestration` (Planned — Engineering Lab)
   - `06. Enterprise Resource Planning (ERP) Platform` (Planned — Engineering Lab)
4. **Chapter 04 — My Engineering Toolkit**: Categorized technical skills (Languages, Frontend, Backend, Databases, Cloud AWS, DevOps, Automation) grounded in verified codebase applications.
5. **Chapter 05 — From Intern to Founder**: Professional timeline covering the certified 40-hour Webel internship (Salt Lake, Kolkata) and founding **Softrenix Technologies**.
6. **Chapter 06 — The Learning Curve**: B.Tech CSE education, 4 verified certifications (Microsoft SC-900, Red Hat Linux Fundamentals, Acmegrade, CodSoft), and 4 "Notes in Progress" drafts.
7. **Chapter 07 — Let's Connect**: Direct communication desk with prominent **Write Me an Email** CTA (`office.abhinandan@gmail.com`), copy email utility, and verified external profiles.

---

## 🛡️ Strict Privacy Compliance

- **Phone-Free Architecture**: In strict adherence to privacy specifications, **no phone number** is published anywhere on the website, metadata, public assets, or comments.
- **ATS Public Resume**: A clean, single-page, ATS-compliant public resume PDF is included at `public/resume/Abhinandan_Roy_Resume.pdf` with direct email, GitHub, and LinkedIn links, completely free of any phone number.
- **Single Direct Contact**: `office.abhinandan@gmail.com` serves as the sole direct inquiry channel.

---

## 🛠️ Technical Architecture

- **Framework**: React 18
- **Bundler & Tooling**: Vite 6
- **Styling**: Tailwind CSS, Custom Notebook CSS, CSS Design Tokens
- **Routing**: React Router DOM (Single Page Application with dynamic `/projects/:slug` case studies)
- **Animations**: GSAP (GreenSock) with ScrollTrigger & `prefers-reduced-motion` compliance
- **Icons**: Lucide React
- **Hosting Target**: Vercel (also deployable to Netlify and Cloudflare Pages)

---

## 📁 Project Structure

```
abhinandan-portfolio/
├── public/
│   ├── favicon.svg                  # Notebook monogram AR with crosshair
│   ├── robots.txt                   # Search crawler directives
│   ├── sitemap.xml                  # Canonical sitemap
│   └── resume/
│       └── Abhinandan_Roy_Resume.pdf # Phone-free public ATS resume PDF
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── animations/
│   │   │   └── NotebookEffects.jsx  # GSAP scroll triggers & progress line
│   │   ├── notebook/
│   │   │   ├── NotebookHeader.jsx   # Topbar navigation with active indicator
│   │   │   ├── NotebookFooter.jsx   # Colophon, privacy badges, back-to-top
│   │   │   └── ArchitectureDiagram.jsx # SVG blueprint system diagrams
│   │   ├── projects/
│   │   │   └── ProjectCard.jsx      # Docket card with status stamps
│   │   └── ui/
│   │       ├── SectionHeader.jsx    # Chapter eyebrow & Fraunces headings
│   │       └── StatusBadge.jsx      # Tactile status badges
│   ├── data/
│   │   ├── profile.js               # Bio, credentials, and contact
│   │   ├── projects.js              # 6 Project specs and full case studies
│   │   ├── skills.js                # Categorized engineering toolkit
│   │   ├── experience.js            # Webel internship & Softrenix founder data
│   │   ├── education.js             # B.Tech CSE degree information
│   │   ├── certifications.js        # Microsoft, Red Hat, Acmegrade, CodSoft
│   │   └── notes.js                 # Engineering drafts in progress
│   ├── pages/
│   │   ├── Home.jsx                 # All 7 chapters woven into a cohesive journal
│   │   ├── ProjectDetail.jsx        # Deep-dive case studies for each project
│   │   └── NotFound.jsx             # 404 missing notebook sheet
│   ├── sections/
│   │   ├── Hero.jsx                 # Chapter 01
│   │   ├── About.jsx                # Chapter 02
│   │   ├── Projects.jsx             # Chapter 03
│   │   ├── Toolkit.jsx              # Chapter 04
│   │   ├── Experience.jsx           # Chapter 05
│   │   ├── Learning.jsx             # Chapter 06
│   │   └── Contact.jsx              # Chapter 07
│   ├── styles/
│   │   ├── globals.css              # Grid textures, color variables
│   │   ├── notebook.css             # Docket cards, stamps, washi tape
│   │   └── animations.css          # Keyframes and reduced motion rules
│   ├── App.jsx                      # App router and layout
│   └── main.jsx                     # Vite React entrypoint
├── index.html                       # HTML5, meta tags, Google Fonts
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json                      # Single Page Application rewrite rules
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
```bash
# Clone the repository
git clone https://github.com/innovateabhi/abhinandan-portfolio.git

# Navigate to workspace
cd abhinandan-portfolio

# Install dependencies
npm install
```

### Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` to explore the interactive notebook.

### Production Build
```bash
npm run build
```
Generates optimized static assets in `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

1. Push this repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/new), select **Import Git Repository**.
3. Framework Preset: **Vite**.
4. Root Directory: `./`.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**. The included `vercel.json` ensures all dynamic SPA case study routes (`/projects/:slug`) resolve properly to `index.html`.

---

## 📬 Contact

- **Primary Direct Contact**: [office.abhinandan@gmail.com](mailto:office.abhinandan@gmail.com)
- **GitHub**: [github.com/innovateabhi](https://github.com/innovateabhi)
- **LinkedIn**: [linkedin.com/in/abhinandan-roy-28a1b6328](https://www.linkedin.com/in/abhinandan-roy-28a1b6328/)

---
*The Engineering Notebook — Handcrafted with precision and curiosity.*
