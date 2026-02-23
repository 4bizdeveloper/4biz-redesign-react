import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { FaServer, FaShieldAlt, FaChartLine, FaGlobe, FaCogs, FaProjectDiagram } from "react-icons/fa";

const App = () => {
  const [init, setInit] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Set Favicon to 4Biz Logo
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.href = 'https://4bizinternational.com/assets/images/logo/test.png';
    document.getElementsByTagName('head')[0].appendChild(link);

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    initParticlesEngine(async (engine) => { await loadSlim(engine); }).then(() => setInit(true));

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutions = [
    { title: "Dynamics 365 ERP", icon: <FaCogs />, desc: "Centralize your UAE business operations with specialized Business Central implementation.", img: "https://images.unsplash.com/photo-1551288049-bbda3865c670?q=80&w=1000" },
    { title: "Azure Infrastructure", icon: <FaServer />, desc: "High-security cloud architecture designed specifically for Dubai's data sovereignty laws.", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000" },
    { title: "Enterprise AI", icon: <FaShieldAlt />, desc: "Leverage Microsoft Copilot and custom AI models to automate complex decision-making.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000" }
  ];

  return (
    <div className="bg-[#020421] text-white min-h-screen selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      {/* FIXED BACKGROUND: This stops the scroll repetition error */}
      {init && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Particles
            id="tsparticles"
            options={{
              particles: {
                number: { value: 30, density: { enable: true } },
                color: { value: "#00f2ff" },
                links: { enable: true, color: "#00f2ff", opacity: 0.05 },
                move: { enable: true, speed: 0.3 },
                size: { value: 1 },
                opacity: { value: 0.1 }
              }
            }}
          />
        </div>
      )}

      {/* DYNAMIC CAPSULE NAVIGATION */}
      <nav className={`fixed left-0 right-0 z-[100] transition-all duration-700 flex justify-center pointer-events-none
        ${scrolled ? "top-6" : "top-0"}`}>
        <div className={`transition-all duration-700 ease-in-out flex justify-between items-center px-10 pointer-events-auto
          ${scrolled 
            ? "w-[92%] md:w-[75%] bg-[#020421]/80 backdrop-blur-3xl border border-white/10 rounded-full py-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)]" 
            : "w-full bg-transparent border-b border-white/5 py-10"}`}>
          
          <img src="https://4bizinternational.com/assets/images/logo/test.png" alt="4Biz" className="h-8 md:h-10" />
          
          <div className="hidden lg:flex gap-14 text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
            {['Expertise', 'Process', 'Global', 'Inquiry'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-all">{item}</a>
            ))}
          </div>

          <button className="bg-white text-black px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all">
            Contact Us
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center px-8 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=100&w=1920" 
            className="w-full h-full object-cover" 
            alt="Global Network" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020421] via-[#020421]/95 to-transparent"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl"
        >
          <div className="inline-block border border-cyan-500/30 px-4 py-1 rounded-full mb-8">
            <p className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-[9px]">4Biz International • UAE</p>
          </div>
          <h1 className="text-6xl md:text-[9.5rem] font-black leading-[0.85] tracking-tighter uppercase italic mb-10">
            DIGITAL <br /> <span className="stroke-text">ARCHITECTS.</span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg leading-relaxed font-light border-l-2 border-cyan-500 pl-8">
            Specializing in high-performance <span className="text-white font-bold">Microsoft Dynamics 365</span> ecosystems and scalable cloud infrastructure for the modern UAE enterprise.
          </p>
        </motion.div>
      </section>

      {/* EXPERTISE SECTION */}
      <section id="expertise" className="py-40 px-8 max-w-[1600px] mx-auto relative z-10">
        <h2 className="text-5xl font-black italic uppercase mb-20 tracking-tighter">
          Strategic <span className="stroke-text">Capabilities.</span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <div key={i} className="group relative bg-[#0a0c2e] border border-white/5 rounded-[40px] overflow-hidden hover:border-cyan-500/50 transition-all duration-700">
              <div className="h-72 overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" alt={item.title} />
              </div>
              <div className="p-10">
                <div className="text-cyan-500 text-3xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 uppercase italic tracking-tighter">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-8">{item.desc}</p>
                <div className="h-[1px] w-12 bg-white/20 group-hover:w-full group-hover:bg-cyan-500 transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY SECTION (Cyberr Style Layout) */}
      <section id="process" className="py-40 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-6xl font-black italic uppercase mb-12 tracking-tighter">Impact <span className="stroke-text">Architecture.</span></h2>
            <div className="space-y-12">
              {[
                { title: "Analysis & Discovery", text: "Deep-dive into existing legacy systems to identify scalability bottlenecks." },
                { title: "Deployment & Integration", text: "Executing Dynamics 365 modules with precision to ensure operational continuity." },
                { title: "Scale & Support", text: "Post-deployment monitoring and cloud optimization for sustained growth." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-10 group">
                  <div className="text-cyan-500 font-black text-xs mt-2 tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">0{idx+1}</div>
                  <div>
                    <h4 className="text-xl font-bold uppercase italic tracking-tighter mb-2 group-hover:text-cyan-400 transition-colors">{step.title}</h4>
                    <p className="text-gray-500 text-md group-hover:text-gray-300 transition-colors">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[60px] overflow-hidden border border-white/10 shadow-3xl">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" alt="Cyber Security" className="grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
        </div>
      </section>

      {/* MAP SECTION: Full Width Original Color */}
      <div className="h-[600px] w-full mt-40 border-t border-white/10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29563674.074689627!2d55.297384!3d25.24208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d3f84a0cd39%3A0x6834edd5ea42e51d!2s4BIZ%20International%20LLC!5e0!3m2!1sen!2sin!4v1771835494052!5m2!1sen!2sin2" 
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <style>{`
        .stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.4); color: transparent; }
        
        /* Smooth scrolling for anchor links */
        html { scroll-behavior: smooth; }

        /* Custom scrollbar to match Cyberr.ai */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #020421; }
        ::-webkit-scrollbar-thumb { background: #00f2ff; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default App;