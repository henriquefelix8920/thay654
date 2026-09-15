'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { MediaItem } from './mediaTypes';

export function Lightbox({ items }: { items: MediaItem[] }) {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowRight') setIndex((v) => v === null ? 0 : (v + 1) % items.length);
      if (e.key === 'ArrowLeft') setIndex((v) => v === null ? 0 : (v - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, items.length]);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <button key={item.id} className={`gallery-tile gallery-${i + 1}`} onClick={() => setIndex(i)} aria-label={`Abrir fotografia ${i + 1}`}>
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 50vw, 34vw" />
            <span className="tile-index">0{i + 1}</span>
            <span className="tile-overlay" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div className="lightbox" role="dialog" aria-modal="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="lightbox-close" onClick={() => setIndex(null)} aria-label="Fechar galeria"><X size={22} /></button>
            <button className="lightbox-nav left" onClick={() => setIndex((index - 1 + items.length) % items.length)} aria-label="Imagem anterior"><ArrowLeft size={24} /></button>
            <motion.div className="lightbox-image" initial={{ scale: 0.94 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
              <Image src={items[index].src} alt={items[index].alt} fill sizes="90vw" />
            </motion.div>
            <button className="lightbox-nav right" onClick={() => setIndex((index + 1) % items.length)} aria-label="Próxima imagem"><ArrowRight size={24} /></button>
            <div className="lightbox-caption"><span>THAY</span><strong>{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</strong></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
