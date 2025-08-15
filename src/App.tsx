import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrickWall, Link } from "lucide-react";
import LinkCard from "./components/LinkCard";
import FlipCard from "./components/FlipCard";
import ScrollCard from "./components/ScrollCard";
import Projects from "./screens/Projects";

export default function App() {
  const defaultText ="Olá! Sou Mateus, um desenvolvedor apaixonado por resolver problemas com linhas de código.";
  const [texto, setTexto] = useState(defaultText);
  const [isMobile, setIsMobile] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <p className="text-xl font-bold">
          A VERSÃO MOBILE DO NOSSO SITE AINDA ESTÁ EM CONSTRUÇÃO.
        </p>
        <BrickWall className="w-16 h-16 text-gray-400 mt-4" />
      </div>
    );
  }

  return (
    <>
      <div className="px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-8 lg:px-10 lg:pt-10 xl:px-12 xl:pt-12 min-h-screen flex flex-col relative overflow-hidden">
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

        <div className="absolute bottom-[-20px] flex">

          <FlipCard
            image="/Experience.png"
            textoHover="Toda minha trajétoria que me trouxe até aqui e me tornou quem eu sou hoje."
            defaultText={defaultText}
            setTexto={setTexto}
            className="text-black"
          >
            EXPERIÊNCIAS
          </FlipCard>
          
          <FlipCard
            image="/Skills.png"
            textoHover="Tecnologias e ferramentas que domino e faço uso no meu dia a dia."
            defaultText={defaultText}
            setTexto={setTexto}
            className="-ml-36 text-white"
          >
            SKILLS
          </FlipCard>

          <ScrollCard
            targetId="projects"
            image="/Projects.png"
            textoHover="Projetos que desenvolvi, desafios que superei e soluções que criei."
            defaultText={defaultText}
            setTexto={setTexto}
            className="-ml-36 text-white"
          >
            PROJETOS
          </ScrollCard>

          <LinkCard
            link="https://github.com/mtzdantas"
            image="/Github.png"
            textoHover="Acesse meu repositório no GitHub e veja o código por trás dos meus projetos."
            defaultText={defaultText}
            setTexto={setTexto}
            className="-ml-36 text-white"
          >
            GITHUB
          </LinkCard>
        </div>
      </div>

      <Projects />
    </>
  );
}
