import React from 'react'
import GalleryCell from './GalleryCell'

export default function Gallery() {
  return (
    <div className='h-[200vh]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 p-12 gap-6 gap-y-10'>
            <GalleryCell src={"/1.jpg"} />
            <GalleryCell src={"/1.jpg"} />
            <GalleryCell src={"/1.jpg"} />
            <GalleryCell src={"/1.jpg"} />
            <GalleryCell src={"/1.jpg"} />
            <GalleryCell src={"/1.jpg"} />
            <GalleryCell src={"/1.jpg"} />
            <GalleryCell src={"/1.jpg"} />

        </div>
    </div>
  )
}
