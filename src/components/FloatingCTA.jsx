import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1.5 // Show after initial page load
            }}
            className="fixed bottom-8 right-8 z-50"
        >
            <Link to="/contact" className="relative group block">
                {/* Tooltip */}
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Let's Chat! 👋
                </span>

                {/* Button */}
                <div className="bg-yellow-400 hover:bg-yellow-300 text-black p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                    >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
            </Link>
        </motion.div>
    );
};

export default FloatingCTA;
