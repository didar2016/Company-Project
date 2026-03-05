'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

export default function AnimatedText({ children }: { children: React.ReactNode }) {
  const textRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitType | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const animateText = useCallback(() => {
    if (!textRef.current) return;

    // Clean previous split if exists
    if (splitRef.current) {
      splitRef.current.revert();
    }

    // Create new split
    splitRef.current = new SplitType(textRef.current, {
      types: 'words,chars',
    });

    // Reset initial state
    gsap.set(splitRef.current.chars, {
      y: 100,
      opacity: 0,
    });

    // Animate characters
    gsap.to(splitRef.current.chars, {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 1.2,
      ease: 'power4.out',
    });
  }, []);

  useEffect(() => {
    if (!textRef.current) return;

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation when element comes into view
            animateText();
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully visible
      }
    );

    // Start observing
    observerRef.current.observe(textRef.current);

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (splitRef.current) {
        splitRef.current.revert();
      }
    };
  }, [animateText]);

  return (
    <div ref={textRef} className="animated-heading">
      {children}
    </div>
  );
}
