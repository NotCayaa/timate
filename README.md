# Timate - Jengset Dev Portfolio

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://notcayaa.github.io/timate/)

Welcome to **Timate**, the official portfolio website for Jengset Dev Group. This project showcases our team, vision, mission, and the innovative projects we've built.

Built with modern web technologies to ensure speed, accessibility, and a premium user experience.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)

## ✨ Key Features

### 🎨 UI/UX & Design
- **Single Page Application (SPA):** Seamless navigation without page reloads using client-side routing.
- **Dark Mode Support:** 
  - Persistent theme toggle (saves preference).
  - **Dynamic Logo:** Automatically switches between dark and light versions for optimal visibility.
  - Smooth transitions between themes.
- **Responsive Design:** Mobile-first approach, ensuring the site looks great on phones, tablets, and desktops.

### 📂 Project Gallery
- **Project Listing:** Grid layout displaying project thumbnails with hover effects.
- **Project Details:** 
  - **Dynamic Pages:** Unique URL for each project (e.g., `/project/3`).
  - **Interactive Carousel:** Auto-scrolling image slider with manual controls.
  - **Lightbox Mode:** Click any image to view it in full-screen (uncropped) with a dark backdrop.
  - **Tech Stack & Links:** Clearly displayed technologies and repository links.

### 👥 Team & About
- **Dynamic Member Profiles:** Detailed bio pages for each team member.
- **Vision & Mission:** Dedicated page outlining our community goals.

## 🛠️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/NotCayaa/timate.git
    cd timate
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view the app.

4.  **Build for Production**
    ```bash
    npm run build
    ```
    The output will be in the `dist` directory.

## 📁 Project Structure

```
timate/
├── public/
│   └── assets/          # Static assets (logos, project images)
├── src/
│   ├── components/      # Reusable components (Navbar, Footer, TeamCard, ThemeToggle)
│   ├── data/            # Static data files (projects.js, team.js)
│   ├── pages/           # Page components (Home, Project, Contact, etc.)
│   ├── App.jsx          # Main application component & Routing
│   ├── index.css        # Global styles & Tailwind directives
│   └── main.jsx         # Entry point
└── index.html
```

## 📝 Latest Updates

- **Routing:** Migrated to React Router DOM for full SPA experience.
- **Refactoring:** Converted project images to arrays for gallery support.
- **Enhancements:** Added Lightbox for project images and reverted carousel to `object-cover` for better aesthetics.
- **Dark Mode:** Implemented system-wide dark mode with logo switching logic.

---

Created by **Jengset Dev Team**.
**2024 Jengset Dev Group. All rights reserved.**