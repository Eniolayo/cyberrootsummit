import ctl from "@netlify/classnames-template-literals";
import Image from "next/image";

import { Text } from "../ui";

export default function AboutEvent({
  date,
  startTime,
  endTime,
  title,
  location,
  description,
  eventImage,
}) {
  const addLineBreaks = (text) => {
    return text.replace(/\n/g, "<br/>");
  };
  return (
    <section className="w-[92%] space-y-10 max-w-[1500px] mx-auto py-12 ">
      <h3 className="capitalize text-brightNavyBlue text-center font-black text-4xl">
        About the event
      </h3>
      <div className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-between">
        <div className="flex-1">
          <p className="font-light">
            {date.eventMonth} {date.eventDay}, {date.eventYear} @ {startTime} -
            {endTime}
          </p>
          <h4 className="text-4xl font-black">{title}</h4>
          <p className="font-light">{location}</p>
          <div className="font-light space-y-2 mt-7">
            <Text variant={"s"} content={addLineBreaks(description)} />
          </div>
        </div>
        <div className="flex-1">
          <div className={ImageSectionWrapperStyle}>
            <Image
              src={"http://" + eventImage}
              alt="man-in-showing-expertise"
              fill
              className=" rounded-br-large "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
const ImageSectionWrapperStyle = ctl(`
  relative 
  w-[300px] 
  s:w-[414px] 
  before:block 
  before:absolute 
  before:bg-brightNavyBlue 
  translate-x-7 
  before:-translate-x-7 
  before:translate-y-7 
  before:rounded-br-large 
  before:h-full 
  before:w-full 
  h-[232px] 
  s:h-[322px] 
  ml-auto
`);
