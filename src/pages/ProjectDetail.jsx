import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { teamMembers } from '../data/team';
import SEO from '../components/SEO';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showLightbox, setShowLightbox] = useState(false);

    // Auto-scroll logic with reset on interaction
    useEffect(() => {
        if (!project || !project.images || project.images.length <= 1 || showLightbox) return;

        // Use setTimeout instead of interval to reset timer on every index change (including manual)
        const timer = setTimeout(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentImageIndex, project, showLightbox]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20 bg-gray-50 dark:bg-gray-900">
                <SEO title="Project Not Found" />
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 dark:text-white">Project Not Found</h1>
                    <Link to="/project" className="text-yellow-600 hover:underline">Return to Projects</Link>
                </div>
            </div>
        );
    }

    const author = teamMembers.find(m => m.id === project.authorId);

    const nextImage = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="pt-40 pb-20 px-4 md:px-0 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
            <SEO
                title={project.title}
                description={project.description.substring(0, 150) + "..."}
            />
            <div className="container mx-auto max-w-5xl">
                {/* Hero / Header with Carousel */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-12 border border-gray-100 dark:border-gray-700 relative group">
                    <div className="h-64 md:h-[400px] relative overflow-hidden bg-gray-900">
                        {/* Slider Track */}
                        <div
                            className="flex h-full transition-transform duration-500 ease-in-out cursor-pointer"
                            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                            onClick={() => setShowLightbox(true)}
                        >
                            {project.images.map((img, idx) => (
                                <div key={idx} className="w-full h-full flex-shrink-0">
                                    <img
                                        src={img}
                                        alt={`${project.title} Screenshot ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Overlay Content (Hidden in Lightbox) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-12 pointer-events-none">
                            <div className="w-full">
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 shadow-sm">{project.title}</h1>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full uppercase tracking-wide shadow-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Slider Controls */}
                        {project.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </button>
                                {/* Indicators */}
                                <div className="absolute bottom-4 right-8 flex gap-2 z-10">
                                    {project.images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                            className={`h-2 rounded-full transition-all duration-300 shadow-sm ${idx === currentImageIndex ? 'bg-yellow-400 w-8' : 'bg-white/50 hover:bg-white w-2'}`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                            <h2 className="text-2xl font-bold mb-4 dark:text-white border-b-2 border-yellow-400 inline-block pb-1">About Project</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                {project.description}
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 font-bold hover:shadow-lg transform hover:-translate-y-1"
                                >
                                    <img src={`${import.meta.env.BASE_URL}assets/icon-pack/icons8-github-50.png`} alt="Github" className="w-6 h-6 invert" />
                                    View Repository
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Created By */}
                    <div className="md:col-span-1">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 sticky top-32">
                            <h3 className="text-lg font-bold mb-6 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Created By</h3>

                            {author ? (
                                <Link to={`/member/${author.id}`} className="flex items-center gap-4 group hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-xl transition-colors">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400">
                                        <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg dark:text-white group-hover:text-yellow-600 transition-colors">{author.name}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">View Profile &rarr;</p>
                                    </div>
                                </Link>
                            ) : (
                                <div className="text-gray-400 italic">Unknown Author</div>
                            )}

                            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                                <Link to="/project" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-bold justify-center">
                                    &larr; Back to All Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lightbox Modal */}
                {showLightbox && (
                    <div
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setShowLightbox(false)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-50"
                            onClick={() => setShowLightbox(false)}
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <div className="relative w-full max-w-7xl max-h-screen flex items-center justify-center" onClick={e => e.stopPropagation()}>
                            {project.images.length > 1 && (
                                <button
                                    onClick={prevImage}
                                    className="absolute left-0 md:-left-12 text-white hover:text-yellow-400 transition-colors p-2 z-50"
                                >
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                </button>
                            )}

                            <img
                                src={project.images[currentImageIndex]}
                                alt={project.title}
                                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            />

                            {project.images.length > 1 && (
                                <button
                                    onClick={nextImage}
                                    className="absolute right-0 md:-right-12 text-white hover:text-yellow-400 transition-colors p-2 z-50"
                                >
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </button>
                            )}

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-1 rounded-full">
                                {currentImageIndex + 1} / {project.images.length}
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProjectDetail;
