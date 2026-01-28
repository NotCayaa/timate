import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const StatItem = ({ end, label, suffix = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, end]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2 font-mono">
                {count}{suffix}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium uppercase tracking-wider text-sm">
                {label}
            </div>
        </div>
    );
};

const Stats = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300 border-y dark:border-gray-700">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x divide-gray-200 dark:divide-gray-700">
                    <StatItem end={10} label="Projects" suffix="+" />
                    <StatItem end={2} label="Years Active" suffix="+" />
                    <StatItem end={100} label="Commitment" suffix="%" />
                    <StatItem end={24} label="Support" suffix="/7" />
                </div>
            </div>
        </section>
    );
};

export default Stats;
