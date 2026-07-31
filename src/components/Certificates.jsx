import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {
  const certificates = [
    {
      title: "AI Internship Certificate",
      organization: "MCAI – Jamia Hamdard University",
      year: "2026",
      link: "/certificates/AI%20Internship%20Certificate.pdf",
    },
    {
      title: "Software Engineering Job Simulation",
      organization: "Forage",
      year: "2025",
      link: "/certificates/Software%20Engineering%20Job%20Simulation.pdf",
    },
    {
      title: "IBM Data Analysis with Python",
      organization: "IBM Skills Network",
      year: "2025",
      link: "/certificates/IBM%20Data%20Analysis%20with%20Python.pdf",
    },
    {
      title: "GenAI Data Analytics Job Simulation",
      organization: "Forage",
      year: "2025",
      link: "/certificates/GenAI%20Data%20Analytics%20Job%20Simulation.pdf",
    },
  ];

  return (
    <section
      id="certificates"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">
          Certificates
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Certifications and professional learning
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >

              <div className="flex items-center justify-between mb-5">
                <FaCertificate className="text-4xl text-blue-400" />

                <span className="text-sm text-gray-400">
                  {certificate.year}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">
                {certificate.title}
              </h3>

              <p className="text-blue-400 mb-5">
                {certificate.organization}
              </p>

              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
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