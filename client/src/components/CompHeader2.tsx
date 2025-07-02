import { useState } from "react";

interface header2Props {
  headerClick: (id: number) => void;
}

const CompHeader2: React.FC<header2Props> = ({ headerClick }) => {
  const menu = [
    { id: 1, name: "Home" },
    { id: 2, name: "Blogs" },
    { id: 3, name: "Contacts" },
  ];

  const [ActiveMenu, setActiveMenu] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (menuid: number) => {
    setActiveMenu(menuid);
    headerClick(menuid);
    setMobileMenuOpen(false);
  };

  return (
    <div
      className="flex items-center fixed w-full justify-between border-b-[1px] bg-white z-50 shadow-md"
      style={{ borderColor: "#0a2540" }}
    >
      {/* Logo */}
      <div className="w-[200px] h-[90px] flex items-center justify-center bg-white">
        <img src="/name+logo.png" className="p-7" alt="Logo" />
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-14 pr-[20px]">
        {menu.map((item) => (
          <div
            key={item.id}
            className={`relative cursor-pointer font-semibold text-[#0a2540] hover:text-teal-700 transition-colors duration-200 ${
              ActiveMenu === item.id
                ? "underline decoration-blue-100 decoration-4"
                : ""
            }`}
            onClick={() => handleClick(item.id)}
          >
            <h2 className="flex items-center text-lg">{item.name}</h2>
          </div>
        ))}
      </div>
      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#0a2540"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[90px] left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center py-4 animate-fade-in border-t border-[#0a2540]">
          {menu.map((item) => (
            <div
              key={item.id}
              className={`w-full text-center py-3 cursor-pointer font-semibold text-[#0a2540] hover:text-teal-500 transition-colors duration-200 ${
                ActiveMenu === item.id ? "bg-teal-50" : ""
              }`}
              onClick={() => handleClick(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompHeader2;
