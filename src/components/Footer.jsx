import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Adiba Khan
            </h3>

            <p className="text-sm mt-1">
              Software Development Engineer | Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-2xl">

            {/* GitHub */}
            <a
              href="https://github.com/adibakhan2324"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/adiba-khan-00b308339"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            {/* Email */}
            <a
              href="mailto:khanadiba263@gmail.com"
              className="hover:text-blue-400 hover:scale-125 transition duration-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

            {/* Back to Top */}
            <a
              href="#home"
              className="hover:text-blue-400 hover:scale-125 transition duration-300"
              title="Back to top"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </a>

          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Adiba Khan. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;