import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];


  return (

    <nav className="
      fixed top-0 left-0 w-full z-50
      bg-slate-950/80
      backdrop-blur-xl
      border-b border-slate-700
    ">

      <div className="
        max-w-7xl mx-auto
        px-6 py-4
        flex items-center justify-between
      ">


        {/* Logo */}

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="
          text-2xl
          font-bold
          text-blue-400
          hover:text-blue-300
          transition
          tracking-wide
          "
        >
          Adiba Khan
        </a>



        {/* Desktop Menu */}

        <ul className="
          hidden md:flex
          items-center
          gap-7
        ">

          {links.map((link)=>(

            <li key={link.name}>

              <a
                href={link.href}
                className="
                text-gray-300
                font-medium
                relative
                group
                hover:text-blue-400
                transition
                "
              >

                {link.name}


                <span
                  className="
                  absolute
                  left-0
                  -bottom-2
                  w-0
                  h-0.5
                  bg-blue-400
                  group-hover:w-full
                  transition-all
                  duration-300
                  "
                ></span>


              </a>

            </li>

          ))}


        </ul>



        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(true)}
          className="
          md:hidden
          text-white
          text-2xl
          hover:text-blue-400
          transition
          "
        >
          <FaBars />

        </button>



      </div>



      {/* Mobile Sidebar */}

      {menuOpen && (

        <div className="md:hidden">


          {/* Overlay */}

          <div
            onClick={() => setMenuOpen(false)}
            className="
            fixed inset-0
            bg-black/60
            backdrop-blur-sm
            "
          />



          {/* Sidebar */}

          <div className="
            fixed
            right-0
            top-0
            h-screen
            w-72
            bg-slate-950
            border-l
            border-slate-700
            shadow-2xl
            p-6
          ">


            {/* Close */}

            <div className="
              flex
              justify-end
              mb-10
            ">

              <button
                onClick={() => setMenuOpen(false)}
                className="
                text-white
                text-2xl
                hover:text-blue-400
                transition
                "
              >

                <FaTimes />

              </button>

            </div>



            {/* Mobile Links */}

            <ul className="
              flex
              flex-col
              gap-6
            ">


              {links.map((link)=>(

                <li key={link.name}>

                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                    text-gray-300
                    text-lg
                    font-medium
                    hover:text-blue-400
                    transition
                    "
                  >

                    {link.name}

                  </a>

                </li>

              ))}


            </ul>


          </div>


        </div>

      )}


    </nav>

  );
}


export default Navbar;