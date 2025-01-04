import Image from "next/image";

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
  return (
    <a
      href="https://www.linkedin.com/in/vadim-mitko-b021772a1/"
      target="_blank"
      className={className}
    >
      <Image
        className="cursor-pointer rounded-full grayscale hover:grayscale-0"
        alt={alt}
        src={src}
        fill
        unoptimized
        priority
      />
    </a>
  );
};

export default ProfileImage;
