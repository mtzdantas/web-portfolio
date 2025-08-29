import { motion, AnimatePresence } from "framer-motion";
import LinkCard from "../components/LinkCard";
import type { Dispatch, FC, SetStateAction } from "react";

interface HomeProps {
  defaultText: string;
  texto: string;
  setTexto: Dispatch<SetStateAction<string>>;
  isMobile?: boolean;
}

interface Items {
  name: string;
  target: string;
  textoHover: string;
  icon?: React.ReactNode;
}

const Home: FC<HomeProps> = ({ defaultText, texto, setTexto, isMobile}) => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const contactItens: Items[] = [
    { name: "Linkedin", target: "https://www.linkedin.com/in/mtzdantas/", textoHover: "Conecte-se comigo no LinkedIn e acompanhe minha jornada profissional.", }, 
    { name: "Github", target: "https://github.com/mtzdantas", textoHover: "Acesse meu repositório no GitHub e veja o código por trás dos meus projetos.", },
  ]

  return (
    <div className="h-screen flex flex-col justify-center relative">
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
              isMobile={isMobile}
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
              className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {texto}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Home;