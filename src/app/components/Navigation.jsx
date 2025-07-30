import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation({ name, activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = [
    "home",
    "experience",
    "skills",
    "education",
    "projects",
    "certificates",
    "interests",
    "contact",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="glass-card p-4 w-full">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-xl font-bold text-teal-400">DW</div>

          <div className="hidden md:flex gap-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link text-sm font-medium capitalize ${
                  activeSection === section ? "active" : ""
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-700 max-w-7xl mx-auto">
            <div className="flex flex-col gap-3">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={`nav-link text-sm font-medium capitalize text-left py-2 ${
                    activeSection === section ? "active" : ""
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
