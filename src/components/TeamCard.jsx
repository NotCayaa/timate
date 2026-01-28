import { Link } from 'react-router-dom';

const TeamCard = ({ member }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-6 w-full max-w-sm border border-gray-100 dark:border-gray-700 group">
            <div className="w-full h-80 overflow-hidden rounded-md mb-4 relative">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
            </div>

            <h3 className="text-lg font-bold mb-6 text-center font-poppins min-h-[56px] flex items-center text-gray-900 dark:text-white">{member.name}</h3>

            <div className="flex gap-8 justify-center w-full">
                <a href={member.github} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 hover:-translate-y-1 transition-transform duration-300">
                    <img src="/assets/icon-pack/icons8-github-50.png" alt="GitHub" className="w-6 h-6 dark:invert" />
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">GitHub</span>
                </a>
                <a href={member.instagram} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 hover:-translate-y-1 transition-transform duration-300">
                    <img src="/assets/icon-pack/icons8-insta-50.png" alt="Instagram" className="w-6 h-6" />
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Instagram</span>
                </a>
                <Link to={`/member/${member.id}`} className="flex flex-col items-center gap-1 hover:-translate-y-1 transition-transform duration-300">
                    <img src="/assets/icon-pack/icons8-man-50.png" alt="Personal" className="w-6 h-6 dark:invert" />
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Personal</span>
                </Link>
            </div>
        </div>
    );
};
export default TeamCard;
