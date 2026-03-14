import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowUp, Layout, Image as ImageIcon, Video, Smartphone, MousePointer2, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

import imgPage322 from "figma:asset/eddbb6ca341ead80dc6933345ac12ffa691a6dd7.png";
import imgPage252 from "figma:asset/ed3703a7123c9ad69e8998b71772184fd2ffd5d9.png";
import imgPage142 from "figma:asset/6e1a5b26c3cad26404dc2f238264b767b6f00257.png";
import img182 from "figma:asset/cdc664f9b47cf117dae9388bcf8bd14a91c0da58.png";
import img192 from "figma:asset/e099f3d9ab312a80d78924512f1812e264e580d6.png";
import img2240689053 from "figma:asset/83e1d63e0b79d124667eff2396eff79d350b3740.png";
import img4574867 from "figma:asset/c59edcee15ba0bb9dc0f2c3f4102d64dbb60b0e5.png";
import img528840 from "figma:asset/5b0b61fe1d36a7b15039a20be6ec4954912e8057.png";
import img755180 from "figma:asset/704ae64d9c0c25815ba562a20f9267b73ab47869.png";
import img2240689052 from "figma:asset/17f32636d2b51e72761398c17883242eb33611c2.png";
import img336163 from "figma:asset/406136259100f9a5cb3778cae0d64a1e6d7c27d7.png";
import imgCopiaDeBlackGreyBoldCollageFashionCollectionPoster1080X1350Px2 from "figma:asset/14b7a0d7377496f4649840f6a4718e1f9a11b61c.png";

// Additional imports for Feed Section
import imgProfilePicture from "figma:asset/1acc39d86289a91e40a1838060e46fd41067458d.png";
import imgDivBgpic from "figma:asset/2bdc31a47c7f33881a08e625908da3bc5ed68428.png";
import imgCopiaDeBlackGreyBoldCollageFashionCollectionPoster1080X1350Px5 from "figma:asset/3af99dd00242c90ad5435b68089eaf66d0cb8363.png";
import imgPage331 from "figma:asset/b2a6803c93e0f087a25f7ea28951f4223e14d943.png";
import imgPage333 from "figma:asset/b7c386dc498216e30a0308e7b525e72c902b854d.png";
import imgPage334 from "figma:asset/56a817fdf3d2bd41851019acb9ba8369ebee3813.png";
import imgScene81 from "figma:asset/11000640087445e6aedef4705027750203dbde59.png";
import imgScene91 from "figma:asset/2745777a8baa690d5d713730af2175c74a740370.png";
import imgScene71 from "figma:asset/2cab3167f1202985fa4625c07ea1c8d32cd143b9.png";
import imgMockup21 from "figma:asset/0f9571986dff6d9edac19c3da7c4036dba7e9d13.png";

// --- Assets ---
const gridImages = [
  imgPage322,
  imgPage252,
  imgPage142,
  img182,
  img192,
  img2240689053,
  img4574867,
  img528840,
  img755180,
  img2240689052,
  img336163,
  imgCopiaDeBlackGreyBoldCollageFashionCollectionPoster1080X1350Px2
];

const imagesLeft = [gridImages[0], gridImages[1], gridImages[2], gridImages[11]];
const imagesCenter = [gridImages[4], gridImages[5], gridImages[6], gridImages[3]];
const imagesRight = [gridImages[8], gridImages[9], gridImages[10], gridImages[7]];

const feedHorizontalImages = [
  imgCopiaDeBlackGreyBoldCollageFashionCollectionPoster1080X1350Px2,
  imgPage252,
  imgPage142,
  imgPage322,
  imgPage331,
  imgPage333,
  img182,
  img192,
  img2240689053,
  imgPage334,
  img2240689053,
  img4574867,
  imgCopiaDeBlackGreyBoldCollageFashionCollectionPoster1080X1350Px5,
  img2240689052,
  img336163
];

// --- Custom Feed Component ---
function FeedExtraImages() {
  const scenes = [imgScene71, imgScene81, imgScene91];
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene(s => (s + 1) % scenes.length);
    }, 1000); // 1 second per frame for GIF effect
    return () => clearInterval(interval);
  }, [scenes.length]);

  return (
    <section className="relative w-full bg-[#faf5ff] dark:bg-[#0a0510] pb-24 z-30 overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] opacity-10 dark:opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 dark:opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 w-full pointer-events-auto border-t border-purple-100 dark:border-purple-900/30 pt-16">
        
        {/* Mobile layout */}
        <div className="flex flex-col items-center gap-8 md:hidden w-full pt-8 pb-8">
          <img src={imgMockup21} alt="Mockup 1" className="w-[100%] max-w-[739px] h-auto object-contain translate-x-4" />
          
          <div className="relative w-full max-w-[881px] aspect-[487/512] mt-8">
            {scenes.map((scene, i) => (
              <img 
                key={i}
                src={scene}
                alt={`Scene ${i}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-0 pointer-events-none ${i === currentScene ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex flex-col relative w-full pt-10 gap-16 items-center">
          
          <div className="relative w-[1000px] max-w-[95%] mx-auto">
            <motion.img 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              src={imgMockup21} 
              alt="Mockup" 
              className="w-full h-auto pointer-events-none z-10 object-contain drop-shadow-2xl translate-x-8 lg:translate-x-12" 
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-[1000px] max-w-[95%] aspect-[487/512] mx-auto z-20 -mt-[150px] lg:-mt-[250px] mb-8 drop-shadow-2xl"
          >
            {scenes.map((scene, i) => (
              <img 
                key={i}
                src={scene}
                alt={`Scene ${i}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-0 pointer-events-none ${i === currentScene ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}

function HorizontalFeedSection({ cat }: { cat: any }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Calculate total slide distance (width of one item 317px + 20px gap)
  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${(feedHorizontalImages.length - 1) * 337}px`]);
  
  const [currentIndex, setCurrentIndex] = useState(1);
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      // mapped from 0 to 1 -> index 1 to 15
      let idx = Math.round(latest * (feedHorizontalImages.length - 1)) + 1;
      if (idx < 1) idx = 1;
      if (idx > feedHorizontalImages.length) idx = feedHorizontalImages.length;
      setCurrentIndex(idx);
    });
  }, [scrollYProgress]);

  return (
    <section key={cat.id} id={cat.id} ref={sectionRef} className="relative md:h-[600vh] bg-[#faf5ff] dark:bg-[#0a0510] border-t border-purple-100 dark:border-purple-900/30">
      <div className="md:sticky md:top-0 md:h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-center pt-24 md:pt-0 pb-0">
        
        {/* Background Gradients & Grid */}
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${cat.gradient} opacity-10 dark:opacity-40`} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 dark:opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 w-full flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-20 pb-0 pt-[30px] md:pt-[100px]">
          
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-[520px] shrink-0 flex flex-col z-40 mt-6 md:mt-0 text-center md:text-left items-center md:items-start relative"
          >
            <div className="hidden lg:flex gap-2 mb-[40px] md:mb-[58px]">
              <div className="inline-flex bg-neutral-100 dark:bg-[rgba(255,255,255,0.1)] border border-neutral-200 dark:border-[rgba(255,255,255,0.2)] rounded-full px-[13px] py-[5px] items-center justify-center">
                <p className="font-medium text-[12px] leading-[16px] text-neutral-800 dark:text-[rgba(255,255,255,0.9)] tracking-[0.6px] uppercase m-0">SOCIAL MEDIA</p>
              </div>
              <div className="inline-flex bg-neutral-100 dark:bg-[rgba(255,255,255,0.1)] border border-neutral-200 dark:border-[rgba(255,255,255,0.2)] rounded-full px-[13px] py-[5px] items-center justify-center">
                <p className="font-medium text-[12px] leading-[16px] text-neutral-800 dark:text-[rgba(255,255,255,0.9)] tracking-[0.6px] uppercase m-0">IA</p>
              </div>
            </div>

            <h2 className="text-[40px] md:text-[72px] font-bold text-neutral-900 dark:text-white leading-none md:leading-[72px] tracking-[-1.8px] mb-[20px] md:mb-[24px]">
              Posts <span className="font-normal italic">&</span> <span className="font-normal italic">Feed</span>
            </h2>
            
            <p className="text-[16px] md:text-[20px] text-neutral-600 dark:text-[rgba(255,255,255,0.8)] leading-[1.6] md:leading-[32.5px] font-light max-w-[520px] mb-[40px] md:mb-[60px]">
              Creación de contenido estático y estructuración de <strong className="font-bold text-neutral-900 dark:text-white">sistemas de grillas</strong> (Feed Layout) que fortalecen la identidad de marca a primera vista y generan Brand Awareness.
            </p>

            {/* Vista Mobile: Dos columnas centradas sin borde */}
            <div className="flex lg:hidden flex-col w-full mb-8">
              <div className="flex flex-row items-stretch justify-center w-full pt-[33px] border-t border-neutral-200 dark:border-[rgba(255,255,255,0.1)] relative gap-4">
                
                {/* Columna Izquierda: Rol y Tipo */}
                <div className="flex flex-col flex-1 items-center text-center">
                  <div className="flex flex-col items-center">
                    <span className="block text-[12px] leading-[16px] text-neutral-500 dark:text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase mb-[6px]">Rol</span>
                    <div className="flex flex-col gap-0 text-neutral-900 dark:text-white text-[14px] font-medium leading-[20px]">
                      <span className="block whitespace-nowrap">Social Media</span>
                      <span className="block whitespace-nowrap">Designer</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-6 flex flex-col items-center">
                    <span className="block text-[12px] leading-[16px] text-neutral-500 dark:text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase mb-[6px]">Tipo</span>
                    <span className="block text-neutral-900 dark:text-white text-[14px] font-medium leading-[20px] whitespace-nowrap">Post</span>
                  </div>
                </div>
                
                {/* Columna Derecha: Software y Año */}
                <div className="flex flex-col flex-1 items-center text-center">
                  <div className="flex flex-col items-center">
                    <span className="block text-[12px] leading-[16px] text-neutral-500 dark:text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase mb-[6px]">Software</span>
                    <div className="flex flex-col items-center text-neutral-900 dark:text-white text-[14px] font-medium leading-[20px]">
                      <span className="block whitespace-nowrap">Figma, Illustrator,</span>
                      <span className="block whitespace-nowrap">Photoshop, IA</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-6 flex flex-col items-center">
                    <span className="block text-[12px] leading-[16px] text-neutral-500 dark:text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase mb-[6px]">Año</span>
                    <span className="block text-neutral-900 dark:text-white text-[14px] font-medium leading-[20px] whitespace-nowrap">2025 - 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vista Desktop: Diseño original (una fila) */}
            <div className="hidden lg:grid grid-cols-[157px_156px_120px_1fr] items-start w-full lg:w-[650px] pt-[33px] border-t border-neutral-200 dark:border-[rgba(255,255,255,0.1)] mb-8">
              <div className="flex flex-col gap-[6px]">
                <span className="block text-[12px] leading-[16px] text-neutral-500 dark:text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase">Rol</span>
                <div className="flex flex-col text-neutral-900 dark:text-white text-[14px] font-medium leading-[20px]">
                  <span className="block whitespace-nowrap">Social Media</span>
                  <span className="block whitespace-nowrap">Designer</span>
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <span className="block text-[12px] leading-[16px] text-neutral-500 dark:text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase">Software</span>
                <div className="flex flex-col text-neutral-900 dark:text-white text-[14px] font-medium leading-[20px]">
                  <span className="block whitespace-nowrap">Figma, Illustrator,</span>
                  <span className="block whitespace-nowrap">Photoshop, IA</span>
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <span className="block text-[12px] leading-[16px] text-neutral-500 dark:text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase">Tipo</span>
                <span className="block text-neutral-900 dark:text-white text-[14px] font-medium leading-[20px] whitespace-nowrap">Post</span>
              </div>
              <div className="flex flex-col gap-[6px]">
                <span className="block text-[12px] leading-[16px] text-neutral-500 dark:text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase">Año</span>
                <span className="block text-neutral-900 dark:text-white text-[14px] font-medium leading-[20px] whitespace-nowrap">2025 - 2026</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Instagram Portrait with Horizontal Scroll */}
          <div className="lg:w-1/2 flex-1 flex flex-col items-center justify-center lg:justify-end relative z-10 w-full mt-0 lg:mt-0">
            
            {/* Mobile Tag */}
            <div className="flex gap-2 lg:hidden mb-[16px]">
              <div className="bg-neutral-100 dark:bg-[rgba(255,255,255,0.1)] border border-neutral-200 dark:border-[rgba(255,255,255,0.2)] rounded-full px-[13px] py-[5px] inline-flex items-center justify-center">
                <p className="font-medium text-[12px] leading-[16px] text-neutral-800 dark:text-[rgba(255,255,255,0.9)] tracking-[0.6px] uppercase m-0">SOCIAL MEDIA</p>
              </div>
              <div className="bg-neutral-100 dark:bg-[rgba(255,255,255,0.1)] border border-neutral-200 dark:border-[rgba(255,255,255,0.2)] rounded-full px-[13px] py-[5px] inline-flex items-center justify-center">
                <p className="font-medium text-[12px] leading-[16px] text-neutral-800 dark:text-[rgba(255,255,255,0.9)] tracking-[0.6px] uppercase m-0">IA</p>
              </div>
            </div>

            <div className="relative flex items-center">

              {/* The Instagram Frame Container */}
              <div className="relative w-[323px] shrink-0 bg-transparent rounded-[12px] shadow-[0px_6.4px_16.8px_rgba(0,0,0,0.8)] border border-neutral-200 dark:border-[rgba(255,255,255,0.1)] flex flex-col z-30">
                
                {/* Instagram Top Bar */}
                <div className="h-[49px] bg-white flex items-center justify-between px-[17px] shrink-0 z-30 rounded-t-[12px] shadow-sm">
                  <div className="flex items-center gap-[7px]">
                    <div className="w-[31px] h-[31px] rounded-full overflow-hidden shrink-0 relative border border-neutral-200">
                      <img src={imgProfilePicture} alt="Profile" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col text-[#0f0f0f]">
                      <span className="text-[11px] font-semibold leading-tight">thinkaboutryry</span>
                      <span className="text-[8.5px] font-normal leading-tight">Barranquilla, Colombia</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[3px]">
                    <div className="w-[3.5px] h-[3.5px] bg-[#0f0f0f] rounded-full"></div>
                    <div className="w-[3.5px] h-[3.5px] bg-[#0f0f0f] rounded-full"></div>
                    <div className="w-[3.5px] h-[3.5px] bg-[#0f0f0f] rounded-full"></div>
                  </div>
                </div>

                {/* Transparent Hole */}
                <div className="relative w-full h-[393px] bg-transparent shrink-0 pointer-events-none z-10">
                  {/* Mobile Fallback: Native horizontal scroll */}
                  <div 
                    className="absolute inset-0 md:hidden overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex bg-black/5 pointer-events-auto scrollbar-hide z-50"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {feedHorizontalImages.map((img, i) => (
                      <div key={i} className="relative w-[317px] h-full shrink-0 snap-center rounded-[12.6px] border-[0.6px] border-[#51a2ff] overflow-hidden ml-[3px] mr-[3px]">
                         <ImageWithFallback src={img} alt={`Post ${i+1}`} className="w-full h-full object-cover pointer-events-none" />
                      </div>
                    ))}
                  </div>
                  {/* Image Counter overlay (Hidden in mobile since native scroll doesn't track index easily, or kept statically) */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-[8px] py-[4px] rounded-full z-40 hidden md:flex gap-1 items-center shadow-sm">
                    <span>{currentIndex}</span> / <span>{feedHorizontalImages.length}</span>
                  </div>
                </div>

                {/* Instagram Bottom Bar */}
                <div className="h-[41px] bg-white flex items-center justify-between px-[19px] shrink-0 z-30 rounded-b-[12px] shadow-sm">
                  <div className="flex items-center gap-[10px] pointer-events-auto">
                    {/* Heart */}
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" className="shrink-0">
                      <path d="M10.437 18.265l-.782-.705C5.892 14.162 3.479 11.96 3.479 9.24a4.136 4.136 0 014.175-4.175c1.196 0 2.343.565 3.048 1.457.705-.892 1.852-1.457 3.048-1.457 2.304 0 4.174 1.852 4.174 4.174 0 2.72-2.413 4.922-6.176 8.328l-.783.71z" fill="#FF1F1F" stroke="#FF1F1F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
                    </svg>
                    {/* Comment */}
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" className="shrink-0">
                      <path d="M18.265 13.483a7.391 7.391 0 11-2.062-8.54 7.391 7.391 0 012.062 8.54zm-2.062 1.304l2.062 3.478-3.913-1.304" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
                    </svg>
                    {/* Share */}
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" className="shrink-0">
                      <path d="M19.135 1.739L8.7 12.174M19.135 1.739l-6.087 18.26-4.348-7.825L.874 7.826l18.26-6.087z" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
                    </svg>
                  </div>
                  {/* Bookmark */}
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" className="shrink-0 pointer-events-auto">
                    <path d="M16.526 18.265l-6.087-4.348-6.087 4.348V4.348a1.739 1.739 0 011.739-1.739h8.696a1.739 1.739 0 011.739 1.739v13.917z" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
                  </svg>
                </div>

              </div>
              
              {/* Sliding Track for Desktop */}
              {/* Note: The container bounds start exactly at left-[3px] (inside the frame) and extends to the right (w-[100vw]). */}
              {/* This inherently masks anything moving to the left without needing an opaque cover over the grid. */}
              <div className="absolute top-[49px] left-[3px] z-10 hidden md:block h-[393px] w-[100vw] overflow-hidden pointer-events-none">
                <motion.div 
                  className="flex items-center h-full w-max"
                  style={{ x, gap: '20px' }}
                >
                  {feedHorizontalImages.map((img, i) => (
                    <div key={i} className="relative w-[317px] h-[393px] shrink-0 rounded-[12.6px] border-[0.6px] border-[#51a2ff] overflow-hidden bg-black/5">
                       <ImageWithFallback src={img} alt={`Post ${i+1}`} className="w-full h-full object-cover pointer-events-none" />
                    </div>
                  ))}
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

const categories = [
  {
    id: 'feed',
    title: 'Posts & Feed',
    icon: <ImageIcon size={20} />,
    tags: ['Branding', 'Estética', 'Composición'],
    cover: gridImages[5],
    innerImages: [gridImages[6], gridImages[7]],
    color: 'bg-blue-900',
    gradient: 'from-[#3b82f6] via-[#2563eb] to-[#1d4ed8]',
    description: <>Creación de contenido estático y estructuración de <strong>sistemas de grillas</strong> (Feed Layout) que fortalecen la identidad de marca a primera vista y generan Brand Awareness.</>,
    role: 'Social Media\nDesigner',
    software: 'Figma, Photoshop,\nIllustrator,\nIA',
    type: 'Post',
    year: '2026'
  },
  {
    id: 'historias',
    title: 'Historias',
    icon: <Smartphone size={20} />,
    tags: ['Efímero', 'Ventas', 'Comunidad'],
    cover: gridImages[0],
    innerImages: [gridImages[8], gridImages[9]],
    color: 'bg-pink-900',
    gradient: 'from-[#ec4899] via-[#db2777] to-[#be185d]',
    description: <>Gráficas dinámicas pensadas para <strong>interactuar directamente</strong> con la audiencia, impulsando encuestas, respuestas y conversiones rápidas hacia enlaces.</>,
    role: 'Content Creator',
    software: 'Figma, Canva',
    type: 'Formato Vertical (9:16)',
    year: '2026'
  },
  {
    id: 'reels',
    title: 'Videos & Reels',
    icon: <Video size={20} />,
    tags: ['Alcance', 'Dinámico', 'Tendencias'],
    cover: gridImages[2],
    innerImages: [gridImages[10], gridImages[11]],
    color: 'bg-amber-900',
    gradient: 'from-[#f59e0b] via-[#d97706] to-[#b45309]',
    description: <>Portadas atractivas y dirección de arte para videos cortos. El objetivo es captar la atención en los <strong>primeros 3 segundos</strong> y mejorar el alcance orgánico.</>,
    role: 'Motion Designer',
    software: 'After Effects, Premiere',
    type: 'Formato Vertical (9:16)',
    year: '2026'
  }
];

export default function SocialMediaProject() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // GSAP-like Scroll Animations mapped via Framer Motion
  const gridYLeft = useTransform(scrollYProgress, [0, 0.25], ["100vh", "0vh"]);
  const gridYCenter = useTransform(scrollYProgress, [0, 0.25], ["-100vh", "0vh"]);
  const gridYRight = useTransform(scrollYProgress, [0, 0.25], ["100vh", "0vh"]);

  // Zooming the grid further to create a wide hole in the middle
  const gridScale = useTransform(scrollYProgress, [0.35, 0.7], [1, 2.5]);
  const gridXLeft = useTransform(scrollYProgress, [0.35, 0.7], ["0%", "-60%"]);
  const gridXRight = useTransform(scrollYProgress, [0.35, 0.7], ["0%", "60%"]);

  const centerItemYTop = useTransform(scrollYProgress, [0.35, 0.7], ["0%", "-120%"]);
  const centerItemYBottom = useTransform(scrollYProgress, [0.35, 0.7], ["0%", "120%"]);

  // Text starts hidden and only appears at the end of the scroll animation
  const textOpacity = useTransform(scrollYProgress, [0, 0.65, 0.75], [0, 0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.65, 0.75], ["50px", "50px", "0%"]);
  
  // Custom pointer events toggle to prevent blocking grid clicks
  const [textPointerEvents, setTextPointerEvents] = useState<"auto" | "none">("none");
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setTextPointerEvents(v >= 0.65 ? "auto" : "none");
    });
  }, [scrollYProgress]);

  const scrollToFirstProject = () => {
    const element = document.getElementById(categories[0].id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 4, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans antialiased bg-[#faf5ff] dark:bg-[#0a0510] text-neutral-900 dark:text-white relative">
      <ScrollToTop />
      
      {/* Botón de volver fijo */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        onClick={(e) => { e.preventDefault(); navigate('/#projects'); }}
        className="fixed top-8 left-6 md:left-20 z-[90] flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-white dark:hover:text-neutral-900 hover:scale-105 rounded-full transition-all duration-300 ease-in-out shadow-lg border border-neutral-300 dark:border-neutral-700 hover:border-transparent"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Volver</span>
      </motion.button>

      {/* === MOBILE STATIC HERO (No Animation) === */}
      <section className="md:hidden pt-32 pb-10 px-4 flex flex-col items-center text-center relative z-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 text-xs font-semibold uppercase tracking-widest mb-6 border border-neutral-200 dark:border-neutral-700/50 shadow-sm">
          <MousePointer2 size={14} />
          <span>Colección</span>
        </div>
        <h1 className="text-4xl sm:text-[50px] font-bold tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1] flex flex-col justify-center items-center gap-2">
          <span>Diseño</span> <span className="font-light italic text-neutral-400 dark:text-neutral-500">Redes Sociales</span>
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-300 font-light max-w-3xl mb-10">
          Exploración de formatos visuales, estrategia y dirección de arte a través de diversos formatos: posts, historias, carruseles y videos. Desliza o selecciona un formato.
        </p>
        <button 
          onClick={scrollToFirstProject}
          className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-lg border border-transparent"
        >
          Ver Proyecto
        </button>
      </section>

      {/* === HERO PRINCIPAL SCROLL ANIMATION (GSAP-style) === */}
      <section ref={heroRef} className="hidden md:block relative h-[400vh] bg-[#faf5ff] dark:bg-[#0a0510]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-[#faf5ff] dark:bg-[#0a0510]">
          
          {/* Fondo sutil tipo Spotlight Morado */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
            <div className="w-[800px] h-[800px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] opacity-60" />
          </div>

          {/* Content (Title & Button) */}
          <motion.div 
            className="absolute z-40 flex flex-col items-center text-center px-4"
            style={{ opacity: textOpacity, y: textY, pointerEvents: textPointerEvents }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 text-xs font-semibold uppercase tracking-widest mb-6 border border-neutral-200 dark:border-neutral-700/50 shadow-sm">
              <MousePointer2 size={14} />
              <span>Colección</span>
            </div>
            <h1 className="text-4xl sm:text-[50px] md:text-[72px] font-bold tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1] flex flex-row flex-wrap justify-center items-center gap-x-2 md:gap-x-3">
              <span>Diseño</span> <span className="font-light italic text-neutral-400 dark:text-neutral-500">Redes Sociales</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 font-light max-w-3xl mb-10">
              Exploración de formatos visuales, estrategia y dirección de arte a través de diversos formatos: posts, historias, carruseles y videos. Desliza o selecciona un formato.
            </p>
            <button 
              onClick={scrollToFirstProject}
              className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-lg border border-transparent"
            >
              Ver Proyecto
            </button>
          </motion.div>

          {/* Grid Container */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-[90vw] md:w-[736px] z-10"
            style={{ x: "-50%", y: "-50%", scale: gridScale, transformOrigin: "center center" }}
          >
            <div className="grid grid-cols-3 gap-4 md:gap-8">
               {/* Left Column */}
               <motion.div className="flex flex-col gap-4 md:gap-10" style={{ y: gridYLeft, x: gridXLeft }}>
                 {imagesLeft.map((img, i) => (
                   <div key={`left-${i}`} className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 relative shadow-xl">
                     <ImageWithFallback src={img} alt="Social Media Frame" className="w-full h-full object-cover absolute inset-0 dark:opacity-80 opacity-100" />
                   </div>
                 ))}
               </motion.div>

               {/* Center Column */}
               <motion.div className="flex flex-col gap-4 md:gap-10" style={{ y: gridYCenter }}>
                 {imagesCenter.map((img, i) => {
                   const isTop = i < 2;
                   return (
                     <motion.div 
                       key={`center-${i}`} 
                       style={{ y: isTop ? centerItemYTop : centerItemYBottom }}
                       className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 relative shadow-xl"
                     >
                       <ImageWithFallback src={img} alt="Social Media Frame" className="w-full h-full object-cover absolute inset-0 dark:opacity-80 opacity-100" />
                     </motion.div>
                   );
                 })}
               </motion.div>

               {/* Right Column */}
               <motion.div className="flex flex-col gap-4 md:gap-10" style={{ y: gridYRight, x: gridXRight }}>
                 {imagesRight.map((img, i) => (
                   <div key={`right-${i}`} className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 relative shadow-xl">
                     <ImageWithFallback src={img} alt="Social Media Frame" className="w-full h-full object-cover absolute inset-0 dark:opacity-80 opacity-100" />
                   </div>
                 ))}
               </motion.div>
            </div>
          </motion.div>

          {/* Overlay to fade bottom and top when scrolling inside the grid to match background slightly */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.2)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.6)_100%)] z-20 mix-blend-overlay" />

        </div>
      </section>

      {/* === SECCIONES INDIVIDUALES (PROYECTOS) === */}
      {categories.slice(0, 1).map((cat, idx) => {
        if (cat.id === 'feed') {
          return (
            <div key={cat.id} className="relative w-full">
              <HorizontalFeedSection cat={cat} />
              <FeedExtraImages />
            </div>
          );
        }
        return null;
      })}

      {/* === CTA AL FINAL === */}
      <section className="py-24 px-6 md:px-20 bg-purple-50/50 dark:bg-[#0c0514] text-neutral-900 dark:text-white relative overflow-hidden text-center border-t border-purple-100 dark:border-purple-900/30">
        {/* Soft glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-200/40 dark:bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
        
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
              Esta serie de contenido digital es una muestra de cómo la estrategia visual y el diseño enfocado en la retención pueden estructurar comunidades sólidas y expresivas.
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
      <footer className="py-8 text-center border-t border-purple-100 dark:border-purple-900/30 text-neutral-500 dark:text-purple-100/50 text-sm bg-[#faf5ff] dark:bg-[#06020a] flex flex-col items-center justify-center gap-1">
        <p>Todos los derechos reservados. © 2026 | Diseñado por <a href="https://www.instagram.com/ryderjbarrios_/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors font-medium">@thinkaboutryry</a>.</p>
        <p className="mt-1 text-xs opacity-70">Diseñando ideas que inspiran, conectan y comunican.</p>
      </footer>
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