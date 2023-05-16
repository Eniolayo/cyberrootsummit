import BlogCard from "../blogcard";

export default function BlogRecommendation() {
  return (
    <section className="bg-brightGray py-10">
      <h4 className="capitalize text-center text-3xl font-black">
        recommended for you
      </h4>
      <section className="w-[92%] max-w-[1500px] mx-auto gap-5 py-10 grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))]">
        {Array.from({ length: 3 }).map((_, i) => (
          <BlogCard key={i} />
        ))}
      </section>
    </section>
  );
}
