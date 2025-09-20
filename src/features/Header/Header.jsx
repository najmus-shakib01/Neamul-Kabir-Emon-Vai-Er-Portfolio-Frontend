import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);

        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());

        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Certificate", href: "#certificate" },
        { name: "Skill", href: "#skills" },
        { name: "Project", href: "#projects" },
        { name: "Contact", href: "#contact" },
        { name: "Footer", href: "#footer" },
    ];

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-100 shadow-md dark:bg-gray-800" : "bg-slate-100 dark:bg-gray-800"}`}>
            <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <a href="" className="flex items-center gap-2">
                        <img className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover" src="./1748350491771.jpeg" alt="Website Logo" />
                        <span className="text-xl font-semibold text-gray-800 dark:text-white hidden md:block">
                            Neamul Kabir Emon
                        </span>
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <ul className="hidden md:flex items-center gap-6">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="flex items-center gap-2 text-gray-700 dark:text-gray-200 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <span className="text-blue-600 dark:text-blue-400">{link.icon}</span>
                                    <span className="text-md">{link.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button onClick={toggleDarkMode} className="p-2 rounded-full bg-blue-600 dark:bg-blue-400 text-white dark:text-black" aria-label="Toggle dark mode">
                        {darkMode ? (<Sun size={16} className="md:w-5" />) : (<Moon size={16} className="md:w-5" />)}
                    </button>

                    <button className="md:hidden text-gray-700 dark:text-gray-200 text-2xl z-50" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="fixed inset-0 bg-white dark:bg-gray-800 z-40 flex items-center justify-center md:hidden mt-16">
                        <ul className="flex flex-col items-center gap-6 text-xl w-full px-6">
                            {navLinks.map((link, index) => (
                                <li key={index} className="w-full text-center">
                                    <a href={link.href} className="flex items-center justify-center gap-3 text-gray-700 dark:text-gray-200 transition-colors duration-200 py-3 px-4 rounded-md w-full hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsOpen(false)}>
                                        <span className="text-blue-600 dark:text-blue-400">{link.icon}</span>
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;