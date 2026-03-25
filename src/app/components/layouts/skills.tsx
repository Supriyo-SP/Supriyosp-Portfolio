import { motion } from 'motion/react';
import { Code2, Server, Wrench } from 'lucide-react';
import { useRef, useState } from 'react';

const frontendSkills = ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML/CSS'];
const backendSkills = ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'];
const toolsSkills = ['Git', 'Docker', 'VS Code', 'Figma', 'Postman'];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0); // 0: Frontend, 1: Backend, 2: Tools
  
  // Rotation values based on stage - removed scale for tools
  const rotateY = stage === 0 ? 0 : stage === 1 ? 180 : 0;
  const frontendOpacity = stage === 0 ? 1 : 0;
  const backendOpacity = stage === 1 ? 1 : 0;
  const toolsOpacity = stage === 2 ? 1 : 0;

  const handleNext = () => {
    if (stage < 2) setStage(stage + 1);
  };

  const handlePrev = () => {
    if (stage > 0) setStage(stage - 1);
  };
   // Skill logos for mobile view
  const getSkillLogo = (skill: string) => {
    switch (skill) {
      case 'React':
        return (
          <svg className="w-8 h-8" viewBox="-11.5 -10.23174 23 20.46348" fill="#61DAFB">
            <circle cx="0" cy="0" r="2.05" />
            <g stroke="#61DAFB" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        );
      case 'TypeScript':
        return (
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">TS</span>
          </div>
        );
      case 'Tailwind CSS':
        return (
          <svg className="w-8 h-8" viewBox="0 0 54 33" fill="#38bdf8">
            <path d="M13.5 10.5c3-6 7.5-9 13.5-9 9 0 11.25 6.75 16.5 7.875 3.5.75 6.75-.375 9.75-3.375-3 6-7.5 9-13.5 9-9 0-11.25-6.75-16.5-7.875-3.5-.75-6.75.375-9.75 3.375zM0 22.5c3-6 7.5-9 13.5-9 9 0 11.25 6.75 16.5 7.875 3.5.75 6.75-.375 9.75-3.375-3 6-7.5 9-13.5 9-9 0-11.25-6.75-16.5-7.875-3.5-.75-6.75.375-9.75 3.375z"/>
          </svg>
        );
      case 'Next.js':
        return <span className="text-white font-bold text-2xl">N</span>;
      case 'HTML/CSS':
        return (
          <div className="text-center">
            <span className="text-orange-400 font-bold text-sm block">HTML</span>
            <span className="text-blue-400 font-bold text-sm block">CSS</span>
          </div>
        );
      case 'Node.js':
        return <span className="text-green-400 font-bold text-xl">Node</span>;
      case 'Express':
        return <span className="text-gray-300 font-bold text-xl">Ex</span>;
      case 'MongoDB':
        return <span className="text-green-500 font-bold text-xl">M</span>;
      case 'PostgreSQL':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#4169E1">
            <path d="M17.128 0c-.316 0-.614.062-.844.228-.348.25-.528.606-.528 1.11v1.734c0 .36.06.65.168.87.12.24.288.408.492.516.216.12.456.168.72.168.288 0 .54-.072.756-.204.228-.144.396-.336.516-.588.12-.252.18-.54.18-.864V1.338c0-.504-.18-.86-.528-1.11C17.742.062 17.444 0 17.128 0zm-10.26.012c-.313 0-.61.062-.84.228-.35.25-.53.606-.53 1.11v1.734c0 .36.062.65.17.87.12.24.286.408.49.516.218.12.458.168.722.168.288 0 .54-.072.756-.204.228-.144.396-.336.516-.588.12-.252.18-.54.18-.864V1.35c0-.504-.18-.86-.528-1.11C7.48.074 7.18.012 6.868.012z"/>
          </svg>
        );
      case 'REST APIs':
        return <span className="text-purple-400 font-bold text-lg">API</span>;
      case 'Git':
        return (
          <svg className="w-8 h-8" viewBox="0 0 92 92" fill="#F05032">
            <path d="M90.156 41.965L50.036 1.848a5.913 5.913 0 0 0-8.368 0l-8.332 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.043 7.043 0 0 1 1.673 7.277l10.183 10.184a7.026 7.026 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.045 7.045 0 0 1-9.961 0 7.038 7.038 0 0 1-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.06 7.06 0 0 1 2.304-1.539V33.926a7.049 7.049 0 0 1-3.82-9.234L29.242 14.272 1.73 41.777a5.925 5.925 0 0 0 0 8.371L41.852 90.27a5.925 5.925 0 0 0 8.371 0l39.933-39.934a5.925 5.925 0 0 0 0-8.371"/>
          </svg>
        );
      case 'Docker':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#2496ED">
            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.09-.721-1.797-2.111-2.73-2.111-2.73l-.437-.268-.284.422s-.681.857-.838 2.032c-.13.945.123 1.862.71 2.676-.446.267-.904.425-1.363.508a18.977 18.977 0 01-1.46.104H.5a.5.5 0 00-.5.5c.035 1.085.174 2.168.506 3.21.435 1.344 1.258 2.534 2.363 3.418 1.346.983 3.25 1.48 5.672 1.48 1.311 0 2.613-.161 3.895-.488 1.544-.39 3.027-1.05 4.382-1.95 1.145-.784 2.184-1.728 3.098-2.815.736-.88 1.345-1.85 1.812-2.895.508-.122.988-.279 1.434-.478.635-.29 1.183-.668 1.628-1.128.295-.307.524-.65.687-1.027.166-.385.264-.785.294-1.192l.03-.328-.372-.195"/>
          </svg>
        );
      case 'VS Code':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#007ACC">
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
          </svg>
        );
      case 'Figma':
        return (
          <svg className="w-6 h-8" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
          </svg>
        );
      case 'Postman':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF6C37">
            <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"/>
          </svg>
        );
      default:
        return <Code2 size={32} className="text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg hidden lg:block">Interactive 3D technology showcase</p>
          <p className="text-gray-400 mt-6 text-lg lg:hidden">Explore my tech stack</p>
        </motion.div>

        {/* Container for both layouts */}
        <div ref={containerRef} className="relative">
          {/* MOBILE/TABLET VIEW - Tabbed Interface */}
          <div className="lg:hidden">
            <div className="max-w-2xl mx-auto">
              {/* Tab Buttons */}
              <div className="flex gap-2 mb-6 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
                <button
                  onClick={() => setStage(0)}
                  className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    stage === 0
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Code2 size={20} />
                  <span className="hidden sm:inline">Frontend</span>
                </button>
                <button
                  onClick={() => setStage(1)}
                  className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    stage === 1
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Server size={20} />
                  <span className="hidden sm:inline">Backend</span>
                </button>
                <button
                  onClick={() => setStage(2)}
                  className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    stage === 2
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Wrench size={20} />
                  <span className="hidden sm:inline">Tools</span>
                </button>
              </div>

              {/* Content Cards */}
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl"
              >
                {stage === 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                        <Code2 size={24} className="text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white">Frontend</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {frontendSkills.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
                        >
                          <p className="text-white font-semibold text-center">{skill}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {stage === 1 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                        <Server size={24} className="text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white">Backend</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {backendSkills.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105"
                        >
                          <p className="text-white font-semibold text-center">{skill}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {stage === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                        <Wrench size={24} className="text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white">Dev Tools</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {toolsSkills.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
                        >
                          <p className="text-white font-semibold text-center">{skill}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
          {/* DESKTOP VIEW - 3D Monitor */}
          <div className="hidden lg:block">
            <div className="sticky top-20 h-[550px] flex flex-col items-center justify-center overflow-visible relative">
              {/* 3D Monitor Container */}
              <motion.div 
                className="relative"
                style={{ 
                  perspective: "2000px",
                }}
              >
                {/* 3D Computer Monitor */}
                <motion.div
                  animate={{ 
                    rotateY: rotateY,
                  }}
                  style={{ 
                    transformStyle: "preserve-3d" 
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 60, 
                    damping: 25,
                    mass: 1.2,
                  }}
                  className="relative w-[700px] h-[450px]"
                >
                  {/* Monitor Frame - Front Face (FRONTEND & TOOLS SCREEN) */}
                  <div 
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    style={{ 
                      backfaceVisibility: "hidden",
                      background: "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)"
                    }}
                  >
                    {/* Monitor Bezel */}
                    <div className="absolute inset-0 rounded-2xl border-8 border-slate-700/80 shadow-2xl">
                      {/* Screen */}
                      <div className="absolute inset-3 rounded-lg bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-900 overflow-hidden border-2 border-blue-600/30">
                        {/* Screen glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-500/20" />
                        
                        {/* Animated circuit patterns */}
                        <div className="absolute inset-0 opacity-20">
                          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                              </linearGradient>
                            </defs>
                            {/* Circuit paths */}
                            <path d="M 50 50 L 200 50 L 200 150 L 350 150" stroke="url(#circuit-grad)" strokeWidth="2" fill="none" opacity="0.6" />
                            <path d="M 500 100 L 500 200 L 350 200 L 350 300" stroke="url(#circuit-grad)" strokeWidth="2" fill="none" opacity="0.6" />
                            <circle cx="200" cy="50" r="4" fill="#06b6d4" opacity="0.8">
                              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="350" cy="150" r="4" fill="#8b5cf6" opacity="0.8">
                              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
                            </circle>
                          </svg>
                        </div>
                        
                        {/* FRONTEND Content */}
                        <div className="relative h-full flex flex-col items-center justify-center p-8 z-10">
                          <motion.div
                            animate={{ opacity: frontendOpacity }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="text-center space-y-8 absolute inset-0 flex flex-col items-center justify-center"
                          >
                            <div className="flex items-center gap-3 justify-center mb-6">
                              <Code2 size={48} className="text-cyan-400" />
                              <h3 className="text-4xl font-bold text-white">Frontend</h3>
                            </div>
                            
                            {/* Frontend Skills Grid with Enhanced Neon Logos */}
                            <div className="grid grid-cols-5 gap-6 max-w-2xl">
                              {frontendSkills.map((skill, i) => (
                                <motion.div
                                  key={skill}
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.2 + i * 0.1 }}
                                  className="flex flex-col items-center gap-2"
                                >
                                  <div className="w-20 h-20 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center relative overflow-hidden group">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative z-10">{getSkillLogo(skill)}</div>
                                  </div>
                                  <span className="text-white text-sm font-medium">{skill}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>

                          {/* TOOLS Content - Windows Desktop */}
                          <motion.div
                            animate={{ opacity: toolsOpacity }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 p-6"
                          >
                            {/* Windows Taskbar-style Header */}
                            <div className="flex items-center justify-between mb-4 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-white text-sm font-semibold">Developer Tools</span>
                              </div>
                              <div className="text-white/60 text-xs font-mono">
                                {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                              </div>
                            </div>

                            {/* Windows Desktop - App Icons Grid */}
                            <div className="h-[calc(100%-60px)] grid grid-cols-5 gap-4 content-start px-4 py-2">
                              {/* Git */}
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: stage === 2 ? 1 : 0, scale: stage === 2 ? 1 : 0 }}
                                transition={{ delay: 0.2 }}
                                className="group cursor-pointer"
                              >
                                <div className="relative aspect-square rounded-lg bg-gradient-to-br from-orange-500/80 to-orange-600/80 backdrop-blur-md border border-white/20 p-3 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
                                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                                  <div className="relative h-full flex flex-col justify-between">
                                    <svg className="w-10 h-10" viewBox="0 0 92 92" fill="white">
                                      <path d="M90.156 41.965L50.036 1.848a5.913 5.913 0 0 0-8.368 0l-8.332 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.043 7.043 0 0 1 1.673 7.277l10.183 10.184a7.026 7.026 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.045 7.045 0 0 1-9.961 0 7.038 7.038 0 0 1-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.06 7.06 0 0 1 2.304-1.539V33.926a7.049 7.049 0 0 1-3.82-9.234L29.242 14.272 1.73 41.777a5.925 5.925 0 0 0 0 8.371L41.852 90.27a5.925 5.925 0 0 0 8.371 0l39.933-39.934a5.925 5.925 0 0 0 0-8.371"/>
                                    </svg>
                                    <span className="text-white font-semibold text-xs text-center">Git</span>
                                  </div>
                                </div>
                              </motion.div>

                              {/* Docker */}
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: stage === 2 ? 1 : 0, scale: stage === 2 ? 1 : 0 }}
                                transition={{ delay: 0.3 }}
                                className="group cursor-pointer"
                              >
                                <div className="relative aspect-square rounded-lg bg-gradient-to-br from-blue-500/80 to-blue-600/80 backdrop-blur-md border border-white/20 p-3 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                                  <div className="relative h-full flex flex-col justify-between">
                                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="white">
                                      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.09-.721-1.797-2.111-2.73-2.111-2.73l-.437-.268-.284.422s-.681.857-.838 2.032c-.13.945.123 1.862.71 2.676-.446.267-.904.425-1.363.508a18.977 18.977 0 01-1.46.104H.5a.5.5 0 00-.5.5c.035 1.085.174 2.168.506 3.21.435 1.344 1.258 2.534 2.363 3.418 1.346.983 3.25 1.48 5.672 1.48 1.311 0 2.613-.161 3.895-.488 1.544-.39 3.027-1.05 4.382-1.95 1.145-.784 2.184-1.728 3.098-2.815.736-.88 1.345-1.85 1.812-2.895.508-.122.988-.279 1.434-.478.635-.29 1.183-.668 1.628-1.128.295-.307.524-.65.687-1.027.166-.385.264-.785.294-1.192l.03-.328-.372-.195"/>
                                    </svg>
                                    <span className="text-white font-semibold text-xs text-center">Docker</span>
                                  </div>
                                </div>
                              </motion.div>

                              {/* VS Code */}
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: stage === 2 ? 1 : 0, scale: stage === 2 ? 1 : 0 }}
                                transition={{ delay: 0.4 }}
                                className="group cursor-pointer"
                              >
                                <div className="relative aspect-square rounded-lg bg-gradient-to-br from-cyan-500/80 to-blue-500/80 backdrop-blur-md border border-white/20 p-3 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                                  <div className="relative h-full flex flex-col justify-between">
                                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="white">
                                      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
                                    </svg>
                                    <span className="text-white font-semibold text-xs text-center">VS Code</span>
                                  </div>
                                </div>
                              </motion.div>

                              {/* Figma */}
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: stage === 2 ? 1 : 0, scale: stage === 2 ? 1 : 0 }}
                                transition={{ delay: 0.5 }}
                                className="group cursor-pointer"
                              >
                                <div className="relative aspect-square rounded-lg bg-gradient-to-br from-purple-500/80 to-pink-500/80 backdrop-blur-md border border-white/20 p-3 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                                  <div className="relative h-full flex flex-col justify-between">
                                    <svg className="w-8 h-10 mx-auto" viewBox="0 0 38 57" fill="none">
                                      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="white"/>
                                      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="white" opacity="0.8"/>
                                      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="white" opacity="0.9"/>
                                      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="white" opacity="0.7"/>
                                      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="white" opacity="0.85"/>
                                    </svg>
                                    <span className="text-white font-semibold text-xs text-center">Figma</span>
                                  </div>
                                </div>
                              </motion.div>

                              {/* Postman */}
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: stage === 2 ? 1 : 0, scale: stage === 2 ? 1 : 0 }}
                                transition={{ delay: 0.6 }}
                                className="group cursor-pointer"
                              >
                                <div className="relative aspect-square rounded-lg bg-gradient-to-br from-orange-500/80 to-red-500/80 backdrop-blur-md border border-white/20 p-3 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
                                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                                  <div className="relative h-full flex flex-col justify-between">
                                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="white">
                                      <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"/>
                                    </svg>
                                    <span className="text-white font-semibold text-xs text-center">Postman</span>
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Monitor Ports */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                      <div className="w-10 h-3 bg-slate-900 rounded-sm border border-slate-600" />
                      <div className="w-8 h-3 bg-slate-900 rounded-sm border border-slate-600" />
                      <div className="w-6 h-3 bg-slate-900 rounded-sm border border-slate-600" />
                    </div>
                  </div>


          

                    {/* Monitor Frame - Back Face (BACKEND PORTS) */}
                    <div 
                      className="absolute inset-0 rounded-2xl overflow-visible"
                      style={{ 
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      {/* Outer metallic shell with bronze/copper tone */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-900/40 via-stone-800 to-slate-900 border-4 border-amber-950/50">
                        {/* Brushed metal texture */}
                        <div className="absolute inset-0 opacity-30" style={{
                          backgroundImage: `
                            repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 3px, rgba(255,255,255,0.03) 4px),
                            repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.1) 3px)
                          `
                        }} />

                        {/* Top ventilation grilles - dual panels */}
                        <div className="absolute top-6 left-12 right-12 flex justify-between gap-8">
                          {/* Left ventilation panel */}
                          <div className="w-44 h-16 bg-black/40 rounded border border-amber-950/60 p-2">
                            <div className="grid grid-cols-12 gap-0.5 h-full">
                              {[...Array(120)].map((_, i) => (
                                <div key={i} className="w-full h-full bg-slate-700/30 rounded-sm" />
                              ))}
                            </div>
                          </div>
                          {/* Right ventilation panel */}
                          <div className="w-44 h-16 bg-black/40 rounded border border-amber-950/60 p-2">
                            <div className="grid grid-cols-12 gap-0.5 h-full">
                              {[...Array(120)].map((_, i) => (
                                <div key={i} className="w-full h-full bg-slate-700/30 rounded-sm" />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Central 3D bump/bulge - like real monitor back */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-72">
                          {/* 3D raised panel with shadow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-stone-700 via-stone-800 to-stone-900 rounded-3xl"
                            style={{
                              boxShadow: `
                                inset -8px -8px 16px rgba(0,0,0,0.6),
                                inset 8px 8px 16px rgba(255,255,255,0.05),
                                0 20px 40px rgba(0,0,0,0.7)
                              `,
                              transform: 'translateZ(30px)'
                            }}
                          >
                            {/* Circuit board pattern on raised area */}
                            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <linearGradient id="circuit-back" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                                  <stop offset="100%" stopColor="#78716c" stopOpacity="0.3" />
                                </linearGradient>
                              </defs>
                              {/* Circuit traces */}
                              <path d="M 50 50 L 150 50 L 150 120 M 200 80 L 300 80 L 300 150" stroke="url(#circuit-back)" strokeWidth="1.5" fill="none" />
                              <path d="M 100 200 L 200 200 L 200 140 M 250 170 L 320 170" stroke="url(#circuit-back)" strokeWidth="1.5" fill="none" />
                              <circle cx="150" cy="50" r="3" fill="#f59e0b" opacity="0.4" />
                              <circle cx="300" cy="80" r="3" fill="#78716c" opacity="0.4" />
                            </svg>

                            {/* Title */}
                            <div className="absolute top-6 left-0 right-0 text-center">
                              <Server size={40} className="text-green-400 mx-auto mb-2 drop-shadow-[0_0_12px_rgba(74,222,128,0.6)]" />
                              <h3 className="text-2xl font-bold text-white drop-shadow-lg">Backend Ports</h3>
                            </div>

                            {/* Realistic Ports Section with Wires */}
                            <div className="absolute top-20 left-0 right-0 flex justify-center items-center px-8">
                              <div className="grid grid-cols-5 gap-4">
                                {/* Port 1: Node.js - HDMI-like */}
                                <div className="relative flex flex-col items-center">
                                  {/* Port housing */}
                                  <div className="relative w-16 h-10 bg-gradient-to-b from-slate-800 to-black rounded border border-slate-600 shadow-lg"
                                    style={{ boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5)' }}
                                  >
                                    {/* Port opening */}
                                    <div className="absolute inset-2 bg-black rounded-sm flex items-center justify-center overflow-hidden">
                                      {/* Connector pins */}
                                      <div className="flex gap-0.5">
                                        {[...Array(8)].map((_, i) => (
                                          <div key={i} className="w-1 h-4 bg-gradient-to-b from-yellow-700 to-yellow-900" 
                                            style={{ boxShadow: '0 0 2px rgba(253, 224, 71, 0.5)' }} 
                                          />
                                        ))}
                                      </div>
                                    </div>
                                    {/* Port label */}
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] text-slate-500 font-mono whitespace-nowrap">
                                      NODE.JS
                                    </div>
                                  </div>
                                  {/* Wire - Green for Node.js */}
                                  <svg className="absolute top-10 left-1/2 -translate-x-1/2" width="120" height="80" style={{ overflow: 'visible' }}>
                                    <defs>
                                      <filter id="glow-green">
                                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                        <feMerge>
                                          <feMergeNode in="coloredBlur"/>
                                          <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                      </filter>
                                    </defs>
                                    {/* Cable body */}
                                    <path 
                                      d="M 60 0 Q 60 20, 80 30 T 100 50" 
                                      stroke="#22c55e" 
                                      strokeWidth="4" 
                                      fill="none"
                                      filter="url(#glow-green)"
                                    />
                                    {/* Cable highlight */}
                                    <path 
                                      d="M 60 0 Q 60 20, 80 30 T 100 50" 
                                      stroke="#86efac" 
                                      strokeWidth="1.5" 
                                      fill="none"
                                      opacity="0.6"
                                    />
                                  </svg>
                                </div>

                                {/* Port 2: Express - USB-C like */}
                                <div className="relative flex flex-col items-center">
                                  <div className="relative w-16 h-10 bg-gradient-to-b from-slate-800 to-black rounded border border-slate-600 shadow-lg"
                                    style={{ boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5)' }}
                                  >
                                    <div className="absolute inset-2 bg-black rounded-lg flex items-center justify-center">
                                      <div className="w-10 h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-full"
                                        style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }}
                                      />
                                    </div>
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] text-slate-500 font-mono whitespace-nowrap">
                                      EXPRESS
                                    </div>
                                  </div>
                                  {/* Wire - Orange for Express */}
                                  <svg className="absolute top-10 left-1/2 -translate-x-1/2" width="120" height="80" style={{ overflow: 'visible' }}>
                                    <path 
                                      d="M 60 0 Q 60 25, 70 35 T 90 55" 
                                      stroke="#f97316" 
                                      strokeWidth="4" 
                                      fill="none"
                                      filter="url(#glow-green)"
                                    />
                                    <path 
                                      d="M 60 0 Q 60 25, 70 35 T 90 55" 
                                      stroke="#fdba74" 
                                      strokeWidth="1.5" 
                                      fill="none"
                                      opacity="0.6"
                                    />
                                  </svg>
                                </div>

                                {/* Port 3: MongoDB - Ethernet-like */}
                                <div className="relative flex flex-col items-center">
                                  <div className="relative w-16 h-10 bg-gradient-to-b from-slate-800 to-black rounded border border-slate-600 shadow-lg"
                                    style={{ boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5)' }}
                                  >
                                    <div className="absolute inset-2 bg-black rounded flex items-center justify-center">
                                      <div className="flex flex-col gap-0.5">
                                        <div className="flex gap-0.5">
                                          {[...Array(8)].map((_, i) => (
                                            <div key={i} className="w-1 h-2 bg-yellow-700" />
                                          ))}
                                        </div>
                                        <div className="w-full h-1 bg-slate-700" />
                                      </div>
                                    </div>
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] text-slate-500 font-mono whitespace-nowrap">
                                      MONGODB
                                    </div>
                                  </div>
                                  {/* Wire - Green for MongoDB */}
                                  <svg className="absolute top-10 left-1/2 -translate-x-1/2" width="120" height="80" style={{ overflow: 'visible' }}>
                                    <path 
                                      d="M 60 0 Q 60 30, 60 50" 
                                      stroke="#10b981" 
                                      strokeWidth="4" 
                                      fill="none"
                                      filter="url(#glow-green)"
                                    />
                                    <path 
                                      d="M 60 0 Q 60 30, 60 50" 
                                      stroke="#6ee7b7" 
                                      strokeWidth="1.5" 
                                      fill="none"
                                      opacity="0.6"
                                    />
                                  </svg>
                                </div>

                                {/* Port 4: PostgreSQL - DisplayPort-like */}
                                <div className="relative flex flex-col items-center">
                                  <div className="relative w-16 h-10 bg-gradient-to-b from-slate-800 to-black rounded border border-slate-600 shadow-lg"
                                    style={{ boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5)' }}
                                  >
                                    <div className="absolute inset-2 bg-black rounded-md flex items-center justify-center">
                                      <svg width="28" height="20" viewBox="0 0 28 20">
                                        <rect x="2" y="3" width="24" height="14" rx="1" stroke="#94a3b8" strokeWidth="1" fill="none" />
                                        <path d="M6 6 L10 10 L6 14" stroke="#94a3b8" strokeWidth="1" fill="none" />
                                        <rect x="14" y="8" width="8" height="4" fill="#94a3b8" />
                                      </svg>
                                    </div>
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] text-slate-500 font-mono whitespace-nowrap">
                                      POSTGRESQL
                                    </div>
                                  </div>
                                  {/* Wire - Blue for PostgreSQL */}
                                  <svg className="absolute top-10 left-1/2 -translate-x-1/2" width="120" height="80" style={{ overflow: 'visible' }}>
                                    <path 
                                      d="M 60 0 Q 60 25, 50 35 T 30 55" 
                                      stroke="#3b82f6" 
                                      strokeWidth="4" 
                                      fill="none"
                                      filter="url(#glow-green)"
                                    />
                                    <path 
                                      d="M 60 0 Q 60 25, 50 35 T 30 55" 
                                      stroke="#93c5fd" 
                                      strokeWidth="1.5" 
                                      fill="none"
                                      opacity="0.6"
                                    />
                                  </svg>
                                </div>

                                {/* Port 5: REST APIs - Custom port */}
                                <div className="relative flex flex-col items-center">
                                  <div className="relative w-16 h-10 bg-gradient-to-b from-slate-800 to-black rounded border border-slate-600 shadow-lg"
                                    style={{ boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5)' }}
                                  >
                                    <div className="absolute inset-2 bg-black rounded flex items-center justify-center">
                                      <div className="w-8 h-6 border-2 border-purple-600 rounded flex items-center justify-center">
                                        <div className="text-purple-400 text-[10px] font-bold">API</div>
                                      </div>
                                    </div>
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] text-slate-500 font-mono whitespace-nowrap">
                                      REST API
                                    </div>
                                  </div>
                                  {/* Wire - Purple for REST API */}
                                  <svg className="absolute top-10 left-1/2 -translate-x-1/2" width="120" height="80" style={{ overflow: 'visible' }}>
                                    <path 
                                      d="M 60 0 Q 60 20, 40 30 T 20 50" 
                                      stroke="#a855f7" 
                                      strokeWidth="4" 
                                      fill="none"
                                      filter="url(#glow-green)"
                                    />
                                    <path 
                                      d="M 60 0 Q 60 20, 40 30 T 20 50" 
                                      stroke="#d8b4fe" 
                                      strokeWidth="1.5" 
                                      fill="none"
                                      opacity="0.6"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            {/* Skill labels at bottom with glow */}
                            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
                              {backendSkills.map((skill, i) => {
                                const colors = [
                                  'text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]',
                                  'text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]',
                                  'text-green-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]',
                                  'text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]',
                                  'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]'
                                ];
                                return (
                                  <div key={skill} className="flex flex-col items-center gap-1">
                                    <div className={`w-2 h-2 rounded-full animate-pulse ${colors[i].split(' ')[0].replace('text-', 'bg-')}`} 
                                      style={{ animationDelay: `${i * 0.15}s` }} 
                                    />
                                    <span className={`text-xs font-semibold ${colors[i]}`}>{skill}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Mounting screws */}
                        {[
                          { top: '10%', left: '5%' },
                          { top: '10%', right: '5%' },
                          { bottom: '10%', left: '5%' },
                          { bottom: '10%', right: '5%' }
                        ].map((pos, i) => (
                          <div key={i} className="absolute" style={pos}>
                            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border-2 border-slate-800 flex items-center justify-center"
                              style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8), 0 1px 2px rgba(255,255,255,0.1)' }}
                            >
                              <div className="w-2 h-0.5 bg-slate-900 rotate-45" />
                              <div className="w-2 h-0.5 bg-slate-900 -rotate-45 absolute" />
                            </div>
                          </div>
                        ))}

                        {/* Bottom branding plate */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-6 py-1.5 rounded border border-amber-950/60">
                          <div className="text-[10px] font-mono text-amber-600/60">SUPRIYO • BACKEND • 2026</div>
                        </div>
                      </div>
                    </div>

                    {/* Monitor Stand */}
                    <div 
                      className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-2xl shadow-lg" 
                      style={{ transformStyle: "preserve-3d" }} 
                    />
                    <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-48 h-4 bg-slate-800 rounded-full shadow-xl" />
                  </motion.div>
                </motion.div>

               
                         

                    {/* Bottom Monitor Ports */}
                    {/* <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                      <div className="w-10 h-3 bg-slate-900 rounded-sm border border-slate-600" />
                      <div className="w-8 h-3 bg-slate-900 rounded-sm border border-slate-600" />
                      <div className="w-6 h-3 bg-slate-900 rounded-sm border border-slate-600" />
                    </div> */}
                  </div>
            </div>
          </div>

        {/* Stage Navigation Buttons */}
        <div className="hidden lg:flex justify-center gap-4 mt-15">
          <button
            onClick={() => setStage(0)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              stage === 0
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-white/10'
            }`}
          >
            <Code2 size={20} />
            <span>Frontend</span>
          </button>
          <button
            onClick={() => setStage(1)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              stage === 1
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-white/10'
            }`}
          >
            <Server size={20} />
            <span>Backend</span>
          </button>
          <button
            onClick={() => setStage(2)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              stage === 2
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-white/10'
            }`}
          >
            <Wrench size={20} />
            <span>Tools</span>
          </button>
        </div>

        {/* Stage Indicator Dots */}
        <div className="hidden lg:flex justify-center gap-3 mt-6">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setStage(index)}
              className={`transition-all duration-300 rounded-full ${
                stage === index
                  ? 'w-8 h-2 bg-gradient-to-r from-cyan-400 to-purple-600'
                  : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to stage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
