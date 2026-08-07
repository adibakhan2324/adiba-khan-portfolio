import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {

  const certificates = [
    {
      title: "Web Development Internship Certificate",
      organization: "Unified Mentor Pvt. Ltd.",
      year: "2026",
      description:
        "Successfully completed a three-month internship as a Web Development Intern from 15 March 2026 to 15 June 2026.",
      skills: [
        "Web Development",
        "Frontend Development",
        "Software Development",
      ],
      link: "/certificates/Unified%20Mentor%20Web%20Development%20Internship.pdf",
    },

    {
      title: "AI Internship Certificate",
      organization: "MCAI – Jamia Hamdard University",
      year: "2026",
      description:
        "Completed internship exposure in Artificial Intelligence and Management & Business Analytics.",
      skills: [
        "Artificial Intelligence",
        "Business Analytics",
        "Application Testing",
      ],
      link: "/certificates/AI%20Internship%20Certificate.pdf",
    },

    {
      title: "Software Engineering Job Simulation",
      organization: "Forage",
      year: "2025",
      description:
        "Completed practical software engineering tasks including development workflow and problem solving.",
      skills: [
        "Software Engineering",
        "Problem Solving",
        "Development Process",
      ],
      link: "/certificates/Software%20Engineering%20Job%20Simulation.pdf",
    },

    {
      title: "IBM Data Analysis with Python",
      organization: "IBM Skills Network",
      year: "2025",
      description:
        "Learned data analysis techniques using Python for data processing and insights generation.",
      skills: [
        "Python",
        "Data Analysis",
        "Data Visualization",
      ],
      link: "/certificates/IBM%20Data%20Analysis%20with%20Python.pdf",
    },

    {
      title: "GenAI Data Analytics Job Simulation",
      organization: "Forage",
      year: "2025",
      description:
        "Completed a simulation focused on Generative AI concepts and analytics-based problem solving.",
      skills: [
        "Generative AI",
        "Data Analytics",
        "AI Tools",
      ],
      link: "/certificates/GenAI%20Data%20Analytics%20Job%20Simulation.pdf",
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-blue-400 mb-5">
          Certificates
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Certifications and professional learning achievements
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((certificate, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-blue-500 hover:-translate-y-3 transition-all duration-500 shadow-xl"
            >

              <div className="flex justify-between items-center mb-6">

                <div className="bg-blue-500/20 p-4 rounded-2xl">

                  <FaCertificate
                    className="text-blue-400"
                    size={35}
                  />

                </div>

                <span className="text-gray-400">
                  {certificate.year}
                </span>

              </div>

              <h3 className="text-2xl font-bold mb-3">
                {certificate.title}
              </h3>

              <p className="text-blue-400 text-lg mb-5">
                {certificate.organization}
              </p>

              <p className="text-gray-300 leading-7 mb-6">
                {certificate.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">

                {certificate.skills.map((skill, i) => (

                  <span
                    key={i}
                    className="px-3 py-2 rounded-full text-sm bg-slate-900 text-blue-300 border border-slate-700"
                  >
                    {skill}
                  </span>

                ))}

              </div>

              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition"
              >
                <FaExternalLinkAlt />
                View Certificate
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certificates;