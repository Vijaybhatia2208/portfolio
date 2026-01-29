"use client";

import { GraduationCap, Award, Calendar } from "lucide-react";

const education = {
  degree: "B.Tech. – Mechanical Engineering",
  institution: "National Institute of Technology Hamirpur",
  period: "July 2019 – May 2023",
  location: "Hamirpur, India",
};

const certifications = [
  "Modern React with Redux",
  "ES6 JavaScript: The Complete Developer's Guide",
  "The Complete Node.js Developer Course (3rd Edition)",
  "SQL & PostgreSQL – Complete Developer's Guide",
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="p-6 bg-white dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-400/10 rounded-lg">
                <GraduationCap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {education.degree}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {education.institution}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {education.period}
                  </span>
                </div>
                <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">
                  {education.location}
                </p>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="p-6 bg-white dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl hover:border-green-400 dark:hover:border-green-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-400/10 rounded-lg">
                <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Certifications
                </h3>
                <ul className="space-y-2">
                  {certifications.map((cert, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                    >
                      <span className="text-green-600 dark:text-green-400 mt-1">
                        ▹
                      </span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
