import { useState } from "react";
import ExperienceData from "./SkillData";

const Skill = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const skillCategories = {
        All: ExperienceData,
        DevOps: ExperienceData.filter((skill) => skill.category === "devops"),
        Cybersecurity: ExperienceData.filter((skill) => skill.category === "cybersecurity"),
        Programming: ExperienceData.filter((skill) => skill.category === "programming"),
        Monitoring: ExperienceData.filter((skill) => skill.category === "monitoring"),
        Orchestration: ExperienceData.filter((skill) => skill.category === "orchestration"),
    };

    return (
        <section id="skills" className="w-full py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        My <span className="text-blue-600 dark:text-blue-400">Skills</span>
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        Technologies and tools I work with to build secure and scalable infrastructure
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {Object.keys(skillCategories).map((category) => (
                        <button key={category} onClick={() => setActiveCategory(category)} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm transition-all duration-300  border border-gray-200 dark:border-gray-700 hover:shadow-md"}`}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {skillCategories[activeCategory].map((data) => {
                        const IconComponent = data.icon;
                        return (
                            <a key={data.id} target={data.target} rel="noopener noreferrer" className="group relative p-5 bg-slate-100 dark:bg-gray-800 rounded-xl flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1">
                                <div className="p-3 rounded-lg mb-3 flex items-center justify-center">
                                    {IconComponent ? (
                                        <IconComponent color={data.color} className="w-12 h-12 md:w-16 md:h-16" />
                                    ) : null}
                                </div>
                                <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 text-center">
                                    {data.name}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skill;
