"use client"
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  direction?: "left" | "right" | "bottom" |"top";
  className?: string;
};

export function Reveal({
  children,
  direction = "left",
  className = "",
  delay,
}: Props) {
  const variants = {
    left: { opacity: 0, x: -180 },
    right: { opacity: 0, x: 180 },
    top: { opacity: 0, x: 0 },
    bottom: { opacity: 0, y: 180 },
  };

  return (
    <motion.div
      className={className} 
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7, ease: "easeOut" , delay}}
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

    const MAX_SCROLL = 590;

    const onScroll = () => {
      let scrollY = window.scrollY;
      if (scrollY > MAX_SCROLL) scrollY = MAX_SCROLL;

      const width = window.innerWidth;

     
     let x;
                                    // انا قادر طبعا اظبط الريسبونسف بس اختصارا للوقت وكدا كدا المشروع ده مجرد عرض لكن مش شغل حقيقي 
if (width <= 768) {
  x = 0;
} else if (width <= 1024) {
  x = -scrollY * 0.69; // tablet           معظم التابلتس
} else {
  x = -scrollY * 1.22; // laptop + desktop  
}

      const y = scrollY * 1;
      const scale = Math.max(1 - scrollY * 0.001, 0.8);

      el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={ref}>{children}</div>;
}


