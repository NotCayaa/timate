import TeamCard from '../components/TeamCard';
import { teamMembers } from '../data/team';
import TechStack from '../components/TechStack';
import GithubActivity from '../components/GithubActivity';
import Stats from '../components/Stats';
import Services from '../components/Services';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <>

            {/* Our Story / Hero */}
            <section className="pt-32 md:pt-48 pb-20 px-4 md:px-0 flex justify-center relative z-10">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-br-[50px] md:rounded-br-[200px] p-8 md:p-32 shadow-2xl relative max-w-5xl mx-auto w-full transform hover:scale-[1.01] transition-transform duration-500">
                    <div className="text-center space-y-6">
                        <h4 className="text-3xl md:text-5xl font-bold tracking-wide dark:text-white">Our Story</h4>
                        <p className="text-base md:text-xl leading-relaxed text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
                            <b><i>Jengset</i></b> adalah sebuah kelompok yang berisikan beberapa anak kuliahan yang
                            ingin terus berkembang bersama dan meraih cita cita untuk menjadi expert dalam bidang IT bersama-sama.
                        </p>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <Stats />

            {/* Services */}
            <Services />

            {/* Tech Stack Showcase */}
            <TechStack />

            {/* GitHub Activity Feed */}
            <GithubActivity />

            {/* Team Section */}
            <section className="py-12 px-4 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto">
                    <div className="flex justify-center mb-16">
                        <div className="text-4xl md:text-5xl font-light text-center border-b-2 border-black dark:border-white pb-4 px-10 dark:text-white">
                            Team Profile
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-12 justify-items-center max-w-7xl mx-auto">
                        {teamMembers.map((member) => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTA />
        </>
    );
};

export default Home;
