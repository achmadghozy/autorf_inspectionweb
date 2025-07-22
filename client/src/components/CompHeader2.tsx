import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { pageRouteInfo, GetMenuPageString } from "../App";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

interface header2Props {
  headerClick: (id: number) => void;
}

const CompHeader2: React.FC<header2Props> = ({ headerClick }) => {
  const menu = GetMenuPageString();
  const navigate = useNavigate();
  const location = useLocation();

  const activeRoute = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-md"
      style={{ borderColor: "#0a2540" }}
    >
      <div className="max-w-screen-xl h-[90px] mx-auto flex items-center justify-between px-4 py-4 md:py-0">
        {/* Logo */}
        <div className="w-36 flex items-center">
          <img
            src="/name+logo.png"
            alt="Logo"
            className="h-full object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          {menu.map((item) => (
            <div
              key={item.pageRoute}
              className={`cursor-pointer font-semibold text-[#0a2540] hover:text-teal-700 transition-colors duration-200 ${
                activeRoute === pageRouteInfo[item.pageRoute].route
                  ? "underline decoration-blue-100 decoration-4"
                  : ""
              }`}
              onClick={() => {
                setMobileMenuOpen(false);
                navigate(pageRouteInfo[item.pageRoute].route);
              }}
            >
              {item.label}
            </div>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden p-2 rounded focus:outline-none bg-white shadow-md focus:ring-2 focus:ring-teal-400 transition-transform duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <IoClose className="w-8 h-8 text-teal-700" />
          ) : (
            <GiHamburgerMenu className="w-8 h-8 text-teal-700" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white border-t border-[#0a2540] shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-3">
          {menu.map((item) => (
            <div
              key={item.pageRoute}
              className={`w-full text-center py-2 cursor-pointer font-semibold text-[#0a2540] hover:text-teal-500 transition-colors duration-200 ${
                activeRoute === pageRouteInfo[item.pageRoute].route
                  ? "bg-teal-50"
                  : ""
              }`}
              onClick={() => {
                setMobileMenuOpen(false);
                navigate(pageRouteInfo[item.pageRoute].route);
              }}
            >
              {item.label}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default CompHeader2;
