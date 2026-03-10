import { motion } from 'motion/react';
// Vẫn giữ "Zap" ở đây vì nó được dùng trong phần Key Figures bên dưới
import { Zap, Users, ShieldCheck, ArrowRight, Play } from 'lucide-react';

export default function BoldSection() {
  return (
    <section className="relative min-h-screen bg-white text-black overflow-hidden pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6 shadow-sm">
            {/* --- THAY ĐỔI Ở ĐÂY: Dùng thẻ img thay cho icon Zap --- */}
            <img 
              src="/images/Icon%202.png" 
              alt="100Bold Brand" 
              className="w-5 h-5 object-contain"
            />
            <span className="text-bold-red text-sm font-medium tracking-wide uppercase">The Brand</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-display tracking-tight text-black">
            Start Brave. <br/><span className="text-bold-red">Stay Bold.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We turn strategy into <span className="text-black font-bold border-b-2 border-red-200">stories</span>. Stories into <span className="text-black font-bold border-b-2 border-red-200">influence</span>. Influence into <span className="text-black font-bold border-b-2 border-red-200">growth</span>.
          </p>
        </motion.div>

        {/* Key Figures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: Users, label: "Partner Companies", value: "25+", sub: "Trusted by industry leaders" },
            { icon: ShieldCheck, label: "Revenue Generated", value: "8-9 Figure", sub: "Combined client value" },
            // Icon Zap vẫn được sử dụng ở đây
            { icon: Zap, label: "Experience", value: "100+", sub: "Headcount managed" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-4 group-hover:border-red-100 transition-colors shadow-sm">
                <stat.icon className="w-6 h-6 text-bold-red" />
              </div>
              <h3 className="text-4xl font-bold text-black mb-1 font-display">{stat.value}</h3>
              <p className="text-slate-600 font-medium mb-1">{stat.label}</p>
              <p className="text-sm text-slate-400">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Video Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden aspect-video bg-slate-100 border border-slate-200 shadow-2xl mb-16 group cursor-pointer ring-1 ring-black/5"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
          
          {/* Placeholder for Video */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Play className="w-8 h-8 text-bold-red fill-bold-red ml-1" />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <h3 className="text-2xl font-bold text-white mb-2 font-display drop-shadow-md">See The Brand In Action</h3>
            <p className="text-white/90 font-medium drop-shadow-md">Watch how we elevate your business identity.</p>
          </div>
          
          {/* Abstract Branding Mockup Background */}
          <div className="absolute inset-0 opacity-100">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125" />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <a 
            href="https://100bold.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-bold-red hover:bg-red-800 text-white font-bold rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-red-500/30"
          >
            Visit 100Bold Website
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-slate-500 text-sm font-medium">Elevate your brand today.</p>
        </motion.div>
      </div>
    </section>
  );
}
