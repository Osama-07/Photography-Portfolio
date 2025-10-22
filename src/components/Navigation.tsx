import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = ({ hash }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "الرئيسية", path: "#home" },
    { name: "المعرض", path: "#gallery" },
    { name: "عن عبدالله", path: "#about" },
    { name: "تواصل", path: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-photo-dark/50 backdrop-blur-md shadow-lg z-50 w-full mx-auto transition-all duration-500 ${
        isScrolled
          ? "md:w-full lg:w-3/4 2xl:w-1/2 md:rounded-full md:mt-5 md:px-6"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold gradient-text transition-transform duration-200"
          >
            عبدالله بن عبدالعزيز
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`relative text-photo-light hover:text-gradient-end transition-colors duration-200 ${
                  hash === item.path ? "text-white" : ""
                }`}
              >
                {item.name}
                {hash === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-photo-gradient rounded-full transition-all"></div>
                )}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-photo-light hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 border-t border-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-photo-light hover:text-white transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-white gradient-text"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
