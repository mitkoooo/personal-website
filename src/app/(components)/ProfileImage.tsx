"use client";

import Image from "next/image";
import { useState } from "react";

type ProfileImageProps = {
  className?: string;
  src: string;
  alt: string;
  fill?: boolean;
}; /* use `interface` if exporting so that consumers can extend */

const ProfileImage = ({
  className,
  src,
  alt,
}: ProfileImageProps): React.JSX.Element => {
  const [isHover, setIsHover] = useState(false);

  const onHover = () => {
    setIsHover((prev) => !prev);
  };

  return (
    <a
      href="https://www.linkedin.com/in/vadim-mitko-b021772a1/"
      target="_blank"
      className={className}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      <Image
        className={`cursor-pointer rounded-full ${isHover ? "" : "grayscale"}`}
        alt={alt}
        src={src}
        fill
      />
    </a>
  );
};

export default ProfileImage;
