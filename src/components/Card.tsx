import { useState } from "react";
import { isMobile } from "react-device-detect";

interface CardProps {
  src: string;
  title: string;
  details: string;
}

const Card = ({ src, title, details }: CardProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickCard = () => {
    if (!isClicked) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  return (
    <div
      onClick={onClickCard}
      className="relative group flex flex-col max-w-[20rem] h-[30rem] overflow-hidden cursor-pointer text-center justify-center items-center rounded-md"
    >
      <img
        className="absolute inset-0 object-none scale-125 blur-md w-full h-full"
        src={src}
        alt={title}
      />
      <h2
        className={`absolute top-0 opacity-0 w-full px-1 py-3 bg-gradient-to-b from-background to-transparent group-hover:opacity-100 ${isMobile ? `${isClicked ? "opacity-100" : ""}` : ""} transition-all duration-300 ease-in-out`}
      >
        {title}
      </h2>
      <img className="absolute inset-0object-contain" src={src} alt={title} />
      <p
        className={`absolute bottom-0 opacity-0 w-full  px-1 py-3 bg-gradient-to-t from-background to-transparent group-hover:opacity-100 ${isMobile ? `${isClicked ? "opacity-100" : ""}` : ""} transition-all duration-300 ease-in-out`}
      >
        {details}
      </p>
    </div>
  );
};

export default Card;
