"use client";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  FileText,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vijaybhatia2023@gmail.com",
    href: "mailto:vijaybhatia2023@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8219167668",
    href: "tel:+918219167668",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: null,
  },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Vijaybhatia2208",
    color:
      "hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vijay-bhatia-031950216/",
    color:
      "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-400/10",
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    href: "https://x.com/VijayBh1196378",
    color:
      "hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-400/10",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            I&apos;m currently open to new opportunities. Whether you have a
            question, want to discuss a project, or just want to say hi — my
            inbox is always open!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            {contactInfo.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-400/10 rounded-lg">
                  <item.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 dark:text-gray-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-800 dark:text-gray-200">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-sm font-medium text-gray-400 dark:text-gray-500 mb-4">
                Connect with me
              </h4>
              <div className="flex gap-3">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Message Card */}
          <div className="p-6 bg-white dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Let&apos;s Work Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I&apos;m passionate about building scalable web solutions and
              always excited to take on new challenges. Let&apos;s create
              something amazing!
            </p>
            <a
              href="mailto:vijaybhatia2023@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-white dark:text-gray-900 font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              <Send size={18} />
              Send Email
            </a>
            <a
              href="/Vijay_Bhatia_Software_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 ml-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 transition-all duration-300 hover:scale-105"
            >
              <FileText size={18} />
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} Vijay Bhatia. Built with Next.js &
              Tailwind CSS.
            </p>
            <div className="flex gap-6 text-sm text-gray-400 dark:text-gray-500">
              <a
                href="#"
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
