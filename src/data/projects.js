export const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A comprehensive e-commerce solution built with React and Node.js. Features include user authentication, product search, shopping cart management, and secure payment processing integration. The platform is designed to be scalable and responsive across all devices.",
        images: [
            "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        githubUrl: "https://github.com/example/ecommerce",
        authorId: "yudha"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A productivity tool that helps teams organize tasks and manage projects efficiently. Includes real-time updates, drag-and-drop kanban boards, and team collaboration features.",
        images: [
            "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        technologies: ["Vue.js", "Firebase", "Vuex"],
        githubUrl: "https://github.com/example/task-manager",
        authorId: "arief"
    },
    {
        id: 3,
        title: "Onyx Player",
        description: "Onyx is a modern, sleek, and powerful desktop music player built with Svelte 5, Electron, and Node.js. " +
            "It combines the best of both worlds: Spotify's metadata & recommendation engine with YouTube's vast audio library.",
        images: [
            import.meta.env.BASE_URL + "assets/foto-project/ryan/logo-onyx.png",
            import.meta.env.BASE_URL + "assets/foto-project/ryan/Onyx-0.png",
            import.meta.env.BASE_URL + "assets/foto-project/ryan/Onyx-1.png",
            import.meta.env.BASE_URL + "assets/foto-project/ryan/Onyx-2.png",
            import.meta.env.BASE_URL + "assets/foto-project/ryan/Onyx-3.png"
        ],
        technologies: ["Svelte", "Electron", "Node.js", "Express JS", "Vite", "Spotify Lib & API"],
        githubUrl: "https://github.com/NotCayaa/onyx-player",
        authorId: "ryan"
    }
];
