import ctl from "@netlify/classnames-template-literals";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Heading, Text } from "../ui";

function SummitGallery({ data }) {
  return (
    <section className={summitGalleryWrapperStyle}>
      {data.map((item, i) => (
        <SummitGalleryPreview
          key={item.sys.id}
          id={item.sys.id}
          title={item.fields.eventName}
          date={item.fields.dateAndTime}
        />
      ))}
    </section>
  );
}
function SummitGalleryPreview({ title, date, id }) {
  const eventDate = new Date(date);

  const dateFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: "full" });

  return (
    <div className="space-y-4 group w-fit mx-auto">
      <div className="overflow-hidden relative w-[310px] m:w-[370px] h-[300px]">
        <Image
          src="/gallery-summit-image.png"
          alt="gallery-summit-image"
          fill
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center m:translate-y-full transition-all group-hover:translate-y-0">
          <Link
            href={`/gallery/${id}`}
            className="capitalize border border-white text-white px-6 rounded-md py-2"
          >
            view pictures
          </Link>
        </div>
      </div>
      <div>
        <Heading variant={"m"} styles={"capitalize font-black"} level={"h4"}>
          {title}
        </Heading>
        <Text styles={"text-gray"}>{dateFormatter.format(eventDate)}</Text>
      </div>
    </div>
  );
}
const summitGalleryWrapperStyle = ctl(`
  w-[92%] 
  max-w-[1500px] 
  mx-auto 
  py-12 
  grid 
  grid-cols-[repeat(auto-fit,_minmax(310px,_1fr))] 
  m:grid-cols-[repeat(auto-fit,_minmax(370px,_1fr))] 
  justify-between 
  gap-5
`);

export default SummitGallery;
