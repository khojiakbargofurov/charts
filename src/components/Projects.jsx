import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application built with React and Firebase. Real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'react',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics using OpenWeather API.',
      image: '🌤️',
      tags: ['JavaScript', 'API', 'CSS3', 'Charts.js'],
      category: 'vanilla',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, animations, and optimized performance.',
      image: '💼',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'nextjs',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example',
      featured: true
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization, engagement metrics, and content scheduling.',
      image: '📊',
      tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      category: 'react',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example',
      featured: false
    },
    {
      id: 6,
      title: 'Expense Tracker',
      description: 'Personal finance management app with expense tracking, budget planning, and financial insights using Chart.js for data visualization.',
      image: '💰',
      tags: ['JavaScript', 'Chart.js', 'LocalStorage'],
      category: 'vanilla',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'react', label: 'React' },
    { key: 'nextjs', label: 'Next.js' },
    { key: 'vanilla', label: 'Vanilla JS' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-accent-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card group hover:scale-105 transition-transform duration-300 ${
                project.featured ? 'ring-2 ring-accent-500/30' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-accent-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}

              <div className="text-6xl mb-4 text-center">
                {project.image}
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors text-sm"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No projects found for this filter.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;