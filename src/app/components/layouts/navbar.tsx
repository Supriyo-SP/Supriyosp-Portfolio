import { motion } from 'motion/react';
import { Home, Code2, Briefcase, Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/src/lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: Home, href: '#hero' },
    { name: 'Skills', icon: Code2, href: '#skills' },
    { name: 'Projects', icon: Briefcase, href: '#projects' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  const socialLinks = siteConfig.socialLinks.map((social) => ({
    ...social,
    icon:
      social.platform === 'github'
        ? Github
        : social.platform === 'linkedin'
          ? Linkedin
          : Instagram,
  }));

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-3 left-1/2 z-50 w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 rounded-[2rem] border transition-all duration-300 ${
        scrolled
          ? 'bg-white/12 backdrop-blur-3xl border-white/30 shadow-[0_12px_36px_rgba(2,6,23,0.55)]'
          : 'bg-white/10 backdrop-blur-2xl border-white/25 shadow-[0_10px_30px_rgba(2,6,23,0.45)]'
      }`}
    >
      <div className="px-3 md:px-6">
        <div className="relative flex items-center justify-center md:justify-between h-12 md:h-16">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            &lt;Supriyo /&gt;
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glassmorphic background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10 transition-opacity duration-300" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  
                  <div className="relative flex items-center gap-2">
                    <Icon size={18} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="relative w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Glassmorphic background */}
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10 transition-opacity duration-300" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  <Icon size={18} className="relative z-10" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-center gap-1 pb-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-2.5 py-1 rounded-full text-[11px] text-gray-300 hover:text-white transition-colors group flex items-center gap-1 border border-white/10 bg-white/5"
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <Icon size={12} className="relative z-10" />
                <span className="relative z-10 font-medium">{item.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
