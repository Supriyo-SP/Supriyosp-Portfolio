import { motion } from 'motion/react';
import { BookOpen, ExternalLink, FileText, Github,Globe, Link } from 'lucide-react';

const projects = [
  {
    title: 'IIE Kalyani Official Website',
    description: 'Engineered the official college website using Next.js with Strapi CMS integration, enabling administrators to manage and update dynamic content efficiently.',
    icon: Globe,
    tags: ['Next.js', 'Strapi CMS', 'React', 'Node.js'],
    gradient: 'from-cyan-500 to-blue-600',
    liveUrl: 'https://iiekalyani.vercel.app',
    githubUrl: 'https://github.com/iietechclub/IIE-Kalyani-frontend',
  },
  {
    title: 'Iphigenia-11.0',
    description: 'Website of the college annual Techno-Cultural event, a fully responsive website.',
    icon: FileText,
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-green-500 to-emerald-600',
    liveUrl: 'https://iphigenia11.vercel.app',
    githubUrl: 'https://github.com/Supriyo-SP/IPHIGENIA_11',
  },
  {
    title: 'BlogHub Publishing Platform',
    description: 'Built a responsive blog publishing platform with efficient backend handling and smooth content delivery.',
    icon: FileText,
    tags: ['Node.js', 'Express', 'REST API'],
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Robust URL Shortener',
    description: 'Designed a high-performance URL shortening service using Spring Boot and MySQL with reliable database persistence and fast redirection logic.',
    icon: Link,
    tags: ['Java', 'Spring Boot', 'REST API'],
    gradient: 'from-orange-500 to-red-600',
    githubUrl: 'https://github.com/Supriyo-SP/url-shortener-Spring-boot',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Ultra-compact grid layout */}
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Minimal Card */}
                <div className="relative rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 p-3 md:p-4 group-hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                      <Icon size={20} className="text-white md:w-6 md:h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-base md:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                        {/* Action buttons */}
                        <div className="flex gap-1.5 flex-shrink-0">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`Open live project for ${project.title}`}
                              className="p-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-400/30 transition-colors"
                            >
                              <ExternalLink size={14} className="text-cyan-400" />
                            </a>
                          )}
                          {project.githubUrl && project.githubUrl !== '#' && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`Open GitHub repository for ${project.title}`}
                              className="p-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                              <Github size={14} className="text-gray-400" />
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2 mb-2">
                        {project.description}
                      </p>

                      {/* Tags - minimal */}
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.5 text-[10px] md:text-[11px] font-medium rounded bg-white/5 text-cyan-400/90 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}