/**
 * Home.tsx
 *
 * Design Philosophy: Spectral Depth — Dark Sci-Fi Minimalism
 * - Full-viewport hero with Three.js WebGPU scene
 * - Pure black background; all color comes from the 3D scene
 */

import { HeroFuturistic } from '@/components/ui/hero-futuristic';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <HeroFuturistic />
    </div>
  );
}
