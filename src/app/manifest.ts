import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dev-O-Rium — Arthur Reynet',
    short_name: 'Dev-O-Rium',
    description: 'Portfolio fullstack React / .NET',
    start_url: '/',
    display: 'standalone',
    background_color: '#242B2D',
    theme_color: '#18F2B2',
    icons: [{ src: '/icon-512.png', sizes: '512x512', type: 'image/png' }],
  };
}
