import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const symbols = [
      '<div>', '</div>', '{...}', '[]', '=>',
      'async', 'await', 'const', 'function',
      '&&', '||', '===', '!==',
      'import', 'export', 'return',
      '/* */', '//', '.tsx', '.jsx'
    ];
    const colors = ['primary-light', 'secondary', 'accent', 'creative'];
    const background = backgroundRef.current;

    if (!background) return;

    const createSymbol = () => {
      const symbol = document.createElement('div');
      symbol.className = `tech-symbol text-${colors[Math.floor(Math.random() * colors.length)]}`;
      symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      
      const size = Math.random() * 24 + 16;
      symbol.style.fontSize = `${size}px`;
      
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      symbol.style.left = `${startX}px`;
      symbol.style.top = `${startY}px`;
      
      const tx = (Math.random() - 0.5) * 300;
      const ty = (Math.random() - 0.5) * 300;
      const tz = (Math.random() - 0.5) * 500;
      const rx = Math.random() * 360;
      const ry = Math.random() * 360;
      const rz = Math.random() * 360;
      
      symbol.style.setProperty('--tx', `${tx}px`);
      symbol.style.setProperty('--ty', `${ty}px`);
      symbol.style.setProperty('--tz', `${tz}px`);
      symbol.style.setProperty('--rx', `${rx}deg`);
      symbol.style.setProperty('--ry', `${ry}deg`);
      symbol.style.setProperty('--rz', `${rz}deg`);
      
      background.appendChild(symbol);
      
      setTimeout(() => {
        symbol.remove();
      }, 15000);
    };

    const interval = setInterval(createSymbol, 800);
    
    for (let i = 0; i < 15; i++) {
      setTimeout(createSymbol, i * 100);
    }
    
    return () => {
      clearInterval(interval);
      if (background) {
        background.innerHTML = '';
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center pt-16 relative overflow-hidden"
    >
      <div ref={backgroundRef} className="tech-background" />
      
      <div className="absolute top-32 -right-64 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-64 w-[600px] h-[600px] bg-creative/20 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <h1>
            <span className="text-2xl md:text-3xl text-foreground/75 block animate-slide-from-left opacity-0" style={{ animationDelay: '300ms' }}>
              Hello, I'm Emmanuel
            </span>
            <div className="mt-2">
              <span className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-tight bg-gradient-to-r from-primary-light via-creative to-secondary bg-clip-text text-transparent block animate-fade-in-up opacity-0" style={{ animationDelay: '800ms' }}>
                A Frontend Developer
              </span>
            </div>
          </h1>
          
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl animate-slide-up" style={{ animationDelay: '1200ms' }}>
            Crafting beautiful and accessible web experiences with modern technologies.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '1400ms' }}>
            <Button size="lg">
              View My Work
            </Button>
           <a 
            href="https://drive.google.com/file/d/1JpLl3u-4_VgGUPQv512QxoyyRhMnwj4h/view?usp=drivesdk" 
            target="_blank" 
            rel="noopener noreferrer"
            >
           <Button variant="outline" size="lg">
           Download Resume
            </Button>
            </a>

          </div>
          
          <div className="mt-8 flex items-center space-x-6 animate-slide-up" style={{ animationDelay: '1600ms' }}>
            <a
              href="#"
              className="text-foreground/70 hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-foreground/70 hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-foreground/70 hover:text-foreground transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/50 hover:text-foreground/80 transition-colors duration-200"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
