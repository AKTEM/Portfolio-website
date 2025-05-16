import React from 'react';
import SectionHeading from './SectionHeading';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 95, color: 'bg-primary-light' },
      { name: 'JavaScript', level: 95, color: 'bg-accent' },
      { name: 'TypeScript', level: 85, color: 'bg-primary' },
      { name: 'HTML/CSS', level: 90, color: 'bg-creative' },
      { name: 'Tailwind CSS', level: 98, color: 'bg-secondary' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85, color: 'bg-secondary' },
      { name: 'Express', level: 80, color: 'bg-primary' },
      { name: 'REST APIs', level: 90, color: 'bg-accent' },
    ],
  },
  {
    name: 'Other',
    skills: [
      { name: 'Git', level: 85, color: 'bg-accent' },
      { name: 'UI/UX Design', level: 80, color: 'bg-creative' },
      { name: 'Testing', level: 75, color: 'bg-secondary' },
    ],
  },
];

const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <div className="mb-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-foreground/60 text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full ${skill.color} rounded-full`} 
          style={{ 
            width: `${skill.level}%`, 
            transition: 'width 1s ease-in-out',
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-8 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="section-container">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="Technologies and tools I work with"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className="bg-card p-6 rounded-xl shadow-sm border border-border animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-border">
                {category.name}
              </h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={skillIndex} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            'MongoDB', 'PostgreSQL', 'Firebase', 'Redux', 'Next.js', 'Tailwind CSS',
            'SASS', 'Webpack', 'Responsive Design'
          ].map((tech, index) => (
            <div 
              key={tech}
              className="bg-card border border-border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-sm font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;