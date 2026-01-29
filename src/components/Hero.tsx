"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-green-500/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      <div
        className="absolute inset-0 opacity-20 dark:opacity-20 hidden dark:block"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Greeting */}
          <p className="text-cyan-600 dark:text-cyan-400 text-lg md:text-xl font-medium mb-4 tracking-wide">
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
              Vijay Bhatia
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 font-light mb-8">
            <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 dark:from-cyan-400 dark:via-purple-400 dark:to-green-400 bg-clip-text text-transparent font-medium">
              Full Stack Developer
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Building scalable web solutions with{" "}
            <span className="text-cyan-600 dark:text-cyan-400">React</span>,{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Node.js
            </span>
            , and{" "}
            <span className="text-green-600 dark:text-green-400">Django</span>.
            2+ years of experience crafting performant applications in
            Healthcare Tech & SaaS.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-white dark:text-gray-900 font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Vijaybhatia2208"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vijay-bhatia-031950216/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/VijayBh1196378"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:vijaybhatia2023@gmail.com"
              className="p-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
