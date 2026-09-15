'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ParallaxImage({ src, alt, className = '', priority = false, strength = 80 }: { src: string; alt: string; className?: string; priority?: boolean; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -strength, reduce ? 0 : strength]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 1.08]);

  return (
    <div ref={ref} className={`parallax-frame ${className}`}>
      <motion.div className="parallax-inner" style={{ y, scale: reduce ? 1 : scale }}>
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 70vw" priority={priority} />
      </motion.div>
    </div>
  );
}
