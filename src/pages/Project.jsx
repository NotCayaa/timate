import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Project = () => {
    return (
        <div className="pt-40 pb-20 px-4 md:px-20 container mx-auto min-h-screen">
            <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center dark:text-white">Our Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((item) => (
                    <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group flex flex-col h-full">
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
                            <h3 className="text-2xl font-bold mb-3 dark:text-white line-clamp-1">{item.title}</h3>
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
