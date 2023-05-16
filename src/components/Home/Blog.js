import Image from "next/image";
import BlogCard from "../blogcard";

export default function Blog() {
  return (
    <section className="py-10 w-[92%] max-w-[1500px] mx-auto space-y-10">
      <div className="text-center max-w-2xl space-y-3 mx-auto">
        <h3 className="text-3xl text-brightNavyBlue">Blog</h3>
        <p className="text-lg">
          Stay informed on the latest news and trends in cybersecurity to better
          protect your data and assets from potential threats.
        </p>
      </div>
      <div className="flex justify-between flex-wrap gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <BlogCard key={i} />
        ))}
      </div>
    </section>
  );
}
