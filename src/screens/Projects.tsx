import type { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ArrowUpFromDot, Swords } from "lucide-react";

interface Projects {
  image: string;
  link: string;
}

const projects1: Projects[] = [
  { image: "/Iphone.png", link: "#" },
  { image: "/Iphone.png", link: "#" },
  { image: "/Iphone.png", link: "#" },
  { image: "/Iphone.png", link: "#" },
  { image: "/Iphone.png", link: "#" },
];

const projects2: Projects[] = [
  { image: "/Iphone.png", link: "#" },
  { image: "/Iphone.png", link: "#" },
  { image: "/Iphone.png", link: "#" },
  { image: "/Iphone.png", link: "#" },
  { image: "/Iphone.png", link: "#" },
];

const Projects: FC = () => {
  return (
    <div id="projects" className="flex flex-col justify-between h-screen bg-gray-900 text-white">
      {/* Seta para voltar */}
      <div className="flex items-center justify-center h-18">
        <ArrowUpFromDot 
          className="w-8 h-8 p-1 text-white transform transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:text-black cursor-pointer rounded-xl"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        />
      </div>

      <div>
        {/* Primeiro Carrossel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={3}      
          loop={true}             
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: false,
          }}
          speed={8000}
          allowTouchMove={false}
        >
          {projects1.map((proj) => (
            <SwiperSlide>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <div className="shadow-lg overflow-hidden w-full h-40 md:h-70 lg:h-90">
                  <img src={proj.image} alt="Tela principal do projeto" className="w-full h-full object-cover" />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Segundo Carrossel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={3}      
          loop={true}             
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: true,
          }}
          speed={8000}
          allowTouchMove={false}
          className="mt-6"
        >
          {projects2.map((proj) => (
            <SwiperSlide>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <div className="shadow-lg overflow-hidden w-full h-40 md:h-70 lg:h-90">
                  <img src={proj.image} alt="Tela principal do projeto" className="w-full h-full object-cover" />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center h-18 px-2">
        <p className="flex gap-2"><Swords/> Estamos apenas começando, novos desafios estão por vir.</p>
      </div>
    </div>
  );
};

export default Projects;