import profile from "../assets/Images/Profile.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl font-bold mb-4">
            Adiba <span className="text-blue-400">Khan</span>
          </h1>

          {/* Typing Animation */}
          <div className="text-3xl text-gray-300 mb-6">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "AI/ML Enthusiast",
                2000,
                "Open to Software Engineering Internships & Full-Time Opportunities",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Introduction */}
          <p className="text-gray-400 leading-8 mb-8">
            B.Tech Computer Science & Engineering student (Expected 2027)
            passionate about building scalable web applications, solving
            real-world problems, and developing AI-powered solutions.
            Skilled in React, Node.js, Flask, Python, and modern web
            technologies. Currently seeking Software Engineering
            Internship and Full-Time opportunities.
          </p>

          {/* Professional Badges */}
          <div className="flex flex-wrap gap-4 mb-8">

            <div className="bg-slate-800 border border-blue-500 rounded-full px-4 py-2 text-sm hover:scale-105 transition duration-300">
              📍 New Delhi, India
            </div>

            <div className="bg-slate-800 border border-blue-500 rounded-full px-4 py-2 text-sm hover:scale-105 transition duration-300">
              🎓 B.Tech Computer Science & Engineering (Expected 2027)
            </div>

            <div className="bg-slate-800 border border-blue-500 rounded-full px-4 py-2 text-sm hover:scale-105 transition duration-300">
              💼 Open to Software Engineering Internships & Full-Time Opportunities
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">

            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl flex items-center gap-2 transition duration-300 hover:scale-105 shadow-lg"
            >
              🚀 View Projects
            </a>

            <a
              href="/Adiba_khan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-xl flex items-center gap-2 transition duration-300 hover:scale-105"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-3xl">

            <a
              href="https://github.com/adibakhan2324"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/adiba-khan-00b308339"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:khanadiba263@gmail.com"
              className="hover:text-blue-400 hover:scale-125 transition duration-300"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Adiba Khan"
            className="w-80 h-80 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:scale-105 transition duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;