import { motion } from 'motion/react';
// Đã loại bỏ "Bot" khỏi import vì không còn dùng
import { MessageSquare, TrendingUp, Clock, ArrowRight, Play } from 'lucide-react';

export default function MinAISection() {
  return (
    <section className="relative min-h-screen bg-slate-50 text-minai-navy overflow-hidden pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
            {/* --- THAY ĐỔI Ở ĐÂY: Dùng thẻ img thay cho icon Bot --- */}
            <img 
              src="/images/Icon%201.png" 
              alt="MinAI Engine" 
              className="w-5 h-5 object-contain"
            />
            <span className="text-minai-blue text-sm font-medium tracking-wide uppercase">The Engine</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-minai-navy font-display tracking-tight">
            Infrastructure for <br/><span className="text-minai-blue">Growth</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We install the proven growth infrastructure that allows you to <span className="text-minai-navy font-semibold bg-blue-50 px-1 rounded">3x your revenue</span> while saving you <span className="text-minai-navy font-semibold bg-blue-50 px-1 rounded">5 hours+ per week</span> of headache.
          </p>
        </motion.div>

        {/* Key Figures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: Clock, label: "Response Time", value: "Instant", sub: "70% reply within 24h" },
            { icon: TrendingUp, label: "Revenue Growth", value: "+30%", sub: "Average increase" },
            { icon: MessageSquare, label: "Engagement", value: "87%", sub: "Prefer text over email" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <stat.icon className="w-6 h-6 text-minai-blue" />
              </div>
              <h3 className="text-4xl font-bold text-minai-navy mb-1 font-display">{stat.value}</h3>
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
          className="relative rounded-3xl overflow-hidden aspect-video bg-white border border-slate-200 shadow-xl mb-16 group cursor-pointer ring-1 ring-slate-900/5"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />
          
          {/* Placeholder for Video */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Play className="w-8 h-8 text-minai-blue fill-minai-blue ml-1" />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <h3 className="text-2xl font-bold text-white mb-2 font-display">See The System In Action</h3>
            <p className="text-blue-50">Watch how we automate your entire sales process.</p>
          </div>
          
          {/* Abstract UI Mockup Background */}
          <div className="absolute inset-0 opacity-90">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1642132652075-2d43371d533d?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center grayscale-[20%]" />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <a 
            href="https://minai.biz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-minai-blue hover:bg-blue-700 text-white font-bold rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            Visit MinAI Website
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-slate-500 text-sm font-medium">Automate your business today.</p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2 cursor-pointer hover:text-minai-blue transition-colors"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll for Brand</span>
          <ArrowRight className="w-4 h-4 rotate-90" />
        </motion.div>
      </div>
    </section>
  );
}
