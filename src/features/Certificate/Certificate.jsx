import certificatesData from "./certificatesData";

const Certificate = () => {
    return (
        <section id="certificate" className="w-full py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Certificate of{" "}
                        <span className="text-blue-600">Achievement</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        A collection of my professional certifications showcasing
                        skills in Cloud, DevOps, Cybersecurity & Software Engineering.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {certificatesData.map((cert) => (
                        <div key={cert.id} className="bg-slate-100 dark:bg-gray-800 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col">
                            <div className="w-full h-48 mb-4">
                                <img src={cert.image} alt={cert.title} className="w-full h-full object-contain rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700" loading="lazy" />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {cert.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mt-1">
                                {cert.issuer}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {cert.issueDate}
                            </p>
                            {cert.credentialId && (
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                    ID : {cert.credentialId}
                                </p>
                            )}

                            <div className="mt-auto pt-4">
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                                    Show Credential
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificate;
