import ctl from "@netlify/classnames-template-literals";
import Image from "next/image";
import React from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Modal from "@/components/modal";
import { Heading } from "@/components/ui";

function Summitgallery() {
  const [firstOpen, setfirstOpen] = React.useState(true);
  return (
    <div>
      <Header />
      <section className="bg-summit-gallery-bg bg-cover bg-no-repeat bg-center py-5 h-[30vh]">
        <div className="grid items-center h-full text-white content-center gap-5 [&>*]:mx-auto [&>*]:text-center">
          <h2 className={mainSectionTextStyle}>gallery</h2>
        </div>
      </section>
      <section className="text-center max-w-[1500px] w-[92%] mx-auto py-8 space-y-3">
        <Heading level={"h3"} variant={"3xl"} styles={"font-black capitalize"}>
          Cybersummit 2023
        </Heading>
        <h5 className="text-xl text-gray">January 1, 2023</h5>
        <p className="capitalize text-[23px]">
          Welcome to our CYBER SUMMIT 2022 Gallery page! Browse our gallery of
          exciting photos and videos featuring expert keynote speakers, engaging
          panel discussions, workshops, and networking sessions connecting
          professionals in their field.
        </p>
      </section>
      <section className="w-[92%] max-w-[1500px] mx-auto py-12 grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] justify-between gap-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            className="relative w-[270px] h-[210px] mx-auto cursor-pointer"
            key={i}
            onClick={() => setfirstOpen(true)}
          >
            <Image
              src="/gallery-summit-image.png"
              alt="gallery-summit-image"
              fill
            />
          </div>
        ))}
      </section>
      <Footer />
      <Modal
        onClose={() => setfirstOpen(false)}
        isOpen={firstOpen}
        images={[
          "https://images.unsplash.com/photo-1684183201449-1033b47827c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1684265709063-2013faebdaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1684323730687-22830e382106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        ]}
      />
    </div>
  );
}
const mainSectionTextStyle = ctl(`
  text-7xl
  font-black
  capitalize
`);
export default Summitgallery;
