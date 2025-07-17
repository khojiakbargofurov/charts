import { motion } from 'framer-motion';
import { Download, MapPin, Coffee, Code } from 'lucide-react';

const About = () => {
  const skills = {
    frontend: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    tools: ['Git', 'VS Code', 'Figma', 'Webpack', 'Vite', 'Docker']
  };

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="section-padding bg-gray-800/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate frontend developer with a love for creating beautiful, functional web experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full blur-xl opacity-20"></div>
                <div className="relative w-full h-full bg-gray-700 rounded-full flex items-center justify-center border-4 border-accent-500/30">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={20} />
              <span>San Francisco, CA</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white">
              Frontend Developer & UI/UX Enthusiast
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate frontend developer with 3+ years of experience creating modern, 
              responsive web applications. I love turning complex problems into simple, beautiful 
              designs that provide excellent user experiences.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying a good cup of coffee while sketching out new ideas.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Coffee className="text-accent-400" size={20} />
              <span className="text-gray-300">Coffee enthusiast</span>
              <Code className="text-accent-400 ml-4" size={20} />
              <span className="text-gray-300">Clean code advocate</span>
            </div>

            <button className="btn-primary mt-6">
              <Download size={20} />
              Download Resume
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Skills & Technologies</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="card">
                <h4 className="text-xl font-semibold mb-4 capitalize gradient-text">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-accent-600 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;