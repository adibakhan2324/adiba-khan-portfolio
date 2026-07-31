import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce web application with user authentication, product catalog, shopping cart, and order management.",
      tech: "React • Node.js • Express.js • MongoDB",
      github: null,
      demo: null,
    },
    {
      title: "AI-Based Customer Feedback Analysis System",
      description:
        "An AI-powered sentiment analysis system using BERT and LSTM models to classify customer reviews and generate business insights.",
      tech: "Python • Flask • BERT • LSTM • HTML • CSS",
      github:
        "https://github.com/adibakhan2324/AI-Customer-Feedback-Analysis",
      demo: null,
    },
    {
      title: "Task Management App",
      description:
        "A task management application with authentication, task tracking, due dates, and dashboard. Currently under development.",
      tech: "React • Express.js • MongoDB",
      github: null,
      demo: null,
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-800 text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">
          Projects
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Some of my academic and personal projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >

              {/* Project Number */}
              <div className="text-blue-400 text-sm font-semibold mb-4">
                PROJECT 0{index + 1}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7 mb-5">
                {project.description}
              </p>

              {/* Technologies */}
              <p className="text-blue-400 font-medium text-sm mb-6">
                {project.tech}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                ) : (
                  <span className="bg-slate-700 text-gray-400 px-4 py-2 rounded-lg">
                    Coming Soon
                  </span>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-500 hover:bg-blue-500 px-4 py-2 rounded-lg flex items-center gap-2 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                ) : null}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;