interface FlipCardProps {
  image: string;
  textoHover: string;
  defaultText: string;
  setTexto: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
  className?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  image,
  textoHover,
  defaultText,
  setTexto,
  children,
  className,
}) => {
  
  return (
    <div
      onMouseEnter={() => setTexto(textoHover)}
      onMouseLeave={() => setTexto(defaultText)}
      className={`relative cursor-pointer transition-transform duration-300 hover:-translate-y-10 hover:-rotate-2 ${className}`}
    >
      <img src={image} alt="Fundo da imagem" className="block w-full h-auto" />
      <p className="absolute inset-0 ml-4 mt-4 font-bold text-lg">{children}</p>
    </div>
  );
};

export default FlipCard;