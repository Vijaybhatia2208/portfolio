"use client";

import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Course Selling Application",
    description:
      "Engineered a modular front-end framework with reusable components, secure login flows, and seamless browsing/purchase experience. Built back-end services enabling course management, user enrollment, payment processing, and API integrations.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    period: "Aug 2025 – Oct 2025",
    github: "https://github.com/Vijaybhatia2208",
    live: null,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Admin Dashboard",
    description:
      "Constructed a feature-rich dashboard supporting light/dark themes. Integrated Nivo Charts, Formik, FullCalendar, and Data Grid delivering visual analytics, tabular data views, scheduling modules, and interactive forms.",
    tech: ["React", "MongoDB", "Material UI", "Nivo Charts", "FullCalendar"],
    period: "2024",
    github: "https://github.com/Vijaybhatia2208",
    live: null,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Paytm App Clone",
    description:
      "Designed high-efficiency UI screens for payments, recharges, wallet operations, and real-time transaction views. Implemented secure APIs incorporating JWT authentication, payment gateways, and wallet management workflow.",
    tech: ["React", "Node.js", "Express", "JWT", "Payment Gateway"],
    period: "Oct 2025 – Dec 2025",
    github: "https://github.com/Vijaybhatia2208",
    live: null,
    gradient: "from-green-500 to-teal-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 flex flex-col"
            >
              {/* Gradient Top Bar */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Period */}
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-3">
                  {project.period}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More on GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Vijaybhatia2208"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 hover:border-gray-400 transition-all"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
