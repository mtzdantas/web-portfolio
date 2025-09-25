import ProjectsCarousel from "../components/ProjectsCarousel";

interface Projects {
  name: string;
  image: string;
}

export default function Projects() {

  const projects: Projects[] = [
    { name: "Futuramente terá algum projeto aqui.", image: "/embreve.png",},
    { name: "Futuramente terá algum projeto aqui.", image: "/embreve.png",},
    { name: "Futuramente terá algum projeto aqui.", image: "/embreve.png",},
    { name: "Futuramente terá algum projeto aqui.", image: "/embreve.png",},
  ];

  return (
    <section id="projects" className="flex flex-col py-24 sm:py-32 relative">
      {/* Detalhes Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-1/2 w-86 h-86 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-110 h-110 bg-emerald-600 rounded-full blur-3xl"></div>
      </div>

      <h2 className="font-semibold text-3xl xl:text-4xl">Experimentos que deram certo</h2>
      <p className="mt-1">Alguns projetos que transformei em realidade.</p>

      <div className="mt-8">
        <ProjectsCarousel 
          projects={projects}
          className="pt-4 relative transition-transform duration-500 ease-in-out hover:-translate-y-4"
          speed={7000}
        />

        <ProjectsCarousel 
          projects={projects}
          className="mt-6 pb-4 relative transition-transform duration-500 ease-in-out hover:translate-y-4"
          speed={5000}
        />
      </div>
    </section>
  );
};