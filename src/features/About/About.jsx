const About = () => {
  return (
    <section id="about" className="w-full px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            DevOps & Cloud Security Engineer helping startups scale securely and efficiently
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <div className="lg:w-1/3 flex justify-center w-full px-4 sm:px-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-xl bg-blue-100 dark:bg-blue-900/30 blur-md"></div>
              <img src="/7358653-removebg-preview.png" alt="Neamul Kabir Emon - DevOps & Cloud Security Engineer" className="relative z-10 w-full h-full object-contain rounded-lg shadow-lg border-4 border-white dark:border-gray-800" loading="lazy" />
            </div>
          </div>

          <div className="lg:w-2/3 space-y-6 md:space-y-8 w-full">
            <div className="relative">
              <div className="bg-slate-100 dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow" role="region" aria-label="DevOps and Cloud Excellence">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  🚀 DevOps & Cloud Excellence
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  I help startups deploy <span className="text-blue-600 dark:text-blue-400 font-medium">10x faster</span>,
                  cut cloud costs by <span className="text-blue-600 dark:text-blue-400 font-medium">30-60%</span>, and pass
                  security audits without hiring full-time DevOps teams. Using
                  <span className="text-blue-600 dark:text-blue-400 font-medium"> AWS • GCP • Kubernetes • Terraform</span>,
                  I build scalable infrastructure that grows with your business.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-100 dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow" role="region" aria-label="Security and Compliance">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  🛡️ Security & Compliance
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  I specialize in securing infrastructure for
                  <span className="text-purple-600 dark:text-purple-400 font-medium"> SOC2, HIPAA & OWASP compliance</span>.
                  With expertise in <span className="text-purple-600 dark:text-purple-400 font-medium">cybersecurity</span> and
                  <span className="text-purple-600 dark:text-purple-400 font-medium"> information security</span>, I ensure your
                  applications are protected against threats while maintaining regulatory compliance.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-100 dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow" role="region" aria-label="Professional Journey and Approach">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  💡 My Journey & Approach
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Starting in 2018 with no degree and a secondhand laptop, I&apos;ve served
                  <span className="text-green-600 dark:text-green-400 font-medium"> 200+ startups</span> and earned
                  <span className="text-green-600 dark:text-green-400 font-medium"> $70K+</span> solving DevOps challenges remotely.
                  I offer <span className="text-green-600 dark:text-green-400 font-medium">fixed-scope projects</span>,
                  <span className="text-green-600 dark:text-green-400 font-medium"> fractional DevOps partnerships</span>, and
                  <span className="text-green-600 dark:text-green-400 font-medium"> security audits</span> — delivering outcomes, not just services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;