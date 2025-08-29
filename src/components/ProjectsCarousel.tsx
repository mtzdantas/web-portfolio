import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

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
      {projects.map((proj, index) => (
        <SwiperSlide key={index}>
          <motion.div
            className="shadow-lg w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={proj.image}
              alt={proj.name}
              className={className}
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsCarousel;
