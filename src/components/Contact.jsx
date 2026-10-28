import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(e.target);
    // እዚህ ጋር ከ Web3Forms በኢሜይል የተላከልህን Access Key አስገባ
    formData.append("access_key", "e07941c7-f036-4bf2-9953-155f5fb7f935");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message Sent Successfully! 🎉");
        e.target.reset(); // ፎርሙን ባዶ ያደርገዋል
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
    
    // ከ 3 ሴኮንድ በኋላ መልዕክቱን ያጠፋዋል
    setTimeout(() => setStatus(""), 3000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-20 px-8 bg-slate-50 min-h-[90vh] flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
            Let's <span className="text-blue-600">Connect</span>
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-md leading-relaxed">
            Whether you have a project in mind, need a custom software solution, or just want to say hi, my inbox is always open.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl shadow-sm">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Me</p>
                <a href="mailto:tmastewal908@gmail.com" className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors">
                  tmastewal908@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl shadow-sm">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                <p className="text-xl font-bold text-slate-800">Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl shadow-sm">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Call Me</p>
                <p className="text-xl font-bold text-slate-800">+251 995188679</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 relative"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Send me a Message</h3>
          
          {/* onSubmit ፎርሙ ሲላክ handleSubmit ሎጂክን ይጠራል */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
              {/* name="name" እና required ታክሏል */}
              <input type="text" name="name" required placeholder="John Doe" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              {/* name="email" እና required ታክሏል */}
              <input type="email" name="email" required placeholder="john@example.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
              {/* name="message" እና required ታክሏል */}
              <textarea name="message" required placeholder="How can I help you?" rows="4" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"></textarea>
            </div>
            
            {/* type="submit" ሆኗል */}
            <button type="submit" disabled={status === "Sending..."} className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-700 transition-all hover:scale-[1.02] shadow-lg shadow-blue-200 disabled:bg-blue-400">
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {/* የመልዕክት መላኩን ስኬት (Success Message) ማሳያ */}
            {status && status !== "Sending..." && (
              <p className={`text-center font-bold mt-4 ${status.includes("Successfully") ? "text-green-600" : "text-red-600"}`}>
                {status}
              </p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}