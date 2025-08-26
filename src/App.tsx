import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LinkCard from "./components/LinkCard";
import ScrollCard from "./components/ScrollCard";
import Projects from "./screens/Projects";
import { Flame, Lightbulb, BriefcaseBusiness } from "lucide-react";

interface Items {
  name: string;
  target: string;
  textoHover: string;
  icon?: React.ReactNode;
}

export default function App() {
  const defaultText ="Olá! Sou Mateus, um desenvolvedor apaixonado por resolver problemas com linhas de código.";
  const [texto, setTexto] = useState(defaultText);
  
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const navitens: Items[] = [
    { icon: <Flame/> , name: "Skills", target: "skills", textoHover: "Tecnologias e ferramentas que domino e faço uso no meu dia a dia.", },
    { icon: <Lightbulb/> , name: "Experiências", target: "experiences", textoHover: "Toda minha trajétoria que me trouxe até aqui e me tornou quem eu sou hoje.", },
    { icon: <BriefcaseBusiness/> , name: "Projetos", target: "projects", textoHover: "Projetos que desenvolvi, desafios que superei e soluções que criei.",},
  ];

  const contactItens: Items[] = [
    { name: "Linkedin", target: "https://www.linkedin.com/in/mtzdantas/", textoHover: "Conecte-se comigo no LinkedIn e acompanhe minha jornada profissional.", }, 
    { name: "Github", target: "https://github.com/mtzdantas", textoHover: "Acesse meu repositório no GitHub e veja o código por trás dos meus projetos.", },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-fit top-4 left-1/2 -translate-x-1/2 z-50 flex glass-effect px-8 py-4 shadow-lg items-center gap-8 text-gradient rounded-full">
        {navitens.map((item) => (
          <ScrollCard
            key={item.name}
            targetId={item.target}
            textoHover={item.textoHover}
            defaultText={defaultText}
            setTexto={setTexto}
          >
            {item.icon}
            {item.name} 
          </ScrollCard>
        ))}
      </nav>

      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-screen flex flex-col justify-center">

        {/* Detalhes Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-col">

          {/* Contato */}
          <div className="flex gap-4 mb-8">
            {contactItens.map((item) => (
              <LinkCard
                key={item.name}
                link={item.target}
                textoHover={item.textoHover}
                defaultText={defaultText}
                setTexto={setTexto}
              >
                {item.name}
              </LinkCard>
            ))}
          </div>

          {/* Texto Animado */}
          <div className="min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem] lg:min-h-[14rem] xl:min-h-[16rem]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={texto}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.2 }}
                className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              >
                {texto}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Projects />
    </>
  );
}
