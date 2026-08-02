import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import portfolioImage from "../assets/Images/portfolio.png";
import aiFeedbackImage from "../assets/Images/ai-feedback.png";
import ecommerceImage from "../assets/Images/ecommerce-placeholder.png";
import taskImage from "../assets/Images/task-placeholder.png";

function Projects() {
  const projects = [
    {
      title: "AI Customer Feedback Analysis System",
      featured: true,
      status: "Live",
      image: aiFeedbackImage,
      description:
        "Developed an AI-powered customer sentiment analysis web application using BERT and Bi-LSTM models. The system analyzes customer reviews, detects business issues, generates recommendations, and visualizes insights through an interactive dashboard.",

      tech: [
        "Python",
        "Flask",
        "BERT",
        "Bi-LSTM",
        "TensorFlow",
        "PyTorch",
        "HTML",
        "CSS",
        "JavaScript",
      ],

      github:
        "https://github.com/adibakhan2324/AI-Customer-Feedback-Analysis",

      demo:
        "https://ai-customer-feedback-analysis-1.onrender.com/",
    },

    {
      title: "Personal Portfolio Website",
      featured: false,
      status: "Live",
      image: portfolioImage,

      description:
        "A modern portfolio website built with React, Vite and Tailwind CSS showcasing my projects, skills, education and experience with responsive design and smooth animations.",

      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "JavaScript",
        "Vercel",
      ],

      github:
        "https://github.com/adibakhan2324/adiba-khan-portfolio",

      demo:
        "https://adiba-khan-portfolio-v2.vercel.app",
    },

    {
      title: "E-Commerce Website",
      featured: false,
      status: "In Development",
      image: ecommerceImage,

      description:
        "A full-stack e-commerce application featuring authentication, product catalog, shopping cart, secure checkout, payment integration and admin dashboard.",

      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],

      github: null,
      demo: null,
    },

    {
      title: "Task Management App",
      featured: false,
      status: "In Development",
      image: taskImage,

      description:
        "A productivity application with authentication, task management, reminders, deadlines, priority levels and progress tracking dashboard.",

      tech: [
        "React",
        "Express.js",
        "MongoDB",
      ],

      github: null,
      demo: null,
    },
  ];

  return (
    <section
  id="projects"
  className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-400 mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 leading-8">
          A collection of academic and personal projects demonstrating my
          experience in Full Stack Development, Artificial Intelligence,
          problem solving and software engineering.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-slate-700 bg-slate-800/70 backdrop-blur-md shadow-xl hover:border-blue-500 hover:-translate-y-3 hover:shadow-blue-500/20 transition-all duration-500"
            >

              {/* IMAGE */}

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                {project.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full shadow-lg">
                    ⭐ Featured
                  </div>
                )}

                <div
                  className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold ${
                    project.status === "Live"
                      ? "bg-green-500"
                      : "bg-orange-500"
                  }`}
                >
                  {project.status}
                </div>

              </div>

              {/* CONTENT */}

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                {/* TECH */}

                <div className="flex flex-wrap gap-2 mb-8">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="px-3 py-2 rounded-full text-sm bg-slate-700 border border-slate-600 text-blue-300 hover:bg-blue-600 hover:text-white transition"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* BUTTONS */}

                <div className="flex flex-wrap gap-4">

                  {project.github ? (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition hover:scale-105"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                  ) : (

                    <span className="bg-slate-700 px-5 py-3 rounded-xl text-gray-300">
                      🚧 Coming Soon
                    </span>

                  )}

                  {project.demo && (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-blue-500 hover:bg-blue-500 px-5 py-3 rounded-xl font-semibold transition hover:scale-105"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;