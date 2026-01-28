import { motion } from 'framer-motion';

const SkeletonCard = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col">
            {/* Image Placeholder */}
            <div className="h-56 bg-gray-200 dark:bg-gray-700 animate-pulse" />

            <div className="p-8 flex flex-col flex-grow">
                {/* Title & Category Placeholder */}
                <div className="flex justify-between items-start mb-4">
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse" />
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse" />
                </div>

                {/* Tech Stack Tags Placeholder */}
                <div className="flex gap-2 mb-4">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-12 animate-pulse" />
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse" />
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-10 animate-pulse" />
                </div>

                {/* Description Placeholder */}
                <div className="space-y-2 mb-6">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse" />
                </div>

                {/* Footer/Button Placeholder */}
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;
