import { FaArrowUp, FaCode, FaEnvelope, FaLink, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";
import SocialLink from "./SocialLink";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const quickLinks = [
        { name: "Home", href: "#home", icon: <FaUser className="text-blue-500" /> },
        { name: "About", href: "#about", icon: <FaUser className="text-blue-500" /> },
        { name: "Education", href: "#education", icon: <FaUser className="text-blue-500" /> },
        { name: "Certificate", href: "#certificate", icon: <FaUser className="text-blue-500" /> },
        { name: "Skills", href: "#skill", icon: <FaCode className="text-blue-500" /> },
        { name: "Projects", href: "#project", icon: <FaLink className="text-blue-500" /> },
        { name: "Contact", href: "#contact", icon: <FaUser className="text-blue-500" /> },
    ];


    return (
        <footer id="footer" className="relative w-full text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative">
                                <img className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover shadow-md" src="./1748350491771.jpeg" alt="Neamul Kabir Emon" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                    Neamul Kabir Emon
                                </h2>
                                <p className="text-sm text-blue-500 font-medium">DevOps & Cloud Security Engineer</p>
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 text-center md:text-left mb-4 text-sm leading-relaxed">
                            I Help Startups Deploy 10x Faster, Cut Cloud Spend by 60%, and Pass Security Audits - Without Hiring a Full-Time DevOps Team
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-center md:text-left mb-6 text-xs">
                            DevOps & Cloud Security Engineer (AWS • GCP • K8s • Terraform)
                        </p>
                        <div className="flex space-x-2">
                            {SocialLink.map((social, index) => (
                                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full text-white transition-all duration-300 flex items-center justify-center ${social.bg} bg-gray-200 dark:bg-gray-700 hover:text-white`} aria-label={social.name}>
                                    <span className={social.color}>{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 w-full text-gray-800 dark:text-white">
                            <FaLink className="text-blue-500" />
                            <span>Quick Navigation</span>
                        </h2>
                        <ul className="space-y-2 w-full">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="flex items-center gap-3 transition-all duration-300 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 group">
                                        <span className="group-hover:scale-110 transition-transform">
                                            {link.icon}
                                        </span>
                                        <span className="text-sm group-hover:text-blue-500 group-hover:translate-x-1 transition-transform">{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-lg font-semibold mb-6 w-full text-gray-800 dark:text-white">
                            Contact Information
                        </h2>
                        <div className="space-y-4 w-full">
                            <div className="flex items-start gap-3 group">
                                <FaEnvelope className="text-blue-500 mt-1 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Email</p>
                                    <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">mail@neamul.awsapps.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 group">
                                <FaPhone className="text-blue-500 mt-1 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Phone</p>
                                    <a href="tel:+1234567890" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">+8801759544204</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <FaMapMarkerAlt className="text-blue-500 mt-1 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Location</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-lg font-semibold mb-6 w-full text-gray-800 dark:text-white">
                            Professional Services
                        </h2>
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 p-4 rounded-lg border border-blue-100 dark:border-gray-700">
                            <ul className="space-y-6 text-sm">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span className="text-gray-600 dark:text-gray-400">DevOps Implementation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span className="text-gray-600 dark:text-gray-400">Cloud Infrastructure</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span className="text-gray-600 dark:text-gray-400">Security Auditing</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span className="text-gray-600 dark:text-gray-400">Cost Optimization</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span className="text-gray-600 dark:text-gray-400">CI/CD Pipeline Setup</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            &copy; {currentYear} Neamul Kabir Emon. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            <button onClick={scrollToTop} className="fixed bottom-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white transition-all duration-300 shadow-lg z-50 hover:bg-blue-600 transform hover:scale-110 group" aria-label="Scroll to top">
                <FaArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
        </footer>
    );
};

export default Footer;