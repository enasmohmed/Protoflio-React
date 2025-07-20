import { useEffect, useState } from 'react';

const terminalLines = [
  '$ whoami',
  '\u200B',
  '→ Enas - Junior Full-Stack Developer',
  '$ timeline --milestones',
  '→ 2025: Completed Front-End Diploma',
  '→ 2025: Built a full e-commerce store using React',
  '→ 2025: Currently developing a full-stack store with React & Django',
  '\u200B',
  '$ skills --tech',
  '→ React, Django, Tailwind, TypeScript',
  '\u200B',
  '$ tools --daily',
  '→ VSCode, GitHub, Postman, Vercel',
  '\u200B',
  '$ passion',
  '→ Clean Code, UI/UX, Problem Solving, Continuous Learning 🚀',
];

export default function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < terminalLines.length) {
        setVisibleLines((prev) => [...prev, terminalLines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-green-400 font-mono text-sm p-4 rounded-xl shadow-lg animate-terminal-glow">
      {visibleLines.map((line, index) => (
        <p key={index} className="mb-1 whitespace-pre">
          {line}
        </p>
      ))}

      <style jsx>{`
        @keyframes terminal-glow {
          0%, 100% {
            box-shadow: 0 0 5px #22c55e, 0 0 10px #22c55e66, 0 0 15px #22c55e33;
          }
          50% {
            box-shadow: 0 0 8px #22c55e, 0 0 16px #22c55e66, 0 0 24px #22c55e33;
          }
        }

        .animate-terminal-glow {
          animation: terminal-glow 2.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
