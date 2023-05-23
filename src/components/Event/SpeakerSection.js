import Image from "next/image";

export default function SpeakerSection({ data = [] }) {
  return (
    <section className="w-[92%] space-y-10 max-w-[1500px] mx-auto py-12 ">
      <h3 className="capitalize text-brightNavyBlue text-center font-black text-4xl">
        speakers
      </h3>
      <div className="flex flex-wrap justify-center gap-10">
        {data.map((item, i) => (
          <Speakers
            key={i}
            name={item.fields.name}
            img={item.fields.speakerImage.fields.file.url.slice(2)}
            title={item.fields.speakersTitle}
          />
        ))}
      </div>
    </section>
  );
}
function Speakers({ name, img, title }) {
  return (
    <div>
      <div className="relative w-[300px] h-[330px]">
        <Image src={"http://" + img} alt={title} fill />
      </div>
      <h5 className="text-brightNavyBlue capitalize mt-4">{name}</h5>
      <p className="capitalize text-xl italic">{title}</p>
    </div>
  );
}
