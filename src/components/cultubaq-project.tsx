import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Users, Target, Search, Lightbulb, PenTool, TestTube, Eye, ChevronLeft, ChevronRight, ArrowRight, X, Flag, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router';

// --- Figma Assets ---
// Wireframes & Desktop Screenshots (Group2214)
import imgWireframes from "figma:asset/e7a7750802b0ff70f5a92228546518711ecaf4a3.png";
import imgBoceto2 from "figma:asset/a1bd56e497c6df977c5af29415863360bc3e47c7.png";
import imgBoceto3 from "figma:asset/3632e27076ea89f19f9e7adb1ae5a9519fbe5ddb.png";
import imgBoceto4 from "figma:asset/83324f4f12f85780487785c9b7dbe01edf764b4a.png";

// Comparison Images
import imgCultubaqWireframe from 'figma:asset/789990d4741a058d7cc2f3bec3ccfa44f44f8759.png';
import imgCultubaqFinal from 'figma:asset/f1e03fa9ff3eedbef87df17e58535b051c58b8bd.png';
import { ImageComparisonSlider } from './image-comparison-slider';

// Hero Mockup
import imgHeroMockup from "figma:asset/15bcaef4ea86e8a24bf04a66d0eb2c85e6522dc1.png";

// Desktop Screens
import imgDeskHome from "figma:asset/acef14b74caf9eb6c6f4f3bef2f36b3bf2ed0759.png";
import imgDeskExplorar from "figma:asset/551358846d301a7be47cad25f1fefc5a0f661aee.png";
import imgDeskDirectorio from "figma:asset/784b1610587ce0ff2678dc911a05ce2b7549f2a0.png";
import imgDeskLogin from "figma:asset/1991b6438a786f9adaa8363c5f9bf2dcc2af6790.png";
import imgDeskPerfil from "figma:asset/a93fcba26794763dae9d6732f1d3b3176919de2f.png";

// SVGs
import svgPaths from "../imports/svg-gy9cefj1eq";
import logoSvgPaths from "../imports/svg-dbfui64zgh";
import logoSvgPaths2 from "../imports/svg-lq0wx0at3u";
import groupSvgPaths from "../imports/svg-m6iwhie9ta";
import verticalLogoPaths from "../imports/svg-ee0a7he0cq";

// Design System (Group2216)
// (Event card removed)

// CTA (FinalBody)
import imgCTA from "figma:asset/9de1620e73066a66f409f0dbbd00bd7c517c14e9.png";

// Brand/Merch (Wireframe223)
import imgMerchTshirt from "figma:asset/5a604c62dfba2359d406db1a1725ffa6b5b363b0.png";
import imgMerchLogo from "figma:asset/5df1b6234a1df9c6ecd6d6e2f0850cbe9f7e050e.png";
import imgMerchPin from "figma:asset/63296b87ef4337d80fe3f3a9a2f4372ba7d5b5b9.png";
import imgMerchSticker from "figma:asset/f65ca06e339ebe2741005bce5c672fc7307c7512.png";
import imgPostcard1 from "figma:asset/02ebc5f3a67d5fb0b5044e37aa6e13b44f51c04c.png";
import imgPostcard2 from "figma:asset/a8dbdade8536bc838ce5d982b0b23382f94391d1.png";
import imgPostcard3 from "figma:asset/bc973f06e41a97db42aa4f62af2dfa2660b2961c.png";
import imgPostcard4 from "figma:asset/65fa028fc1e5a3618aa17402debd3e6f69fbefa8.png";
import imgPostcard5 from "figma:asset/f5c3a0fbb1e559765220f8e3f4ce5e78413392ea.png";

// --- Design Process Steps ---
const DESIGN_STEPS = [
  {
    phase: 'Empatizar',
    icon: <Search size={24} />,
    keywords: ['Necesidades', 'Entrevistas', 'Descubrimiento']
  },
  {
    phase: 'Definir',
    icon: <Target size={24} />,
    keywords: ['Dispersión', 'Problema', 'Centralización']
  },
  {
    phase: 'Idear',
    icon: <Lightbulb size={24} />,
    keywords: ['Soluciones', 'Plataforma', 'Interactiva']
  },
  {
    phase: 'Prototipar',
    icon: <PenTool size={24} />,
    keywords: ['Alta Fidelidad', 'UI/UX', 'Sistema']
  },
  {
    phase: 'Testear',
    icon: <TestTube size={24} />,
    keywords: ['Usabilidad', 'Validación', 'Iteración']
  }
];

// --- Objectives ---
const OBJECTIVES = [
  'Identificar los problemas y oportunidades existentes en cómo se difunde y accede a la agenda cultural de Barranquilla.',
  'Analizar referentes a nivel local, nacional e internacional de plataformas de agenda cultural, estableciendo criterios funcionales y de diseño.',
  'Diseñar la arquitectura de información y la interfaz gráfica, priorizando usabilidad, accesibilidad y consistencia visual.',
  'Prototipar una versión de escritorio de la plataforma web que represente la centralización y difusión de la oferta cultural.'
];

// --- Desktop Screens ---
const SCREENS = [
  { src: imgDeskHome, label: 'Home', desc: 'Página principal interactiva y dinámica.' },
  { src: imgDeskExplorar, label: 'Explorar', desc: 'Catálogo de eventos culturales con filtros.' },
  { src: imgDeskDirectorio, label: 'Directorio', desc: 'Directorio de gestores y colectivos culturales.' },
  { src: imgDeskLogin, label: 'Iniciar Sesión', desc: 'Acceso seguro para usuarios y gestores.' },
  { src: imgDeskPerfil, label: 'Perfil', desc: 'Gestión de agenda y preferencias personales.' },
];

function CultuBAQLogoWhite() {
  return (
    <svg className="w-full max-w-[280px] h-auto mb-2 md:mb-4 ml-[-4px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 173.038 32.771">
      <path d={logoSvgPaths.p26071900} fill="white" />
      <path d={logoSvgPaths.p16c15b80} fill="white" />
      <path d={logoSvgPaths.p131ce040} fill="white" />
      <path d={logoSvgPaths.p24508300} fill="white" />
      <path d={logoSvgPaths.p1f1c2a00} fill="white" />
      <path d={logoSvgPaths.p21c6e100} fill="white" />
      <path d={logoSvgPaths.pd098680} fill="white" />
      <path d={logoSvgPaths.peb87600} fill="white" />
      <path d={logoSvgPaths.p546ea80} fill="white" />
    </svg>
  );
}

function CultuBAQBrandLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 173.038 32.771">
      <path d={logoSvgPaths2.p26071900} fill="currentColor" />
      <path d={logoSvgPaths2.p16c15b80} fill="currentColor" />
      <path d={logoSvgPaths2.p131ce040} fill="currentColor" />
      <path d={logoSvgPaths2.p24508300} fill="currentColor" />
      <path d={logoSvgPaths2.p1f1c2a00} fill="currentColor" />
      <path d={logoSvgPaths2.p21c6e100} fill="currentColor" />
      <path d={logoSvgPaths2.pd098680} fill="currentColor" />
      <path d={logoSvgPaths2.peb87600} fill="currentColor" />
      <path d={logoSvgPaths2.p546ea80} fill="currentColor" />
    </svg>
  );
}

function CultuBAQIsologoVertical({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1477.36 1001.16">
      <path d={verticalLogoPaths.p3d3104c0} fill="currentColor" />
      <path d={verticalLogoPaths.p2b3e1b00} fill="currentColor" />
      <path d={verticalLogoPaths.p38a8d280} fill="currentColor" />
      <path d={verticalLogoPaths.p319c500} fill="currentColor" />
      <path d={verticalLogoPaths.p22f6c980} fill="currentColor" />
      <path d={verticalLogoPaths.p269db900} fill="currentColor" />
      <path d={verticalLogoPaths.p35e8c180} fill="currentColor" />
      <path d={verticalLogoPaths.p2fcc4700} fill="currentColor" />
      <path d={verticalLogoPaths.p3ac0d480} fill="currentColor" />
    </svg>
  );
}

function CultuBAQBrandIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 22.3221 26.8907">
      <path d={groupSvgPaths.p23283f80} fill="currentColor" />
      <path d={groupSvgPaths.p35bb6e80} fill="currentColor" />
    </svg>
  );
}

// --- Laptop Mockup Wrapper ---
function LaptopMockup({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex flex-col items-center py-6">
      <div 
        className="relative w-full max-w-[800px] transition-transform duration-700 hover:scale-[1.02] drop-shadow-[0_20px_40px_rgba(8,96,42,0.2)] dark:drop-shadow-[0_20px_40px_rgba(8,96,42,0.4)]"
        style={{ perspective: '1200px' }}
      >
        {/* Screen */}
        <div className="bg-[#1a1a1a] rounded-t-2xl p-3 pb-4 relative shadow-2xl border border-neutral-800">
          {/* Camera dot */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neutral-800 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-blue-900/50" />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[16/10] bg-white relative border border-neutral-800/50 flex items-center justify-center">
            <img src={src} alt={label} className="w-full h-full object-contain object-center" />
          </div>
        </div>
        {/* Base */}
        <div className="bg-gradient-to-b from-[#2a2a2a] to-[#111] h-6 rounded-b-xl mx-auto w-[104%] -ml-[2%] relative shadow-xl border-t border-[#333]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#444] rounded-b-md" />
        </div>
      </div>
      <p className="mt-8 text-sm font-medium tracking-wide uppercase text-neutral-500 dark:text-neutral-400">{label}</p>
    </div>
  );
}

// --- Screen Gallery Carousel ---
function ScreenCarousel({ onOpenGallery }: { onOpenGallery: (images: any[], index: number) => void }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(c => (c === 0 ? SCREENS.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === SCREENS.length - 1 ? 0 : c + 1));

  return (
    <div className="relative">
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="cursor-zoom-in" 
              onClick={() => onOpenGallery(SCREENS.map(s => s.src), current)}
            >
              <LaptopMockup src={SCREENS[current].src} label={SCREENS[current].label} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex items-center justify-center gap-4 mt-2">
        <button onClick={prev} className="p-2 rounded-full bg-white dark:bg-neutral-800 shadow-md hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {SCREENS.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-[#08602A] scale-125' : 'bg-neutral-300 dark:bg-neutral-600'}`} 
            />
          ))}
        </div>
        <button onClick={next} className="p-2 rounded-full bg-white dark:bg-neutral-800 shadow-md hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
      
      <p className="text-center mt-6 text-neutral-600 dark:text-neutral-400">{SCREENS[current].desc}</p>
    </div>
  );
}

// --- Section Title ---
function SectionTitle({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <span className="text-[#c87a00] dark:text-[#F49B0E] text-sm tracking-widest uppercase">{number}</span>
      <h2 className="text-3xl md:text-4xl mt-1">{title}</h2>
      {subtitle && <p className="text-neutral-500 dark:text-neutral-400 mt-2 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

// --- Brand Showcase Component ---
function BrandShowcase({ onOpenGallery }: { onOpenGallery: (images: any[], index: number) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { 
      name: "Isologo Horizontal", 
      content: <CultuBAQBrandLogo className="w-[350px] h-[66px] text-[#11863D] dark:text-white drop-shadow-xl" />,
      zoomSrc: <CultuBAQBrandLogo className="w-[80vw] md:w-[600px] h-auto text-[#11863D] dark:text-white drop-shadow-2xl" />
    },
    {
      name: "Isologo Vertical",
      content: <CultuBAQIsologoVertical className="w-[200px] h-auto text-[#11863D] dark:text-white drop-shadow-xl" />,
      zoomSrc: <CultuBAQIsologoVertical className="w-[80vw] md:w-[400px] h-auto text-[#11863D] dark:text-white drop-shadow-2xl" />
    },
    { 
      name: "Isotipo", 
      content: <CultuBAQBrandIcon className="w-[120px] h-[145px] text-[#11863D] dark:text-white drop-shadow-xl" />,
      zoomSrc: <CultuBAQBrandIcon className="w-[60vw] md:w-[300px] h-auto text-[#11863D] dark:text-white drop-shadow-2xl" />
    },
    { 
      name: "Camiseta", 
      content: <img src={imgMerchTshirt} alt="Camiseta" className="w-[320px] h-[330px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" draggable={false} />,
      zoomSrc: imgMerchTshirt
    },
    { 
      name: "Sticker", 
      content: <img src={imgMerchLogo} alt="Sticker" className="w-[340px] h-[300px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" draggable={false} />,
      zoomSrc: imgMerchLogo
    },
    { 
      name: "Pin Metálico", 
      content: <img src={imgMerchPin} alt="Pin Metálico" className="w-[285px] h-[306px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" draggable={false} />,
      zoomSrc: imgMerchPin
    },
    { 
      name: "Botón Circular", 
      content: <img src={imgMerchSticker} alt="Botón Circular" className="w-[281px] h-[228px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" draggable={false} />,
      zoomSrc: imgMerchSticker
    },
  ];

  // Auto-play for desktop roller
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col items-center justify-center relative w-full h-[550px]">
        <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden pointer-events-none">
          <AnimatePresence initial={false}>
            {items.map((item, i) => {
              let diff = i - activeIndex;
              if (diff > Math.floor(items.length / 2)) diff -= items.length;
              if (diff < -Math.floor(items.length / 2)) diff += items.length;
              
              if (Math.abs(diff) > 2) return null;
              
              const translateX = diff * 350;
              const scale = diff === 0 ? 1 : diff === 1 || diff === -1 ? 0.7 : 0.5;
              const opacity = diff === 0 ? 1 : diff === 1 || diff === -1 ? 0.5 : 0.2;
              const zIndex = 10 - Math.abs(diff);

              return (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{ x: translateX, scale, opacity, zIndex }}
                  transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  onClick={() => diff === 0 && onOpenGallery(items.map(i => i.zoomSrc), i)}
                  className={`absolute flex flex-col items-center justify-center pointer-events-auto ${diff === 0 ? 'cursor-pointer' : ''}`}
                  style={{ originY: 0.5 }}
                >
                  <div className="h-[380px] flex items-center justify-center">
                    {item.content}
                  </div>
                  {diff === 0 && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute -bottom-6 text-lg text-neutral-800 dark:text-neutral-200 tracking-widest uppercase whitespace-nowrap font-bold"
                    >
                      {item.name}
                    </motion.p>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
        
        {/* dots */}
        <div className="flex gap-2 mt-8 z-20">
          {items.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActiveIndex(i)} 
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeIndex ? 'bg-[#08602A] scale-125' : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400'}`} 
            />
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-8 pb-10 px-6 w-full no-scrollbar">
        {items.map((item, i) => (
           <div 
             key={i} 
             className="min-w-[100%] snap-center flex flex-col items-center justify-center shrink-0"
           >
              <div 
                className="h-[380px] flex items-center justify-center w-full max-w-[400px] cursor-pointer"
                onClick={() => onOpenGallery(items.map(i => i.zoomSrc), i)}
              >
                 <div className="flex items-center justify-center transform scale-[0.85] origin-center">
                   {item.content}
                 </div>
              </div>
              <p className="mt-6 text-sm text-neutral-800 dark:text-neutral-200 tracking-widest uppercase font-bold">{item.name}</p>
           </div>
        ))}
      </div>
    </div>
  );
}

// --- Scroll To Top Button ---
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      let visible = window.scrollY > 300;
      const footer = document.querySelector('footer');
      if (footer && visible) {
        const footerTop = footer.getBoundingClientRect().top;
        if (footerTop <= window.innerHeight + 10) {
          visible = false;
        }
      }
      setIsVisible(visible);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-6 md:bottom-12 md:right-10 z-[150] p-3 bg-black/10 dark:bg-white/10 backdrop-blur-md text-neutral-800 dark:text-neutral-200 border border-black/10 dark:border-white/10 rounded-full shadow-sm hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-500 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Volver arriba"
    >
      <ArrowUp size={20} />
    </button>
  );
}

// --- Main Component ---
export default function CultuBAQProject() {
  const navigate = useNavigate();
  const [galleryState, setGalleryState] = useState<{ images: any[], currentIndex: number } | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const wireframesRef = useRef<HTMLDivElement>(null);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#projects');
  };
  const merchRef = useRef<HTMLDivElement>(null);
  const galleryScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll to initial index when gallery opens
  useEffect(() => {
    if (galleryState && galleryScrollRef.current) {
      const { currentIndex } = galleryState;
      setActiveGalleryIndex(currentIndex);
      const scrollElement = galleryScrollRef.current;
      // Small delay to ensure rendering is complete
      setTimeout(() => {
        if (scrollElement.children[currentIndex]) {
          const child = scrollElement.children[currentIndex] as HTMLElement;
          scrollElement.scrollTo({
            left: child.offsetLeft,
            behavior: 'instant'
          });
        }
      }, 50);
    }
  }, [galleryState]);

  const handleGalleryScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!galleryScrollRef.current || !galleryState) return;
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    if (newIndex !== activeGalleryIndex) {
      setActiveGalleryIndex(newIndex);
    }
  };

  const nextGalleryImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!galleryState || !galleryScrollRef.current) return;
    const newIndex = Math.min(galleryState.images.length - 1, activeGalleryIndex + 1);
    galleryScrollRef.current.scrollTo({ left: newIndex * galleryScrollRef.current.clientWidth, behavior: 'smooth' });
  };

  const prevGalleryImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!galleryState || !galleryScrollRef.current) return;
    const newIndex = Math.max(0, activeGalleryIndex - 1);
    galleryScrollRef.current.scrollTo({ left: newIndex * galleryScrollRef.current.clientWidth, behavior: 'smooth' });
  };

  const closeGalleryOnBackground = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setGalleryState(null);
    }
  };

  const openGallery = (images: any[], currentIndex: number) => {
    setGalleryState({ images, currentIndex });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <ScrollToTop />
      
      {/* === HERO === */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#062f16]">
        {/* --- Back Button (Fixed) --- */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          onClick={handleBack}
          className="fixed top-8 left-6 md:left-20 z-[90] flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:scale-105 rounded-full transition-all duration-300 ease-in-out hover:-translate-x-1 shadow-lg"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Volver</span>
        </motion.button>

        {/* Abstract organic background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#08602A] via-[#0a4a22] to-[#041a0d]" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-24 md:py-32 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Texts */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left"
          >
            <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium tracking-wider uppercase backdrop-blur-md border border-white/20">UX/UI</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium tracking-wider uppercase backdrop-blur-md border border-white/20">Branding</span>
            </div>

            {/* Mobile Mockup representation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-[320px] mx-auto md:hidden mb-8"
            >
              <img 
                src={imgHeroMockup} 
                alt="CultuBAQ Mockup Mobile" 
                className="w-full h-auto drop-shadow-2xl" 
              />
            </motion.div>
            
            <div className="flex justify-center md:justify-start mb-2 md:mb-4">
              <CultuBAQLogoWhite />
            </div>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed mb-10 font-light mx-auto md:mx-0">
              Plataforma digital para la <strong className="text-white font-semibold">visibilización y fortalecimiento</strong> de la agenda cultural de Barranquilla. Conectando consumidores y gestores con los mejores eventos de la ciudad.
            </p>
            {/*visibilizaciónn y fortalecimiento</strong> de la agenda cultural de Barranquilla. Conectando consumidores y gestores con los mejores eventos de la ciudad.
            */}

            <div className="flex justify-center md:justify-start gap-4 mb-10">
              <a
                href="https://www.figma.com/proto/EDJbrC7hB2xF3BasRq9EzJ/Final-TODO-CultuBAQ-Proyecto-de-Grado-2025?node-id=10160-17638&p=f&t=VibsM36cJcSHxrKe-0&scaling=min-zoom&content-scaling=fixed&page-id=9614%3A21911&starting-point-node-id=9614%3A21912&hide-ui=1"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-[#c87a00] dark:bg-[#F49B0E] hover:bg-[#a66500] dark:hover:bg-[#d88a0c] text-white font-semibold rounded-full flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#c87a00]/20 dark:shadow-[#F49B0E]/20"
              >
                Ver Prototipo Interactivo <ExternalLink size={18} />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white/70 text-sm border-t border-white/10 pt-8 w-full">
              <div>
                <span className="block text-[#FBBF24] text-xs uppercase tracking-widest mb-1.5">Rol</span>
                <span className="text-white font-medium">UX/UI Designer</span>
              </div>
              <div>
                <span className="block text-[#FBBF24] text-xs uppercase tracking-widest mb-1.5">Software</span>
                <span className="text-white font-medium">Figma, Illustrator</span>
              </div>
              <div>
                <span className="block text-[#FBBF24] text-xs uppercase tracking-widest mb-1.5">Tipo</span>
                <span className="text-white font-medium">Plataforma Web</span>
              </div>
              <div>
                <span className="block text-[#FBBF24] text-xs uppercase tracking-widest mb-1.5">Año</span>
                <span className="text-white font-medium">2025</span>
              </div>
            </div>
          </motion.div>

          {/* 3D Floating Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 50 }}
            className="lg:w-1/2 relative hidden md:flex items-center justify-end perspective-[1200px]"
          >
            <div className="relative w-full max-w-[550px] transform hover:scale-[1.02] hover:-translate-y-4 transition-all duration-700 ease-out z-20 will-change-transform">
              <img 
                src={imgHeroMockup} 
                alt="CultuBAQ Multi-device Mockup" 
                className="w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* === CONTEXTO === */}
      <section className="py-20 px-6 md:px-20 border-b border-neutral-100 dark:border-neutral-900">
        <div className="max-w-5xl mx-auto">
          <SectionTitle number="01" title="Contexto del Proyecto" />
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#08602A]/5 dark:bg-[#08602A]/10 border border-[#08602A]/20 rounded-2xl p-8"
            >
              <h3 className="text-[#08602A] dark:text-[#2ecc71] mb-4 flex items-center gap-2 text-xl font-bold">
                <Target size={20} /> Problemática
              </h3>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                La oferta cultural en Barranquilla <strong>carece de una difusión centralizada y accesible</strong>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-[#c87a00]/5 dark:bg-[#F49B0E]/10 border border-[#c87a00]/20 dark:border-[#F49B0E]/20 rounded-2xl p-8"
            >
              <h3 className="text-[#c87a00] dark:text-[#F49B0E] mb-4 flex items-center gap-2 text-xl font-bold">
                <Users size={20} /> Público Objetivo
              </h3>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                Dirigido tanto a <strong>usuarios</strong> interesados en descubrir y agendar eventos culturales, como a <strong>gestores</strong> e instituciones que buscan promover sus actividades.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#08602A] to-[#0a4a22] rounded-2xl p-8 md:p-10 text-white"
          >
            <h3 className="text-[#F49B0E] mb-4 flex items-center gap-2 text-xl font-bold">
              <Flag size={20} /> Objetivo
            </h3>
            <p className="text-lg leading-relaxed">
              Optimizar la difusión de la agenda cultural de Barranquilla mediante una <strong>plataforma web centralizada y accesible</strong> que unifique la oferta en la ciudad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === DESIGN PROCESS === */}
      <section className="py-20 px-6 md:px-20 bg-neutral-50 dark:bg-neutral-900/30 border-b border-neutral-100 dark:border-neutral-900">
        <div className="max-w-5xl mx-auto">
          <SectionTitle 
            number="02" 
            title="Proceso de Diseño" 
            subtitle="Metodología Design Thinking con Diseño Centrado en el Usuario (DCU) como eje transversal: Analizar, Diseñar y Validar."
          />

          {/* Process Steps (Path Layout) */}
          <div className="relative mb-24 mt-12 py-10">
            {/* Dotted connecting line (desktop) */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#08602A]/30 -translate-y-1/2 z-0" />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 relative z-10">
              {DESIGN_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className={`relative bg-white dark:bg-neutral-800 rounded-3xl p-6 shadow-xl shadow-neutral-200/50 dark:shadow-none border border-neutral-100 dark:border-neutral-700 text-center w-full max-w-[280px] md:max-w-[200px] ${i % 2 === 0 ? 'md:-translate-y-6' : 'md:translate-y-6'}`}
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#c87a00]/10 dark:from-[#08602A]/10 to-[#c87a00]/5 dark:to-[#08602A]/5 flex items-center justify-center mb-5 text-[#c87a00] dark:text-[#2ecc71] shadow-inner">
                    {step.icon}
                  </div>
                  <span className="text-[#c87a00] dark:text-[#F49B0E] text-xs tracking-widest block mb-2">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="text-lg font-bold mb-3">{step.phase}</h4>
                  <div className="flex flex-wrap justify-center gap-1.5 opacity-80">
                    {step.keywords.map((kw, j) => (
                      <span key={j} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-md text-neutral-600 dark:text-neutral-300 font-medium">
                        {kw}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Wireframes (Draggable) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-sm tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-6 text-center">Bocetación Inicial</h3>
            <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8 -mt-4 hidden md:block">Arrastra los bocetos para explorarlos</p>
            <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8 -mt-4 md:hidden">Desliza para ver los bocetos</p>
            
            {/* Mobile Grid */}
            <div className="block md:hidden pb-10 px-4 max-w-sm mx-auto">
              <div className="grid grid-cols-2 gap-3">
                {[imgWireframes, imgBoceto2, imgBoceto3, imgBoceto4].map((src, i, arr) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    onClick={() => openGallery(arr, i)}
                    className="bg-white p-2 rounded-xl shadow-sm border border-neutral-100 cursor-pointer"
                  >
                    <div className="rounded-lg overflow-hidden border border-neutral-100 bg-neutral-50 aspect-[3/4]">
                      <img src={src} alt={`Boceto ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop Draggable */}
            <div ref={wireframesRef} className="hidden md:flex relative w-full h-[600px] items-center justify-center overflow-visible">
              {[imgWireframes, imgBoceto2, imgBoceto3, imgBoceto4].map((src, i) => (
                <motion.div
                  key={i}
                  drag
                  dragConstraints={wireframesRef}
                  dragElastic={0.2}
                  dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                  whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
                  initial={{ rotate: (i % 2 === 0 ? 1 : -1) * (i * 4 + 2), x: (i - 1.5) * 60, y: (i % 2) * 20 }}
                  className="absolute cursor-grab bg-white p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-neutral-100 w-[320px] will-change-transform"
                  style={{ zIndex: i }}
                >
                  <div className="rounded-lg overflow-hidden border border-neutral-100 bg-neutral-50 aspect-[3/4]">
                    <img src={src} alt={`Boceto ${i + 1}`} className="w-full h-full object-cover" draggable={false} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* From Wireframe to High Fidelity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-sm tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-6 text-center">De Wireframe a Alta Fidelidad</h3>
            <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8 -mt-4">Desliza la barra para ver la evolución del diseño</p>
            
            <div className="max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-[4/3] md:aspect-video">
              <ImageComparisonSlider 
                beforeImage={imgCultubaqWireframe} 
                afterImage={imgCultubaqFinal} 
                alt="Comparación CultuBaq: Wireframe vs Alta Fidelidad"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* === DESKTOP SCREENS === */}
      <section className="py-20 px-6 md:px-20 border-b border-neutral-100 dark:border-neutral-900">
        <div className="max-w-5xl mx-auto">
          <SectionTitle 
            number="03" 
            title="Pantallas Desktop" 
            subtitle="Interfaz de escritorio del prototipo interactivo de alta fidelidad."
          />
          <ScreenCarousel onOpenGallery={openGallery} />
        </div>
      </section>

      {/* === DESIGN SYSTEM === */}
      <section className="py-20 px-6 md:px-20 bg-neutral-50 dark:bg-neutral-900/30 border-b border-neutral-100 dark:border-neutral-900">
        <div className="max-w-5xl mx-auto">
          <SectionTitle 
            number="04" 
            title="Sistema de Diseño" 
            subtitle="Tipografía Nunito, paleta de colores verde/naranja, y componentes UI reutilizables."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Colors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-sm border border-neutral-100 dark:border-neutral-700"
            >
              <h3 className="text-lg mb-6">Paleta de Colores</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-wider">Primario</p>
                  <div className="flex gap-2">
                    {['#ecfdf5', '#11863d', '#08602A', '#042e14', '#021a0b'].map((c, i) => (
                      <div key={i} className="flex-1">
                        <div className="aspect-square rounded-lg mb-1" style={{ backgroundColor: c }} />
                        <span className="text-[9px] text-neutral-400 block text-center">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-wider">Secundario</p>
                  <div className="flex gap-2">
                    {['#fef8e8', '#F49B0E', '#c87a00', '#8a5400', '#5c3800'].map((c, i) => (
                      <div key={i} className="flex-1">
                        <div className="aspect-square rounded-lg mb-1" style={{ backgroundColor: c }} />
                        <span className="text-[9px] text-neutral-400 block text-center">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-wider">Neutros</p>
                  <div className="flex gap-2">
                    {['#fafafa', '#e5e5e5', '#999999', '#4a4a4a', '#1a1a1a'].map((c, i) => (
                      <div key={i} className="flex-1">
                        <div className="aspect-square rounded-lg mb-1 border border-neutral-200 dark:border-neutral-600" style={{ backgroundColor: c }} />
                        <span className="text-[9px] text-neutral-400 block text-center">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Typography + Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-sm border border-neutral-100 dark:border-neutral-700">
                <h3 className="text-lg mb-6">Tipografía</h3>
                <div className="space-y-4" style={{ fontFamily: '"Nunito", sans-serif' }}>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-sans">H1 — Nunito 80px</span>
                    <p className="text-4xl mt-1">AaBbCc</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-sans">H2 — Nunito 60px</span>
                    <p className="text-2xl mt-1">AaBbCc</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-sans">H3 — Nunito 36px</span>
                    <p className="text-xl mt-1">AaBbCc</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-sm border border-neutral-100 dark:border-neutral-700">
                <h3 className="text-lg mb-4">Botones</h3>
                <div className="flex flex-wrap gap-3">
                  <button className="px-5 py-2.5 bg-[#08602A] text-white rounded-lg text-sm">Primario</button>
                  <button className="px-5 py-2.5 bg-[#F49B0E] text-white rounded-lg text-sm">Secundario</button>
                  <button className="px-5 py-2.5 border border-[#08602A] text-[#08602A] dark:text-[#2ecc71] rounded-lg text-sm">Outline</button>
                  <button className="px-5 py-2.5 bg-neutral-200 dark:bg-neutral-700 text-neutral-500 rounded-lg text-sm cursor-not-allowed">Disabled</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === BRANDING === */}
      <section className="py-20 px-6 md:px-20 border-b border-neutral-100 dark:border-neutral-900">
        <div className="max-w-5xl mx-auto">
          <SectionTitle 
            number="05" 
            title="Marca" 
            subtitle="Identidad visual y piezas de branding para CultuBAQ."
          />

          {/* Merch Draggable Showcase */}
          <div className="mb-24 mt-12 w-[100vw] ml-[calc(-50vw+50%)] overflow-hidden">
            <h3 className="text-sm tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-6 text-center">Elementos de Marca</h3>
            <p className="text-center text-xs text-neutral-400 mb-8 -mt-4 md:hidden">Desliza para ver los elementos</p>
            
            <BrandShowcase onOpenGallery={openGallery} />
          </div>

          {/* Postcards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-sm tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-6 text-center">Postales de Espacios Culturales</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
              {[imgPostcard1, imgPostcard2, imgPostcard3, imgPostcard4, imgPostcard5].map((src, i, arr) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  onClick={() => openGallery(arr, i)}
                  className="rounded-xl overflow-hidden shadow-sm border border-neutral-100 dark:border-neutral-700 cursor-pointer"
                >
                  <img src={src} alt={`Postal ${i + 1}`} className="w-full h-auto block" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {galleryState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md"
            onClick={closeGalleryOnBackground}
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4 z-[110]">
              <button 
                onClick={() => setGalleryState(null)}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Desktop Navigation Arrows */}
            {!isMobile && galleryState.images.length > 1 && (
              <>
                <button
                  onClick={prevGalleryImage}
                  className="absolute left-8 top-1/2 -translate-y-1/2 z-[110] p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={activeGalleryIndex === 0}
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={nextGalleryImage}
                  className="absolute right-8 top-1/2 -translate-y-1/2 z-[110] p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={activeGalleryIndex === galleryState.images.length - 1}
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Scrollable Gallery */}
            <div 
              ref={galleryScrollRef}
              onScroll={handleGalleryScroll}
              className="flex-1 w-full h-full flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{ scrollBehavior: 'smooth' }}
              onClick={closeGalleryOnBackground}
            >
              {galleryState.images.map((src, idx) => (
                <div 
                  key={idx} 
                  className="flex-none w-full h-full flex items-center justify-center snap-center p-4"
                  onClick={closeGalleryOnBackground}
                >
                  {typeof src === 'string' ? (
                    <img 
                      src={src} 
                      alt={`Vista ${idx + 1}`} 
                      className="max-w-full max-h-[85vh] object-contain rounded-md select-none cursor-default drop-shadow-2xl"
                      draggable={false}
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <div onClick={(e) => e.stopPropagation()} className="max-w-full max-h-[85vh] flex items-center justify-center pointer-events-none drop-shadow-2xl">
                      {src}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Indicator / Hints */}
            <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center justify-center pointer-events-none gap-4">
              {/* Desktop Dots */}
              {!isMobile && galleryState.images.length > 1 && (
                <div className="flex gap-2 bg-black/40 px-4 py-3 rounded-full backdrop-blur-md">
                  {galleryState.images.map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeGalleryIndex ? 'bg-white scale-110' : 'bg-white/30'}`}
                    />
                  ))}
                </div>
              )}
              
              {/* Mobile Swipe Hint */}
              {isMobile && galleryState.images.length > 1 && (
                <div className="bg-black/50 text-white/70 px-4 py-2 rounded-full text-xs flex items-center gap-2 backdrop-blur-md">
                  <ArrowLeft size={12} />
                  Desliza para ver más
                  <ArrowRight size={12} />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === CTA / FOOTER === */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#08602A] to-[#062f16] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 tracking-tight font-bold">
              ¿Te gustó este proyecto?
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              CultuBAQ es un ejemplo de cómo el diseño centrado en el usuario puede transformar la manera en que las personas descubren y participan en la cultura de su ciudad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBack}
                className="px-8 py-4 bg-white text-[#08602A] rounded-full hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} /> Volver al portafolio
              </button>
              <a
                href="https://www.figma.com/proto/EDJbrC7hB2xF3BasRq9EzJ/Final-TODO-CultuBAQ-Proyecto-de-Grado-2025?node-id=10160-17638&p=f&t=VibsM36cJcSHxrKe-0&scaling=min-zoom&content-scaling=fixed&page-id=9614%3A21911&starting-point-node-id=9614%3A21912&hide-ui=1"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                Visualizar prototipo <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-neutral-200 dark:border-neutral-900 text-neutral-500 dark:text-neutral-400 text-sm bg-white dark:bg-neutral-950 flex flex-col items-center justify-center gap-1">
         <p>Todos los derechos reservados. © 2026 | Dise��ado por <a href="https://www.instagram.com/ryderjbarrios_/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors font-medium">@thinkaboutryry</a>.</p>
         <p className="mt-1 text-xs opacity-70">Diseñando ideas que inspiran, conectan y comunican.</p>
      </footer>
    </div>
  );
}