export default function BlogTags() {
  return (
    <section className="border-t justify-center border-brightNavyBlue py-10 max-w-[1500px] flex gap-7 flex-wrap w-[80%] mx-auto">
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className="border border-brightNavyBlue text-xl text-brightNavyBlue p-3 uppercase"
        >
          Cybersecurity
        </span>
      ))}
    </section>
  );
}
