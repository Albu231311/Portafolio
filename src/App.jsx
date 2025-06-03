import Header from './components/Header';
import ContactBar from './components/Contactbar';
import AboutSection from './components/AboutSection';
import SkillsBar from './components/SkillsBar';
import InfoSection from './components/InfoSection';
import ProjectsBar from './components/ProjectsBar';
import Projects from './components/Projects';


export default function App() {
  return (
    <div className="bg-[#F8F0E3] min-h-screen font-dxsitrus">
      <Header />
      <ContactBar />
      <AboutSection />
      <SkillsBar />
      <InfoSection />
      <ProjectsBar />
      <Projects />
      {/* El resto de tu contenido aquí */}
    </div>
  );
}
