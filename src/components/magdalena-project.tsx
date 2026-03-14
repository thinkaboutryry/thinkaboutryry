import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Users, Target, Search, Lightbulb, PenTool, ExternalLink, Flag, Droplets, ArrowRight, X, ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router';

// --- Figma Assets ---
import { ImageComparisonSlider } from './image-comparison-slider';
import imgLaMagdalenaOld from "figma:asset/acecbbe54b80d38dac4e701bf1cdb1bbbe14a5b8.png";
import imgLaMagdalenaNew from "figma:asset/433af321d2eed687d4fccccfdf546438b2203ddc.png";
import imgAaaaaaa1 from "figma:asset/e3b1a7e5bae395f91995de2ea9290d9aa00fd61a.png";
import imgLaMagdalenaMoodbooard1 from "figma:asset/7e9203296da7058bcbd82497ee3cb42585db71d3.png";
import imgLaMagdalenaMoodbooard2 from "figma:asset/90036d3362be14dd5227173a95bc4322e48bdd8e.png";
import imgImage16 from "figma:asset/184cafaecb5d442623e24aa1de4d1da1cc5724c7.png";
import imgImage20 from "figma:asset/29cd6a2c9b18722d1ff9f0fd2bfe463aaf78f188.png";
import imgImage18 from "figma:asset/4b7eec92ddd856e1d57568d14be56bc4b861aa94.png";
import imgImage22 from "figma:asset/6cc4fd3163cff2cee8e0e198bc27f8f05c3d0d25.png";
import imgImage23 from "figma:asset/937d1de8199244cf1f70b420c5ad87ee6a035b2f.png";
import imgMockups31 from "figma:asset/8f0edbbc8f4715349ada2e39297694b4114d520e.png";
import imgStickerV011 from "figma:asset/1b615a13e05242f3b517bd9f4836b9d414975d83.png";
import imgBusinessCardMockup85X551 from "figma:asset/6839274719948c6e40c1338ec1aa874ea77ca2e1.png";
import imgMockups61 from "figma:asset/36a9f7a9eb298666ea161223c1093e6715dc5e8f.png";
import imgFreeHangingBannerMockup31 from "figma:asset/22dc8ee756ec9334b2804f3ad48f2e036838aacc.png";
import imgMockups51 from "figma:asset/06bb28fe6726cdd31aef2c4be6414990db4e5267.png";
import imgFreeSignMockup31 from "figma:asset/2c82e2dead16d108a625895471bf34b8bd86fbee.png";
import imgStickerV021 from "figma:asset/e6db49256f7d607b4eeda00febd57ee28fadb24a.png";
import imgDoorHangerMockup31 from "figma:asset/f52fe865c04e34cc1bc4b63749dd3181a0f36b9e.png";
import imgImage21 from "figma:asset/0b030e1f344a3da0dcf3dee0315d4091359c9696.png";
import imgImage24 from "figma:asset/69e4888d6d407aaa532b483c4b640c32c498c0e6.png";
import imgFreeSnakeStandMockup31 from "figma:asset/b8ee46993adcf4e03302d7fbe086acbef8c8487e.png";
import imgDeliveryVanMockup31 from "figma:asset/5537adff762d114861f464b62409fc8d4988fbf4.png";
import imgMockups71 from "figma:asset/29c91f0bb71894bd9b56d247504c6f296b4b38e1.png";
import imgTarjetas from "figma:asset/f39f8a7ba8ecc0d0f5f4236d15aff0e0f96bfbcb.png";
import imgSenaleticaNew from "figma:asset/2c82e2dead16d108a625895471bf34b8bd86fbee.png";
import imgColgadorNew from "figma:asset/f52fe865c04e34cc1bc4b63749dd3181a0f36b9e.png";

const heroImg = imgAaaaaaa1;

// --- Brand Showcase Component ---
function BrandShowcase({ onImageClick }: { onImageClick: (item: any, index: number, total: number, allItems: any[]) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { name: "Imagotipo Vertical", src: imgImage22, isLogo: true, width: 220, height: 280 },
    { name: "Imagotipo Horizontal", src: imgImage23, isLogo: true, width: 320, height: 160 },
    { name: "Isotipo", src: imgImage24, isLogo: true, width: 180, height: 180 },
    { name: "Pin Metálico", src: imgMockups71, width: 280, height: 280 },
    { name: "Puesto de Serpiente", src: imgFreeSnakeStandMockup31, width: 220, height: 260 },
    { name: "Tarjetas de Publicidad", src: imgTarjetas, width: 340, height: 250 },
    { name: "Llavero", src: imgMockups61, width: 280, height: 280 },
    { name: "Sticker", src: imgStickerV011, width: 280, height: 280, extraClass: "rotate-[15deg]" },
    { name: "Letrero Redondo", src: imgMockups31, width: 280, height: 280 },
    { name: "Valla Publicitaria", src: imgFreeHangingBannerMockup31, width: 340, height: 220 },
    { name: "Colgador", src: imgColgadorNew, width: 200, height: 240 },
    { name: "Botones Circulares", src: imgMockups51, width: 280, height: 280 },
    { name: "Señalética", src: imgSenaleticaNew, width: 240, height: 300 },
    { name: "Camión", src: imgDeliveryVanMockup31, width: 400, height: 250 }
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
                  className="absolute flex flex-col items-center justify-center pointer-events-auto"
                  style={{ originY: 0.5 }}
                >
                  <div 
                    className={`h-[380px] flex items-center justify-center transition-transform ${diff === 0 ? 'cursor-zoom-in hover:scale-105' : ''}`}
                    onClick={() => diff === 0 && onImageClick(item, i, items.length, items)}
                  >
                    {item.isLogo ? (
                       <div style={{ width: item.width, height: item.height }} className="relative drop-shadow-xl mx-auto">
                          <div className="absolute inset-0 bg-[#800000] dark:bg-white transition-colors duration-300"
                               style={{
                                  WebkitMaskImage: `url(${item.src})`,
                                  WebkitMaskSize: 'contain',
                                  WebkitMaskRepeat: 'no-repeat',
                                  WebkitMaskPosition: 'center',
                                  maskImage: `url(${item.src})`,
                                  maskSize: 'contain',
                                  maskRepeat: 'no-repeat',
                                  maskPosition: 'center'
                               }}
                          />
                       </div>
                    ) : (
                       <img src={item.src} alt={item.name} className={`object-contain mx-auto block drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] ${item.extraClass || ''}`} style={{ width: item.width, height: 'auto', maxHeight: '350px' }} draggable={false} />
                    )}
                  </div>
                  {diff === 0 && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-lg text-neutral-800 dark:text-neutral-200 tracking-widest uppercase whitespace-nowrap font-bold text-center"
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
        <div className="flex gap-2 mt-8 z-20 flex-wrap justify-center max-w-[80%]">
          {items.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActiveIndex(i)} 
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeIndex ? 'bg-[#800000] dark:bg-[#ffb5bc] scale-125' : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400'}`} 
            />
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-8 pb-10 px-6 w-full no-scrollbar">
        {items.map((item, i) => (
           <div key={i} className="min-w-[100%] snap-center flex flex-col items-center justify-center shrink-0">
              <div className="h-[380px] flex items-center justify-center w-full max-w-[400px]">
                 <div 
                   className="flex items-center justify-center transform scale-[0.85] origin-center cursor-zoom-in active:scale-95 transition-transform"
                   onClick={() => onImageClick(item, i, items.length, items)}
                 >
                   {item.isLogo ? (
                       <div style={{ width: item.width, height: item.height }} className="relative drop-shadow-xl mx-auto">
                          <div className="absolute inset-0 bg-[#800000] dark:bg-white transition-colors duration-300"
                               style={{
                                  WebkitMaskImage: `url(${item.src})`,
                                  WebkitMaskSize: 'contain',
                                  WebkitMaskRepeat: 'no-repeat',
                                  WebkitMaskPosition: 'center',
                                  maskImage: `url(${item.src})`,
                                  maskSize: 'contain',
                                  maskRepeat: 'no-repeat',
                                  maskPosition: 'center'
                               }}
                          />
                       </div>
                    ) : (
                       <img src={item.src} alt={item.name} className={`object-contain mx-auto block drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] ${item.extraClass || ''}`} style={{ width: item.width, height: 'auto', maxHeight: '350px' }} draggable={false} />
                    )}
                 </div>
              </div>
              <p className="mt-6 text-sm text-neutral-800 dark:text-neutral-200 tracking-widest uppercase font-bold">{item.name}</p>
           </div>
        ))}
      </div>
    </div>
  );
}

// --- Design Process Steps ---
const DESIGN_STEPS = [
  {
    phase: 'Empatizar',
    icon: <Search size={24} />,
    keywords: ['Mercado', 'Competencia', 'Descubrimiento']
  },
  {
    phase: 'Definir',
    icon: <Target size={24} />,
    keywords: ['Valores', 'Personalidad', 'Atributos']
  },
  {
    phase: 'Idear',
    icon: <Lightbulb size={24} />,
    keywords: ['Concepto', 'Moodboard', 'Visual']
  },
  {
    phase: 'Diseñar',
    icon: <PenTool size={24} />,
    keywords: ['Logotipo', 'Identidad', 'Color']
  },
  {
    phase: 'Aplicar',
    icon: <Flag size={24} />,
    keywords: ['Empaques', 'Papelería', 'Mockups']
  }
];

// --- Section Title ---
function SectionTitle({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <span className="text-[#800000] dark:text-[#ffb5bc] text-sm tracking-widest uppercase">{number}</span>
      <h2 className="text-3xl md:text-4xl mt-1 text-neutral-900 dark:text-white">{title}</h2>
      {subtitle && <p className="text-neutral-500 dark:text-neutral-400 mt-2 max-w-2xl">{subtitle}</p>}
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
export default function MagdalenaProject() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const bocetosRef = useRef<HTMLDivElement>(null);
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
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white overflow-hidden">
      <ScrollToTop />
      
      {/* === HERO === */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#2b050b]">
        {/* --- Back Button --- */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-24 md:py-32 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Texts */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left"
          >
            <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium tracking-wider uppercase backdrop-blur-md border border-white/20">Branding</span>
            </div>

            {/* Mobile Mockup representation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-[320px] mx-auto md:hidden mt-0 mb-6"
            >
              <img 
                src={heroImg} 
                alt="La Magdalena Mockup Mobile" 
                className="w-full h-auto drop-shadow-2xl rounded-2xl relative z-10" 
              />
            </motion.div>
            
            <div className="flex justify-center md:justify-start mb-8 w-full">
              <img src={imgImage21} alt="La Magdalena" className="w-[300px] md:w-[400px] h-auto object-contain brightness-0 invert mx-auto md:mx-0" />
            </div>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed mb-10 font-light mx-auto md:mx-0">
              El proyecto consistió en una propuesta de <strong className="text-white font-semibold">rebranding</strong> para <strong className="text-white font-semibold">elevar</strong> la <strong className="text-white font-semibold">percepción</strong> y <strong className="text-white font-semibold">unificar</strong> la marca de <strong className="text-white font-semibold">La Magdalena</strong>, centro logístico orientado al <strong className="text-white font-semibold">fortalecimiento</strong> de las operaciones en transporte.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mb-10">
              <a
                href="https://heyzine.com/flip-book/fad3070996.html"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-[#f0dab5] hover:bg-white text-[#5a121c] font-semibold rounded-full flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#f0dab5]/20"
              >
                Ver Presentación Interactiva <ExternalLink size={18} />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white/70 text-sm border-t border-white/10 pt-8 w-full">
              <div>
                <span className="block text-[#ffb5bc] text-xs uppercase tracking-widest mb-1.5">Rol</span>
                <span className="text-white font-medium">Brand Designer</span>
              </div>
              <div>
                <span className="block text-[#ffb5bc] text-xs uppercase tracking-widest mb-1.5">Software</span>
                <span className="text-white font-medium block">Figma, Illustrator,<br/>Photoshop</span>
              </div>
              <div>
                <span className="block text-[#ffb5bc] text-xs uppercase tracking-widest mb-1.5">Tipo</span>
                <span className="text-white font-medium">Rebranding</span>
              </div>
              <div>
                <span className="block text-[#ffb5bc] text-xs uppercase tracking-widest mb-1.5">Año</span>
                <span className="text-white font-medium">2025</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Mockup Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 50 }}
            className="lg:w-1/2 relative hidden md:flex items-center justify-end"
          >
            <div className="relative w-full max-w-[650px] transform hover:scale-[1.02] hover:-translate-y-4 transition-all duration-700 ease-out z-20 will-change-transform">
              <img 
                src={heroImg} 
                alt="La Magdalena Branding Mockup" 
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
              className="bg-[#800000]/5 dark:bg-[#800000]/10 border border-[#800000]/20 rounded-2xl p-8"
            >
              <h3 className="text-[#800000] dark:text-[#ffb5bc] mb-4 flex items-center gap-2 text-xl font-bold">
                <Target size={20} /> Problemática
              </h3>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                La marca original <strong>carecía de una identidad visual unificada</strong> que reflejara su magnitud como <strong>centro logístico integral</strong> (hotel y servicios).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-[#800000]/5 dark:bg-[#800000]/10 border border-[#800000]/20 rounded-2xl p-8"
            >
              <h3 className="text-[#800000] dark:text-[#ffb5bc] mb-4 flex items-center gap-2 text-xl font-bold">
                <Users size={20} /> Público Objetivo
              </h3>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong>Transportistas, turistas y empresas</strong> en la Troncal del Caribe, que buscan un <strong>espacio seguro y cálido</strong> en el camino.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#800000] to-[#5a0000] rounded-2xl p-8 md:p-10 text-white mt-8"
          >
            <h3 className="text-[#ffb5bc] mb-4 flex items-center gap-2 text-xl font-bold">
              <Flag size={20} /> Objetivo
            </h3>
            <p className="text-lg leading-relaxed">
              Desarrollar un <strong>rebranding integral</strong> que eleve y unifique la marca, bajo el concepto de <strong>camino con propósito</strong> y <strong>movimiento constante</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === PROCESO DE DISEÑO === */}
      <section className="py-20 px-6 md:px-20 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <SectionTitle 
            number="02" 
            title="Proceso de Diseño" 
            subtitle="Desde la investigación y contextualización hasta la implementación visual de la marca." 
          />
          
          <div className="relative mt-16 mb-32 hidden md:block">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#800000]/20 dark:via-[#ffb5bc]/20 to-transparent -translate-y-1/2 z-0" />
            
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
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#800000]/10 dark:from-[#ffb5bc]/10 to-[#800000]/5 dark:to-[#ffb5bc]/5 flex items-center justify-center mb-5 text-[#800000] dark:text-[#ffb5bc] shadow-inner">
                    {step.icon}
                  </div>
                  <span className="text-[#800000] dark:text-[#ffb5bc] text-xs tracking-widest block mb-2">{String(i + 1).padStart(2, '0')}</span>
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

          <div className="grid grid-cols-1 md:hidden gap-6 mt-12 mb-20 max-w-sm mx-auto">
            {DESIGN_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-neutral-800 rounded-3xl p-6 shadow-lg border border-neutral-100 dark:border-neutral-700 text-center flex flex-col items-center justify-center relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#800000]/10 dark:bg-[#ffb5bc]/10 flex items-center justify-center mb-4 text-[#800000] dark:text-[#ffb5bc]">
                  {step.icon}
                </div>
                <span className="text-[#800000] dark:text-[#ffb5bc] text-xs tracking-widest mb-1">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="font-bold text-lg mb-3 z-10">{step.phase}</h4>
                <div className="flex flex-wrap justify-center gap-1.5 z-10">
                  {step.keywords.map((kw, j) => (
                    <span key={j} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-md text-neutral-600 dark:text-neutral-300">
                      {kw}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Moodboard Slider */}
          <div className="mt-20">
            <h3 className="text-center text-sm font-bold tracking-widest text-neutral-500 uppercase mb-8">Moodboard</h3>
            
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl mx-auto overflow-hidden">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="flex-1 w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800"
               >
                 <img src={imgLaMagdalenaMoodbooard1} alt="Moodboard 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="flex-1 w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800"
               >
                 <img src={imgLaMagdalenaMoodbooard2} alt="Moodboard 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               </motion.div>
            </div>
          </div>

          {/* Bocetos Draggable */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <h3 className="text-sm tracking-widest uppercase text-neutral-500 mb-6 text-center">Bocetación Inicial</h3>
            <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8 -mt-4 hidden md:block">Arrastra los bocetos para explorarlos</p>
            <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8 -mt-4 md:hidden">Desliza para ver los bocetos</p>
            
            {/* Mobile Grid */}
            <div className="block md:hidden pb-10 px-4 max-w-sm mx-auto">
              <div className="grid grid-cols-1 gap-4 px-4">
                {[imgImage18, imgImage20, imgImage16].map((src, i, arr) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    onClick={() => openGallery(arr.map(s => ({ src: s, isLogo: false })), i)}
                    className="bg-white p-3 rounded-xl shadow-sm border border-neutral-100 cursor-zoom-in active:scale-95 transition-transform"
                  >
                    <div className="rounded-lg overflow-hidden border border-neutral-100 bg-neutral-50 aspect-[16/9] flex items-center justify-center pointer-events-none">
                      <img src={src} alt={`Boceto ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop Draggable */}
            <div ref={bocetosRef} className="hidden md:flex relative w-full h-[600px] items-center justify-center overflow-visible">
              {[imgImage18, imgImage20, imgImage16].map((src, i) => (
                <motion.div
                  key={i}
                  drag
                  dragConstraints={bocetosRef}
                  dragElastic={0.2}
                  dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                  whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
                  initial={{ rotate: (i % 2 === 0 ? 1 : -1) * (i * 6 + 2), x: (i - 1) * 220, y: (i % 2) * -20 }}
                  className="absolute cursor-grab bg-white p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-neutral-100 w-[500px] will-change-transform"
                  style={{ zIndex: i }}
                >
                  <div className="rounded-lg overflow-hidden border border-neutral-100 bg-neutral-50 aspect-[16/9] flex items-center justify-center">
                    <img src={src} alt={`Boceto ${i + 1}`} className="w-full h-full object-cover pointer-events-none" draggable={false} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Conceptualizacion */}
          <div className="mt-32 max-w-4xl mx-auto text-center">
            <h3 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-8">Conceptualización</h3>
            
            <p className="text-xl md:text-2xl leading-relaxed text-neutral-800 dark:text-neutral-200 font-light mb-16">
              La Magdalena es una marca que nace del concepto de <strong className="font-bold">camino con propósito</strong>, un recorrido que conecta identidad, territorio y personas. Su esencia está en el <strong className="font-bold">movimiento constante</strong>, no solo físico, sino también simbólico.
            </p>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Lines connecting them (desktop only) */}
              <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-[2px] bg-neutral-200 dark:bg-neutral-800 -z-10" />
              
              <div className="flex flex-col items-center bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800">
                 <div className="w-16 h-16 rounded-full bg-[#800000] text-white flex items-center justify-center mb-6 shadow-lg">
                   <Droplets size={28} />
                 </div>
                 <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Calidez</h4>
                 <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                   Evoca <strong>hospitalidad</strong> y <strong>confort</strong>, un lugar donde los usuarios se sientan <strong>bienvenidos</strong>.
                 </p>
              </div>

              <div className="flex flex-col items-center bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800">
                 <div className="w-16 h-16 rounded-full bg-[#800000] text-white flex items-center justify-center mb-6 shadow-lg">
                   <Target size={28} />
                 </div>
                 <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Dinamismo</h4>
                 <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                   Refleja el <strong>movimiento alineado</strong> con la vida de la <strong>carretera</strong>, se transmite en formas curvas del diseño.
                 </p>
              </div>

              <div className="flex flex-col items-center bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800">
                 <div className="w-16 h-16 rounded-full bg-[#800000] text-white flex items-center justify-center mb-6 shadow-lg">
                   <Search size={28} />
                 </div>
                 <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Orgánico</h4>
                 <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                   Representa la <strong>naturaleza</strong> y <strong>sostenibilidad</strong>, conectando la marca con el <strong>entorno</strong>; diseño <strong>fluido</strong> y materiales amigables.
                 </p>
              </div>
            </div>
          </div>

          {/* From Old Brand to New Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <h3 className="text-sm tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-6 text-center">De Marca Anterior a Nueva Marca</h3>
            <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8 -mt-4">Desliza la barra para ver la evolución del diseño</p>
            
            <div className="max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-video">
              <ImageComparisonSlider 
                beforeImage={imgLaMagdalenaOld} 
                afterImage={imgLaMagdalenaNew} 
                alt="Comparación La Magdalena: Marca Anterior vs Nueva Marca" 
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* === SISTEMA DE DISEÑO === */}
      <section className="py-20 px-6 md:px-20 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle number="03" title="Sistema de Diseño" subtitle="Paleta de colores y familias tipográficas para la construcción de la identidad." />
          
          {/* Colors */}
          <div className="grid md:grid-cols-2 mt-16 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-[#F0DAB5] text-[#800000] p-12 md:p-24 flex flex-col items-center justify-center text-center w-full">
               <h3 className="text-5xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-sm text-center">#F0DAB5</h3>
               <p className="text-sm md:text-lg font-medium opacity-80 uppercase tracking-widest text-center">Calidez, Equilibrio y Fiabilidad</p>
            </div>
            <div className="bg-[#800000] text-[#F0DAB5] p-12 md:p-24 flex flex-col items-center justify-center text-center w-full">
               <h3 className="text-5xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-sm text-center">#800000</h3>
               <p className="text-sm md:text-lg font-medium opacity-80 uppercase tracking-widest text-center">Dinamismo, Pasión, Energía</p>
            </div>
          </div>

          {/* Typography */}
          <div className="grid md:grid-cols-2 gap-16 mt-24 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-xl font-bold text-neutral-800 dark:text-white">Aa</div>
                 <span className="uppercase tracking-widest text-sm text-neutral-500 dark:text-neutral-400 font-bold">Primaria / Titulares</span>
               </div>
               <h3 className="text-4xl md:text-7xl font-black uppercase tracking-widest mb-6" style={{ fontFamily: 'Sirukota, sans-serif' }}>Sirukota</h3>
               <p className="text-base md:text-2xl text-neutral-500 dark:text-neutral-400 break-words font-medium uppercase tracking-widest leading-relaxed" style={{ fontFamily: 'Sirukota, sans-serif' }}>
                 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br/> 0 1 2 3 4 5 6 7 8 9
               </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-xl font-bold text-neutral-800 dark:text-white">Aa</div>
                 <span className="uppercase tracking-widest text-sm text-neutral-500 dark:text-neutral-400 font-bold">Secundaria / Cuerpo</span>
               </div>
               <h3 className="text-4xl md:text-7xl font-sans font-medium mb-6" style={{ fontFamily: '"Varela Round", sans-serif' }}>Varela</h3>
               <p className="text-base md:text-2xl text-neutral-500 dark:text-neutral-400 break-words font-sans leading-relaxed" style={{ fontFamily: '"Varela Round", sans-serif' }}>
                 a b c d e f g h i j k l m n o p q r s t u v w x y z <br/> 0 1 2 3 4 5 6 7 8 9
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* === MARCA & MOCKUPS === */}
      <section className="py-20 bg-neutral-50 dark:bg-[#0a0a0a] overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-20 mb-16">
          <SectionTitle number="04" title="Marca" subtitle="Identidad visual y piezas de rebranding para La Magdalena." />
        </div>

        <div className="mb-24 mt-12 w-[100vw] ml-[calc(-50vw+50%)] overflow-hidden">
          <h3 className="text-sm tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-3 text-center">Elementos de Marca</h3>
          <p className="text-center text-xs text-neutral-400 mb-8 -mt-2 md:hidden">Desliza para ver los elementos</p>

          <BrandShowcase onImageClick={(item, idx, total, allItems) => openGallery(allItems, idx)} />
        </div>
      </section>

      {/* === CTA / FOOTER === */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#5a121c] to-[#2b050b] text-white text-center">
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
              La Magdalena es una muestra de cómo una propuesta de rebranding puede transformar la percepción de un centro logístico completo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBack}
                className="px-8 py-4 bg-white text-[#5a121c] rounded-full hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} /> Volver al portafolio
              </button>
              <a
                href="https://heyzine.com/flip-book/fad3070996.html"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                Visualizar presentación <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-[#0a0a0a] text-neutral-500 py-8 px-6 text-center text-sm border-t border-white/5 flex flex-col items-center justify-center gap-1">
        <p>Todos los derechos reservados. © 2026 | Diseñado por <a href="https://www.instagram.com/ryderjbarrios_/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">@thinkaboutryry</a>.</p>
        <p className="mt-1 text-xs opacity-70">Diseñando ideas que inspiran, conectan y comunican.</p>
      </footer>

      {/* Fullscreen Image Lightbox Modal */}
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
                  {item.isLogo ? (
                     <div className="w-full h-full max-w-[80vw] max-h-[85vh] flex items-center justify-center mt-8 md:mt-0" onClick={(e) => e.stopPropagation()}>
                        <div className="w-full h-full bg-white drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                             style={{
                                WebkitMaskImage: `url(${item.src})`,
                                WebkitMaskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                maskImage: `url(${item.src})`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center'
                             }}
                        />
                     </div>
                  ) : (
                     <img 
                       src={item.src || item} 
                       alt={`Vista ${idx + 1}`} 
                       className="max-w-full max-h-[85vh] object-contain rounded-md select-none cursor-default drop-shadow-2xl"
                       draggable={false}
                       onClick={(e) => e.stopPropagation()}
                     />
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
    </div>
  );
}