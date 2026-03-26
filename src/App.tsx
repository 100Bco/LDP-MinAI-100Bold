import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import {
  Activity, Zap,
  TrendingUp, Radio,
  Play, ArrowRight, CheckCircle2
} from "lucide-react";
// Disable scroll-triggered animations on mobile to reduce jank
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches
  );
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}

export default function App() {
  return <Home />;
}

function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
        <HeroSection ref={heroRef} y={yHero} opacity={opacityHero} />
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

const HeroSection = React.forwardRef<HTMLElement, { y: any; opacity: any }>(
  function HeroSection({ y, opacity }, ref) {
    const customerLogos = [
      { src: "/images/customer-dacy.jpg", alt: "Dacy Business Park" },
      { src: "/images/customer-lt-commercial.png", alt: "LT Commercial Group" },
      { src: "/images/customer-dang-law.png", alt: "Dang Law Group" },
      { src: "/images/customer-t98.png", alt: "T98 Rehab & Chiropractic" },
      { src: "/images/customer-bee-construction.jpg", alt: "Bee Construction Inc" },
      { src: "/images/100B - TACH NEN -2 (1).png", alt: "100B" },
      { src: "/images/Logo Miami Vice.png", alt: "Miami Vice" },
    ];

    return (
      <motion.section
        ref={ref}
        style={{ y, opacity, willChange: "transform" }}
        className="relative flex flex-col items-center justify-center min-h-screen px-4 lg:px-12 pt-16 pb-12 md:pt-20 md:pb-16"
      >
        {/* --- Layer 1: Partner Logos --- */}
        <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-between relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="w-36 md:w-56 px-3 py-2 md:px-4 md:py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 shadow-lg shadow-blue-500/10 flex items-center justify-center">
              <img src="/images/minai-logo.png" alt="MinAI" className="h-10 md:h-14 w-auto object-contain" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="w-36 md:w-56 px-3 py-2 md:px-4 md:py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-red-100 shadow-lg shadow-red-500/10 flex items-center justify-center">
              <img src="/images/100bold-logo.png" alt="100Bold" className="h-10 md:h-14 w-auto object-contain" />
            </div>
          </motion.div>
        </div>

        {/* --- Spacer: logos → customers --- */}
        <div className="h-10 md:h-14" />

        {/* --- Layer 2: Social Proof --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-7xl mx-auto relative z-20 overflow-hidden"
        >
          <div className="flex justify-center mb-4 md:mb-5">
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-400 text-xs uppercase tracking-widest">
              Our Customers
            </span>
          </div>

          <div className="relative w-full overflow-hidden mask-image-gradient">
            <div className="flex w-max animate-marquee items-center">
              {customerLogos.map((logo, i) => (
                <div key={i} className="flex items-center justify-center mx-10 md:mx-16 shrink-0">
                  <img src={logo.src} alt={logo.alt} className="h-10 md:h-12 w-auto max-w-[120px] md:max-w-[140px] object-contain opacity-60 hover:opacity-100 transition-all duration-300 cursor-default" />
                </div>
              ))}
              {customerLogos.map((logo, i) => (
                <div key={`dup-${i}`} className="flex items-center justify-center mx-10 md:mx-16 shrink-0">
                  <img src={logo.src} alt={logo.alt} className="h-10 md:h-12 w-auto max-w-[120px] md:max-w-[140px] object-contain opacity-60 hover:opacity-100 transition-all duration-300 cursor-default" />
                </div>
              ))}
            </div>

            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* --- Spacer: customers → hero title --- */}
        <div className="h-14 md:h-20" />

        {/* --- Layer 3: Hero Message (the star) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center max-w-5xl mx-auto relative z-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-5 md:mb-6">
            <span className="block text-slate-900">INFRASTRUCTURE</span>

            <div className="relative w-full h-[2px] my-3 md:my-4 bg-slate-100/50 overflow-hidden">
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 left-0 w-1/3 md:w-1/4 bg-gradient-to-r from-transparent to-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
              />
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 right-0 w-1/3 md:w-1/4 bg-gradient-to-l from-transparent to-red-600 shadow-[0_0_15px_rgba(204,0,0,0.5)]"
              />
            </div>

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-500">
              FOR GROWTH
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto px-4">
            Automation System <span className="text-blue-600/80">×</span> Branding Solution
          </p>
        </motion.div>

        {/* --- Bottom breathing room --- */}
        <div className="h-10 md:h-14" />
      </motion.section>
    );
  }
);

function EcosystemSection() {
  const isMobile = useIsMobile();
  return (
    <section className="py-12 md:py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          {...(!isMobile && {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
          })}
          className="text-center mb-6 md:mb-8"
        >
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 rounded-full border border-slate-200 bg-slate-50 text-slate-400 text-xs uppercase tracking-widest">
            The Core Concept
          </div>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900">
            Ecosystem Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">Dominance</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

function BreakdownSection() {
  const isMobile = useIsMobile();
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
    <section className="pb-12 md:pb-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          {/* --- MinAI Block --- */}
          <motion.div
            {...(!isMobile && {
              initial: { opacity: 0, x: -30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.8 },
            })}
            className="group bg-white border border-slate-200 rounded-2xl md:rounded-3xl p-5 md:p-8 relative overflow-hidden transition-all duration-500 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5"
          >
            {/* Visual background pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPHBhdGggZD0iTTAgMGwyMCAyME0yMCAwbC0yMCAyMCIgc3Ryb2tlPSIjMjU2M0VCIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

            <div className="relative z-10">
              <a href="https://www.minai.biz/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-5 mb-4 md:mb-6 group/link">
                <div className="shrink-0 group-hover:scale-110 transition-transform duration-500 ease-out">
                  <img
                    src="/images/Icon%201.png"
                    alt="MinAI Icon"
                    className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-lg"
                  />
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight group-hover/link:text-blue-600 transition-colors duration-300">
                  MINAI
                </h2>
              </a>
              <p className="text-base md:text-lg text-blue-600 font-medium mb-6 md:mb-6">One Platform Replaces 2-5 Full Time Employees</p>

              <motion.div {...(!isMobile && { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true } })} className="space-y-4 md:space-y-6">
                {[
                  { icon: Activity, title: "CAPTURE", desc: "Missed call text-back & instant lead engagement." },
                  { icon: Zap, title: "FOLLOW UP", desc: "Automated nurture sequences that run while you sleep." },
                  { icon: TrendingUp, title: "REPLACE", desc: "One platform replaces ~$900/mo of disconnected tools." }
                ].map((item, i) => (
                  <motion.div key={i} {...(!isMobile && { variants: itemVariants })} className="flex gap-3 md:gap-4 items-start">
                    <div className="mt-0.5 bg-blue-50 p-1.5 md:p-2 rounded-lg border border-blue-100 shrink-0">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-display text-base md:text-xl tracking-wide text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-xs md:text-base">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* --- 100BOLD Block --- */}
          <motion.div
            {...(!isMobile && {
              initial: { opacity: 0, x: 30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.8 },
            })}
            className="group bg-white border border-slate-200 rounded-2xl md:rounded-3xl p-5 md:p-8 relative overflow-hidden transition-all duration-500 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/5"
          >
            {/* Visual background */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-red-600/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-64 h-64 bg-red-600/5 blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <a href="https://www.100bold.co/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-5 mb-4 md:mb-6 group/link">
                <div className="shrink-0 group-hover:scale-110 transition-transform duration-500 ease-out">
                  <img
                    src="/images/Icon%202.png"
                    alt="100Bold Icon"
                    className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-lg"
                  />
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight group-hover/link:text-red-600 transition-colors duration-300">
                  100BOLD
                </h2>
              </a>
              <p className="text-base md:text-lg text-red-600 font-medium mb-6 md:mb-6">Start Brave. Stay Bold.</p>

              <motion.div {...(!isMobile && { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true } })} className="space-y-4 md:space-y-6">
                {[
                  { icon: CheckCircle2, title: "BRAND", desc: "Visual identity & positioning for category leaders." },
                  { icon: Play, title: "CONTENT", desc: "High-volume short-form video systems." },
                  { icon: Radio, title: "DOMINATE", desc: "Paid distribution to own your market share." }
                ].map((item, i) => (
                  <motion.div key={i} {...(!isMobile && { variants: itemVariants })} className="flex gap-3 md:gap-4 items-start">
                    <div className="mt-0.5 bg-red-50 p-1.5 md:p-2 rounded-lg border border-red-100 shrink-0">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-display text-base md:text-xl tracking-wide text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-xs md:text-base">{item.desc}</p>
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
  const isMobile = useIsMobile();
  return (
    <section className="py-12 md:py-16 relative z-20 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-x divide-slate-200/50 md:divide-x-0">

          {/* MinAI Stat 1 */}
          <motion.div
            {...(!isMobile && {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
            })}
            className="text-center px-2 md:px-4"
          >
            <h4 className="text-3xl md:text-4xl font-display font-bold text-blue-600 mb-2">50+</h4>
            <p className="font-bold text-slate-900 uppercase tracking-wide mb-1 text-xs md:text-base">Tech Partners</p>
            <p className="text-slate-500 text-[10px] md:text-sm leading-tight">Google · Meta · GoDaddy · Stripe · Twilio · OpenAI</p>
          </motion.div>

          {/* MinAI Stat 2 */}
          <motion.div
            {...(!isMobile && {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.1 },
            })}
            className="text-center px-2 md:px-4"
          >
            <h4 className="text-3xl md:text-4xl font-display font-bold text-blue-600 mb-2">10+</h4>
            <p className="font-bold text-slate-900 uppercase tracking-wide mb-1 text-xs md:text-base">Industries Served</p>
            <p className="text-slate-500 text-[10px] md:text-sm leading-tight">Real Estate, Construction, Local Service, Law Firms,...</p>
          </motion.div>

          {/* 100Bold Stat 1 */}
          <motion.div
            {...(!isMobile && {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.2 },
            })}
            className="text-center px-2 md:px-4"
          >
            <h4 className="text-3xl md:text-4xl font-display font-bold text-red-600 mb-2">25+</h4>
            <p className="font-bold text-slate-900 uppercase tracking-wide mb-1 text-xs md:text-base">Companies Served</p>
            <p className="text-slate-500 text-[10px] md:text-sm leading-tight">Generating 8- to 9-figure revenues annually.</p>
          </motion.div>

          {/* 100Bold Stat 2 */}
          <motion.div
            {...(!isMobile && {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.3 },
            })}
            className="text-center px-2 md:px-4"
          >
            <h4 className="text-3xl md:text-4xl font-display font-bold text-red-600 mb-2">30%+</h4>
            <p className="font-bold text-slate-900 uppercase tracking-wide mb-1 text-xs md:text-base">Annual Growth</p>
            <p className="text-slate-500 text-[10px] md:text-sm leading-tight">We think like business owners, not vendors</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ========================================================================
// === SECTION ĐÃ ĐƯỢC CẬP NHẬT (START) =================================
// ========================================================================
function VideoShowcaseSection() {
  const isMobile = useIsMobile();
  return (
    <section className="py-12 md:py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          {...(!isMobile && {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
          })}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-2 md:mb-3 text-slate-900">See The Engines At Work</h2>
          <p className="text-slate-500 text-sm md:text-lg">Watch how top operators utilize our systems.</p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">

          {/* MinAI Demo */}
          <div>
            {/* === CHANGE #1: Bỏ thẻ div chứa icon đi === */}
            <div className="flex items-center gap-3 mb-4 md:mb-6 justify-center md:justify-start">
              <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900">MinAI System Demo</h3>
            </div>

            <motion.div
              {...(!isMobile && {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
              })}
              className="relative aspect-video bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <iframe
                src="https://drive.google.com/file/d/1UqAtNkMNQ94rE2JwkrEy9MOWDD2guL88/preview"
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
                allow="autoplay"
                allowFullScreen={true}
              />
            </motion.div>
          </div>

          {/* 100Bold Demos */}
          <div>
             {/* === CHANGE #2: Bỏ thẻ div chứa icon đi === */}
            <div className="flex items-center gap-3 mb-4 md:mb-6 justify-center md:justify-start">
              <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900">100Bold Content Examples</h3>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-8">
              {[
                "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F887183647434294&show_text=false",
                "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1568218024450181&show_text=false",
                "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1587537409327128&show_text=false",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  {...(!isMobile && {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: i * 0.1 },
                  })}
                  className="group relative aspect-[9/16] bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all duration-500 hover:border-red-300 hover:shadow-xl hover:shadow-red-500/10"
                >
                  <iframe
                    src={src}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
// ========================================================================
// === SECTION ĐÃ ĐƯỢC CẬP NHẬT (END) ===================================
// ========================================================================


// Separate component to keep Lucide imports clean and avoid inline complex icons
function FlameIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}


function CtaSection() {
  const isMobile = useIsMobile();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.minai.biz/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-10 md:py-14 relative z-20 bg-white border-t border-slate-100 overflow-hidden">
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          {...(!isMobile && {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
          })}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-1 md:mb-2 text-slate-900">Choose Your Engine.</h2>
          <p className="text-lg md:text-xl text-slate-500 mb-6 font-light">Or combine both.</p>

          <div className="max-w-2xl mx-auto mb-8">
            <iframe
              src="https://link.minai.biz/widget/booking/oPdza9BB7isKUhMkkyw2"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="oPdza9BB7isKUhMkkyw2_1774515592437"
              title="Book a Meeting"
            />
          </div>

          <div className="max-w-2xl mx-auto mb-6">
            <iframe
              ref={iframeRef}
              src="https://link.minai.biz/widget/form/96obFrS0YxzxEbNilakz"
              style={{ width: "100%", height: "700px", border: "none", borderRadius: "4px" }}
              id="inline-96obFrS0YxzxEbNilakz"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Landingpage Registration"
              data-height="700"
              data-layout-iframe-id="inline-96obFrS0YxzxEbNilakz"
              data-form-id="96obFrS0YxzxEbNilakz"
              title="Landingpage Registration"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://www.minai.biz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto flex items-center justify-between px-6 py-4 md:px-8 md:py-5 rounded-2xl bg-blue-50 border border-blue-100 hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out opacity-5" />
              <span className="font-display font-bold text-base md:text-xl tracking-wide text-blue-600 mr-6 md:mr-8">Launch with MinAI</span>
              <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://www.100bold.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto flex items-center justify-between px-6 py-4 md:px-8 md:py-5 rounded-2xl bg-red-50 border border-red-100 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out opacity-5" />
              <span className="font-display font-bold text-base md:text-xl tracking-wide text-red-600 mr-6 md:mr-8">Build with 100Bold</span>
              <ArrowRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-8 md:mt-10 pt-4 md:pt-5 border-t border-slate-100">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
              Built for Operators.<br />Designed for Growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
