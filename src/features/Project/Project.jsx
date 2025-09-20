/* eslint-disable react/prop-types */
import { FiCode, FiExternalLink } from "react-icons/fi";
import ProjectData from "./ProjectData";

const ProjectCard = ({
    title,
    description,
    icon,
    demoLink,
    frontend,
    backend,
    tags,
}) => {

    return (
        <div>
            <div className="relative overflow-hidden rounded-xl bg-slate-100 dark:bg-gray-800 border border-gray-200 shadow-md flex flex-col justify-between transition-colors h-full dark:border-gray-700 hover:shadow-md duration-300">

                <div className="relative h-40 flex items-center justify-center text-5xl text-blue-600 dark:text-blue-400">
                    {icon}
                </div>

                <div className="p-5 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 text-xs font-medium rounded-full bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                        {description}
                    </p>

                    <div className="flex gap-3 mt-auto">
                        {demoLink ? (
                            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 h-12 bg-blue-600 rounded-lg text-white transition-colors duration-200 hover:bg-blue-700">
                                <FiExternalLink size={16} />
                                <span>Live Demo</span>
                            </a>
                        ) : (
                            <div className="flex-1"></div>
                        )}

                        {(frontend || backend) ? (
                            <a href={frontend || backend} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 h-12 bg-gray-300 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:bg-gray-400 dark:hover:bg-gray-600">
                                <FiCode size={16} />
                                <span>Code</span>
                            </a>
                        ) : (
                            <div className="flex-1"></div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

const Project = () => {

    return (
        <section id="projects" className="w-full py-20">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                        My <span className="text-blue-600">Projects</span>
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        A collection of my professional cloud, DevOps, and security projects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ProjectData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
