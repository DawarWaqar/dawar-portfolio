import React from "react";
import Section from "./Section";
import { Linkedin } from "lucide-react";

export default function Contact({ personal }) {
  return (
    <Section id="contact">
      <div className="glass-card p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-white">Get In Touch 😀</h2>
        <p className="text-lg text-gray-400 my-6 max-w-xl mx-auto">
          I'm currently open to new opportunities and collaborations. Feel free
          to reach out!
        </p>
        <div className="flex flex-col items-center gap-4 mb-6">
          <p className="text-gray-300">
            📧{" "}
            <span className="text-teal-400 font-semibold">
              {personal.email}
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button flex items-center gap-3 px-6 py-3 font-semibold"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
