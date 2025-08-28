import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsCarousel from "../components/ProjectsCarousel";

interface Projects {
  name: string;
  image: string;
  link: string;
}

export default function Projects() {
  const defaultText ="VOLTAR PARA PÁGINA INICIAL";
  const [texto, setTexto] = useState(defaultText);

  const projects: Projects[] = [
    { name: "SITE DE LANÇAMENTO DO IPHONE 16", image: "/Iphone.png", link: "#" },
    { name: "SITE DE LANÇAMENTO DO IPHONE 16", image: "/Iphone.png", link: "#" },
    { name: "SITE DE LANÇAMENTO DO IPHONE 16", image: "/Iphone.png", link: "#" },
    { name: "SITE DE LANÇAMENTO DO IPHONE 16", image: "/Iphone.png", link: "#" },
  ];

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <section id="projects" className="flex flex-col justify-center h-screen bg-gradient-to-r from-[#222222] to-[#121212]  text-white relative">
      <AnimatePresence mode="wait">
        <motion.p
          key={texto}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.2 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 font-bold cursor-pointer"
        >
          {texto}
        </motion.p>
      </AnimatePresence>

      <div>
        <ProjectsCarousel 
          projects={projects} 
          setTexto={setTexto} 
          defaultText={defaultText}
        />
      </div>
    </section>
  );
};