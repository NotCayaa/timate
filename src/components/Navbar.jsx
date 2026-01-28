import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Theme Management Logic
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Vision and Mission', path: '/vandm' },
        { name: 'Project', path: '/project' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className="bg-transparent absolute top-0 w-full z-20 px-4 md:px-8">
            <div className="container mx-auto flex justify-between items-center py-4">
                {/* Logo */}
                <div className="relative transition-all duration-300">
                    <Link to="/">
                        <img
                            src={theme === 'dark' ? `${import.meta.env.BASE_URL}assets/logo/logo-dark.png` : `${import.meta.env.BASE_URL}assets/logo/logo-nobg.png`}
                            alt="logo"
                            className="w-24 md:w-32 lg:w-40 object-contain rounded-full transition-all duration-300"
                        />
                    </Link>
                </div>

                {/* Mobile Controls (Toggle + Menu Button) */}
                <div className="md:hidden mt-2 flex items-center gap-4 pr-2">
                    {/* Mobile Theme Toggle */}
                    <ThemeToggle
                        theme={theme}
                        toggleTheme={toggleTheme}
                    />

                    <button onClick={() => setIsOpen(!isOpen)} className="text-black dark:text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Links */}
                <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent shadow-lg md:shadow-none p-6 md:p-0 gap-6 md:gap-12 items-center justify-center transition-all duration-300 z-[60]`}>
                    {navItems.map((item) => (
                        <li key={item.name} className="group">
                            <Link
                                to={item.path}
                                className={`font-poppins text-lg md:text-xl font-medium transition-all duration-300 block 
                    ${location.pathname === item.path ? 'text-yellow-600 underline decoration-yellow-400 underline-offset-4' : 'text-black dark:text-gray-200 group-hover:scale-110 group-hover:underline group-hover:decoration-yellow-400 group-hover:underline-offset-4'}
                  `}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}

                    {/* Desktop Theme Toggle (Visible only on md+) */}
                    <li className="hidden md:flex items-center">
                        <ThemeToggle
                            theme={theme}
                            toggleTheme={toggleTheme}
                            className=""
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
