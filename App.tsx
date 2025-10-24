import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Skills />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;