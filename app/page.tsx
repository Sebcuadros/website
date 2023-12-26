'use client';
import React, { useEffect } from 'react'
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        if (interBubble) {
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        }
        requestAnimationFrame(move);
    }

    const handleMouseMove = (event: MouseEvent) => {
        tgX = event.clientX;
        tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    move();

    // Cleanup function
    return () => window.removeEventListener('mousemove', handleMouseMove); 
  }, []);

  return (
      <body className="min-h-screen">
          <div className="gradient-bg grainyoverlay">
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
            <Navbar/>
            <Hero/>
            <div className="gradients-container z-0">
              <div className="g1"></div>
              <div className="g2"></div>
              <div className="g3"></div>
              <div className="g4"></div>
              <div className="g5"></div>
              <div className="interactive"></div>
            </div>
          </div>
      </body>
  );
};
