import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import SEO from '../components/SEO';
import SkeletonCard from '../components/SkeletonCard';

const Project = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [isLoading, setIsLoading] = useState(true);

    // Extract unique categories from projects
    const categories = ["All", ...new Set(projects.map(p => p.category))];

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(item => item.category === activeCategory);

    // Simulate loading effect on mount and category change
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800); // 0.8s load time

        return () => clearTimeout(timer);
    }, [activeCategory]);

    return (
        <div className="pt-40 pb-20 px-4 md:px-20 container mx-auto min-h-screen">
            <SEO
                title="Our Projects"
                description="Explore our portfolio of web and software development projects."
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center dark:text-white">Our Projects</h1>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeCategory === category
                            ? 'bg-yellow-400 text-black shadow-lg scale-105'
                            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {isLoading ? (
                        // Render Skeletons
                        [...Array(4)].map((_, index) => (
                            <motion.div
                                key={`skeleton-${index}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <SkeletonCard />
                            </motion.div>
                        ))
                    ) : (
                        filteredProjects.map((item) => (
                            <motion.div
                                layout="position"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    opacity: { duration: 0.2 },
                                    layout: { type: "spring", stiffness: 300, damping: 30 }
                                }}
                                key={item.id}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group flex flex-col h-full"
                            >
                                <div className="h-56 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Link
                                            to={`/project/${item.id}`}
                                            className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-2xl font-bold dark:text-white line-clamp-1">{item.title}</h3>
                                        <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded">
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {item.technologies.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                                        {item.description}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <Link
                                            to={`/project/${item.id}`}
                                            className="text-yellow-600 font-bold hover:underline decoration-yellow-400 underline-offset-4 flex items-center gap-2 group/btn"
                                        >
                                            Read More <span className="text-lg group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Project;
