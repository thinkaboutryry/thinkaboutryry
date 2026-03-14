import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import svgPaths from "../imports/svg-ofb1zxzifm";
import imgImageWithFallback from "figma:asset/c59edcee15ba0bb9dc0f2c3f4102d64dbb60b0e5.png";
import imgImageWithFallback1 from "figma:asset/5b0b61fe1d36a7b15039a20be6ec4954912e8057.png";
import imgImageWithFallback2 from "figma:asset/1acc39d86289a91e40a1838060e46fd41067458d.png";
import img2 from "figma:asset/ed3703a7123c9ad69e8998b71772184fd2ffd5d9.png";
import img1 from "figma:asset/14b7a0d7377496f4649840f6a4718e1f9a11b61c.png";
import img5 from "figma:asset/eddbb6ca341ead80dc6933345ac12ffa691a6dd7.png";
import img9 from "figma:asset/83e1d63e0b79d124667eff2396eff79d350b3740.png";
import img13 from "figma:asset/17f32636d2b51e72761398c17883242eb33611c2.png";
import img4 from "figma:asset/6e1a5b26c3cad26404dc2f238264b767b6f00257.png";
import img8 from "figma:asset/e099f3d9ab312a80d78924512f1812e264e580d6.png";
import img12 from "figma:asset/3af99dd00242c90ad5435b68089eaf66d0cb8363.png";
import imgDivBgpic from "figma:asset/2bdc31a47c7f33881a08e625908da3bc5ed68428.png";
import img3 from "figma:asset/b2a6803c93e0f087a25f7ea28951f4223e14d943.png";
import img7 from "figma:asset/cdc664f9b47cf117dae9388bcf8bd14a91c0da58.png";
import img6 from "figma:asset/b7c386dc498216e30a0308e7b525e72c902b854d.png";
import img10 from "figma:asset/56a817fdf3d2bd41851019acb9ba8369ebee3813.png";
import img14 from "figma:asset/406136259100f9a5cb3778cae0d64a1e6d7c27d7.png";

export function SocialMediaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll into horizontal movement
  const x = useTransform(scrollYProgress, [0, 0.5], [0, -3500]);

  const posts = [
    { id: 1, img: img1, className: "rounded-[12.631px]" },
    { id: 2, img: img2, className: "" },
    { id: 3, img: img3, className: "" },
    { id: 4, img: img4, className: "" },
    { id: 5, img: img5, className: "" },
    { id: 6, img: img6, className: "" },
    { id: 7, img: img7, className: "" },
    { id: 8, img: img8, className: "" },
    { id: 9, img: img9, className: "" },
    { id: 10, img: img10, className: "" },
    { id: 11, img: imgImageWithFallback, className: "" },
    { id: 12, img: img12, className: "" },
    { id: 13, img: img13, className: "" },
    { id: 14, img: img14, className: "" },
  ];

  return (
    <div 
      ref={sectionRef}
      className="bg-[#0a0510] border-t border-[rgba(89,22,139,0.3)] relative min-h-[1400px]"
    >
      {/* Background gradients */}
      <div className="absolute h-[1235.5px] left-0 opacity-40 top-0 w-full" />
      <div 
        className="absolute h-[1235.5px] left-0 opacity-20 top-0 w-full" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0) 0%)" 
        }} 
      />

      {/* Content Container */}
      <div className="absolute left-[80px] md:left-[138px] top-[96px] w-[calc(100%-160px)] md:w-[1280px]">
        {/* Header Section */}
        <div className="relative">
          <div className="absolute left-0 top-[55.25px] w-full md:w-[520px]">
            {/* Tag */}
            <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] inline-flex items-center px-[13px] py-[5px] rounded-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] text-[12px] text-[rgba(255,255,255,0.9)] tracking-[0.6px] uppercase">
                SOCIAL MEDIA
              </p>
            </div>

            {/* Title */}
            <div className="mt-[32px]">
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[72px] leading-[72px] text-white tracking-[-1.8px]">
                Posts <span className="font-['Inter:Italic',sans-serif] font-normal italic">&</span> <span className="font-['Inter:Italic',sans-serif] font-normal italic">Feed</span>
              </h2>
            </div>

            {/* Description */}
            <div className="mt-[24px] w-full md:w-[519px]">
              <p className="font-['Inter:Light',sans-serif] font-light text-[20px] leading-[32.5px] text-[rgba(255,255,255,0.8)]">
                Creación de contenido estático y estructuración de <span className="font-['Inter:Bold',sans-serif] font-bold text-white">sistemas de grillas</span> (Feed Layout) que fortalecen la identidad de marca a primera vista y generan Brand Awareness.
              </p>
            </div>

            {/* Metadata */}
            <div className="mt-[40px] border-t border-[rgba(255,255,255,0.1)] pt-[33px] grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Rol */}
              <div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase mb-[22px]">
                  Rol
                </p>
                <div className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-white">
                  <p>Social Media</p>
                  <p>Designer</p>
                </div>
              </div>

              {/* Software */}
              <div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase mb-[22px]">
                  Software
                </p>
                <div className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-white">
                  <p>Figma, Illustrator</p>
                  <p>Photoshop, IA</p>
                </div>
              </div>

              {/* Tipo */}
              <div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase mb-[22px]">
                  Tipo
                </p>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-white">
                  Post
                </p>
              </div>

              {/* Año */}
              <div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase mb-[22px]">
                  Año
                </p>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-white">
                  2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Images Below - Static */}
        <div className="absolute top-[635px] left-0 w-full md:w-[1120px]">
          <div className="border-t border-[rgba(255,255,255,0.1)] pt-[65px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#171717] rounded-[14px] border border-[rgba(255,255,255,0.05)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
                <img alt="Post design 1" className="w-full h-auto object-cover" src={imgImageWithFallback} />
              </div>
              <div className="bg-[#171717] rounded-[14px] border border-[rgba(255,255,255,0.05)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
                <img alt="Post design 2" className="w-full h-auto object-cover" src={imgImageWithFallback1} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Feed Section */}
      <div className="absolute left-0 top-[92px] w-full h-[494px] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Portrait Frame - Fixed Position with Masking */}
          <div className="absolute left-1/2 -translate-x-1/2 md:left-[809px] md:translate-x-0 top-0 z-20 pointer-events-none">
            <InstagramPortrait />
          </div>

          {/* Mask overlay on the left to hide posts */}
          <div 
            className="absolute left-0 top-0 h-full w-[calc(50%+150px)] md:w-[960px] bg-gradient-to-r from-[#0a0510] via-[#0a0510] to-transparent z-10 pointer-events-none"
          />

          {/* Scrolling Posts */}
          <motion.div 
            className="absolute left-[600px] md:left-[809px] top-[54px] flex gap-[20px] h-[393px]"
            style={{ x }}
          >
            {posts.map((post, index) => (
              <div 
                key={post.id}
                className="relative shrink-0 w-[317px] h-[393px]"
              >
                <img 
                  alt={`Post ${post.id}`}
                  className={`w-full h-full object-cover ${post.id === 1 || post.id === 3 || post.id === 7 || post.id === 11 ? 'rounded-[12.631px]' : ''}`}
                  src={post.img}
                />
                {(post.id === 1 || post.id === 3 || post.id === 7 || post.id === 11) && (
                  <div className="absolute inset-0 rounded-[12.631px] shadow-[inset_0px_0px_0px_0.632px_#51a2ff] pointer-events-none" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function InstagramPortrait() {
  return (
    <div className="flex flex-col shadow-[0px_6.365px_16.766px_0px_rgba(0,0,0,0.8)]">
      {/* Top Section */}
      <div className="bg-white h-[48.737px] rounded-tl-[11.976px] rounded-tr-[11.976px] w-[323.22px] relative">
        {/* Profile Info */}
        <div className="absolute left-[16.86px] top-1/2 -translate-y-1/2 flex items-center gap-[7.185px]">
          {/* Profile Picture with Card ID */}
          <div className="relative rounded-full size-[31.137px] overflow-hidden">
            <img 
              alt="Profile" 
              className="absolute inset-0 w-full h-full object-cover" 
              src={imgImageWithFallback2} 
            />
          </div>
          
          <div className="flex flex-col gap-[2.395px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[10.778px] text-[#0f0f0f]">
              thinkaboutryry
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[8.383px] text-[#0f0f0f]">
              Barranquilla, Colombie
            </p>
          </div>
        </div>

        {/* Dots Menu */}
        <div className="absolute right-[19px] top-1/2 -translate-y-1/2 w-[3.593px] h-[17.964px]">
          <svg className="w-full h-full" fill="none" viewBox="0 0 3.59273 17.9636">
            <path d={svgPaths.p1774400} fill="#0F0F0F" />
            <path d={svgPaths.p2e5f6d80} fill="#0F0F0F" />
            <path d={svgPaths.p17588200} fill="#0F0F0F" />
          </svg>
        </div>
      </div>

      {/* Middle Section - TRANSPARENT to show posts behind */}
      <div className="h-[404.249px] w-[323.22px]" />

      {/* Bottom Section */}
      <div className="bg-white h-[41.014px] w-[323.341px] rounded-bl-[11.976px] rounded-br-[11.976px] relative rotate-180">
        <div className="absolute left-[19.15px] top-[10.18px] w-[285.023px] flex items-center justify-between rotate-180">
          {/* Bookmark */}
          <div className="rotate-180">
            <svg className="size-[20.874px]" fill="none" viewBox="0 0 20.8739 20.8739">
              <path d={svgPaths.p1c0a5400} stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30462" />
            </svg>
          </div>

          {/* Icon Set */}
          <div className="flex gap-[9.581px] items-center rotate-180">
            {/* Heart */}
            <svg className="size-[20.874px]" fill="none" viewBox="0 0 20.8739 20.8739">
              <path d={svgPaths.p3984e500} fill="#FF1F1F" stroke="#FF1F1F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30462" />
            </svg>

            {/* Chat */}
            <svg className="size-[20.874px]" fill="none" viewBox="0 0 20.8739 20.8739">
              <path d={svgPaths.p1ca21c00} stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30462" />
            </svg>

            {/* Share */}
            <svg className="size-[20.874px]" fill="none" viewBox="0 0 20.8739 20.8739">
              <path d={svgPaths.p3b16fd00} stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30462" />
              <path d={svgPaths.p83dc400} stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.30462" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
