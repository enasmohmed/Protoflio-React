import { ArrowDown, Linkedin, Mail , Github, Code } from 'lucide-react';
import heroBG from '../assets/heroBG.jpg'
import TypewriterText from './TypewriterText';
import { motion } from 'framer-motion';



const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={{ backgroundImage: `url(${heroBG})` }} className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="flex justify-center">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-white/10 border-4 border-white shadow-lg">
              <Code size={48} className="text-white" />
            </div>
          </div>

          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-xl sm:text-2xl">I’m Enas Mohamed 👋</h1>
            </motion.div>


            <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-[0_0_10px_#ffffff88]">
              <TypewriterText />
            </h2>

          </div>


          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/Enas-Mohamed-CV-Resume.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:gap-4"
          >
            📄 Download Resume
          </a>


          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/enasmohmed?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 group"
            >
              <Github size={24} className="text-gray-700 group-hover:text-gray-900" />
            </a>
            <a
              href="https://www.linkedin.com/in/enas-mohamed-a56680174/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 group"
            >
              <Linkedin size={24} className="text-gray-700 group-hover:text-gray-900" />
            </a>
            <a
              href="mailto:enasm2477@gmail.com"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 group"
            >
              <Mail size={24} className="text-gray-700 group-hover:text-gray-900" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-3 rounded-full bg-gradient-to-r from-white/70 to-white/40 backdrop-blur-sm hover:bg-white transition"
          >
            <ArrowDown size={24} className="text-gray-700" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;