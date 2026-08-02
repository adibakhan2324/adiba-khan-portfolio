import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      id="about"
      className="bg-slate-800 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">
          About Me
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Learn more about my journey, skills, and career goals.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Card */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">

            <h3 className="text-2xl font-semibold mb-5 text-blue-400">
              Aspiring Software Development Engineer | Full Stack Developer
            </h3>

            <p className="text-gray-300 leading-8 mb-5">
              I am a final-year B.Tech Computer Science & Engineering student
              passionate about Software Development, Full Stack Development,
              and Artificial Intelligence. I enjoy building scalable web
              applications while continuously improving my programming and
              problem-solving skills.
            </p>

            <p className="text-gray-300 leading-8">
              My recent projects include an AI-powered Customer Feedback
              Analysis System, a modern Portfolio Website, and full-stack web
              applications. I am actively seeking Software Development Engineer
              internship and full-time opportunities where I can contribute,
              learn, and build impactful software.
            </p>

          </div>

          {/* Right Card */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">

            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Quick Information
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="font-semibold text-blue-400">Name</span>
                <span>Adiba Khan</span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="font-semibold text-blue-400">Degree</span>
                <span>B.Tech Computer Science & Engineering</span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="font-semibold text-blue-400">Graduation</span>
                <span>2027</span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="font-semibold text-blue-400">Career Goal</span>
                <span>Software Development Engineer</span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="font-semibold text-blue-400">Interests</span>
                <span>Full Stack • AI • Software Engineering</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold text-blue-400">Location</span>
                <span>New Delhi, India</span>
              </div>

            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <div className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-5xl font-bold text-blue-400 mb-3">4+</h3>
            <p className="text-gray-300">Projects</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-5xl font-bold text-blue-400 mb-3">20+</h3>
            <p className="text-gray-300">Technologies</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-5xl font-bold text-blue-400 mb-3">1</h3>
            <p className="text-gray-300">Internship</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-5xl font-bold text-blue-400 mb-3">2027</h3>
            <p className="text-gray-300">Graduation</p>
          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default About;