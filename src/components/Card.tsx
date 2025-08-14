interface CardProps {
  textoHover: string;
  defaultText: string;
  setTexto: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
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
      className={`px-4 py-2 rounded ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;