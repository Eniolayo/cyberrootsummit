import Image from "next/image";
import { Icon } from "@iconify/react";

export default function BlogItemHeader() {
  return (
    <section className="w-[80%] pt-16 pb-6 mx-auto space-y-10">
      <h5 className="text-gray uppercase">category</h5>
      <h2 className="text-5xl font-black text-brightNavyBlue max-w-[740px]">
        Protecting Your Business from Cyber Attacks: Tips from a Cybersecurity
        Expert
      </h2>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="relative w-[98px] h-[98px] bg-gray rounded-full">
            {/* <Image src="" alt="" fill/> */}
          </div>
          <div className="space-y-1">
            <h5 className="text-brightNavyBlue text-xl">Author’s name</h5>
            <p className="text-gray">22-04-2023</p>
          </div>
        </div>
        <ul className="flex gap-3">
          {["ic:sharp-facebook", "mdi:twitter", "ph:instagram-logo-fill"].map(
            (item) => (
              <li key={item}>
                <Icon icon={item} color="#146BDF" fontSize={"44px"} />
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
