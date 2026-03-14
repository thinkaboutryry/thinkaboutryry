import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Moon, Sun, ArrowDown, Download, ExternalLink, 
  Mail, Instagram, Linkedin, Dribbble, MoveRight, Layers, 
  PenTool, Monitor, Smartphone, Palette, Grid, Code, 
  CheckCircle2, XCircle, Send, Video, Book, Sparkles, Briefcase, GraduationCap, MessageCircle, ArrowUp
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate, useLocation } from 'react-router';
import { Typewriter } from './typewriter';
import imgCultuBAQ from "figma:asset/490f963ed5a26bb4c141162951137228bbe260a4.png";
import imgDulceScrapCard from 'figma:asset/7d5ff741e929ab010f42f88777f8f909f6ef0b06.png';
import imgEditorialCollection from 'figma:asset/b30fc730ef8341bd38ba55887b68ad606ff82cb8.png';
import imgMagdalena from 'figma:asset/ed7fe8713f3bca8b519140f58608f3754aad20a6.png';
import imgSocialMediaCover from "figma:asset/181017c70fbc20039ebe35061df66212734b9f8b.png";

import userPhoto from 'figma:asset/1acc39d86289a91e40a1838060e46fd41067458d.png';

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.51c0-4.56 3.72-8.28 8.28-8.28 2.22 0 4.3.86 5.87 2.43a8.25 8.25 0 0 1 2.42 5.86c-.01 4.57-3.73 8.28-8.29 8.28zm4.54-6.2c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8 1.01-.15.2-.3.23-.55.1-1.16-.62-2.31-1.33-3.21-2.45-.25-.32-.03-.49.09-.74.12-.25.27-.32.4-.48.13-.17.06-.32 0-.45s-.57-1.38-.78-1.89c-.2-.49-.41-.42-.57-.43-.15 0-.32-.01-.49-.01-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.48-.6 1.69-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z" />
  </svg>
)

// --- Types ---
type Theme = 'light' | 'dark';
type ProjectCategory = 'Todos' | 'Branding' | 'Editorial' | 'UX/UI' | 'Social' | 'Social Media' | 'Diseño Web';

// --- Data ---
const NAV_LINKS = [
  { name: 'Inicio', href: '#home' },
  { name: 'CV', href: '#cv' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' },
];

const SKILLS = [
  'UX/UI', 'Branding', 'Social Media', 'Editorial', 'Diseño Web'
];

const TOOLS = [
  { name: 'Figma', icon: <Palette size={24} /> },
  { name: 'Photoshop', icon: <Layers size={24} /> },
  { name: 'Illustrator', icon: <PenTool size={24} /> },
  { name: 'Indesign', icon: <Book size={24} /> },
  { name: 'Capcut', icon: <Video size={24} /> },
  { name: 'VS Code', icon: <Monitor size={24} /> },
  { name: 'Canva', icon: <Grid size={24} /> },
  { name: 'IA', icon: <Sparkles size={24} /> },
];

const EDUCATION = [
  {
    role: 'Pregrado Diseño Gráfico',
    company: 'Universidad Autónoma del Caribe',
    period: '2022 - Presente',
    desc: ''
  },
  {
    role: 'Tecnólogo Desarrollo Multimedia y Web',
    company: 'Servicio Nacional de Aprendizaje SENA',
    period: '2024 - Presente',
    desc: ''
  },
  {
    role: 'Semillero de Investigación Junior',
    company: 'Universidad Autónoma del Caribe',
    period: '2024',
    desc: ''
  }
];

const EXPERIENCE = [
  {
    role: 'Diseñador Freelance',
    company: 'Dulce Scrap',
    period: '2020 - Presente',
    desc: 'Producción y edición de fotografía y video de producto. Diseño de catálogos, piezas impresas y contenido para Instagram. Redacción de copys y atención directa con clientes y leads.'
  },
  {
    role: 'Diseñador Freelance',
    company: 'Aura María Cakes',
    period: '2025',
    desc: 'Desarrollo de catálogo digital de productos de repostería.'
  },
  {
    role: 'Proyecto Universitario',
    company: 'Periódico Quince/16',
    period: '2024',
    desc: 'Redacción de tres artículos para el periódico del programa de D. Gráfico. Diagramación editorial aplicando jerarquía visual y estructura tipográfica.'
  }
];

const PROJECTS = [
  {
    id: 1,
    title: 'CultuBAQ',
    category: ['UX/UI', 'Branding'],
    image: imgCultuBAQ,
    desc: 'Plataforma web para la agenda cultural de Barranquilla',
    route: '/proyecto/cultubaq'
  },
  {
    id: 2,
    title: 'Dulce Scrap',
    category: ['UX/UI', 'IA'],
    image: imgDulceScrapCard,
    desc: 'Diseño de E-commerce y sistema de diseño implementando IA',
    route: '/proyecto/dulcescrap'
  },
  {
    id: 3,
    title: 'Colección Editorial',
    category: ['Editorial', 'Ilustración', 'IA'],
    image: imgEditorialCollection,
    desc: 'Exploración de layout, retículas y tipografía para publicaciones conceptuales',
    route: '/proyecto/editorial'
  },
  {
    id: 4,
    title: 'La Magdalena',
    category: ['Branding'],
    image: imgMagdalena,
    desc: 'Identidad visual y branding para centro logístico con servicios de hotel, restaurante y parking',
    route: '/proyecto/magdalena'
  },
  {
    id: 5,
    title: 'Colección de Redes Sociales',
    category: ['Social Media', 'IA'],
    image: imgSocialMediaCover,
    desc: 'Diseño de contenido digital, feed para Instagram y estrategias de comunicación visual',
    route: '/proyecto/redes-sociales'
  }
];

// --- Components ---

const Card3D = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full h-[420px] md:h-[600px] lg:h-[700px] flex justify-center perspective-1000 z-20 mt-0 md:mt-10 overflow-visible">
      <motion.div
        drag={!isMobile}
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.4}
        animate={isMobile ? { rotateZ: 0 } : { rotateZ: [-3, 3, -3] }}
        transition={isMobile ? { type: "spring", stiffness: 300, damping: 20 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: 'top center', touchAction: isMobile ? 'none' : 'auto' }}
        className={`relative flex flex-col items-center scale-[0.85] md:scale-[1.15] lg:scale-[1.35] translate-y-24 md:translate-y-12 lg:translate-y-12 ${isMobile ? '' : 'cursor-grab active:cursor-grabbing'}`}
      >
        {/* Straps Desktop */}
        <div className="hidden md:flex absolute top-[-260px] w-[80px] h-[280px] justify-between z-10 pointer-events-none">
          <div className="w-[25px] h-[280px] bg-black dark:bg-white shadow-[inset_0_0_5px_rgba(0,0,0,0.3)] dark:shadow-[inset_0_0_5px_rgba(255,255,255,0.3)] transform rotate-[10deg] translate-x-[25px]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(128,128,128,0.2) 2px, rgba(128,128,128,0.2) 4px)' }}></div>
          <div className="w-[25px] h-[280px] bg-black dark:bg-white shadow-[inset_0_0_5px_rgba(0,0,0,0.3)] dark:shadow-[inset_0_0_5px_rgba(255,255,255,0.3)] transform rotate-[-10deg] translate-x-[-25px]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(128,128,128,0.2) 2px, rgba(128,128,128,0.2) 4px)' }}></div>
        </div>

        {/* Straps Mobile */}
        <div className="flex md:hidden absolute bottom-[390px] w-[80px] h-[800px] justify-between z-10 pointer-events-none">
          <div className="w-[25px] h-full bg-black dark:bg-white shadow-[inset_0_0_5px_rgba(0,0,0,0.3)] dark:shadow-[inset_0_0_5px_rgba(255,255,255,0.3)] transform origin-bottom rotate-[8deg] translate-x-[15px]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(128,128,128,0.2) 2px, rgba(128,128,128,0.2) 4px)' }}></div>
          <div className="w-[25px] h-full bg-black dark:bg-white shadow-[inset_0_0_5px_rgba(0,0,0,0.3)] dark:shadow-[inset_0_0_5px_rgba(255,255,255,0.3)] transform origin-bottom rotate-[-8deg] translate-x-[-15px]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(128,128,128,0.2) 2px, rgba(128,128,128,0.2) 4px)' }}></div>
        </div>

        {/* ID Card */}
        <div className="w-[280px] h-[400px] bg-gradient-to-br from-[#4A90E2] to-[#003366] rounded-xl p-5 box-border flex flex-col items-center shadow-2xl relative z-20 mt-[-20px]">
          {/* Hole for strap */}
          <div className="w-[50px] h-[12px] bg-transparent border-[3px] border-[#e0e0e0] rounded-[10px] mb-5 shadow-inner"></div>

          {/* Photo area */}
          <div className="w-full h-[200px] bg-white rounded-lg mb-5 overflow-hidden flex items-center justify-center">
            <ImageWithFallback src={userPhoto} className="w-full h-full object-cover" alt="Ryder Barrios" />
          </div>

          {/* Main Text */}
          <div className="text-white text-center text-lg font-bold leading-tight mb-[15px] drop-shadow-md">
            ¡ESTOY LISTO PARA<br/>
            DESBLOQUEAR TODO<br/>
            MI POTENCIAL!
          </div>

          {/* Bottom Tag */}
          <div className="text-white text-sm border-2 border-white rounded-full px-5 py-1 font-bold">
            @thinkaboutryry.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Scroll To Top Button ---
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      let visible = window.scrollY > 300;
      const footer = document.querySelector('footer');
      if (footer && visible) {
        const footerTop = footer.getBoundingClientRect().top;
        if (footerTop <= window.innerHeight + 10) {
          visible = false;
        }
      }
      setIsVisible(visible);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-6 md:bottom-12 md:right-10 z-[150] p-3 bg-black/10 dark:bg-white/10 backdrop-blur-md text-neutral-800 dark:text-neutral-200 border border-black/10 dark:border-white/10 rounded-full shadow-sm hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-500 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Volver arriba"
    >
      <ArrowUp size={20} />
    </button>
  );
}

// --- Main Portfolio Home Component ---

export default function PortfolioHome() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('portfolio-theme') as Theme) || 'dark';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<ProjectCategory>('Todos');
  const navigate = useNavigate();
  const location = useLocation();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50); 
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const filteredProjects = projectFilter === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => Array.isArray(p.category) ? p.category.includes(projectFilter) : p.category === projectFilter);

  const handleProjectClick = (project: typeof PROJECTS[0]) => {
    if (project.route) {
      navigate(project.route);
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-500 ${theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-neutral-50 text-neutral-900'}`}>
      <ScrollToTop />
      
      {/* --- Header --- */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-opacity-70 dark:bg-neutral-950/70 bg-white/70 border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300">
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-xl md:text-2xl font-bold tracking-tighter hover:text-blue-500 transition-colors lowercase">thinkaboutryry.</a>
        
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-sm font-medium hover:text-blue-500 transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="p-2">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(true)} className="p-2">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-white dark:bg-neutral-950 flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 items-center justify-center flex-1">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    scrollToSection(e, link.href);
                  }}
                  className="text-3xl font-bold hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="text-center text-sm text-neutral-500 dark:text-neutral-400 pb-8">© 2026 thinkaboutryry. Todos los derechos reservados.</div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* --- Hero Section --- */}
        <section id="home" className="min-h-screen flex items-center px-6 md:px-20 pt-28 md:pt-20 pb-12 md:pb-20 overflow-hidden relative">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between z-10">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-6 md:mt-0 md:pl-4">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
                 className="flex flex-col items-center md:items-start w-full"
              >
                <h2 className="text-2xl md:text-3xl font-light text-neutral-500 dark:text-neutral-400 mb-2">
                  Bienvenidos a mi
                </h2>
                
                <div className="flex flex-row flex-nowrap items-baseline justify-center md:justify-start w-full mb-8">
                  <span className="text-7xl sm:text-8xl md:text-9xl font-serif italic text-neutral-900 dark:text-white pr-1 drop-shadow-sm dark:drop-shadow-none">P</span>
                  <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tight mt-0">ortfolio</span>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12 w-full">
                {SKILLS.map((tag, i) => (
                   <span key={i} className="px-4 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium hover:border-blue-500 hover:text-blue-500 transition-colors cursor-default">
                     {tag}
                   </span>
                ))}
              </div>
              <motion.a 
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-lg items-center gap-3 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                Explorar Proyectos <MoveRight size={20} />
              </motion.a>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center items-center h-full z-10">
             <Card3D />
          </div>
        </div>

        <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex absolute bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 opacity-50"
          >
            <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center p-1">
              <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
            </div>
          </motion.div>
        </section>

        {/* --- CV Section --- */}
        <section id="cv" className="py-24 px-6 md:px-20 bg-neutral-100 dark:bg-neutral-900/50">
           <div className="max-w-6xl mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-16 text-center md:text-left">
                <div>
                   <h3 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">Mi Trayectoria</h3>
                   <h2 className="text-4xl md:text-5xl font-bold">Curriculum Visual</h2>
                </div>
                <motion.a 
                   href="https://drive.google.com/file/d/1uHVhoqIYeYMcI5mAUdE6LDFNcZVATe5z/view?usp=sharing"
                   target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ scale: 1.05 }}
                   className="mt-6 md:mt-0 flex items-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group"
                >
                  <Download size={18} />
                  <span>Visualizar CV (PDF)</span>
                </motion.a>
             </div>

             {/* Desktop View */}
             <div className="hidden md:flex gap-12 items-stretch">
               {/* Left Column Desktop */}
               <div className="w-1/2 flex flex-col gap-12">
                 <div>
                   <h4 className="text-2xl font-bold mb-8 flex items-center justify-center md:justify-start gap-3">
                     <span className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400"><Briefcase size={24} /></span>
                     Experiencia
                   </h4>
                   <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-3 space-y-12 pb-12 md:pb-0">
                      {EXPERIENCE.map((job, index) => (
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          viewport={{ once: true }}
                          key={index} 
                          className="relative pl-8"
                        >
                          <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-neutral-900"></span>
                          <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-1 block">{job.period}</span>
                          <h5 className="text-xl font-bold dark:text-white">{job.role}</h5>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{job.company}</p>
                          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{job.desc}</p>
                        </motion.div>
                      ))}
                   </div>
                 </div>

                 <div>
                   <h4 className="text-2xl font-bold mb-8 flex items-center justify-center md:justify-start gap-3">
                     <span className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400"><Monitor size={24} /></span>
                     Habilidades
                   </h4>
                   <div className="flex flex-wrap justify-center md:justify-start gap-2">
                     {SKILLS.map((skill, i) => (
                       <span key={i} className="px-3 py-1.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-sm hover:border-blue-500 transition-colors cursor-default">
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>

               {/* Right Column Desktop */}
               <div className="w-1/2 flex flex-col gap-12">
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-2xl font-bold mb-8 flex items-center justify-center md:justify-start gap-3">
                      <span className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400"><GraduationCap size={24} /></span>
                      Educación
                    </h4>
                    <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-3 flex-1 flex flex-col justify-between py-1">
                       {EDUCATION.map((edu, index) => (
                         <motion.div 
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: index * 0.2 }}
                           viewport={{ once: true }}
                           key={index} 
                           className="relative pl-8"
                         >
                           <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-600 dark:bg-orange-400 border-4 border-white dark:border-neutral-900"></span>
                           <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-1 block">{edu.period}</span>
                           <h5 className="text-xl font-bold dark:text-white">{edu.role}</h5>
                           <p className="text-orange-600 dark:text-orange-400 font-medium mb-2">{edu.company}</p>
                         </motion.div>
                       ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold mb-8 flex items-center justify-center md:justify-start gap-3">
                      <span className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600"><Code size={24} /></span>
                      Herramientas
                    </h4>
                    <div className="grid grid-cols-4 gap-3">
                      {TOOLS.map((tool, i) => (
                        <motion.div 
                           key={i}
                           whileHover={{ y: -3 }}
                           className="flex flex-col items-center justify-center gap-1.5 p-2 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 text-center"
                        >
                           <div className="text-neutral-700 dark:text-neutral-300 flex items-center justify-center scale-100">{tool.icon}</div>
                           <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-wider leading-tight w-full truncate mt-1">{tool.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
               </div>
             </div>

             {/* Mobile View */}
             <div className="flex flex-col gap-12 md:hidden">
                 <div>
                   <h4 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
                     <span className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400"><Briefcase size={24} /></span>
                     Experiencia
                   </h4>
                   <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-3 space-y-12">
                      {EXPERIENCE.map((job, index) => (
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          viewport={{ once: true }}
                          key={index} 
                          className="relative pl-8"
                        >
                          <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-neutral-900"></span>
                          <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-1 block">{job.period}</span>
                          <h5 className="text-xl font-bold dark:text-white">{job.role}</h5>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{job.company}</p>
                          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{job.desc}</p>
                        </motion.div>
                      ))}
                   </div>
                 </div>

                  <div>
                    <h4 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
                      <span className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400"><GraduationCap size={24} /></span>
                      Educación
                    </h4>
                    <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-3 space-y-8">
                       {EDUCATION.map((edu, index) => (
                         <motion.div 
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: index * 0.2 }}
                           viewport={{ once: true }}
                           key={index} 
                           className="relative pl-8"
                         >
                           <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-600 dark:bg-orange-400 border-4 border-white dark:border-neutral-900"></span>
                           <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-1 block">{edu.period}</span>
                           <h5 className="text-xl font-bold dark:text-white">{edu.role}</h5>
                           <p className="text-orange-600 dark:text-orange-400 font-medium mb-2">{edu.company}</p>
                         </motion.div>
                       ))}
                    </div>
                  </div>

                 <div>
                   <h4 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
                     <span className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400"><Monitor size={24} /></span>
                     Habilidades
                   </h4>
                   <div className="flex flex-wrap justify-center gap-2">
                     {SKILLS.map((skill, i) => (
                       <span key={i} className="px-3 py-1.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-sm transition-colors cursor-default">
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>

                  <div>
                    <h4 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
                      <span className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600"><Code size={24} /></span>
                      Herramientas
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {TOOLS.map((tool, i) => (
                        <motion.div 
                           key={i}
                           className="flex flex-col items-center justify-center gap-2 p-3 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 aspect-square text-center"
                        >
                           <div className="text-neutral-700 dark:text-neutral-300 flex items-center justify-center">{tool.icon}</div>
                           <span className="text-[9px] uppercase font-bold tracking-wider leading-tight w-full truncate">{tool.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
             </div>
           </div>
        </section>

        {/* --- Infinite Marquee --- */}
        <div className="py-12 bg-blue-600 overflow-hidden relative rotate-1 scale-105 transform origin-left">
           <motion.div 
             animate={{ x: [0, -1000] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="flex items-center gap-12 whitespace-nowrap"
           >
             {[...SKILLS, ...SKILLS, ...SKILLS].map((item, i) => (
               <div key={i} className="flex items-center gap-4 text-white/90 text-4xl font-bold uppercase tracking-tighter opacity-80 hover:opacity-100 transition-opacity">
                 {item} <span className="text-blue-900 text-2xl">•</span>
               </div>
             ))}
           </motion.div>
        </div>

        {/* --- About Section --- */}
        <section id="about" className="py-32 px-6 md:px-20 text-center">
          <div className="max-w-[1000px] mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                <span className="text-6xl md:text-8xl font-serif italic pr-1 font-normal align-baseline">D</span>iseño con <span className="text-6xl md:text-8xl font-serif italic pr-1 font-normal align-baseline">P</span>ropósito.
              </h2>
              <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-12 max-w-[950px] mx-auto">
                Soy Ryder Barrios, <span className="font-bold text-neutral-900 dark:text-white">diseñador gráfico en formación</span> con enfoque en UX/UI y contenido visual digital. Trabajo en diseñar interfaces, sistemas visuales y piezas para redes sociales, basadas en la <span className="font-bold text-neutral-900 dark:text-white cursor-pointer hover:underline decoration-blue-500 underline-offset-4">investigación, análisis del usuario</span> y <span className="font-bold text-neutral-900 dark:text-white cursor-pointer hover:underline decoration-purple-500 underline-offset-4">objetivos de comunicación</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform">Ver mis trabajos</a>
                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="px-8 py-4 border border-neutral-300 dark:border-neutral-700 rounded-full font-bold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">Hablemos</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-24 px-6 md:px-20 bg-neutral-100 dark:bg-neutral-900/30">
           <div className="max-w-7xl mx-auto">
             <div className="mb-12 flex flex-col xl:flex-row justify-between items-center xl:items-end gap-6 text-center xl:text-left">
                <div>
                  <h3 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">Portafolio</h3>
                  <h2 className="text-4xl font-bold">Proyectos Seleccionados</h2>
                </div>
                
                <div className="flex flex-wrap justify-center xl:justify-end gap-2">
                  {['Todos', 'UX/UI', 'Branding', 'Social Media', 'Editorial', 'Diseño Web'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setProjectFilter(cat as ProjectCategory)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        projectFilter === cat 
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                          : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
             </div>

             <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
               <AnimatePresence mode="popLayout">
                 {filteredProjects.length > 0 ? (
                   filteredProjects.map((project) => (
                     <motion.div
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.95 }}
                       transition={{ duration: 0.3, ease: "easeInOut" }}
                       key={project.id}
                       onClick={() => handleProjectClick(project)}
                       className={`relative bg-white dark:bg-neutral-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${project.route ? 'cursor-pointer' : 'cursor-default'}`}
                     >
                       <div className="group aspect-[4/3] overflow-hidden relative">
                         <ImageWithFallback 
                           src={project.image} 
                           alt={project.title}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button className="px-6 py-3 bg-white text-black rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              Ver Proyecto
                            </button>
                         </div>
                       </div>
                       <div className="p-6">
                         <div className="flex justify-between items-center mb-2">
                           <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{Array.isArray(project.category) ? project.category.join(' • ') : project.category}</span>
                           <div className="p-2 bg-neutral-100 dark:bg-neutral-700 rounded-full transition-colors">
                             <ExternalLink size={16} />
                           </div>
                         </div>
                         <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                         <p className="text-neutral-500 dark:text-neutral-400">{project.desc}</p>
                       </div>
                     </motion.div>
                   ))
                 ) : (
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     className="col-span-1 md:col-span-2 flex flex-col items-center justify-center py-20 px-6 text-center bg-white dark:bg-neutral-800 rounded-3xl shadow-sm border border-dashed border-neutral-200 dark:border-neutral-700"
                   >
                     <div className="w-16 h-16 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                       <Code size={32} />
                     </div>
                     <h3 className="text-2xl font-bold mb-3">¡Próximamente!</h3>
                     <p className="text-neutral-500 dark:text-neutral-400 max-w-md">
                       Actualmente estoy desarrollando nuevos proyectos de {projectFilter} que pronto estarán disponibles en este espacio. ¡Mantente atento!
                     </p>
                   </motion.div>
                 )}
               </AnimatePresence>
             </motion.div>
           </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-24 px-6 md:px-20 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
           <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
             
             <div className="w-full flex flex-col items-center">
               <div className="text-4xl md:text-5xl flex flex-wrap items-center justify-center mb-6">
                 <span className="flex items-center gap-3">
                   Estoy listo 
                   <picture>
                     <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f636_200d_1f32b_fe0f/512.webp" type="image/webp" />
                     <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f636_200d_1f32b_fe0f/512.gif" alt="😶‍🌫️" width="56" height="56" className="inline-block mt-[-5px]" />
                   </picture>
                   para 
                 </span>
                 <Typewriter
                   text={[
                     "colaborar",
                     "crear",
                     "diseñar",
                     "innovar",
                     "transformar ideas"
                   ]}
                   speed={70}
                   className="text-blue-600 dark:text-blue-400 ml-3"
                   waitTime={1500}
                   deleteSpeed={40}
                   cursorChar="_"
                 />
               </div>
               
               <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-12 leading-relaxed max-w-2xl">
                 Actualmente disponible para proyectos freelance y colaboraciones. Si tienes una idea o simplemente quieres saludar, envíame un mensaje.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-8 w-full max-w-2xl">
                 {/* Contáctame Column */}
                 <div className="flex flex-col items-center">
                   <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-neutral-500">Contáctame</h4>
                   <div className="flex items-center justify-center gap-4 md:gap-6">
                     {[
                       { icon: <Mail size={22}/>, link: 'mailto:ryderjbarrios@gmail.com', label: 'Email' },
                       { icon: <Linkedin size={22}/>, link: 'https://www.linkedin.com/in/ryder-jose-barrios-arias-8a5703312/overlay/about-this-profile/', label: 'LinkedIn' },
                       { icon: <WhatsAppIcon size={22} className="scale-[1.1]"/>, link: 'https://wa.me/573043713485', label: 'WhatsApp' },
                       { icon: <Instagram size={22}/>, link: 'https://www.instagram.com/ryderjbarrios_/', label: 'Instagram' }
                     ].map((contact, i) => (
                       <a key={i} href={contact.link} target="_blank" rel="noreferrer" className="w-12 h-12 border border-neutral-200 dark:border-neutral-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group relative">
                         {contact.icon}
                         <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{contact.label}</span>
                       </a>
                     ))}
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </section>

        {/* --- Footer --- */}
        <footer className="py-8 text-center border-t border-neutral-200 dark:border-neutral-900 text-neutral-500 text-sm flex flex-col items-center justify-center gap-1">
           <p>Todos los derechos reservados. © 2026 | Diseñado por <a href="https://www.instagram.com/ryderjbarrios_/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors font-medium">@thinkaboutryry</a>.</p>
           <p className="mt-1 text-xs opacity-70">Diseñando ideas que inspiran, conectan y comunican.</p>
        </footer>
      </main>
    </div>
  );
}