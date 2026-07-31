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
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-700 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition"
          onClick={() => setMenuOpen(false)}
        >
          Adiba Khan
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-gray-300 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white text-2xl"
          aria-label="Open menu"
        >
          <FaBars />
        </button>

        {/* Mobile Side Menu */}
        {menuOpen && (
          <>
            {/* Dark Overlay */}
            <div
              className="fixed inset-0 bg-black/60"
              onClick={() => setMenuOpen(false)}
            ></div>

            {/* Side Menu */}
            <div className="fixed top-0 right-0 h-screen w-72 bg-slate-900 shadow-2xl p-6 animate-slideIn">

              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-2xl hover:text-blue-400 transition"
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Mobile Links */}
              <ul className="flex flex-col gap-6 text-gray-300 text-lg">

                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block hover:text-blue-400 transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}

              </ul>

            </div>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar;