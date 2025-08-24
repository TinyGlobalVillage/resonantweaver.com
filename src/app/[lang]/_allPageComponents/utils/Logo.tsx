import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export default function Logo({
  width = 330,
  height = 330,
  className,
}: LogoProps) {
  return (
    <Image
      src="/images/Logo-WC-no_txt.png"
      alt="Site Logo"
      width={width}
      height={height}
      priority
      className={className}
    />
  );
}
