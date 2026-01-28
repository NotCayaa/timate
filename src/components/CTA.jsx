import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-yellow-400 dark:bg-yellow-500 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
                >
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-black opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-800/80 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
                        Let's collaborate to build something amazing together.
                        We transform ideas into digital reality.
                    </p>

                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gray-900 text-white text-lg font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-black transition-all relative z-10"
                        >
                            Let's Talk  👋
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
