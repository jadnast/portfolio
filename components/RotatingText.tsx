"use client"
import { useState, useEffect } from "react";

const digitals = ['Web', 'Graphic', 'Art', 'UI/UX', 'Game'];

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % digitals.length);
        setIsTransitioning(false);
      }, 5000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`digital ${isTransitioning ? 'transitioning' : ''}`}>
      {digitals[currentIndex]}
    </span>
  );
}