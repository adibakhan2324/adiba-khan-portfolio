import {
  FaJava,
  FaPython,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFlask,
  SiVercel,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Java",
        icon: <FaJava size={40} className="text-orange-500" />,
      },
      {
        name: "Python",
        icon: <FaPython size={40} className="text-yellow-400" />,
      },
      {
        name: "C++",
        icon: <FaCode size={40} className="text-blue-400" />,
      },
      {
        name: "JavaScript",
        icon: <FaJs size={40} className="text-yellow-300" />,
      },
    ],
  },

  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 size={40} className="text-orange-600" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt size={40} className="text-blue-500" />,
      },
      {
        name: "React",
        icon: <FaReact size={40} className="text-cyan-400" />,
      },
    ],
  },

  {
    title: "Backend & Database",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs size={40} className="text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress size={40} className="text-gray-300" />,
      },
      {
        name: "Flask",
        icon: <SiFlask size={40} className="text-white" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={40} className="text-green-400" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql size={40} className="text-blue-500" />,
      },
    ],
  },

  {
    title: "Core Computer Science",
    skills: [
      {
        name: "Data Structures & Algorithms",
        icon: <span className="text-3xl">📚</span>,
      },
      {
        name: "Object-Oriented Programming",
        icon: <span className="text-3xl">⚙️</span>,
      },
      {
        name: "Database Management System",
        icon: <span className="text-3xl">🗄️</span>,
      },
      {
        name: "Operating Systems",
        icon: <span className="text-3xl">💻</span>,
      },
      {
        name: "Computer Networks",
        icon: <span className="text-3xl">🌐</span>,
      },
      {
        name: "Computer Organization & Architecture",
        icon: <span className="text-3xl">🖥️</span>,
      },
      {
        name: "Software Engineering",
        icon: <span className="text-3xl">🛠️</span>,
      },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt size={40} className="text-red-500" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub size={40} className="text-white" />,
      },
      {
  name: "VS Code",
  icon: <span className="text-3xl">🧑‍💻</span>,
},
      {
        name: "Vercel",
        icon: <SiVercel size={40} className="text-white" />,
      },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">
          Technical Skills
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Technologies, tools, and core computer science concepts I work with.
        </p>

        <div className="space-y-12">

          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>

              <h3 className="text-2xl font-semibold text-white mb-6 border-l-4 border-blue-500 pl-4">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-700 hover:border-blue-500 hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>

                    <h4 className="mt-4 text-center font-semibold text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h4>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;