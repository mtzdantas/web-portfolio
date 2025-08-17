// components/ProjectsCarousel.tsx
import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Tipagem para os projetos
interface Project {
  name: string;
  image: string;
  link: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
  setTexto: (texto: string) => void;
  defaultText: string;
  className?: string;
  reverse?: boolean;
}

const ProjectsCarousel: FC<ProjectsCarouselProps> = ({ projects, setTexto, defaultText, reverse = false, className }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={24}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection: reverse,
      }}
      speed={8000}
      allowTouchMove={false}
      className={className}
    >
      {projects.map((proj) => (
        <SwiperSlide>
          <a href={proj.link} target="_blank" rel="noopener noreferrer">
            <div className="shadow-lg overflow-hidden w-full h-40 md:h-70 lg:h-90">
              <img
                src={proj.image}
                alt={proj.name}
                className="w-full h-full object-cover transition-all duration-200 grayscale hover:grayscale-0"
                onMouseEnter={() => setTexto(proj.name)}
                onMouseLeave={() => setTexto(defaultText)}
              />
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsCarousel;
