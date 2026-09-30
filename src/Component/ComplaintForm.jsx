import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, CheckCircle2, Clock } from "lucide-react";

function ComplaintForm({ onBackClick }) {
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    batchTiming: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#05070b] text-white flex items-center justify-center px-4 py-12 relative overflow-hidden font-sans">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[70%] bg-blue-600/10 rounded-full blur-[130px] opacity-70"></div>
      </div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[60%] bg-red-600/20 rounded-full blur-[150px] opacity-90 pointer-events-none z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-3xl my-auto">
        
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8 px-2 flex-wrap gap-4">
          
          {/* Exact Logo Container from Wellcome Component */}
          <div className="inline-flex items-center bg-[#0d121c]/90 border border-white/10 px-4 py-2.5 rounded-xl backdrop-blur-lg shadow-xl hover:border-blue-500/20 transition-all">
            
            {/* Cybrom Logo Match */}
            <div className="flex items-center text-xl md:text-2xl font-bold tracking-tight gap-1">
              
              {/* Exact Segmented Multi-color 'C' Icon */}
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

              {/* ybrom text */}
              <span className="text-orange-400 font-extrabold tracking-tight">
                y<span className="text-[#0092ff]">brom</span>
              </span>
            </div>

            {/* Vertical Line */}
            <div className="h-6 w-[1px] bg-white/20 mx-3"></div>

            {/* Technology Pvt. Ltd. */}
            <div className="text-left flex flex-col justify-center gap-0.5">
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-gray-200 uppercase leading-tight">
                TECHNOLOGY
              </span>
              <span className="text-[8px] md:text-[9px] text-gray-400 font-medium">
                Pvt. Ltd.
              </span>
            </div>
          </div>

          {/* Back Button */}
          {onBackClick ? (
            <button
              onClick={onBackClick}
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white bg-[#0d121c]/60 border border-white/10 px-3.5 py-2.5 rounded-xl transition-all hover:border-orange-500/35 cursor-pointer"
            >
              <ArrowLeft size={15} />
              Back to Home
            </button>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white bg-[#0d121c]/60 border border-white/10 px-3.5 py-2.5 rounded-xl transition-all hover:border-orange-500/35 cursor-pointer"
            >
              <ArrowLeft size={15} />
              Back to Home
            </Link>
          )}
        </div>

        {/* Form Card Container */}
        <div className="bg-[#0d121c]/80 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl relative">
          
          {!submitted ? (
            <div>
              <div className="mb-8 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2 text-white">
                  Register Your <span className="text-orange-500">Complaint</span>
                </h1>
                <p className="text-gray-400 text-xs md:text-sm">
                  Please fill out the form below. Our team will review your issue and respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Full Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full bg-[#05070b] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/60 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Email Address <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full bg-[#05070b] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/60 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Mobile Number & Course */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Mobile Number <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#05070b] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/60 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Course / Batch <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      placeholder="e.g. Full Stack / Evening Batch"
                      className="w-full bg-[#05070b] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/60 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Class Timing */}
                <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                       Preferred / Current Class Timing <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                        <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                        <input
                          type="text"
                          name="batchTiming"
                          required
                          value={formData.batchTiming}
                          onChange={handleChange}
                          placeholder="e.g. 10:00 AM - 1:00 PM or Mon/Wed/Fri"
                          className="w-full bg-[#05070b] border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/60 transition-all"
                        />
                    </div>
                </div>

                {/* Row 4: Detailed Description */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Describe Your Problem <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    rows="4"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Provide details about your issue so our team can resolve it quickly..."
                    className="w-full bg-[#05070b] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/60 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2.5
                    bg-orange-500 hover:bg-orange-400
                    text-black font-bold text-sm md:text-base
                    py-4 rounded-xl
                    transition-all duration-300
                    shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 cursor-pointer"
                  >
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    Submit Complaint
                  </button>
                </div>

              </form>
            </div>
          ) : (
            /* Success State Message */
            <div className="text-center py-16 px-4">
              <div className="w-20 h-20 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20 shadow-lg">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-3">Complaint Registered!</h2>
              <p className="text-gray-400 text-base max-w-md mx-auto mb-10">
                Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Your ticket has been logged. Our support team will review it and contact you within <span className="text-orange-400 font-semibold">24 hours</span>.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#141b29] hover:bg-[#1a2336] text-white font-semibold text-sm px-8 py-4 rounded-xl border border-white/10 transition-all cursor-pointer"
                >
                  Register Another
                </button>
                {onBackClick ? (
                  <button
                    onClick={onBackClick}
                    className="bg-orange-500 hover:bg-orange-400 text-black font-semibold text-sm px-8 py-4 rounded-xl transition-all cursor-pointer"
                  >
                    Go to Home
                  </button>
                ) : (
                  <Link
                    to="/"
                    className="bg-orange-500 hover:bg-orange-400 text-black font-semibold text-sm px-8 py-4 rounded-xl transition-all cursor-pointer inline-flex items-center justify-center"
                  >
                    Go to Home
                  </Link>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Footer Note */}
        <div className="text-center mt-10 text-xs text-gray-600">
          <span>© 2026 Cybrom Technology Pvt. Ltd. All rights reserved.</span>
        </div>

      </div>
    </div>
  );
}

export default ComplaintForm;