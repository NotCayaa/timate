import { useParams, Link } from 'react-router-dom';
import { teamMembers } from '../data/team';

const MemberProfile = () => {
    const { id } = useParams();
    const member = teamMembers.find(m => m.id === id);

    if (!member) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Member Not Found</h1>
                    <Link to="/" className="text-yellow-600 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-40 pb-20 px-4 md:px-0 container mx-auto min-h-screen flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row transition-colors duration-300">
                {/* Image Side */}
                <div className="w-full md:w-1/2 h-96 md:h-auto relative">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                    <div className="absolute bottom-6 left-6 text-white md:hidden">
                        <h1 className="text-3xl font-bold">{member.name}</h1>
                        <p className="text-yellow-400 font-medium">{member.role}</p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="hidden md:block mb-8">
                        <h1 className="text-4xl font-bold mb-2 dark:text-white">{member.name}</h1>
                        <p className="text-xl text-yellow-600 font-medium">{member.role}</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-gray-200 mb-2 uppercase tracking-wider text-sm">About</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {member.bio || "No description available."}
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-gray-200 mb-4 uppercase tracking-wider text-sm">Connect</h3>
                            <div className="flex gap-4">
                                <a href={member.github} target="_blank" rel="noreferrer" className="px-6 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm font-medium">GitHub</a>
                                <a href={member.instagram} target="_blank" rel="noreferrer" className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors text-sm font-medium">Instagram</a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700">
                        <Link to="/" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-bold">
                            &larr; Back to Team
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberProfile;
