import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";


function Footer() {

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];


  return (

    <footer className="
      bg-slate-950
      text-gray-400
      border-t
      border-slate-800
      py-12
      px-6
    ">


      <div className="
        max-w-7xl
        mx-auto
      ">


        <div className="
          grid
          md:grid-cols-3
          gap-10
          items-center
        ">


          {/* Profile */}

          <div className="text-center md:text-left">

            <h3 className="
              text-2xl
              font-bold
              text-white
            ">
              Adiba Khan
            </h3>


            <p className="
              mt-2
              text-gray-400
            ">
              Software Development Engineer
            </p>


            <p className="
              text-sm
              text-gray-500
              mt-1
            ">
              Full Stack Developer | AI Enthusiast
            </p>


          </div>



          {/* Navigation */}

          <div className="text-center">


            <h4 className="
              text-white
              font-semibold
              mb-4
            ">
              Quick Links
            </h4>


            <div className="
              flex
              flex-wrap
              justify-center
              gap-5
            ">


              {footerLinks.map((link)=>(

                <a
                  key={link.name}
                  href={link.href}
                  className="
                    hover:text-blue-400
                    transition
                    text-sm
                  "
                >

                  {link.name}

                </a>

              ))}


            </div>


          </div>




          {/* Social */}

          <div className="flex justify-center md:justify-end gap-4">


            <a
              href="https://github.com/adibakhan2324"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-11
              h-11
              flex
              items-center
              justify-center
              rounded-full
              bg-slate-800
              text-xl
              hover:bg-blue-600
              hover:text-white
              hover:-translate-y-1
              transition
              "
            >

              <FaGithub />

            </a>



            <a
              href="https://www.linkedin.com/in/adiba-khan-00b308339"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-11
              h-11
              flex
              items-center
              justify-center
              rounded-full
              bg-slate-800
              text-xl
              hover:bg-blue-600
              hover:text-white
              hover:-translate-y-1
              transition
              "
            >

              <FaLinkedin />

            </a>




            <a
              href="mailto:khanadiba263@gmail.com"
              className="
              w-11
              h-11
              flex
              items-center
              justify-center
              rounded-full
              bg-slate-800
              text-xl
              hover:bg-blue-600
              hover:text-white
              hover:-translate-y-1
              transition
              "
            >

              <FaEnvelope />

            </a>


          </div>


        </div>




        {/* Bottom */}

        <div className="
          border-t
          border-slate-800
          mt-10
          pt-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          text-sm
        ">


          <p>
            © {new Date().getFullYear()} Adiba Khan. All rights reserved.
          </p>



          <a
            href="#home"
            className="
            flex
            items-center
            gap-2
            bg-blue-600
            text-white
            px-4
            py-2
            rounded-full
            hover:bg-blue-700
            transition
            "
          >

            <FaArrowUp />

            Top

          </a>


        </div>


      </div>


    </footer>

  );
}


export default Footer;