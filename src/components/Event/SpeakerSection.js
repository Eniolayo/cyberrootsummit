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
            topic={item.fields.topic}
          />
        ))}
      </div>
    </section>
  );
}
function Speakers({ name, img, title, topic }) {
  console.log(topic);
  return (
    <div className="text-center ">
      <div className="relative w-[330px] h-[330px]">
        <Image src={"http://" + img} alt={title} fill />
      </div>
      <h5 className="text-brightNavyBlue capitalize text-2xl max-w-[295px] mx-auto mt-4">
        {name}
      </h5>
      <p className="capitalize text-xl mt-1 max-w-[295px] mx-auto">{title}</p>
      <p className="capitalize text-base font-normal max-w-[295px] mx-auto mt-1">
        {topic}
      </p>
    </div>
  );
}
