import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const NavLink: React.FC<{ href: string; children: React.ReactNode; isActive: boolean }> = ({ href, children, isActive }) => (
  <a href={href} className="group flex items-center py-3">
    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${isActive ? 'w-16 bg-slate-200' : ''}`}></span>
    <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${isActive ? 'text-slate-200' : ''}`}>
      {children}
    </span>
  </a>
);

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, 
      { rootMargin: '-30% 0px -70% 0px' }
    );

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Asad Ashraf</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Senior Frontend Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build exceptional and accessible digital experiences for the web.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li><NavLink href="#about" isActive={activeSection === 'about'}>About</NavLink></li>
            <li><NavLink href="#skills" isActive={activeSection === 'skills'}>Skills</NavLink></li>
            <li><NavLink href="#projects" isActive={activeSection === 'projects'}>Projects</NavLink></li>
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 shrink-0">
          <a className="block hover:text-slate-200" href="https://github.com" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)">
            <span className="sr-only">GitHub</span>
            <GithubIcon />
          </a>
        </li>
        <li className="mr-5 shrink-0">
          <a className="block hover:text-slate-200" href="https://linkedin.com" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)">
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon />
          </a>
        </li>
        <li className="mr-5 shrink-0">
          <a className="block hover:text-slate-200" href="mailto:contact@asadashraf.dev" aria-label="Email">
            <span className="sr-only">Email</span>
            <MailIcon />
          </a>
        </li>
      </ul>
    </header>
  );
};
export default Header;