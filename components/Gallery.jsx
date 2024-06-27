import React from "react";
import GalleryCell from "./GalleryCell";

export default function Gallery() {
  return (
    <div className="-mt-36 grid pt-0 grid-cols-1 sm:grid-cols-2 p-12 gap-6 gap-y-10">
      <GalleryCell src={"/1.jpg"} />
      <GalleryCell src={"/1.jpg"} />
      <GalleryCell src={"/1.jpg"} />
      <GalleryCell src={"/1.jpg"} />
      <GalleryCell src={"/1.jpg"} />
      <GalleryCell src={"/1.jpg"} />
      <GalleryCell src={"/1.jpg"} />
      <GalleryCell src={"/1.jpg"} />
    </div>
  );
}
