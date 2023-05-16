import Image from "next/image";

export default function BlogCard() {
  return (
    <div className="border border-spanishGray max-w-[360px] mx-auto">
      <div className="relative h-[250px]">
        <Image
          src="/blog-img.png"
          alt="blog-img"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="p-7">
        <span className="uppercase text-gray mb-3">category</span>
        <h4 className="text-2xl leading-6">
          Protecting Your Business from Cyber Attacks
        </h4>
        <p className="text-gray leading-none text-sm my-5">
          In today's digital age, cyber attacks are becoming more sophisticated
          and frequent, making it cruc...
        </p>
        <p className="text-gray">22-04-2023</p>
      </div>
    </div>
  );
}
