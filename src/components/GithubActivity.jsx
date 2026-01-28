import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GithubActivity = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Repo: NotCayaa/timate based on git remote
    const REPO_OWNER = 'NotCayaa';
    const REPO_NAME = 'timate';

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/events`);
                if (!response.ok) throw new Error('Failed to fetch GitHub events');
                const data = await response.json();

                // Filter only PushEvents with actual commits
                const pushEvents = data
                    .filter(event => event.type === 'PushEvent' && event.payload.commits && event.payload.commits.length > 0)
                    .slice(0, 4);

                setEvents(pushEvents);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Could not load activity');
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (error) return null; // Hide section if API fails (rate limit etc)

    return (
        <section className="py-20 px-4 md:px-0 container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center dark:text-white flex items-center justify-center gap-4">
                <img src="https://skillicons.dev/icons?i=github&theme=light" className="w-10 h-10 rounded-full bg-white" alt="GitHub" />
                Latest <span className="text-yellow-500">Activity</span>
            </h2>

            {loading ? (
                <div className="flex justify-center p-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {events.map((event) => (
                        <motion.a
                            href={`https://github.com/${REPO_OWNER}/${REPO_NAME}/commit/${event.payload.commits[0].sha}`}
                            target="_blank"
                            rel="noreferrer"
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group block"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-bold rounded-full uppercase tracking-wider">
                                    Commit
                                </span>
                                <span className="text-gray-400 text-sm">
                                    {new Date(event.created_at).toLocaleDateString()}
                                </span>
                            </div>

                            <p className="font-mono text-gray-800 dark:text-gray-200 text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
                                {event.payload.commits[0].message}
                            </p>

                            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-2 mt-auto">
                                <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                    <img src={event.actor.avatar_url} alt={event.actor.login} />
                                </div>
                                <span className="font-medium group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                                    {event.actor.login}
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            )}
        </section>
    );
};

export default GithubActivity;
