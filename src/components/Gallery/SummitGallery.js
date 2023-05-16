import React from "react";
import Image from "next/image";

function SummitGallery() {
  return (
    <section className="w-[92%] max-w-[1500px] mx-auto py-12 grid grid-cols-[repeat(auto-fit,_minmax(370px,_1fr))] justify-between gap-5">
      {Array.from({ length: 8 }).map((_, i) => (
        <SummitGalleryPreview key={i} />
      ))}
    </section>
  );
}
function SummitGalleryPreview() {
  return (
    <div className="space-y-4 group w-fit mx-auto">
      <div className="overflow-hidden relative w-[370px] h-[300px]">
        <Image
          src="/gallery-summit-image.png"
          alt="gallery-summit-image"
          fill
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center translate-y-full transition-all group-hover:translate-y-0">
          <button className="capitalize border border-white text-white px-6 rounded-md py-2">
            view pictures
          </button>
        </div>
      </div>
      <div className="">
        <h4 className="font-black text-2xl">Cybersummit 2023</h4>
        <p className="text-gray">January 1, 2023</p>
      </div>
    </div>
  );
}

export default SummitGallery;
