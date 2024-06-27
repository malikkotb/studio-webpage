import Image from "next/image";
export default function GalleryCell({ src }) {
  return (
    <div className="relative h-[50vh]">
      <Image className="rounded-xl" src={src} fill objectFit="cover" alt="Picture of the author" />
    </div>
  );
}
