"use client";

import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Recurrent Software",
    role: "Software Engineer",
    period: "March 2025 – Present",
    location: "Bangalore, India",
    description: [
      "Building advanced clinical data platforms using React and TypeScript, optimizing complex session workflows and strengthening performance via refined state logic with Redux and Hooks.",
      "Integrating Generative AI–based documentation features by crafting context-driven prompt structures that automate therapist reporting and session narrative accuracy.",
      "Designing compliance-oriented modules including digital signatures and real-time behavioral dashboards, ensuring healthcare usability and security within production systems.",
    ],
    tech: ["React", "TypeScript", "Redux", "Generative AI", "Healthcare Tech"],
    current: true,
  },
  {
    company: "Dataclaps",
    role: "Software Engineer",
    period: "Oct 2023 – March 2025",
    location: "Gurgaon, India",
    description: [
      "Developed scalable web applications using React, Node.js, and MongoDB, delivering a 25% uplift in overall platform performance.",
      "Enhanced UI experience using Material UI components, driving 20% growth in user interaction metrics.",
      "Implemented comprehensive state management with Redux Toolkit, decreasing page load times by 15% under high-volume data conditions.",
      "Conducted 50+ structured code reviews and collaborated with Agile teams to sustain 100% on-time release cycles.",
    ],
    tech: ["React", "Node.js", "MongoDB", "Material UI", "Redux Toolkit"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-400 to-green-400 transform md:-translate-x-1/2" />

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gray-50 dark:bg-gray-950 border-2 border-cyan-400 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40" />
                )}
              </div>

              {/* Content Card */}
              <div
                className={`flex-1 ml-8 md:ml-0 ${
                  idx % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="group p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-400/10 border border-green-200 dark:border-green-400/20 rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm"
                      >
                        <span className="text-cyan-600 dark:text-cyan-400 mt-1">
                          ▹
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
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

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
