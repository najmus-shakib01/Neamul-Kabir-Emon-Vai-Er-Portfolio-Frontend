import { FaBook, FaCalendarAlt, FaGraduationCap, FaUniversity } from "react-icons/fa";

const Education = () => {
    return (
        <section id="education" className="w-full py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Education & <span className="text-blue-600">Qualifications</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        My academic journey and specialized training in computer science and cybersecurity.
                    </p>
                </div>

                <div className="relative">
                    <div className="hidden sm:block absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/50"></div>

                    <div className="space-y-8 sm:space-y-12">
                        <div className="flex flex-col md:flex-row md:even:flex-row-reverse">
                            <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 lg:pr-10 md:even:justify-start md:even:pl-8 lg:even:pl-10 md:even:pr-0">
                                <div className="w-full md:max-w-md">
                                    <div className="flex items-start mb-4">
                                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                                            <FaGraduationCap size={18} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                                Bachelor of Science in Computer Science
                                            </h3>
                                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                                                University of the People
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                DEAC & WSCUC Accredited, U.S.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                        <FaCalendarAlt className="mr-2 text-blue-500" />
                                        <span>August 2023 - August 2026</span>
                                    </div>

                                    <div className="flex items-start text-gray-600 dark:text-gray-300 mb-4">
                                        <FaBook className="mr-2 mt-1 text-blue-500 flex-shrink-0" />
                                        <span>Focus: Cybersecurity, Cloud Computing, and DevOps Engineering</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                            Cybersecurity
                                        </span>
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                            Cloud Computing
                                        </span>
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                            DevOps
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden sm:flex items-center justify-center py-6 md:py-0 md:w-1/2">
                                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 text-white z-10">
                                    <FaUniversity size={14} className="md:size-4" />
                                </div>
                            </div>

                            <div className="sm:hidden flex items-center justify-center py-4">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
                                    <FaUniversity size={14} />
                                </div>
                            </div>

                            <div className="md:w-1/2 md:even:text-right"></div>
                        </div>

                        <div className="flex flex-col md:flex-row md:even:flex-row-reverse">
                            <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 lg:pr-10 md:even:justify-start md:even:pl-8 lg:even:pl-10 md:even:pr-0">
                                <div className="w-full md:max-w-md">
                                    <div className="flex items-start mb-4">
                                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                                            <FaGraduationCap size={18} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                                B.A. (Hons) in English Program (Partially Completed)
                                            </h3>
                                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                                                Bangladesh University of Business and Technology (BUBT)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                        <FaCalendarAlt className="mr-2 text-blue-500" />
                                        <span>September 2021 – December 2023</span>
                                    </div>

                                    <div className="flex items-start text-gray-600 dark:text-gray-300 mb-4">
                                        <FaBook className="mr-2 mt-1 text-blue-500 flex-shrink-0" />
                                        <span>Coursework: Technical Writing, Research Methodologies</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                            Technical Writing
                                        </span>
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                            Research Methodologies
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden sm:flex items-center justify-center py-6 md:py-0 md:w-1/2">
                                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 text-white z-10">
                                    <FaUniversity size={14} className="md:size-4" />
                                </div>
                            </div>

                            <div className="sm:hidden flex items-center justify-center py-4">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
                                    <FaUniversity size={14} />
                                </div>
                            </div>

                            <div className="md:w-1/2 md:even:text-right"></div>
                        </div>

                        <div className="flex flex-col md:flex-row md:even:flex-row-reverse">
                            <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 lg:pr-10 md:even:justify-start md:even:pl-8 lg:even:pl-10 md:even:pr-0">
                                <div className="w-full md:max-w-md">
                                    <div className="flex items-start mb-4">
                                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                                            <FaGraduationCap size={18} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                                Higher Secondary Certificate (HSC)
                                            </h3>
                                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                                                Board of Intermediate and Secondary Education, Jashore, Bangladesh
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                                        <FaCalendarAlt className="mr-2 text-blue-500" />
                                        <span>2020</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden sm:flex items-center justify-center py-6 md:py-0 md:w-1/2">
                                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 text-white z-10">
                                    <FaUniversity size={14} className="md:size-4" />
                                </div>
                            </div>

                            <div className="sm:hidden flex items-center justify-center py-4">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
                                    <FaUniversity size={14} />
                                </div>
                            </div>

                            <div className="md:w-1/2 md:even:text-right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;