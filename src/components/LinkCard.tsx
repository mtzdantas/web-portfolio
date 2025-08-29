import { ArrowUpRight } from "lucide-react";
interface LinkCardProps {
  link: string;
  textoHover: string;
  defaultText: string;
  setTexto: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
  isMobile: boolean;
  className?: string;
}

const LinkCard: React.FC<LinkCardProps> = ({
  link,
  textoHover,
  defaultText,
  setTexto,
  children,
  isMobile,
  className,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => !isMobile && setTexto(textoHover)}
      onMouseLeave={() => !isMobile && setTexto(defaultText)}
      className={`group flex glass-effect px-4 py-2 shadow-lg ${className}`}
    >
      <p className="font text-md">{children}</p>
      <ArrowUpRight className="text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
    </a>
  );
};

export default LinkCard;