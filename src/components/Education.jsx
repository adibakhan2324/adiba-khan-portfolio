import { FaGraduationCap, FaUniversity } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-blue-400 mb-5">
          Education
        </h2>

        <p className="text-center text-gray-400 mb-16">
          My academic background and technical foundation in Computer Science
        </p>


        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-blue-500/30 hidden md:block"></div>


          <div className="relative bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 hover:border-blue-500 transition-all duration-500 shadow-xl">


            <div className="flex flex-col md:flex-row gap-6">


              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="bg-blue-500/20 p-5 rounded-2xl">
                  <FaGraduationCap
                    className="text-blue-400"
                    size={40}
                  />
                </div>
              </div>


              {/* Content */}
              <div className="flex-1">

                <div className="flex flex-col md:flex-row md:justify-between gap-3">

                  <div>

                    <h3 className="text-3xl font-bold">
                      Bachelor of Technology (B.Tech)
                    </h3>

                    <p className="text-blue-400 text-xl mt-2">
                      Computer Science & Engineering
                    </p>

                  </div>


                  <span className="text-gray-400 text-lg">
                    2023 - 2027
                  </span>

                </div>


                <p className="flex items-center gap-2 text-gray-300 mt-6 text-lg">
                  <FaUniversity className="text-blue-400" />
                  Mahatma Gandhi Mission's College of Engineering & Technology,
                  Noida
                </p>


                {/* Academic Details */}

                <div className="grid md:grid-cols-2 gap-5 mt-8">


                  <div className="bg-slate-900 rounded-xl p-5">
                    <h4 className="text-blue-400 font-semibold mb-3">
                      Relevant Coursework
                    </h4>

                    <p className="text-gray-300 leading-7">
                      Data Structures & Algorithms, DBMS, Operating Systems,
                      Computer Networks, OOP, Software Engineering,
                      Computer Organization & Architecture
                    </p>
                  </div>


                  <div className="bg-slate-900 rounded-xl p-5">
                    <h4 className="text-blue-400 font-semibold mb-3">
                      Current Focus
                    </h4>

                    <p className="text-gray-300 leading-7">
                      Full Stack Development, Artificial Intelligence,
                      Machine Learning, Backend Development and
                      Software Engineering practices.
                    </p>
                  </div>


                </div>


                {/* Tags */}

                <div className="flex flex-wrap gap-3 mt-8">

                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">
                    B.Tech CSE
                  </span>

                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">
                    Expected Graduation: 2027
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