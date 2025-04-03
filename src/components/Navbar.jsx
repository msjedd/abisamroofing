import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full bg-gradient-to-r from-primary to-dark text-white p-4 shadow-lg backdrop-blur-md z-50 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a
          href="https://wa.me/2348145786032"
          target="_blank"
          rel="noopener noreferrer"
          className=" absolute top-2 right-2 text-accent text-3xl hover:text-secondary inline-flex justify-end items-center space-x-2 "
        >
          <span className="text-sm inline">+2348145786032</span>
          <FaWhatsapp className="size-6" />
        </a>

        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-xl font-bold">
            {/* Abisam Roofing */}
            <img className="size-12" src={logo} alt="Abisam Roofing Logo" />
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white mt-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 mt-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "border-b-2 border-accent" : ""}  px-4 py-2 hover:text-accent`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>

            {["About", "Services", "Products", "Water Collection"].map(
              (item, index) => (
                <li key={index}>
                  <NavLink
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className={({ isActive }) =>
                      `hover:text-accent  p-1 ${
                        isActive ? "border-b-2 border-accent" : ""
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
            <li>
              <NavLink
                to="/contact"
                className="bg-secondary rounded-3xl px-2 py-1 hover:text-dark"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* bg-gradient-to-bl from-dark to-primary */}

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden absolute w-2/4 right-0 top-16 h-screen-3/4 flex flex-col items-center bg-gradient-to-bl from-dark to-primary  mt-2 py-4 space-y-5 shadow-lg rounded-bl-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "border-b-2 border-accent" : ""}  px-4 py-2 hover:text-accent`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            {["About", "Services", "Products", "Water Collection"].map(
              (item, index) => (
                <li key={index}>
                  <NavLink
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className={({ isActive }) =>
                      `hover:text-accent  p-2 ${
                        isActive ? "border-b-2 border-accent" : ""
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
            <li>
              <NavLink
                to="/contact"
                className="bg-secondary rounded-3xl px-4 py-2 hover:text-dark"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
