import { useState, useEffect } from "react";
import ScrollCard from "./components/ScrollCard";
import { Flame, Clapperboard, BriefcaseBusiness, Send} from "lucide-react";
import About from "./screens/About";
import Skills from "./screens/Skills";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import Home from "./screens/Home";

interface Items {
  name: string;
  target: string;
  textoHover: string;
  icon?: React.ReactNode;
}

export default function App() {
  const defaultText ="Olá! Sou Mateus, um desenvolvedor apaixonado por resolver problemas com linhas de código.";
  const [isMobile, setIsMobile] = useState(false);
  const [texto, setTexto] = useState(defaultText);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navitens: Items[] = [
    { icon: <Clapperboard/> , name: "Sobre", target: "about", textoHover: "Toda minha trajétoria que me trouxe até aqui e me tornou quem eu sou hoje.", },
    { icon: <Flame/> , name: "Skills", target: "skills", textoHover: "Tecnologias e ferramentas que domino e faço uso no meu dia a dia.", },
    { icon: <BriefcaseBusiness/> , name: "Projetos", target: "projects", textoHover: "Projetos que desenvolvi, desafios que superei e soluções que criei.",},
    { icon: <Send/> , name: "Contato", target: "contact", textoHover: "Ficou interessado? Fala comigo no whats ou me manda um e-mail!",},
  ];

  return (
    <div className="relative">
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex flex-col max-w-[1600px] mx-auto overflow-clip sm:overflow-visible">

        {/* Navbar */}
        <nav className="fixed w-fit justify-center top-4 left-1/2 -translate-x-1/2 z-50 flex items-center glass-effect px-6 sm:px-8 py-3 sm:py-4 shadow-lg gap-8 text-gradient rounded-full">
          {navitens.map((item) => (
            <ScrollCard
              key={item.name}
              targetId={item.target}
              textoHover={item.textoHover}
              defaultText={defaultText}
              setTexto={setTexto}
            >
              {item.icon}
              {!isMobile && item.name}
            </ScrollCard>
          ))}
        </nav>

        {/* Sections */}
        <Home
          defaultText={defaultText}
          texto={texto}
          setTexto={setTexto}
        />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
      <footer className="w-full p-6">
        <p className="text-sm text-center">&copy; {new Date().getFullYear()} Mateus Dantas</p>
      </footer>
    </div>
  );
}
