import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">
          Education
        </h2>

        <p className="text-center text-gray-400 mb-12">
          My academic journey
        </p>

        {/* Education Card */}
        <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">

          <div className="flex items-start gap-5">

            {/* Icon */}
            <div className="bg-blue-500/10 p-4 rounded-xl">
              <FaGraduationCap className="text-4xl text-blue-400" />
            </div>

            {/* Content */}
            <div className="flex-1">

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">

                <div>
                  <h3 className="text-2xl font-bold">
                    Bachelor of Technology (B.Tech)
                  </h3>

                  <p className="text-blue-400 text-lg mt-1">
                    Computer Science & Engineering
                  </p>
                </div>

                <span className="text-gray-400">
                  2023 – 2027
                </span>

              </div>

              <p className="text-gray-300 mt-5">
                Mahatma Gandhi Mission's College of Engineering & Technology,
                Noida
              </p>

              {/* Information Cards */}
              <div className="mt-6 flex flex-wrap gap-4">

                <div className="bg-slate-900 px-4 py-2 rounded-lg">
                  <span className="text-gray-400">Degree</span>
                  <span className="text-white font-semibold ml-2">
                    B.Tech CSE
                  </span>
                </div>

                <div className="bg-slate-900 px-4 py-2 rounded-lg">
                  <span className="text-gray-400">
                    Expected Graduation
                  </span>
                  <span className="text-blue-400 font-semibold ml-2">
                    2027
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;