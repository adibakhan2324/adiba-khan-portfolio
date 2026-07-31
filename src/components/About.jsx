function About() {
  return (
    <section
      id="about"
      className="bg-slate-800 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">
          About Me
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Get to know me and my journey
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition duration-300">

            <h3 className="text-2xl font-semibold mb-5 text-blue-400">
              Aspiring Software Development Engineer
            </h3>

            <p className="text-gray-300 leading-8 mb-5">
              I am a B.Tech Computer Science and Engineering student
              passionate about Software Development, Full Stack Web
              Development, and Artificial Intelligence.
            </p>

            <p className="text-gray-300 leading-8">
              I enjoy building real-world applications, solving
              programming problems, learning new technologies, and
              turning ideas into practical software solutions. My goal
              is to start my career as a Software Development Engineer
              and contribute to impactful technology products.
            </p>

          </div>

          {/* Right Side */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">

            <h3 className="text-2xl font-semibold mb-6">
              Quick Information
            </h3>

            <div className="space-y-5">

              <p>
                <span className="font-semibold text-blue-400">
                  Name:
                </span>{" "}
                Adiba Khan
              </p>

              <p>
                <span className="font-semibold text-blue-400">
                  Degree:
                </span>{" "}
                B.Tech in Computer Science & Engineering
              </p>

              <p>
                <span className="font-semibold text-blue-400">
                  Career Goal:
                </span>{" "}
                Software Development Engineer
              </p>

              <p>
                <span className="font-semibold text-blue-400">
                  Interests:
                </span>{" "}
                Full Stack Development, AI & Software Engineering
              </p>

              <p>
                <span className="font-semibold text-blue-400">
                  Focus:
                </span>{" "}
                Building scalable and user-focused applications
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;