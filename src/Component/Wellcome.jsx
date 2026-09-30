import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3, Headphones, ShieldCheck, Sparkles } from "lucide-react";

function Wellcome({ onRegisterClick }) {
  return (
    <div className="min-h-screen bg-[#030508] text-white flex items-center justify-center px-6 relative overflow-hidden font-sans">
      
      {/* High-Tech Ambient Glow Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[55%] bg-blue-600/10 rounded-full blur-[150px] animate-pulse duration-[4000ms]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[55%] bg-orange-500/10 rounded-full blur-[150px] animate-pulse duration-[5000ms]"></div>
      </div>

      {/* Futuristic Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0"></div>

      {/* Main Content Layer */}
      <div className="relative z-10 w-full max-w-4xl text-center my-10 py-10">
        
        {/* Top Tech HUD Badge / Logo Container */}
        <div className="flex justify-center mb-8 animate-[fadeInDown_0.8s_ease-out]">
          <div className="relative inline-flex items-center bg-[#080d1a]/90 border border-cyan-500/30 px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:border-orange-500/65 transition-all duration-300 group cursor-pointer backdrop-blur-md">
            
            {/* Tech Corner Accents */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-orange-400"></div>

            <div className="flex items-center text-2xl md:text-3xl font-bold tracking-tight">
              <div className="relative w-9 h-9 flex items-center justify-center mr-2">
                <svg className="w-full h-full transition-transform duration-700 group-hover:rotate-180" viewBox="0 0 100 100">
                  <path d="M50,50 L85,15 A50,50 0 0,0 50,0 Z" fill="#F49E4C" />
                  <path d="M50,50 L50,0 A50,50 0 0,1 100,50 Z" fill="#4392B9" opacity="0" />
                  <path d="M50,50 L100,50 A50,50 0 0,1 85,85 Z" fill="#EA7317" />
                  <path d="M50,50 L85,85 A50,50 0 0,1 15,85 Z" fill="#2E7DAF" />
                  <path d="M50,50 L15,85 A50,50 0 0,1 0,50 Z" fill="#1C5E8A" />
                  <path d="M50,50 L0,50 A50,50 0 0,1 15,15 Z" fill="#4392B9" />
                  <path d="M50,50 L15,15 A50,50 0 0,1 50,0 Z" fill="#69B3E7" />
                  <circle cx="50" cy="50" r="30" fill="#030508" />
                  <path d="M50,50 L65,35 A20,20 0 0,0 50,30 Z" fill="#F49E4C" />
                  <path d="M50,50 L50,30 A20,20 0 0,1 70,50 Z" fill="#4392B9" />
                  <path d="M50,50 L70,50 A20,20 0 0,1 65,65 Z" fill="#EA7317" />
                  <path d="M50,50 L65,65 A20,20 0 0,1 35,65 Z" fill="#2E7DAF" />
                  <path d="M50,50 L35,65 A20,20 0 0,1 30,50 Z" fill="#1C5E8A" />
                  <path d="M50,50 L30,50 A20,20 0 0,1 35,35 Z" fill="#69B3E7" />
                </svg>
              </div>

              <span className="text-orange-400 font-extrabold tracking-tight">
                y<span className="text-cyan-400">brom</span>
              </span>
            </div>

            <div className="h-7 w-[1px] bg-white/15 mx-4"></div>

            <div className="text-left flex flex-col justify-center gap-0.5">
              <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] text-cyan-300 uppercase leading-tight">
                TECHNOLOGY
              </span>
              <span className="text-[9px] md:text-[10px] text-gray-400 font-medium tracking-wider">
                SYS. v2.6
              </span>
            </div>
          </div>
        </div>

        {/* HUD Subtitle Badge */}
        <div className="inline-block mb-4 animate-[fadeInUp_0.9s_ease-out]">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 uppercase tracking-[0.25em] text-[11px] md:text-xs font-semibold shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-sm bg-cyan-400 animate-ping"></span>
            Student Support Portal // SECURE_NODE
          </span>
        </div>

        {/* Main Headings */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-5 leading-tight animate-[fadeInUp_1s_ease-out]">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 drop-shadow-[0_0_25px_rgba(244,158,76,0.3)]">Cybrom</span>
        </h1>

        <h2 className="text-xl md:text-3xl text-gray-200 font-semibold mb-6 tracking-tight animate-[fadeInUp_1.1s_ease-out]">
          Have a Problem? We're Here to Solve It.
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-base leading-8 mb-10 px-4 animate-[fadeInUp_1.2s_ease-out]">
          Share your problem with us. Our engineering team will review your complaint and deploy a fix within{" "}
          <span className="text-cyan-400 font-bold tracking-wide underline decoration-orange-500 decoration-2 underline-offset-4">24 hours</span>.
        </p>

        {/* Tech Activation CTA Link/Button */}
        <div className="mb-14 flex justify-center animate-[fadeInUp_1.3s_ease-out]">
          <Link
            to="/ComplaintForm"
            onClick={onRegisterClick}
            className="group relative inline-flex items-center gap-3.5
            bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600
            text-black font-extrabold text-base md:text-lg
            px-10 py-4.5 rounded-lg
            transition-all duration-300
            shadow-[0_0_25px_rgba(244,158,76,0.3)] hover:shadow-[0_0_35px_rgba(244,158,76,0.5)]
            hover:scale-105 active:scale-95 cursor-pointer overflow-hidden border border-amber-300/40"
          >
            {/* Shimmer light pass */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-30deg] -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700"></div>

            <Sparkles size={18} className="text-black animate-spin" style={{ animationDuration: '6s' }} />
            <span className="relative z-10 tracking-wider uppercase text-sm md:text-base">
              Register Your Complaint
            </span>
            <ArrowRight
              size={20}
              className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 text-black"
            />
          </Link>
        </div>

        {/* Tech Cards Grid with HUD Corners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto px-2 animate-[fadeInUp_1.4s_ease-out]">
          
          {/* Card 1 */}
          <div className="relative border border-cyan-500/20 bg-[#080d1a]/80 rounded-xl p-6 text-left transition-all duration-300 hover:border-cyan-400/60 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group backdrop-blur-md">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400"></div>
            
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-400 border border-cyan-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Clock3 size={22} className="animate-spin" style={{ animationDuration: '10s' }} />
              </div>
              <h3 className="font-bold text-white text-lg tracking-wide">Quick Response</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed pl-1 tracking-tight">
              Complaint review within 24 hours with dedicated tech support dispatch.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative border border-orange-500/20 bg-[#080d1a]/80 rounded-xl p-6 text-left transition-all duration-300 hover:border-orange-400/60 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(244,158,76,0.15)] group backdrop-blur-md">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-400"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-400"></div>

            <div className="flex items-center gap-4 mb-3">
              <div className="bg-orange-500/10 p-3 rounded-lg text-orange-400 border border-orange-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                <Headphones size={22} className="animate-bounce" style={{ animationDuration: '3s' }} />
              </div>
              <h3 className="font-bold text-white text-lg tracking-wide">Student Support</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed pl-1 tracking-tight">
              Direct assistance for technical queries, coding bugs, and academic assistance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative border border-cyan-500/20 bg-[#080d1a]/80 rounded-xl p-6 text-left transition-all duration-300 hover:border-cyan-400/60 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group backdrop-blur-md">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400"></div>

            <div className="flex items-center gap-4 mb-3">
              <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-400 border border-cyan-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <ShieldCheck size={22} className="animate-pulse" />
              </div>
              <h3 className="font-bold text-white text-lg tracking-wide">Easy Complaint</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed pl-1 tracking-tight">
              Encrypted, simple, and secure ticket submission workflow interface.
            </p>
          </div>

        </div>

        {/* Footer Note */}
        <div className="flex justify-center items-center gap-2 mt-12 text-xs text-gray-500 tracking-wider animate-[fadeInUp_1.5s_ease-out]">
           <div className="h-2 w-2 bg-cyan-400 rounded-sm animate-ping"></div>
           <span>CYBROM TECHNOLOGY PVT. LTD. // ALL RIGHTS RESERVED</span>
        </div>

      </div>

      {/* Smooth Entrance Keyframe Animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Wellcome;