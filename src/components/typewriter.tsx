import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string[];
  speed?: number;
  deleteSpeed?: number;
  waitTime?: number;
  className?: string;
  cursorChar?: string;
}

export const Typewriter = ({
  text,
  speed = 70,
  deleteSpeed = 40,
  waitTime = 1500,
  className = '',
  cursorChar = '_'
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = text[currentIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), waitTime);
          return;
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          // Move to next word
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % text.length);
          return;
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, text, speed, deleteSpeed, waitTime]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        {cursorChar}
      </span>
    </span>
  );
};

export default Typewriter;