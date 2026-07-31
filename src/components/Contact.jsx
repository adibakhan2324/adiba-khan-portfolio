import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-800 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mb-12">
          I'm open to internship and software development opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition duration-300">

            <h3 className="text-2xl font-bold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-7 mb-8">
              I'm always interested in connecting with recruiters,
              developers, and professionals about software development,
              AI, and internship opportunities.
            </p>

            <div className="space-y-6">

              {/* Email */}
              <a
                href="mailto:khanadiba263@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition"
              >
                <FaEnvelope className="text-2xl text-blue-400" />

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p>
                    khanadiba263@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/adiba-khan-00b308339"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition"
              >
                <FaLinkedin className="text-2xl text-blue-400" />

                <div>
                  <p className="text-sm text-gray-500">
                    LinkedIn
                  </p>

                  <p>
                    Adiba Khan
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/adibakhan2324"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition"
              >
                <FaGithub className="text-2xl text-blue-400" />

                <div>
                  <p className="text-sm text-gray-500">
                    GitHub
                  </p>

                  <p>
                    adibakhan2324
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 text-gray-300">
                <FaMapMarkerAlt className="text-2xl text-blue-400" />

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <p>
                    Noida, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form
            action="mailto:khanadiba263@gmail.com"
            method="POST"
            encType="text/plain"
            className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition duration-300"
          >

            <h3 className="text-2xl font-bold mb-6">
              Send Me a Message
            </h3>

            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="w-full mb-4 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 transition"
            />

            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="w-full mb-4 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 transition"
            />

            <textarea
              name="Message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full mb-4 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold transition duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;