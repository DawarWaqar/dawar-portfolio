import React from "react";
import Section from "./Section";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, ExternalLink } from "lucide-react";

export default function Projects({ data }) {
  return (
    <Section id="projects">
      <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <FolderOpen className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Featured Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {data.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/80 p-4 sm:p-6 rounded-lg border border-gray-600/50 flex flex-col hover:transform hover:-translate-y-2 hover:bg-gray-800/90 transition-all duration-300"
            >
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto mb-4">
                {project.tech.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-xs bg-teal-900/50 text-teal-300 border-teal-700"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button text-center py-2 px-4 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-700/70"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
