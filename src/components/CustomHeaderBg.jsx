import { motion } from 'framer-motion';

const CustomHeaderBg = () => {
    return (
        <div className="absolute top-0 right-0 w-full h-[500px] overflow-hidden z-0 pointer-events-none">
            {/* The "Black Line" / Shape Effect requested */}
            <motion.div
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-full md:w-2/3 h-full"
            >
                <svg viewBox="0 0 1000 500" className="w-full h-full text-yellow-400/20 fill-current opacity-50 dark:opacity-20 transform scale-150 origin-top-right">
                    <path d="M1000 0H500C300 0 200 100 0 200V500H1000V0Z" fill="currentColor" />
                </svg>
            </motion.div>

            {/* Floating animation blob */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-300/10 dark:bg-yellow-500/10 rounded-full blur-3xl"
            />
        </div>
    );
};

export default CustomHeaderBg;
