import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'deeglobaltravel',
    description: 'A Business Website for a travellling agency',
    imageUrl: '/img/dee.jpeg',
    tags: ['Html', 'css', 'Javascript'],
    githubUrl: 'https://github.com/AKTEM/Deeglobaltravel',
    liveUrl: 'https://www.deeglobaltravel.com/',
    featured: true,
  },
  {
    id: 2,
    title: 'agromyfoods',
    description: 'A food item order and Delivery website',
    imageUrl: '/img/agro.jpeg',
    tags: ['TypeScript', 'Nextjs', 'API', 'Tailwind','Framer motion','Firebase', 'Paystack'],
    githubUrl: 'https://github.com/AKTEM/Agromyfoodsweb',
    liveUrl: 'https://www.agromyfoods.com/',
    featured: true,
  },
  {
    id: 3,
    title: 'Cineview',
    description: 'Cineview Movie Web App',
    imageUrl: '/img/cine.png',
    tags: ['Supabase', 'Tailwind', 'Typescript','Reactjs'],
    githubUrl: 'https://github.com/AKTEM/Cineview',
    liveUrl: 'https://cineview-theta.vercel.app/',
  },
  {
    id: 4,
    title: 'Fitrack',
    description: 'A Fitness and Health Monitoring Website',
    imageUrl: '/img/fit.jpeg',
    tags: ['Tailwind', 'API', 'Nextjs'],
    githubUrl: 'https://github.com/AKTEM/Fittrack',
    liveUrl: 'https://fittrack-health.vercel.app/',
  },
  {
    id: 5,
    title: 'Bigkokogroup',
    description: 'Sales of Security Drones',
    imageUrl: '/img/big.jpeg',
    tags: ['Reactjs', 'Tailwind', 'API'],
    githubUrl: 'https://github.com/AKTEM/Bigkoko-Security',
    liveUrl: 'https://bigkoko-security.vercel.app/',
  },
  {
    id: 6,
    title: 'Clicksixtytechnologies',
    description: 'A SaaS Product Detail Website',
    imageUrl: '/img/click.png',
    tags: ['Wordpress'],
    githubUrl: '',
    liveUrl: 'https://clicksixtytechnologies.com/',
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'Reactjs', label: 'Reactjs' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'Nextjs', label: 'Nextjs' },
    { value: 'Tailwind', label: 'Tailwind' },
    { value: 'Html', label: 'Html' },
    { value: 'css', label: 'css' },
    { value: 'Javascript', label: 'Javascript' },
    { value: 'Wordpress', label: 'Wordpress' },
    { value: 'API', label: 'API' },
  ];
  
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(filter));
  
  return (
    <section id="projects" className="py-8 relative">
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="section-container">
        <SectionHeading 
          title="Projects" 
          subtitle="A showcase of my recent work"
        />
        
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {filters.map(filterOption => (
            <button
              key={filterOption.value}
              onClick={() => setFilter(filterOption.value)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === filterOption.value
                  ? 'bg-primary text-white'
                  : 'bg-muted/50 hover:bg-muted text-foreground/70 hover:text-foreground'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      className="bg-background/90 p-2 rounded-full hover:bg-background transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} className="text-foreground" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="bg-background/90 p-2 rounded-full hover:bg-background transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink size={18} className="text-foreground" />
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-accent px-3 py-1 rounded-full text-xs font-medium text-background">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted/50 rounded-md text-xs text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          {/* <Button>
            View All Projects
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
