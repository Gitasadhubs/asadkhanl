import React from 'react';
import { Project } from '../types';
import SkillBadge from './SkillBadge';
import { ExternalLinkIcon, GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, imageUrl, liveUrl, sourceUrl } = project;

  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <a
            href={liveUrl || sourceUrl || '#'}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            aria-label={`${title} (opens in a new tab)`}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {title}
              <span className="inline-block ml-1">
                 <ExternalLinkIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
              </span>
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
        <div className="mt-2 flex items-center" aria-label="Project links and technologies">
          {sourceUrl && (
            <a href={sourceUrl} target="_blank" rel="noreferrer noopener" className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300 mr-4" aria-label="Source code (opens in a new tab)">
              <GithubIcon className="mr-1 h-4 w-4" />
              <span>Source</span>
            </a>
          )}
          <ul className="flex flex-wrap" aria-label="Technologies used">
            {tags.map((tag, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <SkillBadge>{tag}</SkillBadge>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img
        alt={title}
        loading="lazy"
        width="200"
        height="48"
        src={imageUrl}
        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        style={{ color: 'transparent' }}
      />
    </div>
  );
};
export default ProjectCard;