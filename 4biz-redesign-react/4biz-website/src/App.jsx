import React, { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  FaBars, FaTimes, FaGlobe, FaChevronRight, FaLinkedin, 
  FaTwitter, FaEnvelope, FaPhoneAlt, FaCloud, FaDatabase, FaUserShield 
} from "react-icons/fa";
import WhatsAppButton from "./WhatsAppButton";




const App = () => {
  const [init, setInit] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    // Favicon & Title
    document.title = "4Biz International | Digital Transformation UAE";
    
    const handleScroll = () => setScrolled(window.scrollY > 80);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    initParticlesEngine(async (engine) => { await loadSlim(engine); }).then(() => setInit(true));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const services = [
    { title: "Enterprise ERP", icon: <FaDatabase />, desc: "Custom Microsoft Dynamics 365 implementations for UAE's financial and operational compliance.", color: "from-cyan-500" },
    { title: "Cloud Systems", icon: <FaCloud />, desc: "Secure Azure infrastructure designed for zero-latency and high scalability.", color: "from-blue-600" },
    { title: "Cyber Defense", icon: <FaUserShield />, desc: "Proactive threat monitoring and digital asset protection for enterprise security.", color: "from-purple-600" }
  ];

  return (
    <div className="bg-[#010208] text-white min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- MOUSE GLOW EFFECT --- */}
      <div 
        className="fixed inset-0 z-10 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 242, 255, 0.07), transparent 80%)`
        }}
      />

      {/* --- PROGRESS BAR --- */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[110]" style={{ scaleX }} />

      {/* --- BACKGROUND PARTICLES --- */}
      {init && (
        <div className="fixed inset-0 z-0 opacity-30">
          <Particles id="tsparticles" options={{
            background: { color: "transparent" },
            fpsLimit: 120,
            particles: {
              color: { value: "#00f2ff" },
              links: { enable: true, color: "#00f2ff", distance: 150, opacity: 0.1 },
              move: { enable: true, speed: 0.6 },
              number: { value: 60, density: { enable: true, area: 800 } },
              size: { value: { min: 1, max: 2 } }
            },
            interactivity: { events: { onHover: { enable: true, mode: "grab" } } }
          }} />
        </div>
      )}

      {/* --- NAVIGATION --- */}
      <nav className={`fixed left-0 right-0 z-[100] transition-all duration-700 flex justify-center ${scrolled ? "top-6" : "top-0"}`}>
        <div className={`transition-all duration-500 flex justify-between items-center px-8 
          ${scrolled 
            ? "w-[90%] md:w-[70%] bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
            : "w-full bg-transparent border-b border-white/5 py-6"}`}>
          
          <img src="https://4bizinternational.com/assets/images/logo/test.png" alt="4Biz" className="h-7 md:h-9" />

          <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
            {['Home', 'Solutions', 'Insights', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-cyan-500 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
              Consultation
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-2xl text-white">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[95] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8">
            {['Home', 'Solutions', 'Insights', 'Contact'].map((item, idx) => (
              <motion.a 
                initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: idx * 0.1 }}
                key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter hover:text-cyan-400"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[110vh] flex items-center justify-center px-6 text-center overflow-hidden">
        {/* Cyber Earth Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000" 
            className="w-full h-full object-cover opacity-50 scale-110"
            alt="Digital Earth"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#010208] via-transparent to-[#010208]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#010208] via-transparent to-[#010208]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">Next-Gen IT UAE</span>
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.85] tracking-[ -0.05em] mb-8">
            Future <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Secured.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-lg leading-relaxed mb-10 px-4">
            Empowering Dubai’s vision with elite <span className="text-white font-bold">Microsoft ERP</span> architecture, cloud-native security, and data-driven intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-cyan-500 hover:text-white transition-all">
              Begin Transformation
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-black uppercase text-xs tracking-widest rounded-full hover:bg-white/5 transition-all">
              Watch Reel
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="solutions" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">
            Core <span className="text-cyan-500">Architecture.</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i} whileHover={{ y: -10 }}
              className="group p-10 bg-white/[0.02] border border-white/5 rounded-[40px] backdrop-blur-md hover:border-cyan-500/50 transition-all duration-500"
            >
              <div className={`text-4xl mb-6 bg-gradient-to-br ${s.color} bg-clip-text text-transparent`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-black uppercase italic mb-4">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{s.desc}</p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 group-hover:gap-4 transition-all">
                Discovery <FaChevronRight size={8} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- STATS SECTION (Cyber Style) --- */}
      <section className="py-20 bg-cyan-500/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { n: "150+", t: "Enterprise Clients" },
            { n: "99.9%", t: "Uptime Guaranteed" },
            { n: "24/7", t: "Security Monitoring" },
            { n: "12+", t: "UAE Industry Awards" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">{stat.n}</div>
              <div className="text-[10px] font-bold uppercase text-gray-500 tracking-[0.2em]">{stat.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <footer id="contact" className="relative pt-32 pb-10 px-6 bg-[#010208] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 mb-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">
                Let's Build the <br /> <span className="text-cyan-500 italic">Unbreakable.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                  <FaEnvelope className="text-cyan-400" /> <span>hello@4bizinternational.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                  <FaPhoneAlt className="text-cyan-400" /> <span>+971 (0) 4 4Biz International</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                  <FaGlobe className="text-cyan-400" /> <span>Business Bay, Dubai, UAE</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-[30px] border border-white/10">
               <form className="space-y-4">
                  <input type="text" placeholder="COMPANY NAME" className="w-full bg-black/50 border border-white/10 p-4 text-[10px] font-bold uppercase tracking-widest rounded-xl focus:border-cyan-500 outline-none" />
                  <input type="email" placeholder="OFFICIAL EMAIL" className="w-full bg-black/50 border border-white/10 p-4 text-[10px] font-bold uppercase tracking-widest rounded-xl focus:border-cyan-500 outline-none" />
                  <textarea rows="4" placeholder="PROJECT SCOPE" className="w-full bg-black/50 border border-white/10 p-4 text-[10px] font-bold uppercase tracking-widest rounded-xl focus:border-cyan-500 outline-none"></textarea>
                  <button className="w-full py-4 bg-cyan-500 text-black font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-cyan-400 transition-all">Submit Request</button>
               </form>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
            <img src="https://4bizinternational.com/assets/images/logo/test.png" alt="Logo" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <p className="text-[10px] text-gray-600 font-bold tracking-[0.2em] uppercase">
              © {new Date().getFullYear()} 4Biz International. Crafted for Excellence.
            </p>
            <div className="flex gap-6">
              <FaLinkedin className="text-gray-600 hover:text-cyan-400 cursor-pointer" />
              <FaTwitter className="text-gray-600 hover:text-cyan-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>



<WhatsAppButton />




      {/* --- GLOBAL CSS --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; cursor: default; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #010208; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #00f2ff; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;