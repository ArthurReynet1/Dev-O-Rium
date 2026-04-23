import { useEffect } from 'react';

type Options = {
  count?: number;
  color?: string;
  enabled?: boolean;
};

export default function useParticleCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  { count = 50, color = '24, 242, 178', enabled = true }: Options = {},
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !enabled) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement ?? document.body;

    const sizeCanvas = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    sizeCanvas();

    class Particle {
      x = Math.random() * canvas!.width;
      y = Math.random() * canvas!.height;
      radius = Math.random() * 2;
      speedX = Math.random() * 3 - 1.5;
      speedY = Math.random() * 3 - 1.5;
      opacity = Math.random() * 0.5 + 0.1;

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1;
        this.draw();
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${color}, ${this.opacity})`;
        ctx!.fill();
      }
    }

    const particles: Particle[] = Array.from(
      { length: count },
      () => new Particle(),
    );

    let frameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const observer = new ResizeObserver(sizeCanvas);
    observer.observe(parent);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [canvasRef, count, color, enabled]);
}
