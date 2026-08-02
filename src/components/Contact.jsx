import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-slate-900 text-white py-24 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-5xl font-bold text-center text-blue-400 mb-4">
          Let's Connect
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 leading-8">
          I'm currently looking for Software Development Engineer
          internships and full-time opportunities. Feel free to reach
          out if you'd like to discuss a project, collaboration or
          career opportunity.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Card */}

          <div className="bg-slate-800/70 backdrop-blur-lg rounded-3xl p-10 border border-slate-700 hover:border-blue-500 transition-all duration-500">

            <h3 className="text-3xl font-bold text-blue-400 mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-2xl">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <a
                    href="mailto:khanadiba263@gmail.com"
                    className="hover:text-blue-400 transition"
                  >
                    khanadiba263@gmail.com
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-2xl">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <p className="text-gray-400 text-sm">
                    Location
                  </p>

                  <p>
                    New Delhi, India
                  </p>

                </div>

              </div>

            </div>

            {/* Social Buttons */}

            <div className="flex gap-5 mt-12">

              <a
                href="https://github.com/adibakhan2324"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition hover:scale-105"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/adiba-khan-00b308339"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-xl transition hover:scale-105"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </div>

          {/* Google Map */}

          <div className="rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-500">

            <iframe
              title="New Delhi"
              src="https://www.google.com/maps?q=New+Delhi,+India&output=embed"
              width="100%"
              height="100%"
              className="min-h-[500px]"
              loading="lazy"
            ></iframe>

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 text-center">

          <h3 className="text-3xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h3>

          <p className="text-gray-400 mb-8">
            Let's connect and discuss opportunities, innovative ideas,
            or exciting software projects.
          </p>

       <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=khanadiba263@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition hover:scale-105"
>
  <FaPaperPlane />
  Send Email
</a> 

        </div>

      </div>
    </motion.section>
  );
}

export default Contact;