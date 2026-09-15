export type MediaItem = {
  id: number;
  src: string;
  alt: string;
  kind: 'image' | 'video';
  size: 'hero' | 'portrait' | 'landscape';
};
