const VisionMission = () => {
    return (
        <div className="pt-40 pb-20 px-4 md:px-20 container mx-auto min-h-screen">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-10 md:p-16 border-l-8 border-yellow-400">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center dark:text-white">Vision & Mission</h1>

                <div className="space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 dark:text-white">
                            <span className="w-10 h-1 bg-black dark:bg-white block"></span>
                            Vision
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pl-14">
                            To become a leading community of aspiring IT professionals who innovate, collaborate, and grow together to solve real-world problems through technology.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 dark:text-white">
                            <span className="w-10 h-1 bg-black dark:bg-white block"></span>
                            Mission
                        </h2>
                        <ul className="list-disc list-outside pl-20 space-y-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            <li>Continually learn and master new technologies.</li>
                            <li>Collaborate effectively on impactful projects.</li>
                            <li>Share knowledge and support each other's growth in the IT field.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;
