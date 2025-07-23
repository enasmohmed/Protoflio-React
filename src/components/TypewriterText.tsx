import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function TypewriterText() {
  const roles = [
    'Full-Stack Developer',
    'Django Developer',
    'React Developer',
    'Modern Design',
    'Scalable Apps',
  ];


  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const current = roles[loopIndex % roles.length];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      setText(prev =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopIndex(prev => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex]);

  return (
    <div className="text-center space-y-4">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Enas Mohamed 
      </motion.h1>

      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {text}
        <span className="animate-pulse">|</span>
      </motion.h2>
    </div>
  );
}

export default TypewriterText;
