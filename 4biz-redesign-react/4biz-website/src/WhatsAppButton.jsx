import React from "react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex items-center group">
      
      {/* --- MODERN SLIDE-OUT LABEL --- */}
      <span className="mr-4 px-5 py-2.5 bg-black/60 backdrop-blur-xl border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out pointer-events-none shadow-2xl">
        Chat with us
      </span>

      {/* --- OPTIMIZED BUTTON --- */}
      <a
        href="https://wa.me/971527925100?text=Hello! I'd like to inquire about your services."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-[0_15px_35px_rgba(37,211,102,0.3)] transition-all duration-700 hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95"
      >
        {/* --- DUAL LAYER SLOW PULSE --- */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-slow-ping pointer-events-none"></div>
        <div className="absolute inset-0 rounded-full border border-[#25D366]/50 animate-slow-ping-delayed pointer-events-none"></div>
        
        {/* --- ICON --- */}
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white z-10 drop-shadow-md transition-transform duration-700 group-hover:rotate-[360deg]">
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825.737 5.48 2.025 7.78l-2.025 7.395 7.58-1.99c2.35 1.4 5.08 2.215 8.02 2.215 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.355c-2.585 0-4.99-.745-7.035-2.035l-.505-.315-4.485 1.175 1.2-4.385-.35-.555c-1.425-2.275-2.18-4.91-2.18-7.64 0-7.72 6.28-14 14-14s14 6.28 14 14-6.28 14-14 14zM22.9 19.33c-.385-.195-2.275-1.12-2.625-1.245s-.605-.195-.855.195-.975 1.245-1.195 1.5-.445.285-.83.09c-.385-.195-1.63-.6-3.105-1.915-1.145-1.025-1.92-2.29-2.145-2.675s-.025-.595.17-.79c.175-.175.385-.45.58-.675.19-.22.255-.385.385-.64s.065-.48-.035-.675-.855-2.065-1.17-2.825c-.305-.745-.615-.645-.855-.655s-.485-.015-.745-.015-.675.1-1.03.495c-.35.395-1.345 1.315-1.345 3.205s1.375 3.715 1.57 3.975c.195.255 2.705 4.13 6.55 5.79.915.39 1.63.625 2.185.8 1.015.32 1.935.275 2.665.165.815-.12 2.275-.93 2.59-1.83.315-.895.315-1.66.22-1.825-.095-.175-.35-.275-.735-.47z" />
        </svg>
      </a>

      {/* --- KEYFRAME ANIMATIONS --- */}
      <style>{`
        @keyframes slowPing {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .animate-slow-ping {
          animation: slowPing 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-slow-ping-delayed {
          animation: slowPing 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;