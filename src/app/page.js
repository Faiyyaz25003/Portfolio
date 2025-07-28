'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Globe, Server, Palette, Zap, ExternalLink, Menu, X, Star, ArrowRight, Send, Download, Eye } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const heroRef = useRef(null);

  const texts = ['Software Developer', 'Full-Stack Engineer', 'Problem Solver', 'Code Enthusiast'];

  // Typewriter effect
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= currentText.length) {
        setTypedText(currentText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(timer);
  }, [currentTextIndex]);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Enhanced skills data with new properties
  const skills = [
    { name: 'HTML5', icon: <Globe className="w-8 h-8" />, color: 'text-orange-500', level: 95, glow: 'shadow-orange-500/30' },
    { name: 'CSS3', icon: <Palette className="w-8 h-8" />, color: 'text-blue-500', level: 90, glow: 'shadow-blue-500/30' },
    { name: 'JavaScript', icon: <Code className="w-8 h-8" />, color: 'text-yellow-500', level: 88, glow: 'shadow-yellow-500/30' },
    { name: 'React.js', icon: <Zap className="w-8 h-8" />, color: 'text-cyan-500', level: 85, glow: 'shadow-cyan-500/30' },
    { name: 'Next.js', icon: <Server className="w-8 h-8" />, color: 'text-gray-300', level: 82, glow: 'shadow-gray-300/30' },
    { name: 'Tailwind CSS', icon: <Palette className="w-8 h-8" />, color: 'text-teal-500', level: 90, glow: 'shadow-teal-500/30' },
    { name: 'Java', icon: <Code className="w-8 h-8" />, color: 'text-red-500', level: 80, glow: 'shadow-red-500/30' },
    { name: 'MySQL', icon: <Database className="w-8 h-8" />, color: 'text-blue-400', level: 75, glow: 'shadow-blue-400/30' }
  ];

  // Updated projects with the three specified ones
  const projects = [
    {
      title: 'Hotel Management System',
      description: 'Comprehensive hotel management solution with room booking, guest management, billing system, and staff administration. Features include real-time availability, payment processing, and detailed reporting dashboard.',
      tech: ['Java', 'MySQL', 'JavaScript', 'CSS3', 'HTML5'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      featured: true,
      stats: { views: '3.2K', stars: '58', forks: '23' }
    },
    {
      title: 'Gym Management System',
      description: 'Complete gym management platform with member registration, workout tracking, trainer scheduling, and payment management. Includes equipment maintenance logs and comprehensive analytics.',
      tech: ['Java', 'MySQL', 'React.js', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      featured: false,
      stats: { views: '2.8K', stars: '42', forks: '15' }
    },
    {
      title: 'English Speaking',
      description: 'Interactive English learning platform designed to improve speaking skills and communication. Features pronunciation practice, real-time feedback, conversation simulations, and progress tracking for learners.',
      tech: ['Next.js', 'React.js', 'JavaScript', 'Tailwind CSS', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      featured: true,
      stats: { views: '4.1K', stars: '73', forks: '28' }
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        <FloatingParticles />
      </div>

      {/* Interactive cursor follower */}
      <div 
        className="fixed w-6 h-6 bg-cyan-400/30 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x % 100 / 50 + 0.5})`
        }}
      />

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl z-40 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Faiyyaz Khan
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-cyan-400 transition-all duration-300 relative group ${
                    activeSection === item ? 'text-cyan-400' : ''
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          <div className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/10 transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <div className="container mx-auto px-6 py-6">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 capitalize hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative z-10" ref={heroRef}>
        <div className="container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Enhanced Profile Circle */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center">
                <div className="relative z-10">
                  <Code className="w-20 h-20 text-cyan-400 animate-pulse" />
                  <div className="absolute -inset-4 bg-cyan-400/20 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Passionate full-stack developer crafting modern web applications with cutting-edge technologies. 
              <span className="block mt-2 text-cyan-400 font-semibold">Transforming ideas into digital reality ✨</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-10 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-500 transform hover:scale-110 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  <Send className="w-5 h-5" />
                  Get In Touch
                </span>
              </button>
              
              <button className="group px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 transition-all duration-500 transform hover:scale-110">
                <span className="flex items-center gap-2 font-semibold">
                  <Download className="w-5 h-5" />
                  Download CV
                </span>
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-black/30 relative z-10">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold mb-6 text-cyan-400">Full-Stack Developer</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I am a passionate software developer with expertise in modern web technologies. 
                  I love creating efficient, scalable applications that provide exceptional user experiences.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  With strong foundation in both frontend and backend development, I bring ideas to life 
                  through clean code and innovative solutions.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="group text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105">
                    <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">Fresher</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                  <div className="group text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105">
                    <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="group p-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                    <Globe className="w-10 h-10 text-cyan-400 mb-4 group-hover:rotate-12 transition-transform duration-300" />
                    <h4 className="font-semibold mb-3 text-lg">Frontend</h4>
                    <p className="text-sm text-gray-300">Modern UI/UX with React & Next.js</p>
                  </div>
                  <div className="group p-8 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl backdrop-blur-sm border border-green-500/30 hover:border-green-400/60 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
                    <Database className="w-10 h-10 text-green-400 mb-4 group-hover:rotate-12 transition-transform duration-300" />
                    <h4 className="font-semibold mb-3 text-lg">Database</h4>
                    <p className="text-sm text-gray-300">MySQL & efficient data management</p>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="group p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                    <Server className="w-10 h-10 text-purple-400 mb-4 group-hover:rotate-12 transition-transform duration-300" />
                    <h4 className="font-semibold mb-3 text-lg">Backend</h4>
                    <p className="text-sm text-gray-300">Java & server-side development</p>
                  </div>
                  <div className="group p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl backdrop-blur-sm border border-orange-500/30 hover:border-orange-400/60 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
                    <Zap className="w-10 h-10 text-orange-400 mb-4 group-hover:rotate-12 transition-transform duration-300" />
                    <h4 className="font-semibold mb-3 text-lg">Performance</h4>
                    <p className="text-sm text-gray-300">Optimized & scalable solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group relative">
                  <div className={`p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 hover:-rotate-1 hover:shadow-2xl ${skill.glow} relative overflow-hidden`}>
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className={`${skill.color} mb-6 group-hover:scale-125 transition-all duration-500 relative z-10`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 relative z-10">{skill.name}</h3>
                    
                    {/* Enhanced progress bar */}
                    <div className="w-full bg-gray-700/50 rounded-full h-3 mb-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-1000 delay-${index * 200} relative overflow-hidden`}
                        style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center relative z-10">
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                      <Star className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 bg-black/30 relative z-10">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className={`group relative bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 ${project.featured ? 'lg:col-span-2' : ''}`}>
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-semibold">
                      ⭐ Featured
                    </div>
                  )}
                  
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Enhanced project actions */}
                    <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <a href={project.github} className="p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300 transform hover:scale-110">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.live} className="p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300 transform hover:scale-110">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <button className="p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300 transform hover:scale-110">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Project stats */}
                    <div className="absolute top-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs">
                        👁 {project.stats.views}
                      </div>
                      <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs">
                        ⭐ {project.stats.stars}
                      </div>
                      <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs">
                        🍴 {project.stats.forks}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">{project.title}</h3>
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-4 py-2 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <h3 className="text-3xl font-semibold mb-8 text-cyan-400">Lets Connect</h3>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    I am always interested in hearing about new opportunities and exciting projects. 
                    Lets discuss how we can work together!
                  </p>
                  
                  <div className="space-y-6">
                    <div className="group flex items-center space-x-6 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105">
                      <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg mb-1">Email</div>
                        <div className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">khanfaiyyaz25003@gmail.com</div>
                      </div>
                    </div>
                    
                    <div className="group flex items-center space-x-6 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-500 transform hover:scale-105">
                      <div className="p-4 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-8 h-8 text-green-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg mb-1">Phone</div>
                        <div className="text-gray-300 hover:text-green-400 transition-colors duration-300 cursor-pointer">+91 93723 81936</div>
                      </div>
                    </div>
                    
                    <div className="group flex items-center space-x-6 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105">
                      <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-8 h-8 text-purple-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg mb-1">Location</div>
                        <div className="text-gray-300">India 🇮🇳</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mt-10">
                    <a href="#" className="group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-cyan-400/50 transform hover:scale-110 hover:-rotate-3">
                      <Github className="w-8 h-8 group-hover:text-cyan-400 transition-colors duration-300" />
                    </a>
                    <a href="#" className="group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-blue-400/50 transform hover:scale-110 hover:rotate-3">
                      <Linkedin className="w-8 h-8 group-hover:text-blue-400 transition-colors duration-300" />
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-500">
                    <div className="space-y-6">
                      <div className="group">
                        <label className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-cyan-400 transition-colors duration-300">Name</label>
                        <input 
                          type="text" 
                          className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl focus:border-cyan-400 focus:outline-none transition-all duration-300 focus:bg-white/10 focus:shadow-lg focus:shadow-cyan-400/10"
                          placeholder="Your Name"
                        />
                      </div>
                      
                      <div className="group">
                        <label className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-cyan-400 transition-colors duration-300">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl focus:border-cyan-400 focus:outline-none transition-all duration-300 focus:bg-white/10 focus:shadow-lg focus:shadow-cyan-400/10"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div className="group">
                        <label className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-cyan-400 transition-colors duration-300">Subject</label>
                        <input 
                          type="text" 
                          className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl focus:border-cyan-400 focus:outline-none transition-all duration-300 focus:bg-white/10 focus:shadow-lg focus:shadow-cyan-400/10"
                          placeholder="Project Discussion"
                        />
                      </div>
                      
                      <div className="group">
                        <label className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-cyan-400 transition-colors duration-300">Message</label>
                        <textarea 
                          rows="5"
                          className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl focus:border-cyan-400 focus:outline-none transition-all duration-300 resize-none focus:bg-white/10 focus:shadow-lg focus:shadow-cyan-400/10"
                          placeholder="Tell me about your project..."
                        ></textarea>
                      </div>
                      
                      <button 
                        className="group w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden"
                        onClick={() => alert('Message sent successfully! 🚀 (This is a demo)')}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3 font-semibold text-lg">
                          <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                          Send Message
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 bg-black/50 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-8 mb-8">
              <a href="#" className="group p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-400/50 transform hover:scale-110">
                <Github className="w-6 h-6 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
              <a href="#" className="group p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-400/50 transform hover:scale-110">
                <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a href="#" className="group p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-red-400/50 transform hover:scale-110">
                <Mail className="w-6 h-6 group-hover:text-red-400 transition-colors duration-300" />
              </a>
            </div>
            
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Faiyyaz Khan
            </div>
            
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              © 2024 Software Developer Portfolio. Built with ❤️ using Next.js, React & Tailwind CSS.
              <br />
              <span className="text-sm text-cyan-400">Crafted with passion for innovation ✨</span>
            </p>
            
            <div className="flex justify-center space-x-6 text-sm text-gray-500 mt-6">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-110 transition-all duration-300 opacity-0 hover:opacity-100 group"
        style={{ opacity: activeSection !== 'home' ? 1 : 0 }}
      >
        <ChevronDown className="w-6 h-6 rotate-180 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;