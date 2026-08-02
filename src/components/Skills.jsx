

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
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

import { motion } from "framer-motion";
const skillCategories = [
  {
    title: "☕ Programming Languages",
    color: "border-orange-500",
    skills: [
      { name: "Java", icon: <FaJava size={36} className="text-orange-500" /> },
      { name: "Python", icon: <FaPython size={36} className="text-yellow-400" /> },
      { name: "C++", icon: <FaCode size={36} className="text-blue-400" /> },
      { name: "JavaScript", icon: <FaJs size={36} className="text-yellow-300" /> },
    ],
  },

  {
    title: "🎨 Frontend Development",
    color: "border-cyan-500",
    skills: [
      { name: "HTML5", icon: <FaHtml5 size={36} className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt size={36} className="text-blue-500" /> },
      { name: "React", icon: <FaReact size={36} className="text-cyan-400" /> },
    ],
  },

  {
    title: "⚙️ Backend & Database",
    color: "border-green-500",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={36} className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress size={36} className="text-white" /> },
      { name: "Flask", icon: <SiFlask size={36} className="text-gray-200" /> },
      { name: "MongoDB", icon: <SiMongodb size={36} className="text-green-400" /> },
      { name: "MySQL", icon: <SiMysql size={36} className="text-blue-400" /> },
    ],
  },

  {
    title: "🤖 AI / Machine Learning",
    color: "border-pink-500",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow size={36} className="text-orange-400" /> },
      { name: "PyTorch", icon: <SiPytorch size={36} className="text-red-500" /> },
      { name: "BERT", icon: <span className="text-3xl">🧠</span> },
      { name: "NLP", icon: <span className="text-3xl">💬</span> },
    ],
  },

  {
    title: "📚 Core Computer Science",
    color: "border-purple-500",
    skills: [
      { name: "Data Structures & Algorithms", icon: <span className="text-3xl">📘</span> },
      { name: "Object-Oriented Programming", icon: <span className="text-3xl">⚙️</span> },
      { name: "Database Management System", icon: <span className="text-3xl">🗄️</span> },
      { name: "Operating Systems", icon: <span className="text-3xl">💻</span> },
      { name: "Computer Networks", icon: <span className="text-3xl">🌐</span> },
      { name: "Computer Organization & Architecture", icon: <span className="text-3xl">🖥️</span> },
      { name: "Software Engineering", icon: <span className="text-3xl">🛠️</span> },
    ],
  },

  {
    title: "🛠️ Tools & Platforms",
    color: "border-gray-500",
    skills: [
      { name: "Git", icon: <FaGitAlt size={36} className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub size={36} className="text-white" /> },
      { name: "VS Code", icon: <span className="text-3xl">🧑‍💻</span> },
      { name: "Vercel", icon: <SiVercel size={36} className="text-white" /> },
    ],
  },
];

const featuredSkills = [
  "React",
  "Node.js",
  "Python",
  "Java",
  "MongoDB",
  "Flask",
  "BERT",
  "TensorFlow",
];

function Skills() {
  return (
    <section
  id="skills"
  className="bg-slate-900 text-white py-24 px-6"
>
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-blue-400">
          Technical Skills
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
          Building modern web applications using Frontend, Backend,
          Artificial Intelligence, Machine Learning, and Core Computer
          Science concepts.
        </p>

        <div className="flex justify-center mt-6 mb-10">
          <div className="bg-blue-500/10 border border-blue-500 rounded-full px-6 py-3 text-blue-300 font-semibold">
            🛠️ 15+ Technologies
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {featuredSkills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-500/10 border border-blue-500 text-blue-300 px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="space-y-14">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className={`bg-slate-800 rounded-3xl p-8 border ${category.color} shadow-lg`}
            >

              <h3 className="text-2xl font-bold mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {category.skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="group bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 flex flex-col items-center"
                  >

                    <div className="group-hover:scale-110 transition duration-300">
                      {skill.icon}
                    </div>

                    <h4 className="mt-4 text-center font-semibold text-gray-200 group-hover:text-blue-400 transition">
                      {skill.name}
                    </h4>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-10 text-center shadow-xl">

          <h3 className="text-3xl font-bold mb-4">
            🚀 Currently Learning
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mt-6">

            {["Spring Boot", "REST APIs", "Docker", "AWS"].map((item) => (
              <span
                key={item}
                className="bg-white/10 px-5 py-3 rounded-full border border-white/20 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;