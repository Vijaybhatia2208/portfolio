"use client";

import { Code2, Briefcase, GraduationCap, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    label: "2+ Years",
    description: "Full Stack Experience",
  },
  {
    icon: Briefcase,
    label: "Enterprise",
    description: "Healthcare & SaaS",
  },
  {
    icon: GraduationCap,
    label: "NIT Hamirpur",
    description: "B.Tech Graduate",
  },
  {
    icon: MapPin,
    label: "Bengaluru",
    description: "Open to Remote",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Summary */}
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I&apos;m a{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                dedicated Full Stack Engineer
              </span>{" "}
              with over 2 years of experience excelling in designing end-to-end
              web solutions across{" "}
              <span className="text-purple-600 dark:text-purple-400 font-medium">
                MERN
              </span>{" "}
              and{" "}
              <span className="text-green-600 dark:text-green-400 font-medium">
                Django
              </span>{" "}
              stacks.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I&apos;ve consistently delivered measurable impact, including a
              documented{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                25% performance uplift
              </span>
              , improved user engagement, and reduced latency through
              architectural refinements and modular coding practices.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Currently at{" "}
              <span className="text-green-600 dark:text-green-400 font-medium">
                Recurrent Software
              </span>
              , I&apos;m building advanced clinical data platforms using React
              and TypeScript, integrating{" "}
              <span className="text-purple-600 dark:text-purple-400 font-medium">
                Generative AI
              </span>{" "}
              features, and designing compliance-oriented healthcare modules.
            </p>

            {/* Key Accomplishments */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Key Achievements
              </h3>
              <ul className="space-y-2">
                {[
                  "25% platform efficiency boost via optimized data handling",
                  "15% reduction in system load times",
                  "20% improvement in UI engagement",
                  "50+ code review contributions",
                  "100% on-schedule Agile releases",
                ].map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                  >
                    <span className="text-cyan-600 dark:text-cyan-400 mt-1">
                      ▹
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <item.icon className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-gray-900 dark:text-white font-semibold text-lg">
                  {item.label}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
