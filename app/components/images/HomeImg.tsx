import Image from "next/image";

export default function HomeImg() {
  return (
    <Image
      src="/home-img.png"
      alt="Picture of the author"
      width={800}
      height={1000}
      style={{ borderRadius: '50px' }} 
    />
  );
}

