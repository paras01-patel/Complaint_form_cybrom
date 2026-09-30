import React, { useEffect, useState } from "react";
import { Sparkles, ShieldCheck, Clock, Hash } from "lucide-react";

function ThankYouPage({ userName = "Student", ticketNumber = null }) {
  const [randomId, setRandomId] = useState("");

  useEffect(() => {
    // Generate a random ticket ID if not provided via props
    if (!ticketNumber) {
      const generated = Math.floor(100000 + Math.random() * 900000);
      setRandomId(`CYB-${generated}`);
    } else {
      setRandomId(ticketNumber);
    }
  }, [ticketNumber]);

  return (
    <div className="min-h-screen bg-[#05070b] text-white flex items-center justify-center px-4 py-12 relative overflow-hidden font-sans">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[70%] bg-blue-600/10 rounded-full blur-[130px] opacity-70"></div>
      </div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[60%] bg-red-600/20 rounded-full blur-[150px] opacity-90 pointer-events-none z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-xl mx-auto text-center">
        
        {/* Logo Container */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-[#0d121c]/90 border border-white/10 px-4 py-2.5 rounded-xl backdrop-blur-lg shadow-xl hover:border-blue-500/20 transition-all">
            <div className="flex items-center text-xl md:text-2xl font-bold tracking-tight gap-1">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg className="w-full h-full drop-shadow-md" viewBox="0 0 100 100">
                  <path d="M50,50 L85,15 A50,50 0 0,0 50,0 Z" fill="#F49E4C" />
                  <path d="M50,50 L100,50 A50,50 0 0,1 85,85 Z" fill="#EA7317" />
                  <path d="M50,50 L85,85 A50,50 0 0,1 15,85 Z" fill="#2E7DAF" />
                  <path d="M50,50 L15,85 A50,50 0 0,1 0,50 Z" fill="#1C5E8A" />
                  <path d="M50,50 L0,50 A50,50 0 0,1 15,15 Z" fill="#4392B9" />
                  <path d="M50,50 L15,15 A50,50 0 0,1 50,0 Z" fill="#69B3E7" />
                  <circle cx="50" cy="50" r="30" fill="#05070b" />
                  <path d="M50,50 L65,35 A20,20 0 0,0 50,30 Z" fill="#F49E4C" />
                  <path d="M50,50 L50,30 A20,20 0 0,1 70,50 Z" fill="#4392B9" />
                  <path d="M50,50 L70,50 A20,20 0 0,1 65,65 Z" fill="#EA7317" />
                  <path d="M50,50 L65,65 A20,20 0 0,1 35,65 Z" fill="#2E7DAF" />
                  <path d="M50,50 L35,65 A20,20 0 0,1 30,50 Z" fill="#1C5E8A" />
                  <path d="M50,50 L30,50 A20,20 0 0,1 35,35 Z" fill="#69B3E7" />
                </svg>
              </div>
              <span className="text-orange-400 font-extrabold tracking-tight">
                y<span className="text-[#0092ff]">brom</span>
              </span>
            </div>

            <div className="h-6 w-[1px] bg-white/20 mx-3"></div>

            <div className="text-left flex flex-col justify-center gap-0.5">
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-gray-200 uppercase leading-tight">
                TECHNOLOGY
              </span>
              <span className="text-[8px] md:text-[9px] text-gray-400 font-medium">
                Pvt. Ltd.
              </span>
            </div>
          </div>
        </div>

        {/* Thank You Card */}
        <div className="bg-[#0d121c]/80 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

          {/* Animated SVG Drawing Checkmark Icon */}
          <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
            
            <div className="relative w-20 h-20 bg-gradient-to-tr from-orange-500/20 to-amber-500/30 border border-orange-500/40 rounded-full flex items-center justify-center shadow-xl">
              <svg 
                className="w-10 h-10 text-orange-400 drop-shadow-md" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path 
                  d="M20 6L9 17l-5-5" 
                  className="animate-[draw_1s_ease-in-out_forwards]"
                  style={{
                    strokeDasharray: 30,
                    strokeDashoffset: 30,
                    animation: 'drawIcon 1s ease forwards 0.3s'
                  }}
                />
              </svg>
            </div>
          </div>

          {/* Inline CSS Keyframe Style for Drawing Effect */}
          <style>{`
            @keyframes drawIcon {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={14} /> Submission Successful
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
            Thank You, <span className="text-orange-500">{userName}!</span>
          </h1>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-md mx-auto">
            We have successfully received your form submission. Our support team is reviewing your details and will connect with you shortly.
          </p>

          {/* Added Information Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left">
            
            {/* Ticket Box */}
            <div className="bg-[#05070b]/60 border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                <Hash size={18} />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-semibold">Reference ID</span>
                <span className="text-xs md:text-sm font-bold text-white tracking-wide truncate">{randomId}</span>
              </div>
            </div>

            {/* Response Time Box */}
            <div className="bg-[#05070b]/60 border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-semibold">Response Time</span>
                <span className="text-xs md:text-sm font-bold text-white tracking-wide">Within 24 Hours</span>
              </div>
            </div>

          </div>

          {/* Secure System Badge */}
          <div className="bg-[#05070b]/40 border border-white/5 rounded-xl py-3 px-4 text-xs text-gray-400 flex items-center justify-center gap-2">
            <ShieldCheck size={15} className="text-green-400" />
            <span>Your data is securely encrypted & logged with Cybrom Support.</span>
          </div>

        </div>

        {/* Footer Note */}
        <div className="text-center mt-10 text-xs text-gray-600">
          <span>© 2026 Cybrom Technology Pvt. Ltd. All rights reserved.</span>
        </div>

      </div>
    </div>
  );
}

export default ThankYouPage;