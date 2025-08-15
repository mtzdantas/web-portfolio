interface LinkCardProps {
  link: string;
  image: string;
  textoHover: string;
  defaultText: string;
  setTexto: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
  className?: string;
}

const LinkCard: React.FC<LinkCardProps> = ({
  link,
  image,
  textoHover,
  defaultText,
  setTexto,
  children,
  className,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setTexto(textoHover)}
      onMouseLeave={() => setTexto(defaultText)}
      className={`relative cursor-pointer transition-transform duration-300 hover:-translate-y-10 hover:-rotate-2 ${className}`}
    >
      <img src={image} alt="Fundo da imagem" className="block w-full h-auto" />
      <p className="absolute inset-0 ml-4 mt-4 font-bold text-lg">{children}</p>
    </a>
  );
};

export default LinkCard;