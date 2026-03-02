import { motion, useScroll, useTransform } from "motion/react";
import React, { useState } from "react";
import {
  Cpu, Activity, Zap,
  Video, TrendingUp, Radio,
  Play, ArrowRight, CheckCircle2, ChevronRight
} from "lucide-react";
import { useCreateLead } from "./hooks/use-leads";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 overflow-hidden font-sans">
      {/* Background cinematic grid */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-cinematic opacity-30" />

      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-between">
        <div className="w-[40vw] h-[100vh] bg-blue-500/5 blur-[120px] rounded-full mix-blend-multiply transform -translate-x-1/2" />
        <div className="w-[40vw] h-[100vh] bg-red-500/5 blur-[120px] rounded-full mix-blend-multiply transform translate-x-1/2" />
      </div>

      <main className="relative z-10">
        <HeroSection y={yHero} opacity={opacityHero} />
        <EcosystemSection />
        <BreakdownSection />
        <FiguresSection />
        <VideoShowcaseSection />
        <CtaSection />
      </main>
    </div>
  );
}

// --- Sections ---

function HeroSection({ y, opacity }: { y: any, opacity: any }) {
  return (
    <motion.section
      style={{ y, opacity }}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-6 lg:px-12"
    >
      {/* Animated Streams into Center - REMOVED */}

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-20 md:mb-12 relative z-20 gap-12 md:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-48 md:w-72 flex items-center justify-center"
        >
          {/* MinAI Logo */}
          <div className="w-44 md:w-56 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 shadow-lg shadow-blue-500/10 flex items-center justify-center">
            <img src="/images/minai-logo.png" alt="MinAI" className="h-14 w-auto object-contain" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-48 md:w-72 flex items-center justify-center"
        >
          {/* 100Bold Logo */}
          <div className="w-44 md:w-56 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-red-100 shadow-lg shadow-red-500/10 flex items-center justify-center">
            <img src="/images/100bold-logo.png" alt="100Bold" className="h-14 w-auto object-contain" />
          </div>
        </motion.div>
      </div>

      {/* Marquee Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-7xl mx-auto mb-16 relative z-20 overflow-hidden"
      >
        <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
          OUR CUSTOMERS
        </p>

        <div className="relative w-full overflow-hidden mask-image-gradient">
          <div className="flex w-max animate-marquee items-center">
            {/* First Set */}
            {[
              { src: "/images/customer-dacy.jpg", alt: "Dacy Business Park" },
              { src: "/images/customer-lt-commercial.png", alt: "LT Commercial Group" },
              { src: "/images/customer-dang-law.png", alt: "Dang Law Group" },
              { src: "/images/customer-t98.png", alt: "T98 Rehab & Chiropractic" },
              { src: "/images/customer-bee-construction.jpg", alt: "Bee Construction Inc" },
              { src: "/images/100B - TACH NEN -2 (1).png", alt: "100B" },
              { src: "/images/areaa_AUSTIN2025-03.png", alt: "Austin AREAA" },
            ].map((logo, i) => (
              <div key={i} className="flex items-center justify-center mx-12 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto max-w-[140px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 cursor-default"
                />
              </div>
            ))}
            {/* Duplicate Set for seamless loop */}
            {[
              { src: "/images/customer-dacy.jpg", alt: "Dacy Business Park" },
              { src: "/images/customer-lt-commercial.png", alt: "LT Commercial Group" },
              { src: "/images/customer-dang-law.png", alt: "Dang Law Group" },
              { src: "/images/customer-t98.png", alt: "T98 Rehab & Chiropractic" },
              { src: "/images/customer-bee-construction.jpg", alt: "Bee Construction Inc" },
              { src: "/images/100B - TACH NEN -2 (1).png", alt: "100B" },
              { src: "/images/areaa_AUSTIN2025-03.png", alt: "Austin AREAA" },
            ].map((logo, i) => (
              <div key={`dup-${i}`} className="flex items-center justify-center mx-12 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto max-w-[140px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 cursor-default"
                />
              </div>
            ))}
          </div>

          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-center max-w-5xl mx-auto relative z-20"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-8">
          <span className="block text-slate-900">INFRASTRUCTURE</span>

          {/* Animated Streams Between Text */}
          <div className="relative w-full h-[2px] my-4 md:my-6 bg-slate-100/50 overflow-hidden">
            <motion.div
              initial={{ left: "0%", opacity: 0 }}
              animate={{ left: "45%", opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-1/3 md:w-1/4 bg-gradient-to-r from-transparent to-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            />
            <motion.div
              initial={{ right: "0%", opacity: 0 }}
              animate={{ right: "45%", opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-1/3 md:w-1/4 bg-gradient-to-l from-transparent to-red-600 shadow-[0_0_15px_rgba(204,0,0,0.5)]"
            />
          </div>

          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-500">
            FOR GROWTH
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-500 font-light max-w-2xl mx-auto px-4">
          AI Automation Systems <span className="text-blue-600">×</span> Brand & Content Growth
        </p>
      </motion.div>
    </motion.section>
  );
}

function EcosystemSection() {
  return (
    <section className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-sm uppercase tracking-widest">
            The Core Concept
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">
            Ecosystem Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">Dominance</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

function BreakdownSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* MinAI Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group bg-white border border-slate-200 rounded-3xl p-6 md:p-12 relative overflow-hidden transition-all duration-500 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5"
          >
            {/* Visual background */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPHBhdGggZD0iTTAgMGwyMCAyME0yMCAwbC0yMCAyMCIgc3Ryb2tlPSIjMjU2M0VCIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 border border-blue-100 group-hover:scale-110 transition-transform duration-500">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold mb-2 text-slate-900">MINAI</h2>
              <p className="text-xl text-blue-600 font-medium mb-10">Done-For-You AI Systems That Close Deals</p>

              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
                {[
                  { icon: Activity, title: "CAPTURE", desc: "Missed call text-back & instant lead engagement." },
                  { icon: Zap, title: "FOLLOW UP", desc: "Automated nurture sequences that run while you sleep." },
                  { icon: TrendingUp, title: "REPLACE", desc: "One platform replaces ~$900/mo of disconnected tools." }
                ].map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex gap-4 items-start">
                    <div className="mt-1 bg-blue-50 p-2 rounded-lg border border-blue-100 shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-display text-xl tracking-wide text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* 100BOLD Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group bg-white border border-slate-200 rounded-3xl p-6 md:p-12 relative overflow-hidden transition-all duration-500 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/5"
          >
            {/* Visual background */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-red-600/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-64 h-64 bg-red-600/5 blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-8 border border-red-100 group-hover:scale-110 transition-transform duration-500">
                <Video className="w-8 h-8 text-red-600" />
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold mb-2 text-slate-900">100BOLD</h2>
              <p className="text-xl text-red-600 font-medium mb-10">Start Brave. Stay Bold.</p>

              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
                {[
                  { icon: CheckCircle2, title: "BRAND", desc: "Visual identity & positioning for category leaders." },
                  { icon: Play, title: "CONTENT", desc: "High-volume short-form video systems." },
                  { icon: Radio, title: "DOMINATE", desc: "Paid distribution to own your market share." }
                ].map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex gap-4 items-start">
                    <div className="mt-1 bg-red-50 p-2 rounded-lg border border-red-100 shrink-0">
                      <item.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-display text-xl tracking-wide text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function FiguresSection() {
  return (
    <section className="py-16 md:py-24 relative z-20 border-y border-slate-100 mt-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-200/50 md:divide-x-0">

          {/* MinAI Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center px-2 md:px-4"
          >
            <h4 className="text-3xl md:text-5xl font-display font-bold text-blue-600 mb-2">50+</h4>
            <p className="font-bold text-slate-900 uppercase tracking-wide mb-1 text-xs md:text-base">Tech Partners</p>
            <p className="text-slate-500 text-[10px] md:text-sm leading-tight">Google · Meta · GoDaddy · Stripe · Twilio · OpenAI</p>
          </motion.div>

          {/* MinAI Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center px-2 md:px-4"
          >
            <h4 className="text-3xl md:text-5xl font-display font-bold text-blue-600 mb-2">10+</h4>
            <p className="font-bold text-slate-900 uppercase tracking-wide mb-1 text-xs md:text-base">Industries Served</p>
            <p className="text-slate-500 text-[10px] md:text-sm leading-tight">Real Estate, Brokerages, Local Service, Law Firms...</p>
          </motion.div>

          {/* 100Bold Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center px-2 md:px-4"
          >
            <h4 className="text-3xl md:text-5xl font-display font-bold text-red-600 mb-2">25+</h4>
            <p className="font-bold text-slate-900 uppercase tracking-wide mb-1 text-xs md:text-base">Companies Served</p>
            <p className="text-slate-500 text-[10px] md:text-sm leading-tight">Generating 8- to 9-figure revenues annually.</p>
          </motion.div>

          {/* 100Bold Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center px-2 md:px-4"
          >
            <h4 className="text-3xl md:text-5xl font-display font-bold text-red-600 mb-2">8-9</h4>
            <p className="font-bold text-slate-900 uppercase tracking-wide mb-1 text-xs md:text-base">Figure Revenue</p>
            <p className="text-slate-500 text-[10px] md:text-sm leading-tight">We think like business owners, not vendors</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function VideoShowcaseSection() {
  return (
    <section className="py-32 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900">See The Engines At Work</h2>
          <p className="text-slate-500 text-lg">Watch how top operators utilize our systems.</p>
        </motion.div>

        <div className="space-y-24">

          {/* MinAI Demo */}
          <div>
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900">MinAI System Demo</h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative aspect-video bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-blue-500/5 transition-opacity duration-500" />

              <div className="relative z-10 w-24 h-24 rounded-full bg-white/80 border border-slate-200 flex items-center justify-center backdrop-blur-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 group-hover:scale-110 shadow-lg">
                <Play className="w-10 h-10 text-slate-600 ml-1 group-hover:text-white transition-colors" />
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-3 w-1/3 bg-slate-200 rounded-full mb-4" />
                <div className="h-3 w-1/4 bg-slate-100 rounded-full" />
              </div>

              <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-lg border border-slate-200 text-sm font-semibold tracking-wider flex items-center gap-2 text-blue-600 shadow-sm">
                <Cpu className="w-4 h-4" /> System Walkthrough
              </div>
            </motion.div>
          </div>

          {/* 100Bold Demos */}
          <div>
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <div className="p-2 bg-red-50 rounded-lg border border-red-100">
                <Video className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900">100Bold Content Examples</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative aspect-[9/16] bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500 hover:border-red-300 hover:shadow-xl hover:shadow-red-500/10"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite_reverse]" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-red-500/5 transition-opacity duration-500" />

                  <div className="relative z-10 w-16 h-16 rounded-full bg-white/80 border border-slate-200 flex items-center justify-center backdrop-blur-sm group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500 group-hover:scale-110 shadow-lg">
                    <Play className="w-6 h-6 text-slate-600 ml-1 group-hover:text-white transition-colors" />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="h-2 w-2/3 bg-slate-200 rounded-full mb-2" />
                    <div className="h-2 w-1/2 bg-slate-100 rounded-full" />
                  </div>

                  <div className="absolute top-4 right-4 px-2 py-1 bg-red-50 text-red-600 border border-red-100 text-[10px] font-bold uppercase tracking-wider rounded">
                    Example {i}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Separate component to keep Lucide imports clean and avoid inline complex icons
function FlameIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}


function CtaSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const createLead = useCreateLead();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      await createLead.mutateAsync({ email });
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="py-32 relative z-20 bg-white border-t border-slate-100 overflow-hidden">
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 text-slate-900">Choose Your Engine.</h2>
          <p className="text-2xl text-slate-500 mb-12 font-light">Or combine both.</p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-16 relative">
            <div className="relative flex items-center bg-slate-50 border border-slate-200 p-1 rounded-full focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-500/5 transition-all duration-300">
              <input
                type="email"
                placeholder="Enter email for ecosystem insights..."
                className="w-full bg-transparent border-none outline-none px-6 py-3 text-sm md:text-base text-slate-900 placeholder:text-slate-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="bg-slate-900 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-slate-800 active:scale-95 transition-all disabled:opacity-50 whitespace-nowrap flex items-center gap-2"
              >
                {status === "loading" ? "Sending..." :
                  status === "success" ? "Subscribed!" : "Join List"}
                {status !== "loading" && status !== "success" && <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
            {status === "error" && <p className="text-red-500 text-xs mt-2 absolute -bottom-6 w-full text-center">Failed to subscribe. Please try again.</p>}
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://www.minai.biz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto flex items-center justify-between px-8 py-5 rounded-2xl bg-blue-50 border border-blue-100 hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out opacity-5" />
              <span className="font-display font-bold text-xl tracking-wide text-blue-600 mr-8">Launch with MinAI</span>
              <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://www.100bold.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto flex items-center justify-between px-8 py-5 rounded-2xl bg-red-50 border border-red-100 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out opacity-5" />
              <span className="font-display font-bold text-xl tracking-wide text-red-600 mr-8">Build with 100Bold</span>
              <ArrowRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-24 pt-8 border-t border-slate-100">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
              Built for Operators. Designed for Growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
