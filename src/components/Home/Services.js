import React from "react";
import Image from "next/image";
import { ServicesItems } from "@/constants/servicesItems";

export default function Services() {
  const [itemPreviewed, setItemPreviewed] = React.useState(ServicesItems[0]);
  return (
    <section className="bg-azureishWhite">
      <div className="w-[92%] max-w-[1500px] mx-auto py-14">
        <div className="text-center">
          <h3 className="text-brightNavyBlue text-4xl font-black">
            What we offer
          </h3>
          <h5 className="text-xl max-w-lg mx-auto capitalize">
            To provide solutions that enable clients to find, fix, stop, and
            ultimately solve cyber security problems{" "}
          </h5>
        </div>
        <div className="flex gap-10 py-10">
          <div className="w-[45%] gap-4 justify-between items-center self-start grid grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))]">
            {ServicesItems.map((item) => (
              <ServiceCard
                key={item.name}
                name={item.name}
                desc={item.desc}
                img={item.image}
              />
            ))}
          </div>
          <div className="flex-1 space-y-6">
            <div className="relative w-full h-[340px]">
              <Image
                src="/vulnerable-preview-img.png"
                alt="vulnerable-preview-img"
                fill
              />
            </div>
            <div className="space-y-1">
              <h5 className="text-3xl font-bold text-brightNavyBlue">
                {itemPreviewed.name}
              </h5>
              <p>{itemPreviewed.desc}</p>
            </div>
            <button className="text-xl bg-brightNavyBlue text-white capitalize px-10 py-3 rounded-m">
              learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  function ServiceCard({ name, desc, img }) {
    return (
      <div className="w-[175px] h-[175px] rounded-lg border-brightNavyBlue mx-auto text-center border bg-white border-primary-denim rounded-xl grid gap-5 py-8 cursor-pointer">
        <div className="w-[50px] h-[50px] relative mx-auto">
          <Image src={img} alt={name} objectFit="contain" fill />
        </div>
        <h4 className="text-base font-semibold">{name}</h4>
        {/* <p className="w-[85%] mx-auto">{desc}</p> */}
      </div>
    );
  }
}
