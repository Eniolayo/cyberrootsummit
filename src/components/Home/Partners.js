import React from "react";
import Image from "next/image";

export default function Partners() {
  return (
    <div className="bg-brightNavyBlue py-10 space-y-5 text-white">
      <h3 className="text-center font-bold text-4xl">Partners</h3>
      <div className="flex justify-center items-center gap-36">
        <div className="w-[280px] h-[85px] relative">
          <Image
            src="/comptia_logo.png"
            alt="comptia logo"
            objectFit="contain"
            fill
          />
        </div>
        <div className="w-[200px] relative h-[70px]">
          <Image
            priority
            src="/pecb-logo.svg"
            fill
            objectFit="contain"
            alt="pecb-logo"
          />
        </div>
      </div>
    </div>
  );
}
