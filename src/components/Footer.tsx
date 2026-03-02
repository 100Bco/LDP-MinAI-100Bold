import { Bot, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <Bot className="w-5 h-5 text-minai-blue" />
              <span className="font-display font-bold">MinAI</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <Zap className="w-5 h-5 text-bold-red" />
              <span className="font-display font-bold">100Bold</span>
            </div>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
