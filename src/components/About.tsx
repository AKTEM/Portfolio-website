import React from 'react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-8 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="section-container">
        <SectionHeading title="About Me" subtitle="My background and journey" />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 text-foreground/80">
              <p className="animate-fade-in">
                I'm a passionate Frontend developer with over 3 years of experience 
                creating beautiful, functional web applications. My journey in technology 
                began with a deep curiosity about how digital experiences come to life.
              </p>
              
              <p className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                I specialize in modern JavaScript library/frameworks like React.js, Next.js and have 
                extensive experience with Node.js, TypeScript, and various database 
                technologies. I'm committed to writing clean, maintainable code and creating 
                intuitive user experiences.
              </p>
              
              <p className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing my knowledge through technical writing and 
                mentoring aspiring developers.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-medium mb-4 text-foreground animate-fade-in" style={{ animationDelay: '300ms' }}>
                  Key Facts
                </h3>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    '3+ years professional experience',
                    'Worked with 15+ clients',
                    'Delivered 20+ successful projects',
                    'Remote work experience',
                    
                  ].map((fact, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 animate-fade-in"
                      style={{ animationDelay: `${400 + index * 50}ms` }}
                    >
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-primary via-secondary to-creative animate-gradient overflow-hidden">
                <div className="absolute inset-1 bg-card rounded-xl flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-muted">
                      <img
                        src="/img/ema.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">Emmanuel</h3>
                    <p className="text-foreground/60 text-sm mt-1">Frontend Developer</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-card rounded-lg shadow-lg flex items-center justify-center animate-scale-in">
                <div className="font-mono text-sm">
                  <div className="text-secondary font-semibold">3+</div>
                  <div className="text-xs text-foreground/60">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
