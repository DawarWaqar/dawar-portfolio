import React from "react";
import Section from "./Section";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ExternalLink } from "lucide-react";

export default function Education({ data }) {
  return (
    <Section id="education">
      <div className="glass-card p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-8 h-8 text-teal-400" />
          <h2 className="text-3xl font-bold text-white">Education</h2>
        </div>
        <div className="space-y-6">
          {data.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800/60 p-6 rounded-lg border border-gray-700/50"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
                  {edu.logo && (
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className={`w-12 h-12 rounded-lg bg-white p-1 ${
                        edu.degree === "Master of Applied Computing"
                          ? "object-cover"
                          : "object-contain"
                      }`}
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-teal-400 hover:underline flex items-center gap-2"
                    >
                      {edu.school} <ExternalLink className="w-4 h-4" />
                    </a>
                    {edu.specialization && (
                      <p className="text-sm font-medium text-gray-400 mt-1">
                        Specialization: {edu.specialization}
                      </p>
                    )}
                    {edu.gpa && (
                      <p className="text-sm font-medium text-gray-400 mt-1">
                        GPA: {edu.gpa}
                      </p>
                    )}
                    {edu.courses && (
                      <div className="mt-3">
                        <p className="text-sm font-medium text-gray-400 mb-2">
                          Relevant Coursework:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <Badge
                              key={i}
                              className="text-xs bg-blue-900/50 text-blue-300 border-blue-700"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-400 md:text-right mt-4 md:mt-0">
                  <span className="font-medium whitespace-nowrap">
                    {edu.duration}
                  </span>
                  <span className="whitespace-nowrap">{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
