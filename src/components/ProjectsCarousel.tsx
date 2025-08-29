// components/ProjectsCarousel.tsx
import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Tipagem para os projetos
interface Project {
  name: string;
  image: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
  className?: string;
  reverse?: boolean;
  speed?: number;
}

const ProjectsCarousel: FC<ProjectsCarouselProps> = ({ projects, speed, className }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={24}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      speed={speed}
      allowTouchMove={false}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {projects.map((proj) => (
        <SwiperSlide>
          <div className="shadow-lg w-full">
            <img
              src={proj.image}
              alt={proj.name}
              className={className}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsCarousel;
