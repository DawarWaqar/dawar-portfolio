import React from "react";
import Section from "./Section";
import { Heart } from "lucide-react";

export default function Interests({ data }) {
  return (
    <Section id="interests">
      <div className="glass-card p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-teal-400" />
          <h2 className="text-3xl font-bold text-white">Other Interests</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <div
                key={index}
                className="text-center flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="w-10 h-10 text-teal-400" />
                </div>
                <p className="text-lg font-semibold text-gray-300">
                  {interest.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
