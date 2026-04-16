"use client"
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  direction?: "left" | "right" | "bottom";
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  direction = "left",
  className = "",
}: Props) {
  const variants = {
    left: { opacity: 0, x: -180 },
    right: { opacity: 0, x: 80 },
    
    bottom: { opacity: 0, y: 180 },
  };

  return (
    <motion.div
      className={className} 
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}



export function ScrollImage({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const MAX_SCROLL = 593; // الحد اللي عايز توقف عنده الحركة

    const onScroll = () => {
      let scrollY = window.scrollY;

      if (scrollY > MAX_SCROLL) scrollY = MAX_SCROLL;

      // نحدد حجم الشاشة جوه onScroll
      const isMobile = window.innerWidth <= 768;

      // الحركة: على الديسكتوب شمال + تحت، على الموبايل تحت بس
      const x = isMobile ? 0 : -scrollY * 1.2; 
      const y = scrollY * 1;  
      const scale = Math.max(1 - scrollY * 0.001, 0.8);

      el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={ref}>{children}</div>;
}


