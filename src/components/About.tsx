import { Code, Server, Palette, GitBranch, Smartphone, Database, Wrench, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import TerminalCard from './SkillsMarquee';

// import myabout from '../assets/about.png'
const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Code size={24} />,
      items: [
        'React.js',
        'JavaScript (ES6+)',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Bootstrap 5',
        'Tailwind CSS',
        'SASS/SCSS',
        'jQuery',
        'AJAX',
        'DOM & BOM'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: 'Backend',
      icon: <Server size={24} />,
      items: [
        'Python',
        'Django',
        'Django REST Framework',
        'PostgreSQL',
        'SQLite',
        'ORM',
        'API Integration'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      category: 'Tools & Others',
      icon: <GitBranch size={24} />,
      items: [
        'Git & GitHub',
        'NPM',
        'Linux (Basics)',
        'Vercel',
        'PythonAnywhere',
        'Heroku',
        'Trello',
        'VS Code',
        'PyCharm',
        'Responsive Design',
        'Figma (Basics)',
        'Axios',
        'Form Handling',
        'React Router',
        'Authentication',
        'Postman'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ];


  return (
    <section id="about" className="py-20 bg-slate-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            About Me
          </motion.h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a Junior Full-Stack Developer passionate about building responsive, scalable apps using modern technologies like React, Django, and REST APIs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                My journey into web development began from a genuine curiosity about how things work on the web.
                Over time, this curiosity grew into a passion for crafting elegant and intuitive digital experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I specialize in <span className="font-semibold">React</span> on the frontend and <span className="font-semibold">Django</span> on the backend, 
                and I’m constantly learning new technologies to level up my skills and deliver meaningful solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beyond coding, I value collaboration, creativity, and solving real-world problems through technology.
              </p>
            </div>

            {/* <div className="flex flex-wrap gap-3 hover:scale-105 transition-transform duration-200">
              {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail-Oriented'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div> */}
            <TerminalCard />
          </div>

          {/* Right Skills Section */}
          <div className="grid gap-6">
            {skills.map((skillCategory) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-6 bg-white rounded-xl hover:shadow-lg border border-gray-100 transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skillCategory.color} text-white mr-4`}>
                    {skillCategory.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{skillCategory.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-50 text-gray-800 rounded-lg text-sm border border-gray-200 hover:border-gray-300 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;