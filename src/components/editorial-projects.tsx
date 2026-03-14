import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, ExternalLink, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router';
import gsap from 'gsap';

import imgFreeZineMockup600DpiAlexandreLallemandContraportada1 from "figma:asset/1b1cca5aac0ebd0f49da0394cb89f416c9ef47e6.png";
import imgFreeZineMockup600DpiAlexandreLallemandPortada1 from "figma:asset/4b5af93ba2cc98faa76c95ceda1571d3e3e34046.png";
import imgFreeZineMockup600DpiAlexandreLallemand101 from "figma:asset/59ec7899e356d358f678364e1ae1f9832d9630ef.png";
import imgFreeZineMockup600DpiAlexandreLallemand91 from "figma:asset/1832945598fd989f38dd5b819fcbe838fa428cef.png";
import imgFreeZineMockup600DpiAlexandreLallemand81 from "figma:asset/bfd5613aac56cc2c28df454175cc0c64d8ab6825.png";
import imgFreeZineMockup600DpiAlexandreLallemand71 from "figma:asset/f39f99fe92f7b3c38df6f9d34cf98124223dbb7c.png";
import imgFreeZineMockup600DpiAlexandreLallemand61 from "figma:asset/bb6da86405529ad009e084f41e33e16e0e284242.png";
import imgFreeZineMockup600DpiAlexandreLallemand51 from "figma:asset/aabf2ea5e0ee9f732a177ead14245d6321bc9ae3.png";
import imgFreeZineMockup600DpiAlexandreLallemand41 from "figma:asset/6a68e3fce9043b76d5e4ca1a6cdffcd573e48e3c.png";
import imgFreeZineMockup600DpiAlexandreLallemand31 from "figma:asset/803de3c70f62f02ed4bc31ba4c9fa6de71b438e3.png";
import imgFreeZineMockup600DpiAlexandreLallemand21 from "figma:asset/4f1039d712146193acd828c67779feb3e1861b35.png";
import imgFreeZineMockup600DpiAlexandreLallemand11 from "figma:asset/ecdbacf00ea206644f4217ff1d46755b2faa91d1.png";
import imgFanzinePinMockup from "figma:asset/c3f3f60dc9aedb5a16da656d2b307f1466c660a8.png";
import imgFanzineBlackCover from "figma:asset/c2afbc47039659eaace74bd24de3aab2a4b26c0f.png";
import imgAuraNewCover from "figma:asset/53ef28b4891783755c920802d22657fddcbb7c98.png";
import imgLogo from "figma:asset/6de345579bc762e209a5fe697d8fc8d9ce2a0b07.png";

// Nuevos draggables solicitados
import dragSticker1 from "figma:asset/1832945598fd989f38dd5b819fcbe838fa428cef.png";
import dragSticker2 from "figma:asset/f39f99fe92f7b3c38df6f9d34cf98124223dbb7c.png";
import dragSticker3 from "figma:asset/bb6da86405529ad009e084f41e33e16e0e284242.png";
import dragSticker4 from "figma:asset/803de3c70f62f02ed4bc31ba4c9fa6de71b438e3.png";

// Figma Quince/16 specific images
import imgMagazineMockup61 from "figma:asset/41d5c10a73a3cc9f128fc573c8fe562a3319044c.png";
import imgQuince16NewCover from "figma:asset/8851a201fee76cf48dfe3f576f7dbde586b4d45f.png";
import imgMagazineMockup43 from "figma:asset/5d0ef69386d475eac36140c15005055e456b5811.png";
import imgMagazineMockup421 from "figma:asset/ae40082be1b213f1ab59cb2d39cfcaf3e394b1a1.png";
import imgDisenoSinTitulo961 from "figma:asset/4f9c12f2c9b7913e0de2059cbf0ae6106bf72eb3.png";
import imgMagazineMockup71 from "figma:asset/43a29cebe3a247338d73f4446298b79e19c2812c.png";
import imgQuince16Title from 'figma:asset/02cb2118c8d545e1ebdced4b6dd363c2b9e846a3.png';

// Figma Aura Maria specific images
import imgAuraLogo from "figma:asset/821ade01d40a5ec432f6c7047cd1edca4b73e8b0.png";
import imgAuraBrochureTop from "figma:asset/574b334610897ee525c006629e880a01598b8f2b.png";
import imgAuraBrochureMid from "figma:asset/9795f157b1afead49bfc43e1a3d4ac5b8c3f0e23.png";
import imgAuraMockupBot1 from "figma:asset/1bb08270f79de44ad86f8015e93992cc8651aaea.png";
import imgAuraPinMockup from "figma:asset/5692c252f795a88e0a5053cab6545b706a71d055.png";
import imgAuraMockupBot2 from "figma:asset/62f099ca914cde302a6db0ee1fbee007c79630fe.png";
import imgAuraMockupBot3 from "figma:asset/9dbac93b8eda5e5c56de0ff18c4497f2ec1c0b35.png";
import imgAuraMockupBot4 from "figma:asset/d5cd309742d300a0c85a99614bcbdb034bbe8ab4.png";

// Usamos imágenes de Unsplash para estas revistas.
const magazines = [
  {
    id: 'quince-16',
    title: 'Quince/16',
    tags: ['Editorial'],
    titleImage: imgQuince16Title, // Usará la imagen y se invierte a negro en modo claro
    cover: imgQuince16NewCover,
    pinMockupImage: imgDisenoSinTitulo961,
    insideImages: [], 
    color: 'bg-neutral-800',
    gradient: 'from-[#404040] via-[#171717] to-[#0a0a0a]',
    description: <>Participé en la <strong>séptima edición</strong> de este <strong>periódico</strong> del programa de <strong>Diseño Gráfico</strong> de la Universidad Autónoma del Caribe <strong>redactando</strong> y <strong>diagramando</strong> tres artículos.</>,
    role: 'Editorial Designer',
    software: 'InDesign, Figma',
    type: 'Periódico',
    year: '2025',
    heyzineLink: 'https://heyzine.com/flip-book/5f40144215.html#page/1'
  },
  {
    id: 'estoy-bien',
    title: '¿Estoy Bien?',
    titleImage: imgLogo, 
    tags: ['Editorial', 'Ilustración'],
    cover: imgFreeZineMockup600DpiAlexandreLallemandPortada1,
    pinMockupImage: imgFanzinePinMockup,
    insideImages: [
      imgFreeZineMockup600DpiAlexandreLallemand11,
      imgFreeZineMockup600DpiAlexandreLallemand21,
      imgFreeZineMockup600DpiAlexandreLallemand31,
      imgFreeZineMockup600DpiAlexandreLallemand41,
      imgFreeZineMockup600DpiAlexandreLallemand51,
      imgFreeZineMockup600DpiAlexandreLallemand61,
      imgFreeZineMockup600DpiAlexandreLallemand71,
      imgFreeZineMockup600DpiAlexandreLallemand81,
      imgFreeZineMockup600DpiAlexandreLallemand91,
      imgFreeZineMockup600DpiAlexandreLallemand101,
      imgFreeZineMockup600DpiAlexandreLallemandContraportada1
    ],
    color: 'bg-neutral-900',
    gradient: 'from-[#222222] via-[#111111] to-[#000000]',
    description: <>Un fanzine sobre la <strong>salud mental</strong> y el <strong>ruido externo</strong>. Explora la dicotomía entre el <strong>malestar interno</strong> y la <strong>invalidación social</strong> frente a la <strong>ansiedad</strong> y <strong>depresión</strong>.</>,
    role: 'Editorial Designer',
    software: 'Illustrator',
    type: 'Fanzine',
    year: '2025',
    heyzineLink: 'https://heyzine.com/flip-book/d1529f1f61.html',
    isFanzine: true
  },
  {
    id: 'aura-maria',
    title: 'Aura María Cakes',
    tags: ['Editorial', 'IA'],
    titleImage: imgAuraLogo,
    cover: imgAuraNewCover,
    pinMockupImage: imgAuraPinMockup,
    insideImages: [], 
    color: 'bg-rose-100',
    gradient: 'from-[#ffb3c6] via-[#ffd9e3] to-[#fff0f5]',
    description: <><strong>Catálogo visual</strong> diseñado para presentar los productos de <strong>Aura María Cakes</strong>. Se implementó <strong>inteligencia artificial</strong> para mejorar las imágenes, logrando una presentación <strong>atractiva y profesional</strong>.</>,
    role: 'Editorial Designer',
    software: 'Illustrator, Canva, IA',
    type: 'Catálogo',
    year: '2025',
    heyzineLink: 'https://heyzine.com/flip-book/e446f425cd.html'
  }
];

function Fanzine3DBook({ cover, insideImages, backCover }: { cover: string, insideImages: string[], backCover: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragAreaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const sheets = containerRef.current.querySelectorAll('.fanzine-sheet');
    const totalSheets = sheets.length;
    let flippedCount = 0;
    
    // Set initial z-index
    sheets.forEach((sheet, index) => {
      (sheet as HTMLElement).style.zIndex = `${totalSheets - index}`;
      
      // Select shadow overlays for this specific sheet
      const shadowFront = sheet.querySelector('.shadow-front');
      const shadowBack = sheet.querySelector('.shadow-back');
      
      // Initialize shadows
      if (shadowFront) gsap.set(shadowFront, { opacity: 0 });
      if (shadowBack) gsap.set(shadowBack, { opacity: 0.5 }); // Darker initially since it's face down
    });
    
    const updatePosition = () => {
      let xPercent = 0;
      if (flippedCount === 0) xPercent = 0;
      else if (flippedCount === totalSheets) xPercent = 100;
      else xPercent = 50;

      gsap.to(containerRef.current, {
        xPercent: xPercent,
        duration: 1.5,
        ease: "power2.inOut"
      });
    };

    // Cleanup event listeners
    const handlers: { element: Element, handler: () => void }[] = [];

    sheets.forEach((sheet, index) => {
      const element = sheet as HTMLElement;
      const handler = () => {
        let isFlipped = element.classList.contains("flipped");
        
        const shadowFront = element.querySelector('.shadow-front');
        const shadowBack = element.querySelector('.shadow-back');

        if (!isFlipped) {
          // ABRIR PÁGINA (de derecha a izquierda)
          
          // Animar rotación
          gsap.to(element, {
            rotationY: -180,
            duration: 1.5,
            ease: "power2.inOut"
          });
          
          // Animar sombras: 
          // 1. Frente se oscurece al levantarse (0 a 90 grados) y luego desaparece al quedar boca abajo
          if (shadowFront) {
            gsap.to(shadowFront, {
              opacity: 0.6, // Oscurecer al tapar la luz
              duration: 0.75,
              ease: "power1.in",
              onComplete: () => gsap.set(shadowFront, { opacity: 0 }) // Reset cuando está boca abajo
            });
          }
          
          // 2. Dorso comienza oscuro y se aclara al bajar del otro lado (90 a 180 grados)
          if (shadowBack) {
            gsap.set(shadowBack, { opacity: 0.6 });
            gsap.to(shadowBack, {
              opacity: 0, // Se aclara al caer
              duration: 0.75,
              delay: 0.75, // Comienza a la mitad del giro
              ease: "power1.out"
            });
          }
          
          // Cambio de Z-Index
          gsap.delayedCall(0.75, () => {
            element.style.zIndex = `${index + 1}`;
          });
          
          element.classList.add("flipped");
          flippedCount++;
          updatePosition();
        } else {
          // CERRAR PÁGINA (de izquierda a derecha)
          
          gsap.to(element, {
            rotationY: 0,
            duration: 1.5,
            ease: "power2.inOut"
          });
          
          // Animar sombras al reves:
          // 1. Dorso se oscurece al levantarse
          if (shadowBack) {
            gsap.to(shadowBack, {
              opacity: 0.6,
              duration: 0.75,
              ease: "power1.in",
              onComplete: () => gsap.set(shadowBack, { opacity: 0 })
            });
          }
          
          // 2. Frente se aclara al bajar a la derecha
          if (shadowFront) {
            gsap.set(shadowFront, { opacity: 0.6 });
            gsap.to(shadowFront, {
              opacity: 0,
              duration: 0.75,
              delay: 0.75,
              ease: "power1.out"
            });
          }
          
          gsap.delayedCall(0.75, () => {
            element.style.zIndex = `${totalSheets - index}`;
          });
          
          element.classList.remove("flipped");
          flippedCount--;
          updatePosition();
        }
      };
      
      element.addEventListener("click", handler);
      handlers.push({ element, handler });
    });
    
    return () => {
      handlers.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
      });
    };
  }, []);

  return (
    <div ref={dragAreaRef} className="w-full flex justify-center py-10 md:py-24 overflow-visible relative min-h-[250px] md:min-h-[600px] touch-none">
      
      {/* DRAGGABLE STICKERS - ONLY DESKTOP */}
      <div className="hidden md:block">
        <motion.div 
          drag
          dragConstraints={dragAreaRef}
          whileDrag={{ scale: 1.1, zIndex: 50, rotate: 0 }}
          className="absolute left-[5%] lg:left-[10%] top-[10%] w-[150px] lg:w-[220px] cursor-grab active:cursor-grabbing z-10 rotate-[-12deg] hover:z-20"
        >
           <img src={dragSticker1} alt="Sticker 1" className="w-full h-auto object-contain pointer-events-none drop-shadow-xl" />
        </motion.div>

        <motion.div 
          drag
          dragConstraints={dragAreaRef}
          whileDrag={{ scale: 1.1, zIndex: 50, rotate: 0 }}
          className="absolute left-[8%] lg:left-[18%] bottom-[15%] w-[140px] lg:w-[210px] cursor-grab active:cursor-grabbing z-10 rotate-[8deg] hover:z-20"
        >
           <img src={dragSticker2} alt="Sticker 2" className="w-full h-auto object-contain pointer-events-none drop-shadow-xl" />
        </motion.div>

        <motion.div 
          drag
          dragConstraints={dragAreaRef}
          whileDrag={{ scale: 1.1, zIndex: 50, rotate: 0 }}
          className="absolute right-[5%] lg:right-[10%] top-[15%] w-[160px] lg:w-[240px] cursor-grab active:cursor-grabbing z-10 rotate-[15deg] hover:z-20"
        >
           <img src={dragSticker3} alt="Sticker 3" className="w-full h-auto object-contain pointer-events-none drop-shadow-xl" />
        </motion.div>

        <motion.div 
          drag
          dragConstraints={dragAreaRef}
          whileDrag={{ scale: 1.1, zIndex: 50, rotate: 0 }}
          className="absolute right-[10%] lg:right-[18%] bottom-[10%] w-[140px] lg:w-[210px] cursor-grab active:cursor-grabbing z-10 rotate-[-10deg] hover:z-20"
        >
           <img src={dragSticker4} alt="Sticker 4" className="w-full h-auto object-contain pointer-events-none drop-shadow-xl" />
        </motion.div>
      </div>

      <div className="relative flex justify-center w-full max-w-[800px]">
        <div 
          className="relative w-[150px] h-[215px] sm:w-[200px] sm:h-[285px] md:w-[250px] md:h-[357px] lg:w-[320px] lg:h-[457px] shrink-0"
          style={{ perspective: '3000px' }}
        >
          {/* El contenedor principal también tiene la sombra central estática (spine shadow) */}
          <div ref={containerRef} className="absolute inset-0 w-full h-full will-change-transform z-30">
            
            {/* Sheet 0: Portada & Spread 1 Left */}
            <div className="fanzine-sheet absolute w-full h-full top-0 left-0 cursor-pointer will-change-transform shadow-[-2px_0_15px_rgba(0,0,0,0.15)]" style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}>
              <div className="absolute w-full h-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}>
                <img src={cover} alt="Portada" className="w-full h-full object-cover" />
                {/* Capa de Sombra Frontal (Animada) */}
                <div className="shadow-front absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-transparent opacity-0 pointer-events-none mix-blend-multiply" />
              </div>
              <div className="absolute w-full h-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <div className="w-full h-full" style={{ backgroundImage: `url(${insideImages[0]})`, backgroundSize: '200% 100%', backgroundPosition: 'left', backgroundRepeat: 'no-repeat' }} />
                {/* Sombra central del lomo */}
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/30 to-transparent pointer-events-none mix-blend-multiply" />
                {/* Capa de Sombra Trasera (Animada) */}
                <div className="shadow-back absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent opacity-0 pointer-events-none mix-blend-multiply" />
              </div>
            </div>

            {/* Sheets 1 to N-1 */}
            {insideImages.slice(0, insideImages.length - 1).map((spread, idx) => (
              <div key={idx} className="fanzine-sheet absolute w-full h-full top-0 left-0 cursor-pointer will-change-transform shadow-[inset_-2px_0_10px_rgba(0,0,0,0.05)]" style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}>
                <div className="absolute w-full h-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}>
                   <div className="w-full h-full" style={{ backgroundImage: `url(${insideImages[idx]})`, backgroundSize: '200% 100%', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }} />
                   {/* Sombra central del lomo */}
                   <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/30 to-transparent pointer-events-none mix-blend-multiply" />
                   {/* Capa de Sombra Frontal (Animada) */}
                   <div className="shadow-front absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-transparent opacity-0 pointer-events-none mix-blend-multiply" />
                </div>
                <div className="absolute w-full h-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                   <div className="w-full h-full" style={{ backgroundImage: `url(${insideImages[idx+1]})`, backgroundSize: '200% 100%', backgroundPosition: 'left', backgroundRepeat: 'no-repeat' }} />
                   {/* Sombra central del lomo */}
                   <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/30 to-transparent pointer-events-none mix-blend-multiply" />
                   {/* Capa de Sombra Trasera (Animada) */}
                   <div className="shadow-back absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent opacity-0 pointer-events-none mix-blend-multiply" />
                </div>
              </div>
            ))}

            {/* Last Sheet: Spread N Right & Contraportada */}
            <div className="fanzine-sheet absolute w-full h-full top-0 left-0 cursor-pointer will-change-transform shadow-[2px_0_15px_rgba(0,0,0,0.1)]" style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}>
              <div className="absolute w-full h-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}>
                <div className="w-full h-full" style={{ backgroundImage: `url(${insideImages[insideImages.length - 1]})`, backgroundSize: '200% 100%', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }} />
                {/* Sombra central del lomo */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/30 to-transparent pointer-events-none mix-blend-multiply" />
                {/* Capa de Sombra Frontal (Animada) */}
                <div className="shadow-front absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-transparent opacity-0 pointer-events-none mix-blend-multiply" />
              </div>
              <div className="absolute w-full h-full flex items-center justify-center overflow-hidden shadow-[2px_0_15px_rgba(0,0,0,0.1)] bg-white dark:bg-[#0a0a0a]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <img src={backCover} alt="Contraportada" className="w-full h-full object-cover" />
                {/* Capa de Sombra Trasera (Animada) */}
                <div className="shadow-back absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent opacity-0 pointer-events-none mix-blend-multiply" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

function AuraMariaImages() {
  const commonImgClass = "absolute inset-0 w-full h-full object-contain !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !opacity-100 !mix-blend-normal";
  const commonMotionClass = "absolute inset-0 w-full h-full object-contain !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !mix-blend-normal";
  
  return (
    <div className="relative w-full">
      {/* Mobile layout */}
      <div className="flex flex-col items-center gap-8 md:hidden w-full pt-8 pb-8 !shadow-none ![filter:none] !bg-transparent before:hidden after:hidden">
        <img src={imgAuraBrochureTop} alt="Aura Top" className="w-[100%] max-w-[739px] h-auto object-contain !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !opacity-100 !mix-blend-normal" />
        <img src={imgAuraBrochureMid} alt="Aura Mid" className="w-[100%] max-w-[739px] h-auto object-contain !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !opacity-100 !mix-blend-normal" />
        
        <div className="relative w-full max-w-[881px] aspect-[881/630] mt-8 !shadow-none ![filter:none] !bg-transparent before:hidden after:hidden">
          <img src={imgAuraMockupBot1} className={commonImgClass} />
          <motion.img animate={{ opacity: [0, 0, 1, 1, 0, 0, 0, 0] }} transition={{ duration: 4, times: [0, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1], repeat: Infinity, ease: "linear" }} src={imgAuraMockupBot2} className={commonMotionClass} />
          <motion.img animate={{ opacity: [0, 0, 0, 0, 1, 1, 0, 0] }} transition={{ duration: 4, times: [0, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1], repeat: Infinity, ease: "linear" }} src={imgAuraMockupBot3} className={commonMotionClass} />
          <motion.img animate={{ opacity: [0, 0, 0, 0, 0, 0, 1, 1] }} transition={{ duration: 4, times: [0, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1], repeat: Infinity, ease: "linear" }} src={imgAuraMockupBot4} className={commonMotionClass} />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-col relative w-full max-w-7xl mx-auto pt-10 gap-16 items-center !shadow-none ![filter:none] !bg-transparent before:hidden after:hidden">
        
        <div className="relative h-[800px] w-full max-w-[1200px] !shadow-none ![filter:none] !bg-transparent before:hidden after:hidden m-[0px]">
          <motion.img 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}
            src={imgAuraBrochureTop} 
            className="absolute left-[-4%] md:left-[2%] top-[0%] w-[55%] h-auto pointer-events-none z-10 object-contain !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !opacity-100 !mix-blend-normal" 
          />
          <motion.img 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2 }}
            src={imgAuraBrochureMid} 
            className="absolute right-[-4%] md:right-[2%] top-[40px] w-[60%] h-auto pointer-events-none z-10 object-contain !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !opacity-100 !mix-blend-normal" 
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.4 }}
          className="relative w-[1000px] max-w-[95%] aspect-[881/630] mx-auto z-20 -mt-[300px] lg:-mt-[400px] mb-8 !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !mix-blend-normal before:hidden after:hidden"
        >
          <img src={imgAuraMockupBot1} className={commonImgClass} />
          <motion.img animate={{ opacity: [0, 0, 1, 1, 0, 0, 0, 0] }} transition={{ duration: 4, times: [0, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1], repeat: Infinity, ease: "linear" }} src={imgAuraMockupBot2} className={commonMotionClass} />
          <motion.img animate={{ opacity: [0, 0, 0, 0, 1, 1, 0, 0] }} transition={{ duration: 4, times: [0, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1], repeat: Infinity, ease: "linear" }} src={imgAuraMockupBot3} className={commonMotionClass} />
          <motion.img animate={{ opacity: [0, 0, 0, 0, 0, 0, 1, 1] }} transition={{ duration: 4, times: [0, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1], repeat: Infinity, ease: "linear" }} src={imgAuraMockupBot4} className={commonMotionClass} />
        </motion.div>
      </div>
    </div>
  );
}

function Quince16Images() {
  return (
    <div className="relative w-full">
      {/* Mobile layout */}
      <div className="flex flex-col items-center gap-8 md:hidden w-full pt-8 pb-8 !shadow-none ![filter:none] !bg-transparent before:hidden after:hidden">
        <img src={imgMagazineMockup71} alt="Mockup 7" className="w-[100%] max-w-[739px] h-auto object-contain !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !opacity-100 !mix-blend-normal" />
        <img src={imgMagazineMockup421} alt="Mockup 6" className="w-[100%] max-w-[739px] h-auto object-contain !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !opacity-100 !mix-blend-normal" />
        
        <div className="relative w-full max-w-[881px] aspect-[881/630] mt-8 !shadow-none ![filter:none] !bg-transparent before:hidden after:hidden">
          <img 
            src={imgMagazineMockup43} 
            className="absolute inset-0 w-full h-full object-contain !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !opacity-100 !mix-blend-normal" 
          />
          <motion.img
            animate={{ opacity: [1, 1, 0, 0, 1] }}
            transition={{ duration: 4, times: [0, 0.5, 0.5, 1, 1], repeat: Infinity, ease: "linear" }}
            src={imgMagazineMockup61}
            className="absolute inset-0 w-full h-full object-contain !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !mix-blend-normal"
          />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-col relative w-full max-w-7xl mx-auto pt-10 gap-16 items-center !shadow-none ![filter:none] !bg-transparent before:hidden after:hidden">
        
        <div className="relative h-[800px] w-full max-w-[1200px] !shadow-none ![filter:none] !bg-transparent before:hidden after:hidden">
          <motion.img 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            src={imgMagazineMockup71} 
            alt="Mockup 7" 
            className="absolute left-[-4%] md:left-[2%] top-[0%] w-[55%] h-auto pointer-events-none z-10 object-contain !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !opacity-100 !mix-blend-normal" 
          />
          <motion.img 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            src={imgMagazineMockup421} 
            alt="Mockup 6" 
            className="absolute right-[-4%] md:right-[2%] top-[40px] w-[60%] h-auto pointer-events-none z-10 object-contain !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !opacity-100 !mix-blend-normal" 
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-[1000px] max-w-[95%] aspect-[881/630] mx-auto z-20 -mt-[300px] lg:-mt-[400px] mb-8 !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !mix-blend-normal before:hidden after:hidden"
        >
          <img 
            src={imgMagazineMockup43} 
            className="absolute inset-0 w-full h-full object-contain !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !opacity-100 !mix-blend-normal" 
          />
          <motion.img
            animate={{ opacity: [1, 1, 0, 0, 1] }}
            transition={{ duration: 2, times: [0, 0.5, 0.5, 1, 1], repeat: Infinity, ease: "linear" }}
            src={imgMagazineMockup61}
            className="absolute inset-0 w-full h-full object-contain !shadow-none ![filter:none] ![backdrop-filter:none] ![text-shadow:none] !bg-none !mix-blend-normal"
          />
        </motion.div>
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

export default function EditorialProjects() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans antialiased bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white">
      <ScrollToTop />
      
      {/* === HERO PRINCIPAL: COLECCIÓN === */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
        {/* Botón de volver fijo */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          onClick={(e) => { e.preventDefault(); navigate('/#projects'); }}
          className="fixed top-8 left-6 md:left-20 z-[90] flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-white dark:hover:text-neutral-900 hover:scale-105 rounded-full transition-all duration-300 ease-in-out hover:-translate-x-1 shadow-lg border border-neutral-300 dark:border-neutral-700 hover:border-transparent"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Volver</span>
        </motion.button>

        {/* Fondo sutil tipo Spotlight */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-neutral-200 dark:bg-neutral-800/20 rounded-full blur-3xl opacity-50" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 relative z-10 pt-10 md:pt-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-300 text-xs font-semibold uppercase tracking-widest mb-6 border border-neutral-200 dark:border-neutral-700/50">
            <BookOpen size={14} />
            <span>Colección</span>
          </div>
          <h1 className="text-4xl sm:text-[50px] md:text-[72px] font-bold tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1] flex flex-row flex-wrap justify-center items-center gap-x-2 md:gap-x-3">
            <span>Diseño Editorial</span> <span className="font-light italic text-neutral-400 dark:text-neutral-500">&amp; Layout</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-light">
            Exploración de la retícula, tipografía y espacio a través de tres proyectos: un periódico, un fanzine y un catálogo. Desliza o selecciona un proyecto para sumergirte en su universo.
          </p>
        </motion.div>

        {/* Galería Horizontal (Diseño 2.5D plano) */}
        <div className="w-full max-w-6xl mx-auto relative z-10 px-4">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 lg:gap-8">
            {magazines.map((mag, idx) => (
              <motion.div
                key={mag.id}
                className="relative group cursor-pointer w-[140px] h-[190px] md:w-[180px] md:h-[240px] lg:w-[220px] lg:h-[300px] flex-shrink-0 flex justify-center mt-12 mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.15,
                  type: "spring", stiffness: 200, damping: 20
                }}
                onClick={() => scrollToSection(mag.id)}
              >
                {/* Title (hidden by default, shows on hover) */}
                <div className="absolute -top-10 md:-top-12 w-[150%] flex justify-center items-end opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-20">
                  <p className="text-sm md:text-lg lg:text-xl font-bold text-neutral-800 dark:text-neutral-200 text-center leading-tight m-0">{mag.title}</p>
                </div>

                {/* Book Inside (Pages stack) */}
                <div className="absolute w-[calc(100%-2px)] h-[96%] top-[2%] left-[1px] border border-gray-400 dark:border-neutral-600 rounded-[3px] bg-white dark:bg-neutral-200 shadow-[10px_40px_40px_-10px_rgba(0,0,0,0.3),inset_-2px_0_0_grey,inset_-3px_0_0_#dbdbdb,inset_-4px_0_0_white,inset_-5px_0_0_#dbdbdb,inset_-6px_0_0_white,inset_-7px_0_0_#dbdbdb,inset_-8px_0_0_white,inset_-9px_0_0_#dbdbdb] z-0" />

                {/* Main Cover (Rotates on hover) */}
                <div 
                  className="absolute z-10 w-full h-full origin-left bg-[#111] bg-cover bg-center rounded-[3px] shadow-[inset_4px_1px_3px_rgba(255,255,255,0.38),inset_0_-1px_2px_rgba(0,0,0,0.5)] transition-all duration-500 ease-in-out group-hover:[transform:perspective(2000px)_rotateY(-30deg)] group-hover:shadow-[inset_4px_1px_3px_rgba(255,255,255,0.38),inset_0_-1px_2px_rgba(0,0,0,0.5),10px_0px_10px_-5px_rgba(0,0,0,0.19)] overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img src={mag.cover} alt={mag.title} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                  
                  {/* Textura extra para Fanzine */}
                  {mag.id === 'estoy-bien' && (
                    <div className="absolute h-[102%] left-0 top-[-1%] w-full pointer-events-none">
                      <img alt="" className="absolute h-[117.87%] left-[-64.42%] max-w-none top-[-9.09%] w-[229.6%]" src={imgFreeZineMockup600DpiAlexandreLallemandContraportada1} />
                    </div>
                  )}

                  {/* Spine effect / Crease */}
                  <div className="absolute left-0 top-0 w-[20px] h-full ml-[10px] border-l-[2px] border-black/10 bg-gradient-to-r from-white/20 to-transparent transition-all duration-500 ease-in-out group-hover:w-[40px] pointer-events-none" />

                  {/* Cover reflection light */}
                  <div className="absolute right-0 top-0 w-[90%] h-full rounded-[3px] bg-gradient-to-r from-transparent to-white/20 opacity-10 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:w-[70%] pointer-events-none" />
                </div>

                {/* Button (hidden by default, shows on hover) */}
                <div className="absolute -bottom-14 md:-bottom-16 w-[150%] flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-20">
                  <span className={`font-bold py-2 px-4 md:px-6 rounded-full text-xs md:text-sm tracking-wide shadow-md transition-colors ${
                    mag.id === 'quince-16' ? 'bg-[#7480ec] text-white' : 
                    mag.id === 'estoy-bien' ? 'bg-white text-black border border-neutral-200 dark:border-transparent' : 
                    'bg-[#e18997] text-white'
                  }`}>
                    Ver {mag.type === 'Periódico' ? 'Periódico' : mag.id === 'aura-maria' ? 'Catálogo' : 'Fanzine'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECCIONES INDIVIDUALES AL ESTILO DEL HEADER DE OTROS PROYECTOS === */}
      {magazines.map((mag, idx) => (
        <section key={mag.id} id={mag.id} className="relative min-h-screen flex flex-col justify-center py-24 overflow-hidden border-t border-neutral-200 dark:border-neutral-900">
          
          {/* Fondo Orgánico Específico del Proyecto */}
          <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${mag.gradient} opacity-20 dark:opacity-80`} />
          
          {/* Patrón de cuadrícula */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 dark:opacity-20" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 w-full">
            {/* Tags (Mobile Only - Top) */}
            <div className="flex lg:hidden flex-wrap justify-center gap-3 mb-8 w-full">
              {mag.tags.map((tag) => (
                <span key={`mobile-${tag}`} className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-white/90 text-xs font-medium tracking-wider uppercase backdrop-blur-md border border-black/10 dark:border-white/20">
                  {tag}
                </span>
              ))}
            </div>

            {/* Cabecera / Header Style */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 mb-0 sm:mb-20">
              
              {/* Textos a la izquierda */}
              <motion.div 
                initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="lg:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
              >
                {/* Tags (Desktop Only) */}
                <div className="hidden lg:flex flex-wrap gap-3 mb-8">
                  {mag.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-white/90 text-xs font-medium tracking-wider uppercase backdrop-blur-md border border-black/10 dark:border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {mag.titleImage ? (
                  <img src={mag.titleImage} alt={mag.title} className="h-20 md:h-16 w-auto max-w-[280px] object-contain mb-6 drop-shadow-sm dark:invert-0 invert" />
                ) : (
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white max-w-[300px]">{mag.title}</h2>
                )}
                
                <p className="text-lg md:text-xl text-neutral-600 dark:text-white/80 max-w-xl leading-relaxed mb-10 font-light [&>strong]:font-bold [&>strong]:text-neutral-900 dark:[&>strong]:text-white">
                  {mag.description}
                </p>

                {/* Vista Mobile: Botón, línea, y 2 columnas */}
                <div className="flex flex-col w-full sm:hidden">
                  {mag.heyzineLink && (
                    <div className="mb-8 w-full flex justify-center md:justify-start">
                      <a 
                        href={mag.heyzineLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                      >
                        Ver {mag.type === 'Periódico' ? 'Periódico' : mag.id === 'aura-maria' ? 'Catálogo' : 'Fanzine'} Interactivo <ExternalLink size={18} />
                      </a>
                    </div>
                  )}
                  
                  <div className="w-full py-12 border-t border-neutral-200 dark:border-white/10 flex gap-4">
                    {/* Columna Izquierda: Rol y Tipo */}
                    <div className="flex flex-col flex-1 items-center text-center">
                      <div className="flex flex-col items-center">
                        <span className="block text-neutral-400 dark:text-white/40 text-xs uppercase tracking-widest mb-1.5 font-normal">Rol</span>
                        <div className="flex flex-col gap-0 text-neutral-900 dark:text-white text-sm font-medium leading-[20px]">
                          {mag.role.replace('Designer', 'Design').split(' ').map((word: string, idx: number) => (
                            <span key={idx} className="block whitespace-nowrap">{word}</span>
                          ))}
                        </div>
                      </div>
                      {mag.type && (
                        <div className="mt-auto pt-6 flex flex-col items-center">
                          <span className="block text-neutral-400 dark:text-white/40 text-xs uppercase tracking-widest mb-1.5 font-normal">Tipo</span>
                          <span className="block text-neutral-900 dark:text-white text-sm font-medium leading-[20px] whitespace-nowrap">{mag.type}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Columna Derecha: Software y Año */}
                    <div className="flex flex-col flex-1 items-center text-center">
                      {('software' in mag) && (
                        <div className="flex flex-col items-center">
                          <span className="block text-neutral-400 dark:text-white/40 text-xs uppercase tracking-widest mb-1.5 font-normal">Software</span>
                          <div className="flex flex-wrap justify-center text-neutral-900 dark:text-white text-sm font-medium leading-[20px]">
                            {(mag as any).software.split(',').map((sw: string, idx: number, arr: string[]) => (
                              <span key={idx} className="inline-block whitespace-nowrap mr-1">
                                {sw.trim()}{idx < arr.length - 1 ? ',' : ''}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {mag.type && (
                        <div className="mt-auto pt-6 flex flex-col items-center">
                          <span className="block text-neutral-400 dark:text-white/40 text-xs uppercase tracking-widest mb-1.5 font-normal">Año</span>
                          <span className="block text-neutral-900 dark:text-white text-sm font-medium leading-[20px] whitespace-nowrap">{mag.year}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Vista Desktop: Diseño original (una fila) y botón abajo */}
                <div className="hidden sm:flex flex-row items-start justify-between w-full pt-[33px] border-t border-neutral-200 dark:border-white/10 mb-8">
                  <div className="flex-[1_0_0] w-full">
                    <span className="block text-neutral-400 dark:text-white/40 text-xs uppercase tracking-widest mb-1.5 font-normal">Rol</span>
                    <div className="flex flex-col gap-0 text-neutral-900 dark:text-white text-sm font-medium leading-[20px]">
                      {mag.role.replace('Designer', 'Design').split(' ').map((word: string, idx: number) => (
                        <span key={idx} className="block whitespace-nowrap">{word}</span>
                      ))}
                    </div>
                  </div>
                      {('software' in mag) && (
                        <div className="flex-[1_0_0] w-full relative sm:-left-6">
                          <span className="block text-neutral-400 dark:text-white/40 text-xs uppercase tracking-widest mb-1.5 font-normal">Software</span>
                          <div className="flex flex-col gap-0 text-neutral-900 dark:text-white text-sm font-medium leading-[20px]">
                            {(mag as any).software.split(',').map((sw: string, idx: number, arr: string[]) => (
                              <span key={idx} className="inline-block whitespace-nowrap mr-1">
                                {sw.trim()}{idx < arr.length - 1 ? ',' : ''}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                  {mag.type ? (
                    <>
                      <div className="flex-[1_0_0] w-full relative sm:-left-2">
                        <span className="block text-neutral-400 dark:text-white/40 text-xs uppercase tracking-widest mb-1.5 font-normal">Tipo</span>
                        <span className="block text-neutral-900 dark:text-white text-sm font-medium leading-[20px] whitespace-nowrap">{mag.type}</span>
                      </div>
                      <div className="flex-[1_0_0] w-full">
                        <span className="block text-neutral-400 dark:text-white/40 text-xs uppercase tracking-widest mb-1.5 font-normal">Año</span>
                        <span className="block text-neutral-900 dark:text-white text-sm font-medium leading-[20px] whitespace-nowrap">{mag.year}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex-[1_0_0] w-full">
                      <span className="block text-neutral-400 dark:text-white/40 text-xs uppercase tracking-widest mb-1.5 font-normal">Entregables</span>
                      <span className="block text-neutral-900 dark:text-white text-sm font-medium leading-[20px] whitespace-nowrap">Diseño Editorial, Grid System</span>
                    </div>
                  )}
                </div>

                {mag.heyzineLink && (
                  <a 
                    href={mag.heyzineLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                  >
                    Ver {mag.type === 'Periódico' ? 'Periódico' : mag.id === 'aura-maria' ? 'Catálogo' : 'Fanzine'} Interactivo <ExternalLink size={18} />
                  </a>
                )}
              </motion.div>

              {/* Mockup flotante 3D a la derecha */}
              <motion.div 
                initial={{ opacity: 0, x: 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 50 }}
                className="lg:w-1/2 relative w-full flex justify-center items-center perspective-[1200px]"
              >
                {mag.pinMockupImage ? (
                  <div className={`relative w-full ${mag.id === 'quince-16' ? 'max-w-[600px]' : 'max-w-[500px]'} transform hover:scale-[1.02] hover:-translate-y-4 transition-all duration-700 ease-out z-20 will-change-transform drop-shadow-2xl`}>
                    <img src={mag.pinMockupImage} alt={mag.title} className="w-full h-auto object-contain" />
                  </div>
                ) : (
                  <div className={`relative aspect-[3/4] max-w-[350px] lg:max-w-[400px] w-full transform hover:scale-[1.02] transition-all duration-700 ease-out z-20 will-change-transform shadow-2xl rounded-lg overflow-visible border border-neutral-200 dark:border-white/10 hover:-translate-y-4`}>
                    {/* @ts-ignore */}
                    <img src={mag.mockupCover || mag.cover} alt={mag.title} className="w-full h-full object-cover object-top rounded-lg" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none mix-blend-overlay rounded-lg" />
                  </div>
                )}
              </motion.div>
            </div>

            {/* Grid o Flipbook de páginas interiores */}
            <div className="border-t border-neutral-200 dark:border-white/10 pt-16">
              {mag.id === 'quince-16' ? (
                <Quince16Images />
              ) : mag.id === 'aura-maria' ? (
                <AuraMariaImages />
              ) : mag.isFanzine ? (
                <div className="w-full overflow-hidden relative">
                  <h3 className="text-2xl font-bold mb-2 md:mb-4 text-center text-neutral-900 dark:text-white">Explorar Fanzine</h3>
                  <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-2 md:mb-8">Toca las páginas para abrir el fanzine</p>
                  <Fanzine3DBook 
                    cover={mag.cover}
                    insideImages={mag.insideImages.slice(0, 10)}
                    backCover={mag.insideImages[10]}
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {mag.insideImages.map((img, imgIdx) => (
                    <motion.div
                      key={`${mag.id}-img-${imgIdx}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: imgIdx * 0.2 }}
                      className={`bg-neutral-100 dark:bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-white/5 ${imgIdx === 0 && idx % 2 !== 0 ? 'md:translate-y-12' : ''} ${imgIdx === 1 && idx % 2 === 0 ? 'md:translate-y-12' : ''}`}
                    >
                      <img src={img} alt={`Página interior ${imgIdx + 1} de ${mag.title}`} className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700" />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* === CTA AL FINAL === */}
      <section className="py-24 px-6 md:px-20 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white relative overflow-hidden text-center border-t border-neutral-200 dark:border-neutral-800">
        {/* Soft glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-300/30 dark:bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 tracking-tight font-bold">
              ¿Te gustó esta colección?
            </h2>
            <p className="text-neutral-600 dark:text-white/70 text-lg mb-10 leading-relaxed">
              Esta serie editorial es una muestra de cómo la exploración de retículas, espacios y tipografías puede estructurar narrativas visuales sólidas y expresivas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={(e) => { e.preventDefault(); navigate('/#projects'); }}
                className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 font-medium"
              >
                <ArrowLeft size={18} /> Volver al portafolio
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); navigate('/#contact'); }}
                className="px-8 py-4 border border-neutral-300 dark:border-white/30 text-neutral-800 dark:text-white rounded-full hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-2 font-medium"
              >
                Iniciemos un proyecto <ExternalLink size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-8 text-center border-t border-neutral-200 dark:border-neutral-900 text-neutral-500 dark:text-neutral-400 text-sm bg-white dark:bg-neutral-950 flex flex-col items-center justify-center gap-1">
        <p>Todos los derechos reservados. © 2026 | Diseñado por <a href="https://www.instagram.com/ryderjbarrios_/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors font-medium">@thinkaboutryry</a>.</p>
        <p className="mt-1 text-xs opacity-70">Diseñando ideas que inspiran, conectan y comunican.</p>
      </footer>

    </div>
  );
}
