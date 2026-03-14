import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  alt?: string;
  className?: string;
}

export const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({ 
  beforeImage, 
  afterImage, 
  alt = "Comparison",
  className = ""
}) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setPosition(percent);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onPointerUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none rounded-2xl cursor-ew-resize bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 touch-pan-y ${className}`}
      onPointerDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
    >
      {/* After Image (Bottom) */}
      <img src={afterImage} alt={`After: ${alt}`} className="w-full h-full object-cover pointer-events-none" draggable={false} />
      
      {/* Before Image (Top, clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
      >
        <img src={beforeImage} alt={`Before: ${alt}`} className="w-full h-full object-cover" draggable={false} />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white flex items-center justify-center pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.3)] z-10"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-neutral-200 text-neutral-600">
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 -mr-1" />
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 -ml-1" />
        </div>
      </div>
    </div>
  );
};
