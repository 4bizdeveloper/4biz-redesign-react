import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBars, 
  FaTimes, 
  FaServer, 
  FaShieldAlt, 
  FaChartLine, 
  FaGlobe, 
  FaCogs, 
  FaProjectDiagram,
  FaArrowRight
} from "react-icons/fa";

const App = () => {
  const [init, setInit] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Initialization ---
  useEffect(() => {
    // Set Favicon
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = 'https://4bizinternational.com/assets/images/logo/test.png';
    document.head.appendChild(link);

    // Scroll Listener
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Particles Init
    initParticlesEngine(async (engine) => { await loadSlim(engine); }).then(() => setInit(true));

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Data ---
  const solutions = [
    { 
      title: "Dynamics 365 ERP", 
      icon: <FaCogs />, 
      desc: "Centralize your UAE business operations with specialized Business Central implementation tailored for local compliance.", 
      img: "https://images.unsplash.com/photo-1551288049-bbda3865c670?q=80&w=1000" 
    },
    { 
      title: "Azure Infrastructure", 
      icon: <FaServer />, 
      desc: "High-security cloud architecture designed specifically for Dubai's strict data sovereignty laws and scalability needs.", 
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000" 
    },
    { 
      title: "Enterprise AI", 
      icon: <FaShieldAlt />, 
      desc: "Leverage Microsoft Copilot and custom AI models to automate complex decision-making and drive efficiency.", 
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000" 
    }
  ];

  const processSteps = [
    { title: "Discovery", text: "Deep-dive analysis into existing legacy systems to identify bottlenecks." },
    { title: "Architecture", text: "Designing a bespoke cloud topology aligned with business goals." },
    { title: "Deployment", text: "Executing Dynamics 365 modules with zero-downtime strategies." },
    { title: "Evolution", text: "Continuous support and AI-driven optimization for sustained growth." }
  ];

  return (
    <div className="bg-[#020421] text-white min-h-screen selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      
      {/* --- BACKGROUND PARTICLES --- */}
      {init && (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
          <Particles
            id="tsparticles"
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 60,
              particles: {
                number: { value: 40, density: { enable: true, value_area: 800 } },
                color: { value: "#00f2ff" },
                shape: { type: "circle" },
                opacity: { value: 0.2, random: true },
                size: { value: 2, random: true },
                links: { enable: true, distance: 150, color: "#00f2ff", opacity: 0.1, width: 1 },
                move: { enable: true, speed: 0.5, direction: "none", random: false, straight: false, out_mode: "out" }
              },
              interactivity: {
                detect_on: "canvas",
                events: { onHover: { enable: true, mode: "grab" }, resize: true },
                modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } } }
              },
              retina_detect: true
            }}
          />
        </div>
      )}

      {/* --- NAVIGATION --- */}
      <nav className={`fixed left-0 right-0 z-[100] transition-all duration-500 flex justify-center ${scrolled ? "top-4" : "top-0"}`}>
        <div className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex justify-between items-center px-6 md:px-10
          ${scrolled 
            ? "w-[90%] md:w-[80%] lg:w-[60%] bg-[#020421]/70 backdrop-blur-xl border border-white/10 rounded-full py-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" 
            : "w-full bg-transparent border-b border-white/5 py-6"}`}>
          
          {/* Logo */}
          <a href="#" className="relative z-50">
            <img src="https://4bizinternational.com/assets/images/logo/test.png" alt="4Biz" className="h-8 md:h-10 object-contain" />
          </a>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex gap-12 text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">
            {['Services', 'Methodology', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors duration-300 relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-6">
            <button className="hidden lg:block bg-white text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_20px_rgba(0,242,255,0.5)] transition-all duration-300">
              Get Started
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden text-white text-2xl z-50 relative"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-[#020421] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {['Services', 'Methodology', 'About', 'Contact'].map((item, idx) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-3xl font-black uppercase tracking-widest text-white hover:text-cyan-400"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=100&w=1920" 
            className="w-full h-full object-cover opacity-40" 
            alt="Global Network" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020421] via-[#020421]/90 to-[#020421]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020421] via-transparent to-transparent"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-7xl w-full"
        >
          <div className="inline-flex items-center gap-3 border border-cyan-500/30 bg-cyan-500/5 px-6 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <p className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">4Biz International • UAE</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.9] tracking-tighter uppercase mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            DIGITAL <br /> 
            <span className="stroke-text text-white">ARCHITECTS</span>
          </h1>
          
          <p className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed font-light border-l-2 border-cyan-500/50 pl-8 mb-12">
            Specializing in high-performance <span className="text-white font-semibold">Microsoft Dynamics 365</span> ecosystems and scalable cloud infrastructure for the modern UAE enterprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group relative px-8 py-4 bg-cyan-500 text-black font-black uppercase tracking-widest rounded-sm overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors">Explore Solutions</span>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-all flex items-center gap-3">
              <span>Contact Us</span>
              <FaArrowRight className="text-cyan-400" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- EXPERTISE SECTION --- */}
      <section id="services" className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9]">
            Strategic <br /> <span className="stroke-text text-cyan-500/50">Capabilities.</span>
          </h2>
          <p className="text-gray-400 max-w-md text-right hidden md:block">
            We don't just implement software; we engineer digital ecosystems that scale with your ambition.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-[#05071a] border border-white/5 rounded-[30px] overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#05071a] to-transparent z-10"></div>
                <img src={item.img} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-60" alt={item.title} />
                <div className="absolute bottom-6 left-6 z-20 text-cyan-400 text-4xl bg-[#020421]/50 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                  {item.icon}
                </div>
              </div>
              <div className="p-8 relative z-20 -mt-12">
                <h3 className="text-2xl font-bold mb-4 uppercase italic tracking-tighter text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm mb-8 h-20">{item.desc}</p>
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Learn More <FaArrowRight size={10} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- METHODOLOGY SECTION --- */}
      <section id="methodology" className="py-32 bg-[#020421] relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-12 tracking-tighter leading-[0.9]">
              Impact <br /> <span className="stroke-text text-cyan-500/50">Architecture.</span>
            </h2>
            <div className="space-y-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="group flex gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 cursor-default">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a0c2e] border border-white/10 flex items-center justify-center text-cyan-500 font-black text-lg group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                    0{idx+1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase italic tracking-tighter mb-2 text-white group-hover:text-cyan-400 transition-colors">{step.title}</h4>
                    <p className="text-gray-400 text-md leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-black">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" alt="Cyber Security" className="grayscale group-hover:grayscale-0 transition-all duration-1000 w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020421] via-transparent to-transparent opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT / MAP SECTION --- */}
      <section id="contact" className="py-20 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="bg-[#05071a] rounded-[40px] overflow-hidden border border-white/5 flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-6 tracking-tighter">
              Ready to <span className="text-cyan-400">Transform?</span>
            </h2>
            <p className="text-gray-400 mb-10 max-w-md">
              Connect with our Dubai-based team of certified architects to discuss your digital transformation roadmap.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cyan-400"><FaGlobe /></div>
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cyan-400"><FaServer /></div>
                <span>support@4bizinternational.com</span>
              </div>
            </div>
            
            <button className="mt-10 w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all">
              Schedule Consultation
            </button>
          </div>
          
          <div className="lg:w-1/2 min-h-[400px] lg:min-h-auto relative grayscale hover:grayscale-0 transition-all duration-700">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29563674.074689627!2d55.297384!3d25.24208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d3f84a0cd39%3A0x6834edd5ea42e51d!2s4BIZ%20International%20LLC!5e0!3m2!1sen!2sin!4v1771835494052!5m2!1sen!2sin" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 border-t border-white/5 text-center text-gray-600 text-xs uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} 4Biz International. All Rights Reserved.</p>
      </footer>

      {/* --- GLOBAL STYLES --- */}
      <style>{`
        .stroke-text { 
          -webkit-text-stroke: 1px rgba(255,255,255,0.3); 
          color: transparent; 
        }
        html { scroll-behavior: smooth; }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #020421; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #00f2ff; }
      `}</style>
    </div>
  );
};

export default App;