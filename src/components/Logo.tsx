import React from 'react';


const Logo: React.FC = () => {
  return (
    <a href="#home" className="flex items-center space-x-2 group">
      <div className="relative w-8 h-8 flex items-center justify-center">
       
 <div className="absolute inset-0 rounded-md "></div>
        <img
    src="/img/GL.png"
    alt="gallantcreative Logo"
    style={{ height: '35px', width: '165px' }}
  />
     
      </div>

      <span className="font-bold text-lg tracking-tight text-foreground">
        Gallant<span className="text-primary-light">creative</span>
      </span>
    </a>
  );
};

export default Logo;