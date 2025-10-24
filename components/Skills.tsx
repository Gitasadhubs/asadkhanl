import React from 'react';
import SkillBadge from './SkillBadge';

const skills = [
  'React', 'TypeScript', 'JavaScript (ES6+)', 'Next.js', 'Node.js', 'GraphQL',
  'Tailwind CSS', 'Figma', 'Python', 'Firebase', 'AWS', 'Docker'
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Skills</h2>
      </div>
      <div>
        <p className="mb-4">
          Over the past decade, I've worked with a diverse range of technologies in the web development world. Here are a few I've been working with recently:
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
          {skills.map((skill, index) => (
            <li key={index}>
              <SkillBadge>{skill}</SkillBadge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;