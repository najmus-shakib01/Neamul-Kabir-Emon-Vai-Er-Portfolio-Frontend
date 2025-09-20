import TextChange from "../TextChange/TextChange";

const Banner = () => {
    return (
        <section id="home" className="w-full flex items-center bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 py-20 lg:mt-10 w-full">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 space-y-6 text-center md:text-left">
                        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                            <TextChange />
                        </h1>

                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            I Help Startups Deploy 10x Faster, Cut Cloud Spend by 60%, and Pass Security Audits -Without Hiring a Full-Time DevOps Team | DevOps & Cloud Security Engineer (AWS • GCP • K8s • Terraform)
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a href="/Neamul Kabir Emon - CV.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-blue-600 dark:bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg">
                                CV
                            </a>
                            <a href="#contact" className="px-8 py-3 border-2 border-blue-600 dark:border-blue-700 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                                Contact Me
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 rounded-full bg-blue-100/50 dark:bg-blue-900/30 blur-md"></div>
                            <img src="./1748350491771.jpeg" alt="Profile" className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl" loading="eager" />
                            <div className="absolute -inset-2 rounded-full border-4 border-blue-200/50 dark:border-blue-700/30 animate-spin-slow z-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;