import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Eye, Code, Database, Layers, Palette, Github, Twitter, Mail, Linkedin, Globe } from 'lucide-react';

const About = () => {
  const missionValues = [
    {
      icon: Eye,
      title: 'Transparency',
      description: 'All transactions are recorded on the blockchain and can be viewed by anyone. This ensures trust and transparency.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'We use military-grade encryption with Solana blockchain technology. User data and transactions are completely secure.'
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'Instant payments with 65,000+ transactions per second capacity. Much faster and more efficient than traditional systems.'
    }
  ];

  const techStack = [
    {
      name: 'React',
      description: 'Modern and Fast UI',
      icon: '⚛️',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Node.js',
      description: 'Powerful Backend Infrastructure',
      icon: '🟢',
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Express',
      description: 'Rapid API Development',
      icon: '🚀',
      color: 'from-gray-400 to-gray-500'
    },
    {
      name: 'Supabase',
      description: 'Secure Database',
      icon: '🗄️',
      color: 'from-green-400 to-teal-500'
    },
    {
      name: 'Tailwind CSS',
      description: 'Modern Design System',
      icon: '🎨',
      color: 'from-cyan-400 to-purple-500'
    }
  ];

  const team = [
    {
      name: 'İsmail Güldüren',
      role: 'Full Stack Developer',
      description: 'Expert in blockchain and Web3 technologies. Experienced developer in the Solana ecosystem. Building professional applications with React, Node.js, and modern web technologies.',
      avatar: 'https://github.com/ismailsglr.png',
      social: {
        github: 'https://github.com/ismailsglr',
        twitter: 'https://x.com/ismail_gldrn',
        linkedin: 'https://www.linkedin.com/in/ismail-güldüren-8941221a8/',
        portfolio: 'https://ismailportfolio.lovable.app',
        email: null
      }
    }
  ];

  return (
    <div className="w-full bg-dark-900 min-h-screen">
      {/* About Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-dark-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-900"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-purple-500/3 to-cyan-500/3"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Welcome to the Digital Farm
              <br />
              <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">of the Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              FarmMarket is revolutionizing farm animal trading by combining the power of blockchain technology 
              with agricultural economics. We offer a secure, fast, and transparent marketplace on the Solana network.
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              We're bringing traditional agricultural trade into the digital age with decentralized finance (DeFi) principles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-dark-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-900"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-purple-500/3 to-cyan-500/3"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our Values and Goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Icons & Titles */}
            <div className="space-y-8">
              {missionValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30 group-hover:border-purple-500/50 transition-all duration-300">
                      <value.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {value.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Descriptions */}
            <div className="space-y-8">
              {missionValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-dark-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-900"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-purple-500/3 to-cyan-500/3"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Our Infrastructure
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Platform powered by modern technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{tech.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">Why we use it?</p>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                      {tech.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Team Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-dark-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-900"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-purple-500/3 to-cyan-500/3"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/3 to-purple-500/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Developer Team
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The team behind the project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-center max-w-2xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-500/30 transition-all duration-300">
                  {/* Avatar */}
                  {member.avatar ? (
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-cyan-500/30 ring-4 ring-cyan-500/10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-cyan-500/30">
                      <Code className="w-16 h-16 text-cyan-400" />
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-lg text-gray-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{member.description}</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.social.github && (
                      <motion.a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-gray-800/50 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300"
                        title="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-gray-800/50 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300"
                        title="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-gray-800/50 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.portfolio && (
                      <motion.a
                        href={member.social.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-gray-800/50 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300"
                        title="Portfolio"
                      >
                        <Globe className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.email && (
                      <motion.a
                        href={member.social.email}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-gray-800/50 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300"
                        title="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
