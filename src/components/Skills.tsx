"use client";

const skillCategories = [
  {
    title: "Frontend",
    color: "cyan",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Material UI",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    color: "purple",
    skills: ["Node.js", "Django", "Python", "FastAPI", "Express.js"],
  },
  {
    title: "Database",
    color: "green",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & Frameworks",
    color: "orange",
    skills: [
      "Redux Toolkit",
      "Docker",
      "Git",
      "Formik",
      "Nivo Charts",
      "FullCalendar",
    ],
  },
  {
    title: "Core Skills",
    color: "pink",
    skills: [
      "Data Structures",
      "Algorithms",
      "System Design",
      "API Development",
      "Agile/Scrum",
    ],
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string }> = {
  cyan: {
    border:
      "border-cyan-300 dark:border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-400",
    bg: "bg-cyan-100 dark:bg-cyan-400/10",
    text: "text-cyan-600 dark:text-cyan-400",
  },
  purple: {
    border:
      "border-purple-300 dark:border-purple-500/30 hover:border-purple-500 dark:hover:border-purple-400",
    bg: "bg-purple-100 dark:bg-purple-400/10",
    text: "text-purple-600 dark:text-purple-400",
  },
  green: {
    border:
      "border-green-300 dark:border-green-500/30 hover:border-green-500 dark:hover:border-green-400",
    bg: "bg-green-100 dark:bg-green-400/10",
    text: "text-green-600 dark:text-green-400",
  },
  orange: {
    border:
      "border-orange-300 dark:border-orange-500/30 hover:border-orange-500 dark:hover:border-orange-400",
    bg: "bg-orange-100 dark:bg-orange-400/10",
    text: "text-orange-600 dark:text-orange-400",
  },
  pink: {
    border:
      "border-pink-300 dark:border-pink-500/30 hover:border-pink-500 dark:hover:border-pink-400",
    bg: "bg-pink-100 dark:bg-pink-400/10",
    text: "text-pink-600 dark:text-pink-400",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const colors = colorMap[category.color];
            return (
              <div
                key={idx}
                className={`p-6 bg-white dark:bg-gray-800/30 backdrop-blur-sm border ${colors.border} rounded-xl transition-all duration-300 hover:shadow-lg`}
              >
                <h3 className={`text-lg font-semibold ${colors.text} mb-4`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 ${colors.bg} border border-gray-200 dark:border-white/10 rounded-lg hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
