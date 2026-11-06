import Image, { type ImageProps } from "next/image";

export default function BlackFridayImage({ alt, ...props }: ImageProps) {
  return <Image {...props} alt={alt} unoptimized />;
}
