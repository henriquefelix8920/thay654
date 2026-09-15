import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thay — presença, estética, discrição',
  description: 'Experiência digital premium de Thay, profissional do segmento de acompanhante de luxo.',
  openGraph: {
    title: 'Thay — presença, estética, discrição',
    description: 'Experiência digital premium de Thay.',
    type: 'website',
    images: ['/images/thay-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thay — presença, estética, discrição',
    description: 'Experiência digital premium de Thay.',
    images: ['/images/thay-1.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#371128',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
