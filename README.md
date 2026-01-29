# Timate - Jengset Dev Portfolio v2.0

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://notcayaa.github.io/timate/) [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Welcome to **Timate**, the official interactive portfolio website for Jengset Dev Group. This project showcases our team, vision, mission, and the innovative projects we've built, wrapped in a modern, high-performance web application.

🚀 **Major Update v2.0**
Refactored from a static site to a fully interactive Single Page Application (SPA) with AI integration, dynamic filtering, and premium UI animations.

## ✨ Key Features

### 🤖 Smart Tech & AI
-   **Jengset AI Widget:** A floating, context-aware chatbot powered by **Groq SDK (Llama 3.3)**. It knows our team context and answers visitor queries in real-time.
-   **Dynamic Tech Stack:** Interactive showcase of our toolbox (React, Vite, Node.js, etc.) with hover effects.

### 🎨 Premium UI/UX
-   **Skeleton Loading:** Premium "loading state" animations for a smoother perceived performance.
-   **Dark Mode 2.0:** System-wide dark mode with persisted preferences and dynamic logo switching.
-   **Animated Transitions:** Seamless page navigation using `framer-motion`.
-   **Interactive Stats:** Scroll-triggered counting animations for key metrics.
-   **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop.

### 📂 Project Showcase
-   **Smart Filtering:** Filter projects by category (Web App, Mobile App, UI/UX) with animated layout shifts.
-   **Immersive Details:** Dedicated project pages with image carousels, lightbox view, and direct links to repositories.

### 📨 Functional Contact System
-   **EmailJS Integration:** Working contact form that sends real emails.
-   **Auto-Reply:** Automated confirmation emails to visitors.
-   **Spam Protection:** Secure client-side logic without requiring user login.

## 🛠️ Tech Stack

Built with the best modern web tools:

*   **Core:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) + PostCSS
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **Routing:** [React Router v7](https://reactrouter.com/)
*   **AI/LLM:** [Groq SDK](https://groq.com/)
*   **SEO:** [React Helmet Async](https://github.com/staylor/react-helmet-async)
*   **Email:** [EmailJS](https://www.emailjs.com/)

## � Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/NotCayaa/timate.git
    cd timate
    ```

2.  **Install Dependencies**
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Setup Environment Variables**
    Create a `.env` file in the root directory:
    ```env
    VITE_GROQ_API_KEY=your_groq_api_key_here (for development)
    GROQ_API_KEY=your_groq_api_key_here (for production)
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view the app.

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```
The output will be in the `dist` directory, ready for deployment (e.g., GitHub Pages, Vercel).

## 📁 Project Structure

```
timate/
├── public/              # Static assets (logos, images)
├── src/
│   ├── components/      # UI Components (Navbar, AIChatWidget, SkeletonCard)
│   ├── data/            # Static Data (projects.js, team.js, systemPrompt.js)
│   ├── pages/           # Page Views (Home, Project, Contact)
│   ├── App.jsx          # Main Router & Layout
│   ├── index.css        # Tailwind & Global Styles
│   └── main.jsx         # Entry Point
└── index.html
```

## 📝 Roadmap

-   [x] **v1.0**: Static Portfolio Launch.
-   [x] **v2.0**: Interactive UI, Project Filters, AI Chat, Email Contact.
-   [ ] **v3.0**: Blog Section (Headless CMS integration).

---

**2024 Jengset Dev Group. All rights reserved.**