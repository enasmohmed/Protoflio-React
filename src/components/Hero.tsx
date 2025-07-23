import { Linkedin, Mail, Github } from 'lucide-react';
import avatar from '../assets/enhanced_avatar2.png';
import TypewriterText from './TypewriterText';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white min-h-screen flex items-center px-8"
    >
      {/* === Background Effects === */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        {/* Blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600 opacity-30 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 opacity-20 rounded-full filter blur-3xl animate-ping" />

        {/* Particles (Stars) */}
        <div className="absolute inset-0 bg-[url('/particles.svg')] opacity-10 animate-[backgroundScroll_60s_linear_infinite]" />
      </div>

      {/* === Main Content === */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto z-10 py-20 gap-10">

        {/* === Text Section === */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          {/* <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-pink-400">Enas Mohamed</span>
          </h1> */}
          <h2 className="text-2xl sm:text-3xl text-gray-300">
            <TypewriterText />
          </h2>
          <p className="text-gray-400 max-w-md">
            Frontend & Full-Stack Developer with passion for beautiful, responsive, and modern web experiences. I bring ideas to life with React, Tailwind, Django & more.
          </p>

          {/* === Buttons === */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <a
              href="/Enas-Mohamed-CV-Resume.pdf"
              download
              className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              📄 Download Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90 rounded-full transition text-white shadow-lg"
            >
              🚀 View Projects
            </a>
          </div>

          {/* === Socials === */}
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/enasmohmed" target="_blank" className="hover:text-pink-400">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/enas-mohamed-a56680174/" target="_blank" className="hover:text-pink-400">
              <Linkedin size={24} />
            </a>
            <a href="mailto:enasm2477@gmail.com" className="hover:text-pink-400">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* === Avatar Image === */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition duration-500" />
            <img
              src={avatar}
              alt="Enas Mohamed Avatar"
              className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-2xl relative z-10 transform group-hover:rotate-3 transition duration-500 ease-in-out"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
