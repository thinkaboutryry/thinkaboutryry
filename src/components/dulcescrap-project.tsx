import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink, Users, Target, Search, Lightbulb, PenTool, TestTube, Eye, ChevronLeft, ChevronRight, Palette, Type, Flag, X, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router';

// Design System / Wireframes
import WireframeHome from '../imports/WireframeHome';
import imgLogo from 'figma:asset/3cd03b70bbd8bea66ecaef1e1d20dd6f1b8c5eb0.png';
import imgBoceto1 from 'figma:asset/45ba8e340e803805208c3d7402fbd7b4850bb906.png';
import imgBoceto2 from 'figma:asset/7c7b762193b09dbe13827b4dad6e99bce59d2cbd.png';
import imgBoceto3 from 'figma:asset/6022935342b78a544fbd4adc369eb4f7673c962e.png';
import imgBoceto4 from 'figma:asset/c12890cbaa39c36a92adff83fe3ee2533d328a91.png';

// Comparison Images
import imgDulceScrapWireframe from 'figma:asset/4b900e8183207b4f6ab9ac294b6336f869a17472.png';
import imgDulceScrapFinal from 'figma:asset/8d4b24e4edc5f3a5b515a95e972e96d0da559b10.png';

// Comparison Slider Component
import { ImageComparisonSlider } from './image-comparison-slider';

// Desktop Screens
import imgDesk1 from 'figma:asset/12d72b6eb80857b8c1084a25d249a6bd39b59a07.png'; // Home
import imgDesk2 from 'figma:asset/0d97e1f29fbbaf4edb3b3b95e9dee5a77fb15259.png'; // Toppers
import imgDesk3 from 'figma:asset/c12f90403de6f012ee4c63fd564ba9dc84522654.png'; // Troquelados
import imgDesk4 from 'figma:asset/9d0899ea44c13018df38d5b0f37238daeab4405b.png'; // Mayoristas
import imgDesk5 from 'figma:asset/bcf20e32b29a1124bba66b3fa8dcbd86ed8388c8.png'; // Carrito

// Hero Mockup
import imgHeroMockup from 'figma:asset/3feb67eab535c4058909231811441f73dc37a2f5.png';

// Aditional Pieces
import imgLanding from 'figma:asset/0ef3b2431bf6604a329a19fa182e753a1e66e29a.png';
import imgBanner from 'figma:asset/18222aaece657ce414c4ad4c662bd51d04acc45a.png';
import imgEmail from 'figma:asset/635f3e39576f883d2c8d56d7bb0de3dc02b23a94.png';

// --- Desktop Screens ---
const SCREENS = [
  { src: imgDesk1, label: 'Home', desc: 'Página principal con banner de ofertas y acceso a categorías.' },
  { src: imgDesk2, label: 'Toppers', desc: 'Catálogo de toppers personalizados y prediseñados.' },
  { src: imgDesk3, label: 'Troquelados', desc: 'Sección de figuras troqueladas para scrapbooking.' },
  { src: imgDesk4, label: 'Mayoristas', desc: 'Información y beneficios para compras al por mayor.' },
  { src: imgDesk5, label: 'Carrito de Compras', desc: 'Resumen de pedido y gestión de productos antes del pago.' },
];

// --- Laptop Mockup Wrapper ---
function LaptopMockup({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex flex-col items-center py-6">
      <div 
        className="relative w-full max-w-[800px] transition-transform duration-700 hover:scale-[1.02] drop-shadow-[0_20px_40px_rgba(236,38,143,0.15)] dark:drop-shadow-[0_20px_40px_rgba(236,38,143,0.3)]"
        style={{ perspective: '1200px' }}
      >
        {/* Screen */}
        <div className="bg-[#1a1a1a] rounded-t-2xl p-3 pb-4 relative shadow-2xl border border-neutral-800">
          {/* Camera dot */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neutral-800 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-blue-900/50" />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[16/10] bg-white relative border border-neutral-800/50 flex items-center justify-center">
            <img src={src} alt={label} className="w-full h-full object-cover object-top" />
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
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
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-[#EC268F] scale-125' : 'bg-neutral-300 dark:bg-neutral-600'}`} 
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

// --- Design Process Steps ---
const DESIGN_STEPS = [
  {
    phase: 'Empatizar',
    icon: <Search size={24} />,
    keywords: ['Investigación', 'Compradores', 'Tendencias']
  },
  {
    phase: 'Definir',
    icon: <Target size={24} />,
    keywords: ['E-commerce', 'Arquitectura', 'Conversión']
  },
  {
    phase: 'Idear',
    icon: <Lightbulb size={24} />,
    keywords: ['Arquitectura', 'Layouts', 'Wireframes']
  },
  {
    phase: 'Prototipar (IA)',
    icon: <PenTool size={24} />,
    keywords: ['Generación', 'Sistema de Diseño', 'Interacción']
  },
  {
    phase: 'Testear',
    icon: <TestTube size={24} />,
    keywords: ['Testing', 'Feedback', 'Ajustes']
  }
];

// --- Objectives ---
const OBJECTIVES = [
  'Diseñar una plataforma de E-commerce moderna que facilite la navegación entre diversas categorías de productos.',
  'Implementar Inteligencia Artificial en la estructuración de la información y wireframing inicial para optimizar tiempos.',
  'Establecer un Sistema de Diseño coherente (colores, tipografía, componentes) que refleje la identidad de marca.',
  'Desarrollar piezas gráficas complementarias (banners, landing pages y email marketing) para impulsar las ventas.'
];

function DulceScrapLogoWhite() {
  return (
    <img src={imgLogo} alt="Dulce Scrap" className="h-28 md:h-28 object-contain mb-4 filter brightness-0 invert" />
  );
}

// --- Section Title ---
function SectionTitle({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <span className="text-[#d91d7e] dark:text-[#ED3A98] text-sm tracking-widest uppercase">{number}</span>
      <h2 className="text-3xl md:text-4xl mt-1">{title}</h2>
      {subtitle && <p className="text-neutral-500 dark:text-neutral-400 mt-2 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

// --- Wireframe Showcase ---
function WireframeShowcase() {
  const parts = [
    { title: "Header & Hero", offset: 0 },
    { title: "Categorías", offset: -16 },
    { title: "Productos", offset: -35 },
    { title: "Footer & Newsletter", offset: -70 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {parts.map((part, i) => (
        <div key={i} className="flex flex-col bg-white dark:bg-neutral-800 rounded-3xl p-6 shadow-sm border border-neutral-100 dark:border-neutral-700">
          <h3 className="text-lg mb-4 text-neutral-800 dark:text-neutral-200">{part.title}</h3>
          <div 
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#f5f5f5] border border-neutral-200 dark:border-neutral-700" 
            style={{ containerType: 'inline-size' }}
          >
            <div 
              className="absolute top-0 left-0 w-[1440px] h-[6883px] origin-top-left" 
              style={{ transform: `scale(calc(100cqw / 1440)) translateY(${part.offset}%)` }}
            >
               <WireframeHome />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Brand Showcase Component ---
function AditionalPiecesShowcase({ onOpenGallery }: { onOpenGallery?: (images: any[], index: number) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { name: "Landing Page", src: imgLanding, content: <img src={imgLanding} alt="Landing Page" className="w-[340px] h-[300px] object-contain drop-shadow-[0_20px_40px_rgba(236,38,143,0.15)] dark:drop-shadow-[0_20px_40px_rgba(236,38,143,0.3)]" draggable={false} /> },
    { name: "Banner", src: imgBanner, content: <img src={imgBanner} alt="Banner" className="w-[320px] h-[330px] object-contain drop-shadow-[0_20px_40px_rgba(236,38,143,0.15)] dark:drop-shadow-[0_20px_40px_rgba(236,38,143,0.3)]" draggable={false} /> },
    { name: "Email Marketing", src: imgEmail, content: <img src={imgEmail} alt="Email" className="w-[350px] h-[380px] object-contain drop-shadow-[0_20px_40px_rgba(236,38,143,0.15)] dark:drop-shadow-[0_20px_40px_rgba(236,38,143,0.3)]" draggable={false} /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="w-full">
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
                  className={`absolute flex flex-col items-center justify-center pointer-events-auto ${diff === 0 ? 'cursor-pointer' : ''}`}
                  style={{ originY: 0.5 }}
                  onClick={() => diff === 0 && onOpenGallery && onOpenGallery(items.map(item => item.src), activeIndex)}
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
        
        <div className="flex gap-2 mt-8 z-20">
          {items.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActiveIndex(i)} 
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeIndex ? 'bg-[#EC268F] scale-125' : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400'}`} 
            />
          ))}
        </div>
      </div>

      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-8 pb-10 px-6 w-full no-scrollbar">
        {items.map((item, i) => (
           <div key={i} className="min-w-[100%] snap-center flex flex-col items-center justify-center shrink-0">
              <div 
                className="h-[380px] flex items-center justify-center w-full max-w-[400px] cursor-pointer"
                onClick={() => onOpenGallery && onOpenGallery(items.map(it => it.src || it), i)}
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
export default function DulceScrapProject() {
  const navigate = useNavigate();
  const wireframesRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const galleryScrollRef = useRef<HTMLDivElement>(null);
  const [galleryState, setGalleryState] = useState<{ images: any[], currentIndex: number } | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#projects');
  };

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
      {/* Lightbox for Mobile Gallery */}
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
              {galleryState.images.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex-none w-full h-full flex items-center justify-center snap-center p-4"
                  onClick={closeGalleryOnBackground}
                >
                  {typeof item === 'string' || !item.content ? (
                     <img 
                       src={item.src || item} 
                       alt={`Vista ${idx + 1}`} 
                       className="max-w-full max-h-[85vh] object-contain rounded-md select-none cursor-default drop-shadow-2xl"
                       draggable={false}
                       onClick={(e) => e.stopPropagation()}
                     />
                  ) : (
                     <div className="flex items-center justify-center transform scale-150 origin-center drop-shadow-2xl" onClick={(e) => e.stopPropagation()}>
                       {item.content}
                     </div>
                  )}
                </div>
              ))}
            </div>

            {/* Indicator / Hints */}
            <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center justify-center pointer-events-none gap-4">
              {/* Desktop Dots */}
              {!isMobile && galleryState.images.length > 1 && (
                <div className="flex gap-2 bg-black/40 px-4 py-3 rounded-full backdrop-blur-md max-w-[80vw] flex-wrap justify-center">
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

      {/* === HERO === */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#2d0a19]">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#EC268F] via-[#8c1452] to-[#1a050e]" />
        
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
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium tracking-wider uppercase backdrop-blur-md border border-white/20">IA</span>
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
                alt="Dulce Scrap Mockup Mobile" 
                className="w-full h-auto drop-shadow-2xl rounded-2xl" 
              />
            </motion.div>

            <div className="flex justify-center md:justify-start">
              <DulceScrapLogoWhite />
            </div>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed mb-10 font-light mx-auto md:mx-0">
              Plataforma digital para la <strong className="text-white font-semibold">venta y exhibición</strong> de papelería creativa, diseñada para optimizar las conversiones y potenciar el alcance de la marca.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mb-10">
              <a
                href="https://dulcescrap.figma.site/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-[#d91d7e] dark:bg-[#ED3A98] hover:bg-[#b01665] dark:hover:bg-[#d91d7e] text-white font-semibold rounded-full flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#d91d7e]/20 dark:shadow-[#ED3A98]/20"
              >
                Ver Prototipo Interactivo <ExternalLink size={18} />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white/70 text-sm border-t border-white/10 pt-8 w-full">
              <div>
                <span className="block text-[#F9A8D4] text-xs uppercase tracking-widest mb-1.5">Rol</span>
                <span className="text-white font-medium">UX/UI Designer</span>
              </div>
              <div>
                <span className="block text-[#F9A8D4] text-xs uppercase tracking-widest mb-1.5">Software</span>
                <span className="text-white font-medium">Figma, IA</span>
              </div>
              <div>
                <span className="block text-[#F9A8D4] text-xs uppercase tracking-widest mb-1.5">Tipo</span>
                <span className="text-white font-medium">E-commerce</span>
              </div>
              <div>
                <span className="block text-[#F9A8D4] text-xs uppercase tracking-widest mb-1.5">Año</span>
                <span className="text-white font-medium">2026</span>
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
                alt="Dulce Scrap Multi-device Mockup" 
                className="w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)] rounded-xl object-contain" 
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
              className="bg-[#EC268F] border border-[#EC268F] rounded-2xl p-8 shadow-xl shadow-[#EC268F]/20"
            >
              <h3 className="text-white mb-4 flex items-center gap-2 text-xl font-bold">
                <Target size={20} /> Problemática
              </h3>
              <p className="text-lg leading-relaxed text-white/90">
                La marca <strong>necesitaba una transición digital eficiente</strong> para su catálogo de papelería creativa, que permitiera compras intuitivas sin perder el toque personal y dulce.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-[#EC268F] border border-[#EC268F] rounded-2xl p-8 shadow-xl shadow-[#EC268F]/20"
            >
              <h3 className="text-white mb-4 flex items-center gap-2 text-xl font-bold">
                <Users size={20} /> Público Objetivo
              </h3>
              <p className="text-lg leading-relaxed text-white/90">
                Mujeres dedicadas a la repostería y organización de eventos, que buscan productos personalizados para mejorar la presentación de sus creaciones.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#EC268F] to-[#8c1452] rounded-2xl p-8 md:p-10 text-white"
          >
            <h3 className="text-white mb-4 flex items-center gap-2 text-xl font-bold">
              <Flag size={20} /> Objetivo
            </h3>
            <p className="text-lg leading-relaxed">
              Desarrollar un sitio web de comercio electrónico que permita <strong>automatizar el proceso de venta de productos personalizados</strong>, facilitando la exploración, gestión de pedidos y pagos en línea.
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
            subtitle="Metodología de diseño UX/UI centrada en el usuario para estructurar un e-commerce funcional, intuitivo y coherente con la identidad de la marca."
          />
          
          {/* Process Steps (Path Layout) */}
          <div className="relative mb-24 mt-12 py-10">
            {/* Dotted connecting line (desktop) */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#EC268F]/30 -translate-y-1/2 z-0" />
            
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
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#d91d7e]/10 dark:from-[#EC268F]/10 to-[#d91d7e]/5 dark:to-[#EC268F]/5 flex items-center justify-center mb-5 text-[#d91d7e] dark:text-[#ff66b5] shadow-inner">
                    {step.icon}
                  </div>
                  <span className="text-[#d91d7e] dark:text-[#ED3A98] text-xs tracking-widest block mb-2">{String(i + 1).padStart(2, '0')}</span>
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
            <h3 className="text-sm tracking-widest uppercase text-neutral-500 mb-6 text-center">Bocetación Inicial</h3>
            <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8 -mt-4 hidden md:block">Arrastra los bocetos para explorarlos</p>
            <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8 -mt-4 md:hidden">Desliza para ver los bocetos</p>
            
            {/* Mobile Grid */}
            <div className="block md:hidden pb-10 px-4 max-w-sm mx-auto">
              <div className="grid grid-cols-2 gap-3">
                {[imgBoceto1, imgBoceto2, imgBoceto3, imgBoceto4].map((src, i, arr) => (
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
              {[imgBoceto1, imgBoceto2, imgBoceto3, imgBoceto4].map((src, i) => (
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
                beforeImage={imgDulceScrapWireframe} 
                afterImage={imgDulceScrapFinal} 
                alt="Comparación Dulce Scrap: Wireframe vs Alta Fidelidad" 
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

      {/* === SISTEMA DE DISEÑO === */}
      <section className="py-20 px-6 md:px-20 bg-neutral-50 dark:bg-neutral-900/30 border-b border-neutral-100 dark:border-neutral-900">
        <div className="max-w-5xl mx-auto">
          <SectionTitle 
            number="04" 
            title="Sistema de Diseño" 
            subtitle="Atributos visuales que dan identidad a la marca digital de Dulce Scrap."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
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
                    {['#fdf2f8', '#fbcfe8', '#EC268F', '#be185d', '#831843'].map((c, i) => (
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
                    {['#fff1f2', '#fecdd3', '#f43f5e', '#e11d48', '#9f1239'].map((c, i) => (
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
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider">H1 — Nunito 80px</span>
                    <p className="text-4xl mt-1 font-['Nunito']">AaBbCc</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider">H2 — Nunito 60px</span>
                    <p className="text-2xl mt-1 font-['Nunito']">AaBbCc</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider">H3 — Inter 16px</span>
                    <p className="text-xl mt-1 font-['Inter']">AaBbCc</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-sm border border-neutral-100 dark:border-neutral-700">
                <h3 className="text-lg mb-4">Botones</h3>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 bg-[#EC268F] text-white rounded-lg text-sm shadow-sm shadow-[#EC268F]/20">Primario</button>
                  <button className="px-4 py-2 bg-[#fbcfe8] text-[#db2777] rounded-lg text-sm">Secundario</button>
                  <button className="px-4 py-2 border border-[#EC268F] text-[#EC268F] dark:text-[#ff66b5] rounded-lg text-sm">Outline</button>
                  <button className="px-4 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-500 rounded-lg text-sm cursor-not-allowed">Disabled</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === PIEZAS ADICIONALES (Carousel based) === */}
      <section className="py-20 px-6 md:px-20 border-b border-neutral-100 dark:border-neutral-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            number="05" 
            title="Piezas Adicionales" 
            subtitle="Material gráfico complementario generado para fortalecer la marca en ecosistemas digitales, promoviendo el E-commerce."
          />
          <div className="mt-12">
            <AditionalPiecesShowcase onOpenGallery={openGallery} />
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-24 px-6 md:px-20 bg-neutral-900 text-white relative overflow-hidden text-center">
        {/* Soft pink glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EC268F]/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 tracking-tight font-bold">
              ¿Te gustó este proyecto?
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Dulce Scrap es un ejemplo de cómo el desarrollo de un comercio electrónico puede automatizar y mejorar la experiencia de compra de papelería creativa y personalizada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleBack}
                className="px-8 py-4 bg-white text-[#EC268F] rounded-full hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} /> Volver al Portafolio
              </button>
              <a 
                href="https://dulcescrap.figma.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                Visualizar Prototipo <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-neutral-200 dark:border-neutral-900 text-neutral-500 dark:text-neutral-400 text-sm bg-white dark:bg-neutral-950 flex flex-col items-center justify-center gap-1">
         <p>Todos los derechos reservados. © 2026 | Diseñado por <a href="https://www.instagram.com/ryderjbarrios_/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors font-medium">@thinkaboutryry</a>.</p>
         <p className="mt-1 text-xs opacity-70">Diseñando ideas que inspiran, conectan y comunican.</p>
      </footer>
    </div>
  );
}