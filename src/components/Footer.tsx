import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/enasmohmed?tab=repositories',
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/enas-mohamed-a56680174/',
      icon: <Linkedin size={20} />
    },
    {
      name: 'Email',
      href: 'mailto:enasm2477@gmail.com',
      icon: <Mail size={20} />
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-8 p-8 text-center">
        <p className="text-gray-400 flex flex-wrap items-center justify-center gap-2 text-sm md:text-base">
          <span>© {currentYear} Enas Mohamed.</span>
          <span className="flex items-center gap-1">
            Built with
            <Heart className="text-red-600 animate-pulse fill-current stroke-none" size={20} />
            using React, TypeScript & TailwindCSS
          </span>
        </p>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-3 rounded-full bg-[#302b63] hover:bg-[#463e89] text-white shadow-lg transition"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
