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
} from "react-icons/fa";

import { SiExpress, SiMongodb } from "react-icons/si";

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
        name: "MongoDB",
        icon: <SiMongodb size={40} className="text-green-400" />,
      },
    ],
  },

  {
    title: "Core Computer Science",
    skills: [
      {
        name: "Data Structures & Algorithms",
        icon: <span className="text-4xl">🧩</span>,
      },
      {
        name: "Object-Oriented Programming",
        icon: <span className="text-4xl">💻</span>,
      },
      {
        name: "DBMS",
        icon: <span className="text-4xl">🗄️</span>,
      },
      {
        name: "Computer Networks",
        icon: <span className="text-4xl">🌐</span>,
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt size={40} className="text-red-500" />,
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
          Technologies and core concepts I work with
        </p>

        <div className="space-y-10">

          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>

              <h3 className="text-2xl font-semibold text-gray-200 mb-5">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-800 rounded-xl p-6 flex flex-col items-center justify-center border border-slate-700 hover:border-blue-500 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    {skill.icon}

                    <h4 className="mt-4 text-lg font-semibold text-center">
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