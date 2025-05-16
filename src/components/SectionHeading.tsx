import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div
      className={`space-y-2 max-w-lg ${
        centered ? 'text-center mx-auto' : 'text-left'
      }`}
    >
      <h2 className="text-foreground animate-fade-in">
        <span className="inline-block pb-2 border-b-2 border-secondary">
          {title}
        </span>
      </h2>
      
      {subtitle && (
        <p className="text-foreground/60 mt-2 animate-fade-in">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;