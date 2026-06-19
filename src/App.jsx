// import React from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import CustomCursor from './components/CustomCursor';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// // Register GSAP Plugin globally
// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
//   return (
//     <div className="bg-slate-50 text-slate-600 font-sans min-h-screen selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
//       <CustomCursor />
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Experience />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;




// import React from 'react';

// // Component Imports
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Journey from './components/Journey';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// const App = () => {
//   // Global wrapper enforces the dark theme, base font, and custom selection color
//   return (
//     <div className="bg-zinc-950 text-zinc-400 font-sans min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
//       <Navbar />
      
//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Experience />
//         <Journey />
//         <Contact />
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default App;




import React from 'react';

// Component Imports
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative text-zinc-400 font-sans min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      {/* Background handles visuals, Cursor handles the CSS variable logic */}
      <Background />
      <CustomCursor />
      
      <Navbar />
      
      {/* Remove bg colors from <main> sections as the global background now bleeds through */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Journey />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;