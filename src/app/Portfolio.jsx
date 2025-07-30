import React, { useState, useEffect } from "react";
import { portfolioData } from "../components/portfolio/portfolioData.js";

import Navigation from "../components/portfolio/Navigation";
import Hero from "../components/portfolio/Hero";
import Experience from "../components/portfolio/Experience";
import Skills from "../components/portfolio/Skills";
import Education from "../components/portfolio/Education";
import Projects from "../components/portfolio/Projects";
import Certificates from "../components/portfolio/Certificates";
import Interests from "../components/portfolio/Interests";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

export default function Portfolio() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex(
        (prev) => (prev + 1) % portfolioData.personal.titles.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [portfolioData.personal.titles.length]);

  useEffect(() => {
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen text-gray-300"
      style={{
        background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <style jsx global>{`
        .glass-card {
          background: rgba(31, 41, 55, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        .primary-button {
          background: #14b8a6;
          color: white;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(20, 184, 166, 0.2);
        }
        .primary-button:hover {
          background: #0d9488;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(20, 184, 166, 0.3);
        }
        .secondary-button {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .secondary-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
          color: #d1d5db;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #14b8a6;
          transition: width 0.3s ease;
        }
        .nav-link:hover,
        .nav-link.active {
          color: #ffffff;
        }
        .nav-link.active::after {
          width: 100%;
        }
        .section-glow::before {
          content: "";
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(20, 184, 166, 0.1),
            transparent 70%
          );
          filter: blur(80px);
          pointer-events: none;
          z-index: -1;
        }
      `}</style>

      <Navigation
        name={portfolioData.personal.name}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main>
        <Hero
          personal={portfolioData.personal}
          titles={portfolioData.personal.titles}
          currentTitleIndex={currentTitleIndex}
        />
        <Experience data={portfolioData.experience} />
        <Skills data={portfolioData.skills} />
        <Education data={portfolioData.education} />
        <Projects data={portfolioData.projects} />
        <Certificates data={portfolioData.certificates} />
        <Interests data={portfolioData.interests} />
        <Contact personal={portfolioData.personal} />
      </main>

      <Footer name={portfolioData.personal.name} />
    </div>
  );
}
