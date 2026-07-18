import { useState } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Home", href: "/goldenwillows", icon: <FaHome /> },
  { label: "Project Highlights", href: "/golden_projecthighlights" },
  { label: "Location", href: "/golden_location" },
  { label: "Golden Willows Layout", href: "/goldenwillowslayout" },
  { label: "Project Details", href: "/projectdetails_golden" },
  // { label: "Project Details", href: "https://hiranandanigoldenwillows.com/project-detail.php" },
  { label: "Project Status", href: "/project_status_golden" },
  { label: "Gallery", href: "/gallery_golden" }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white text-2xl p-2 bg-black/50 rounded-lg"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navbar */}
      <div
        className={`
          fixed top-[11%] md:top-[11%] lg:top-[91%] xl:top-[93%] left-1/2 -translate-x-1/2 
    bg-black/50 z-40 rounded-2xl py-2 px-8 border-2 w-[85%] md:w-[55%] lg:w-auto
    flex justify-center items-center
    transition-all duration-300
    ${mobileOpen ? "block" : "hidden"} lg:flex
        `}
      >
        <nav className="flex justify-center items-center w-full">
          <ul className="flex flex-col lg:flex-row gap-3 md:gap-5 text-white justify-start items-start lg:justify-center lg:items-center w-full">
            {menuItems.map((item, index) => (
              <li key={index} className="w-full md:w-auto">
                <NavLink
                  to={item.href}
                  onClick={() => setMobileOpen(false)} // close mobile menu on click
                  className={({ isActive }) =>
                    `transition font-bold w-full text-left md:text-center ${
                      item.icon ? "text-3xl" : "text-sm"
                    } ${isActive
                      ? "text-[#e6a524] underline underline-offset-4"
                      : "text-white hover:text-yellow-300 hover:underline underline-offset-4"}`
                  }
                >
                  {item.icon ? item.icon : item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
