import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  text: string;
}

const timelineData: TimelineItem[] = [
  { year: "2020", title: "Quando a curiosidade virou prática", text: "Desde pequeno sempre gostei de jogos e tecnologia e aos meus 15-16 anos, mesmo sem saber, já tinha começado minha jornada no meio da programação. Em um jogo que eu jogava na época, tinha muito interesse em fazer scripts que automatizavam tarefas repetitivas dentro do jogo, tanto que chegou um período que eu passava mais tempo desenvolvendo do que jogando em si."},

  { year: "2023", title: "A jornada acadêmica começa", text: "Nunca tive dúvida de qual área eu iria seguir e nesse ano, ao terminar o Ensino Médio, não pensei duas vezes em iniciar minha graduação em Sistemas de Informação na UFRN. Cada semestre só reforça minha certeza de que fiz a escolha certa." },

  { year: "2024", title: "De aprendiz a profissional", text: "Além das disciplinas acadêmicas, investi muito no aprendizado autodidata por meio de cursos e imersões (principalmente em Análise de Dados, Programação Web e outras ferramentas necessárias). Nesse período, desenvolvi diversos projetos acadêmicos, pessoais e tive minha primeira experiência como freelancer na área de frontend." },

  { year: "2025", title: "Rumo à carreira de dev", text: "Desde então, venho participando de novos projetos como freelancer, expandindo meus conhecimentos também em backend e atualmente atuo como estagiário em suporte técnico. Estou em busca da minha primeira oportunidade efetiva como desenvolvedor." },
];

export default function About() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="py-24 sm:py-32 relative">
    <h2 className="font-semibold text-3xl xl:text-4xl text-center text-gradient">
      Quem faz a mágica acontecer
    </h2>
    <p className="mt-1 text-center">Toda minha trajetória no mundo da tecnologia.</p>

    <div ref={containerRef} className="relative mt-12">
      <motion.div
        className="absolute left-3 sm:left-1/2 top-0 w-[3px] bg-gradient-to-b from-[#6366f1] via-[#ffffff] to-[#10b981] rounded-full"
        style={{ height: lineHeight, transform: "translateX(-50%)" }}
      />

      {timelineData.map((item, index) => {
        const isLeft = index % 2 === 0
        return (
          <motion.div
            key={index}
            className={`mb-12 flex w-full ${isLeft ? "justify-end pr-8" : "justify-start pl-8"}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.6 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className={`max-w-[240px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] ${isLeft ? "text-right" : "text-left"}`}>
              <p className="mb-4">{item.year}</p>
              <h2 className="text-xl font-semibold mb-1 text-gradient">{item.title}</h2>
              <p className="text-gray-300">{item.text}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  </section>
  );
}
