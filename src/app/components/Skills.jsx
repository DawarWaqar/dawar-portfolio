import React from "react";
import Section from "./Section";
import { Code2 } from "lucide-react";

export default function Skills({ data }) {
  return (
    <Section id="skills">
      <div className="glass-card p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <Code2 className="w-8 h-8 text-teal-400" />
          <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(data).map(([key, skill]) => {
            const IconComponent = skill.icon;
            const skillName =
              key === "cloudDevOps"
                ? "Cloud & DevOps"
                : key === "aiMl"
                ? "AI & ML"
                : key === "languages"
                ? "Programming Languages"
                : key.charAt(0).toUpperCase() + key.slice(1);
            return (
              <div key={key} className="text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mb-3">
                    <IconComponent className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {skillName}
                  </h3>
                </div>
                <div className="text-gray-300 text-sm">
                  <p>{skill.items.join(", ")}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
