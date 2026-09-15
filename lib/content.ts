export const profile = {
  name: 'Thay',
  segment: 'Acompanhante de luxo',
  instagram: '@Thay',
  whatsapp: '11456344546',
  onlyfans: true,
  privacy: true,
} as const;

export const media = [
  { id: 1, src: '/images/thay-1.jpg', alt: 'Thay em composição editorial de vestido verde', kind: 'image' as const, size: 'hero' as const },
  { id: 2, src: '/images/thay-2.jpg', alt: 'Retrato editorial de Thay com tatuagens de borboletas', kind: 'image' as const, size: 'portrait' as const },
  { id: 3, src: '/images/thay-3.jpg', alt: 'Thay em look marrom, em ambiente intimista', kind: 'image' as const, size: 'portrait' as const },
];

export const palette = {
  plum: '#371128',
  burgundy: '#580C32',
  crimson: '#930738',
  coral: '#FF554E',
  orange: '#F7893E',
  cream: '#F6EAE3',
} as const;

export function getWhatsAppHref() {
  // The briefing supplied a Brazilian local number. The 55 prefix only converts
  // the supplied number to WhatsApp's international URL format; the number itself
  // remains exactly 11456344546.
  return `https://wa.me/55${profile.whatsapp}`;
}
