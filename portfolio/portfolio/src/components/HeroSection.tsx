import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(100, Math.floor(window.innerWidth / 10));
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(66, 153, 225, ${Math.random() * 0.3 + 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connect = () => {
      if (!ctx) return;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(66, 153, 225, ${0.1 - distance / 1000})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      ></canvas>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sri Raghu Charan Anala</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Passionate about technology and innovation
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Python Developer
          </div>
          <div className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors">
            C Programmer
          </div>
          <div className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors">
            SQL Enthusiast
          </div>
          <div className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors">
            AI Explorer
          </div>
        </div>
        
        <a 
          href="#about" 
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;