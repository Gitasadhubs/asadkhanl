import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const projectData: Project[] = [
  {
    title: 'AI-Powered Content Platform',
    description: 'A comprehensive platform that leverages generative AI to create, manage, and optimize content for digital marketing campaigns. Features include automated blog post generation, social media updates, and performance analytics.',
    tags: ['React', 'Next.js', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'Firebase'],
    imageUrl: 'https://picsum.photos/seed/ai-platform/200/112',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'E-commerce Recommendation Engine',
    description: 'Developed a personalized recommendation engine for an e-commerce website, increasing user engagement and conversion rates by 15%. Integrated with existing product catalogs and user behavior data.',
    tags: ['Python', 'Flask', 'Machine Learning', 'React', 'Redux'],
    imageUrl: 'https://picsum.photos/seed/ecommerce/200/112',
    liveUrl: '#',
  },
  {
    title: 'Interactive Data Visualization Dashboard',
    description: 'Built a real-time dashboard for visualizing complex financial data using D3.js and React. Allowed users to interact with charts, apply filters, and export reports, improving data accessibility for stakeholders.',
    tags: ['React', 'D3.js', 'WebSocket', 'Node.js', 'Express'],
    imageUrl: 'https://picsum.photos/seed/dataviz/200/112',
    sourceUrl: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      </div>
      <div>
        <ul className="group/list">
          {projectData.map((project, index) => (
            <li key={index} className="mb-12">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;