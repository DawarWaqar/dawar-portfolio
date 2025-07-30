import React from "react";
import Section from "./Section";
import { Award, ExternalLink } from "lucide-react";

export default function Certificates({ data }) {
  return (
    <Section id="certificates">
      <div className="glass-card p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-8 h-8 text-teal-400" />
          <h2 className="text-3xl font-bold text-white">
            Certificates & Awards
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {data.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 p-4 rounded-lg flex items-center gap-3 hover:bg-gray-700/70 transition-colors"
            >
              <Award className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <span className="text-gray-300 font-medium flex-1">
                {cert.name}
              </span>
              <ExternalLink className="w-4 h-4 text-gray-500" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
