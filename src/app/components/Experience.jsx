import React from "react";
import Section from "./Section";
import { Briefcase, ExternalLink } from "lucide-react";

export default function Experience({ data }) {
  return (
    <Section id="experience">
      <div className="glass-card p-6 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-8 h-8 text-teal-400" />
          <h2 className="text-3xl font-bold text-white">
            Professional Experience
          </h2>
        </div>
        <div className="space-y-8">
          {data.map((exp, index) => (
            <div key={index} className="relative">
              <div className="hidden md:block absolute w-3 h-3 bg-teal-400 rounded-full -left-1.5 top-16 border-2 border-gray-800"></div>

              <div className="md:pl-8 md:border-l-2 md:border-gray-700">
                <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700/50">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1">
                      {exp.logo && (
                        <div className="flex-shrink-0 self-start">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-12 h-12 rounded-lg object-contain bg-white p-1"
                          />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                          {exp.position}
                        </h3>

                        <div className="space-y-1 mb-2">
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base md:text-lg font-semibold text-teal-400 hover:underline inline-flex items-center gap-2 flex-wrap"
                          >
                            {exp.company}
                            <ExternalLink className="w-4 h-4 flex-shrink-0" />
                          </a>

                          {exp.company2 && (
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                              <span className="text-base md:text-lg font-semibold text-teal-400">
                                {exp.company2}
                              </span>
                              {exp.company2Description && (
                                <span className="text-xs font-normal text-gray-400">
                                  {exp.company2Description}
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {exp.team && (
                          <p className="text-sm text-gray-400 italic mb-3">
                            {exp.team}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-400 md:text-right">
                      <span className="font-medium whitespace-nowrap">
                        {exp.duration}
                      </span>
                      <span className="whitespace-nowrap">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
