import {
  FaBriefcase,
  FaRobot,
  FaChartLine,
  FaBuilding,
  FaCode,
} from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-blue-400 mb-5">
          Internships & Experience
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Practical exposure through internships and industry-oriented learning
        </p>

        {/* ================= MCAI INTERNSHIP ================= */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-700 hover:border-blue-500 transition-all duration-500 shadow-xl mb-8">

          <div className="flex flex-col md:flex-row gap-6">

            {/* Icon */}
            <div className="bg-blue-500/20 p-5 rounded-2xl h-fit">
              <FaBriefcase
                size={40}
                className="text-blue-400"
              />
            </div>

            <div className="flex-1">

              <div className="flex flex-col md:flex-row md:justify-between gap-3">

                <div>
                  <h3 className="text-3xl font-bold">
                    AI Internship Trainee
                  </h3>

                  <p className="flex items-center gap-2 text-blue-400 text-lg mt-2">
                    <FaBuilding />
                    MCAI – Jamia Hamdard
                  </p>
                </div>

                <span className="text-gray-400">
                  2026
                </span>

              </div>

              {/* Domains */}
              <div className="flex flex-wrap gap-3 mt-6">

                <span className="flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30">
                  <FaChartLine />
                  Management & Business Analytics
                </span>

                <span className="flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30">
                  <FaRobot />
                  Artificial Intelligence
                </span>

              </div>

              <p className="text-gray-300 leading-8 mt-8">
                Completed an internship with the Multidisciplinary Centre
                for Artificial Intelligence (MCAI), Jamia Hamdard. Gained
                practical exposure to AI-based applications, business
                analytics concepts, application testing, and user-focused
                technology solutions.
              </p>

              <h4 className="text-xl font-semibold mt-8 mb-4">
                Responsibilities & Learning
              </h4>

              <ul className="space-y-3 text-gray-300">

                <li className="flex gap-3">
                  <span className="text-blue-400">▹</span>
                  Assisted with application promotion and user engagement activities.
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-400">▹</span>
                  Created and managed promotional codes for the application.
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-400">▹</span>
                  Tested application functionality and reported login-related issues.
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-400">▹</span>
                  Learned practical applications of AI and business analytics.
                </li>

              </ul>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 mt-8">

                {[
                  "Artificial Intelligence",
                  "Business Analytics",
                  "Application Testing",
                  "Problem Reporting",
                  "User Engagement",
                ].map((skill, index) => (

                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-gray-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>
          </div>
        </div>


        {/* ================= UNIFIED MENTOR INTERNSHIP ================= */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-700 hover:border-blue-500 transition-all duration-500 shadow-xl">

          <div className="flex flex-col md:flex-row gap-6">

            {/* Icon */}
            <div className="bg-purple-500/20 p-5 rounded-2xl h-fit">
              <FaCode
                size={40}
                className="text-purple-400"
              />
            </div>

            <div className="flex-1">

              <div className="flex flex-col md:flex-row md:justify-between gap-3">

                <div>
                  <h3 className="text-3xl font-bold">
                    Web Development Intern
                  </h3>

                  <p className="flex items-center gap-2 text-purple-400 text-lg mt-2">
                    <FaBuilding />
                    Unified Mentor Pvt. Ltd.
                  </p>
                </div>

                <span className="text-gray-400">
                  Mar 2026 – Jun 2026
                </span>

              </div>

              {/* Domain */}
              <div className="flex flex-wrap gap-3 mt-6">

                <span className="flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30">
                  <FaCode />
                  Web Development
                </span>

              </div>

              <p className="text-gray-300 leading-8 mt-8">
                Successfully completed a three-month internship as a
                Web Development Intern at Unified Mentor Pvt. Ltd.,
                gaining practical exposure to web development and
                industry-oriented software development practices.
              </p>

              <h4 className="text-xl font-semibold mt-8 mb-4">
                Internship
              </h4>

              <ul className="space-y-3 text-gray-300">

                <li className="flex gap-3">
                  <span className="text-purple-400">▹</span>
                  Successfully completed a three-month Web Development internship.
                </li>

                <li className="flex gap-3">
                  <span className="text-purple-400">▹</span>
                  Gained practical exposure to web development in an industry-oriented environment.
                </li>

                <li className="flex gap-3">
                  <span className="text-purple-400">▹</span>
                  Developed practical understanding of professional software development workflows.
                </li>

              </ul>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 mt-8">

                {[
                  "Web Development",
                  "Frontend Development",
                  "Software Development",
                  "Industry Exposure",
                ].map((skill, index) => (

                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-gray-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;