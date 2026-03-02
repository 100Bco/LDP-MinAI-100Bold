import { motion } from 'motion/react';
import { Bot, Zap } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-white/90 border-b border-slate-200 shadow-sm"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-minai-blue rounded-lg flex items-center justify-center shadow-md shadow-blue-200">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <span className="text-minai-navy font-display font-bold text-xl tracking-wider">MinAI</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-black font-display font-bold text-xl tracking-wider">100Bold</span>
        <div className="w-8 h-8 bg-bold-red rounded-full flex items-center justify-center shadow-md shadow-red-200">
          <Zap className="w-5 h-5 text-white fill-white" />
        </div>
      </div>
    </motion.header>
  );
}
