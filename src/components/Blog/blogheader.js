import Image from "next/image";

export default function BlogHeader() {
  return (
    <section className="flex mt-20 w-[92%] max-w-[1500px] mx-auto gap-10 items-center mb-5">
      <div className="relative h-[450px] w-[58%]">
        <Image
          src="/blog-img.png"
          alt="blog-img"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl text-brightNavyBlue leading-8">
          Protecting Your Business from Cyber Attacks: Tips from a Cybersecurity
          Expert
        </h3>
        <p className="text-gray">
          In today's digital age, cyber attacks are becoming more sophisticated
          and frequent, making it cruc...
        </p>
        <p className="text-gray">22-04-2023</p>
      </div>
    </section>
  );
}
