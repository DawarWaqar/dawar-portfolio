import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SnakeGame from "./SnakeGame"; // Updated import from TicTacToeGame to SnakeGame
import {
  Github,
  Linkedin,
  MapPin,
  Briefcase,
  FolderOpen,
  FileText,
} from "lucide-react";

export default function Hero({ personal, titles, currentTitleIndex }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-20 px-4 relative section-glow"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {personal.name}
            </motion.h1>

            <div className="mb-4">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTitleIndex}
                  className="text-2xl md:text-3xl font-semibold text-teal-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {titles[currentTitleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
              {personal.tagline.split("|").map((item, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs md:text-sm bg-teal-900/50 text-teal-300 border-teal-700 px-3 py-1 whitespace-nowrap"
                >
                  {item.trim()}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 justify-center md:justify-start text-sm md:text-base">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-teal-400" />
                {personal.location}
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Briefcase className="w-4 h-4 text-teal-400" />
                {personal.stats.experience}
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FolderOpen className="w-4 h-4 text-teal-400" />
                {personal.stats.projects}
              </div>
            </div>

            {/* Displaying latest Education details */}
            {personal.education && personal.education.length > 0 && (
              <div className="flex items-center gap-2 mb-2 text-gray-400 justify-center md:justify-start text-sm md:text-base">
                <FileText className="w-4 h-4 text-teal-400" />
                <p>
                  {personal.education[0].degree} from{" "}
                  {personal.education[0].institution} (
                  {personal.education[0].years})
                </p>
              </div>
            )}

            {/* Displaying latest Work Experience details */}
            {personal.workExperience && personal.workExperience.length > 0 && (
              <div className="flex items-center gap-2 mb-6 text-gray-400 justify-center md:justify-start text-sm md:text-base">
                <Briefcase className="w-4 h-4 text-teal-400" />
                <p>
                  {personal.workExperience[0].title} at{" "}
                  {personal.workExperience[0].company} (
                  {personal.workExperience[0].years})
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button p-3"
              >
                <Linkedin className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button p-3"
              >
                <Github className="w-5 h-5 text-gray-300" />
              </a>
              {personal.medium && (
                <a
                  href={personal.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button p-3"
                  aria-label="Medium Profile"
                >
                  <svg
                    className="w-5 h-5 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="primary-button px-4 py-2 font-semibold text-white text-sm">
                    Play Snake First 😛
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-md mx-auto bg-gray-900 border border-gray-700">
                  <style jsx>{`
                    [data-radix-dialog-content] button[aria-label*="Close"] {
                      color: white !important;
                    }
                    .dialog-close-button {
                      color: white !important;
                    }
                  `}</style>
                  <SnakeGame />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center items-center">
            <div className="relative transform lg:translate-x-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur opacity-75"></div>
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 bg-gray-900">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
