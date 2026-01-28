import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
            <SEO
                title="Page Not Found"
                description="The page you are looking for does not exist."
            />
            <div className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-9xl font-bold text-yellow-500"
                >
                    404
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold text-gray-800 dark:text-white mt-4"
                >
                    Oops! Page not found.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 dark:text-gray-400 mt-2 mb-8"
                >
                    The page you are looking for might have been removed or is temporarily unavailable.
                </motion.p>
                <Link to="/">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                        Go Back Home
                    </motion.button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
