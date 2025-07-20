import React, { useEffect, useState } from 'react';

function TypewriterText() {
  const texts = [
    'Junior React & Django Developer',
    'Frontend & Backend Developer',
  ];

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0); // بتتحكم في الجملة الحالية

  useEffect(() => {
    const currentText = texts[loopIndex % texts.length];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      setText(prev =>
        isDeleting
          ? currentText.substring(0, prev.length - 1)
          : currentText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopIndex(prev => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex]);

  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
}

export default TypewriterText;
