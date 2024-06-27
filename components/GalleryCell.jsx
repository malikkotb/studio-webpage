import Image from "next/image";
export default function GalleryCell({ src }) {
  return (
    <div className="relative border-red h-[50vh] rounded-xl">
      <Image src={src} fill objectFit="cover" alt="Picture of the author" />
    </div>
  );
}
