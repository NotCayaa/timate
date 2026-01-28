import { motion } from 'framer-motion';

const services = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Building modern, responsive, and blazing fast websites using the latest technologies.',
        icon: '💻',
    },
    {
        id: 2,
        title: 'Mobile Apps',
        description: 'Creating seamless mobile experiences for Android and iOS platforms.',
        icon: '📱',
    },
    {
        id: 3,
        title: 'UI/UX Design',
        description: 'Designing intuitive and user-centric interfaces that people love to use.',
        icon: '🎨',
    },
    {
        id: 4,
        title: 'IT Consulting',
        description: 'Providing expert advice and technical solutions to help your business grow.',
        icon: '💡',
    },
];

const Services = () => {
    return (
        <section className="py-20 px-4 md:px-0 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Our <span className="text-yellow-500">Expertise</span></h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        We provide a wide range of creative and technical solutions to bring your ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300 group"
                        >
                            <div className="text-4xl mb-6 bg-yellow-100 dark:bg-yellow-900/30 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-yellow-500 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
