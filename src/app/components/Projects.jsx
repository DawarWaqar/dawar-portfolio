import React from "react";
import Section from "./Section";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, ExternalLink } from "lucide-react";

export default function Projects({ data }) {
  return (
    <Section id="projects">
      <div className="glass-card p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <FolderOpen className="w-8 h-8 text-teal-400" />
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/60 p-6 rounded-lg border border-gray-700/50 flex flex-col hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4 text-sm flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
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
                className="secondary-button mt-4 text-center py-2 text-sm font-semibold flex items-center justify-center gap-2"
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
