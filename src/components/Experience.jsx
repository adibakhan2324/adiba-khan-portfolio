import { FaBriefcase, FaRobot, FaChartLine } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-800 text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">
          Internships & Experience
        </h2>

        <p className="text-center text-gray-400 mb-12">
          My internship experience and professional exposure
        </p>

        {/* Internship Card */}
        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-lg">

          {/* Header */}
          <div className="flex items-start gap-5 mb-6">

            <div className="bg-blue-500/10 p-4 rounded-xl">
              <FaBriefcase className="text-4xl text-blue-400" />
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                AI & Business Analytics Intern
              </h3>

              <p className="text-blue-400 text-lg mt-1">
                MCAI – Jamia Hamdard
              </p>

              <p className="text-gray-400 mt-2">
                2026
              </p>
            </div>

          </div>

          {/* Domain */}
          <div className="flex flex-wrap gap-3 mb-6">

            <span className="flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-lg">
              <FaChartLine />
              Management & Business Analytics
            </span>

            <span className="flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-lg">
              <FaRobot />
              Artificial Intelligence
            </span>

          </div>

          {/* Description */}
          <p className="text-gray-300 leading-8 mb-6">
            Completed an internship with the Multidisciplinary Centre for
            Artificial Intelligence (MCAI), Jamia Hamdard, gaining exposure
            to Artificial Intelligence and Management & Business Analytics.
            The internship involved working in an AI-focused environment
            and understanding the application of technology in
            business-oriented use cases.
          </p>

          {/* Responsibilities */}
          <h4 className="text-xl font-semibold text-white mb-4">
            Responsibilities & Learning
          </h4>

          <ul className="space-y-3 text-gray-300">

            <li className="flex gap-3">
              <span className="text-blue-400">▹</span>
              Supported app promotion and user engagement activities.
            </li>

            <li className="flex gap-3">
              <span className="text-blue-400">▹</span>
              Created and managed promotional codes for the application.
            </li>

            <li className="flex gap-3">
              <span className="text-blue-400">▹</span>
              Identified and reported application login-related issues.
            </li>

            <li className="flex gap-3">
              <span className="text-blue-400">▹</span>
              Gained exposure to AI applications and business analytics
              concepts.
            </li>

          </ul>

        </div>

      </div>
    </section>
  );
}

export default Experience;