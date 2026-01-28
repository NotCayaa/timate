import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
