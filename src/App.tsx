import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./components/Card";

export default function App() {
  const defaultText ="Olá! Sou Mateus, um desenvolvedor apaixonado por resolver problemas com linhas de código.";
  const [texto, setTexto] = useState(defaultText);

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 min-h-screen relative flex flex-col">
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

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex">
        <Card
          textoHover="Sou especialista em Flutter e APIs"
          defaultText={defaultText}
          setTexto={setTexto}
          className="bg-blue-500 text-white"
        >
          Flutter
        </Card>

        <Card
          textoHover="Gosto de trabalhar com backend e FastAPI"
          defaultText={defaultText}
          setTexto={setTexto}
          className="bg-green-500 text-white"
        >
          Backend
        </Card>
      </div>
    </div>
  );
}
