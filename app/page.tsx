'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Instagram, Menu, X } from 'lucide-react';
import { useState, useRef } from 'react';
import { Lightbox } from '@/components/Lightbox';
import { ParallaxImage } from '@/components/ParallaxImage';
import { ScrollReveal } from '@/components/ScrollReveal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { media, profile, palette } from '@/lib/content';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const reduce = useReducedMotion();
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.18]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.96, 0]);
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <main style={{ '--plum': palette.plum, '--burgundy': palette.burgundy, '--crimson': palette.crimson, '--coral': palette.coral, '--orange': palette.orange, '--cream': palette.cream } as React.CSSProperties}>
      <div className="grain" aria-hidden="true" />

      <header className={`site-header ${menu ? 'open' : ''}`}>
        <a href="#top" className="wordmark" onClick={closeMenu}>THAY<span>.</span></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#essencia">Essência</a>
          <a href="#galeria">Galeria</a>
          <a href="#presenca">Presença</a>
          <a href="#contato">Contato</a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label={menu ? 'Fechar menu' : 'Abrir menu'}>
          {menu ? <X size={22} /> : <Menu size={22} />}
        </button>
        {menu && <nav className="mobile-nav" aria-label="Navegação móvel">
          <a href="#essencia" onClick={closeMenu}>Essência</a>
          <a href="#galeria" onClick={closeMenu}>Galeria</a>
          <a href="#presenca" onClick={closeMenu}>Presença</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>}
      </header>

      <section id="top" ref={heroRef} className="hero">
        <motion.div className="hero-media" style={{ scale: heroScale, y: heroY, opacity: heroOpacity }}>
          <Image src={media[0].src} alt={media[0].alt} fill priority sizes="100vw" />
        </motion.div>
        <div className="hero-vignette" />
        <div className="hero-colorwash" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> MARCA PESSOAL · {profile.segment.toUpperCase()}</div>
          <h1><span>THAY</span><em>presença que</em><span>permanece.</span></h1>
          <p>Uma experiência visual construída em torno de presença, estética e discrição.</p>
        </div>
        <div className="hero-bottom">
          <span>01 — 04</span>
          <span className="scroll-hint"><ArrowDown size={14} /> SCROLL PARA EXPLORAR</span>
        </div>
      </section>

      <section className="statement" id="essencia">
        <div className="statement-side">THAY / ESSÊNCIA</div>
        <div className="statement-main">
          <ScrollReveal>
            <p className="kicker">UMA PRESENÇA, UMA ASSINATURA</p>
            <h2>O detalhe não pede atenção.<br /><i>Ele conquista.</i></h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="statement-text">
            <p>Thay é apresentada aqui como marca pessoal: sofisticada, adulta, contemporânea e visualmente marcante. O site acompanha essa linguagem sem excesso — deixando a imagem respirar e o movimento conduzir a descoberta.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="portrait-chapter">
        <div className="portrait-caption"><span>02</span><p>Um olhar editorial<br />sobre a presença.</p></div>
        <ParallaxImage src={media[1].src} alt={media[1].alt} className="portrait-main" strength={70} />
        <div className="portrait-orbit">T · H · A · Y</div>
      </section>

      <section className="experience">
        <div className="experience-label">THE VISUAL LANGUAGE</div>
        <div className="experience-track">
          <ScrollReveal className="experience-copy">
            <span className="big-number">03</span>
            <h2>Ritmo.<br /><i>Silêncio.</i><br />Presença.</h2>
            <p>Escalas diferentes, imagens em suspensão e transições suaves criam uma navegação que se comporta mais como editorial do que como uma página convencional.</p>
          </ScrollReveal>
          <motion.div className="experience-image" initial={{ clipPath: 'inset(18% 8% 18% 8%)' }} whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            <Image src={media[2].src} alt={media[2].alt} fill sizes="(max-width: 768px) 100vw, 52vw" />
            <span>THAY / 03</span>
          </motion.div>
        </div>
      </section>

      <section className="wow" aria-label="Momento cinematográfico">
        <div className="wow-sticky">
          <div className="wow-bg"><Image src={media[0].src} alt="" fill sizes="100vw" /></div>
          <div className="wow-overlay" />
          <div className="wow-type">
            <motion.span initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.55 }} transition={{ duration: 0.9 }}>NOT JUST</motion.span>
            <motion.strong initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.55 }} transition={{ duration: 1.0, delay: 0.08 }}>A PHOTO.</motion.strong>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.55 }} transition={{ duration: 0.9, delay: 0.35 }}>A point of view.</motion.p>
          </div>
          <div className="wow-marker">04 / WOW MOMENT</div>
        </div>
      </section>

      <section id="galeria" className="gallery-section">
        <div className="gallery-head">
          <div><span className="kicker">05 — GALERIA</span><h2>Imagem como<br /><i>narrativa.</i></h2></div>
          <p>Três registros, três atmosferas. A galeria foi desenhada para crescer com novos materiais — inclusive vídeo — sem perder a linguagem editorial.</p>
        </div>
        <Lightbox items={media} />
      </section>

      <section id="presenca" className="presence">
        <div className="presence-left">
          <span className="kicker">06 — PRESENÇA DIGITAL</span>
          <h2>Onde<br /><i>encontrar</i><br />Thay.</h2>
        </div>
        <div className="presence-right">
          <div className="platform-row" aria-label="Instagram informado no briefing">
            <span>INSTAGRAM</span><strong>{profile.instagram}</strong><span className="demo-pill">@</span>
          </div>
          <div className="platform-row demo">
            <span>ONLYFANS</span><strong>Perfil não informado</strong><span className="demo-pill">DEMO</span>
          </div>
          <div className="platform-row demo">
            <span>PRIVACY</span><strong>Perfil não informado</strong><span className="demo-pill">DEMO</span>
          </div>
          <p className="platform-note">Os perfis de OnlyFans e Privacy foram informados no briefing, mas os links não foram fornecidos. Por isso, permanecem em estado demonstrativo, prontos para substituição.</p>
        </div>
      </section>

      <section id="contato" className="contact">
        <div className="contact-image"><Image src={media[1].src} alt="" fill sizes="50vw" /></div>
        <div className="contact-content">
          <span className="kicker">07 — CONTATO</span>
          <h2>Se a presença<br /><i>faz sentido,</i><br />continue.</h2>
          <p>O próximo passo acontece em uma conversa.</p>
          <a className="contact-cta" href="https://wa.me/5511456344546" target="_blank" rel="noopener noreferrer">Abrir WhatsApp <ArrowUpRight size={19} /></a>
          <div className="contact-meta"><span>WHATSAPP</span><strong>{profile.whatsapp}</strong></div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">THAY<span>.</span></div>
        <div className="footer-mid">MARCA PESSOAL / EXPERIÊNCIA DIGITAL</div>
        <div className="footer-end">© {new Date().getFullYear()} · Todos os direitos reservados</div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
