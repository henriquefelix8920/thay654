'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppHref } from '@/lib/content';

export function WhatsAppButton() {
  const href = getWhatsAppHref();
  return (
    <a className="whatsapp" href={href} target="_blank" rel="noopener noreferrer" aria-label="Conversar com Thay pelo WhatsApp">
      <span className="whatsapp-ring" />
      <MessageCircle size={22} strokeWidth={1.7} />
      <span className="whatsapp-label">WhatsApp</span>
    </a>
  );
}
