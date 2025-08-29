interface ScrollCardProps {
  textoHover: string;
  defaultText: string;
  setTexto: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
  className?: string;
  targetId: string;
  textColor?: string;
  isMobile: boolean;
}

const ScrollCard: React.FC<ScrollCardProps> = ({
  textoHover,
  defaultText,
  setTexto,
  children,
  className,
  targetId,
  isMobile,
}) => {
  const handleScroll = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleScroll}
      onMouseEnter={() => !isMobile && setTexto(textoHover)}
      onMouseLeave={() => !isMobile && setTexto(defaultText)}
      className={`cursor-pointer ${className}`}
    >
      <p className={`font-semibold text-md flex gap-2`}>
        {children}
      </p>
    </div>
  );
};

export default ScrollCard;