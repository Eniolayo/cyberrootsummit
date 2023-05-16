import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ctl from "@netlify/classnames-template-literals";

function Summitgallery() {
  return (
    <div>
      <Header />
      <section className="bg-summit-gallery-bg bg-cover bg-no-repeat bg-center py-5 h-[30vh]">
        <div className="grid items-center h-full text-white content-center gap-5 [&>*]:mx-auto [&>*]:text-center">
          <h2 className={mainSectionTextStyle}>gallery</h2>
        </div>
      </section>
      <section className="text-center max-w-[1500px] w-[92%] mx-auto py-8 space-y-3">
        <h3 className="text-7xl font-black capitalize">Cybersummit 2023</h3>
        <h5 className="text-xl text-gray">January 1, 2023</h5>
        <p className="capitalize text-[23px]">
          Welcome to our <span className="uppercase">Cyber Summit</span> 2022
          Gallery page! Browse our gallery of exciting photos and videos
          featuring expert keynote speakers, engaging panel discussions,
          workshops, and networking sessions connecting professionals in their
          field.
        </p>
      </section>
      <section className="w-[92%] max-w-[1500px] mx-auto py-12 grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] justify-between gap-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div className=" relative w-[270px] h-[210px] mx-auto" key={i}>
            <Image
              src="/gallery-summit-image.png"
              alt="gallery-summit-image"
              fill
            />
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
const mainSectionTextStyle = ctl(`
  text-7xl
  font-black
  capitalize
`);
export default Summitgallery;
