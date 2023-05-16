import { Icon } from "@iconify/react";

export default function Objectives() {
  return (
    <div className="flex w-[92%] max-w-[1500px] mx-auto py-16 justify-between">
      {[
        {
          heading: "Our Goal",
          paragraph:
            "Our goals are to continuously innovate, stay ahead of emerging threats, and provide exceptional customer service.",
          icon: "clarity:target-solid",
        },
        {
          heading: "Our Vision",
          paragraph:
            "To be the leading cybersecurity provider in the industry, setting the standard for innovation, reliability, and trust.",
          icon: "ph:eye",
        },
        {
          heading: "Our Mission",
          paragraph:
            "To provide cutting-edge and proactive cybersecurity solutions that protect our clients from evolving threats.",
          icon: "solar:compass-linear",
        },
      ].map((item) => (
        <ObjectivesCard
          key={item.heading}
          heading={item.heading}
          paragraph={item.paragraph}
          icon={item.icon}
        />
      ))}
    </div>
  );

  function ObjectivesCard({ heading, paragraph, icon }) {
    return (
      <div className="bg-azureishWhite max-w-[370px] space-y-8 relative text-center px-14 pt-10 pb-20 rounded-large">
        <div className="  bg-paleCornflowerBlue block absolute -top-10 right-[50%] w-[100px] h-[100px] translate-x-[50%] z-50 rounded-full ">
          <span className="bg-brightNavyBlue rounded-full w-[80px] h-[80px] absolute top-2 left-[50%] -translate-x-[50%] flex justify-center items-center">
            <Icon icon={icon} fontSize={"50px"} color="white" />
          </span>
        </div>
        <h4 className="text-3xl">{heading}</h4>
        <p className="text-xl">{paragraph}</p>
      </div>
    );
  }
}
