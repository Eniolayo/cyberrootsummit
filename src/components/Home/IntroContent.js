import ctl from "@netlify/classnames-template-literals";
import Image from "next/image";

export default function IntroContent({ Heading, subHeading, desc }) {
  return (
    <section className="bg-cyber-summit-bg bg-cover bg-no-repeat py-5 grid items-center justify-center min-h-[550px]">
      <div className="grid items-center h-full text-white content-center gap-5 [&>*]:mx-auto [&>*]:text-center w-[90%] mx-auto">
        <h2 className={mainSectionTextStyle}>{Heading || "Cyber summit"}</h2>
        <h5 className="capitalize font-medium text-2xl">
          {subHeading || "Social Engineering Awareness"}
        </h5>
        <p className="max-w-[700px] text-xl">
          {desc ||
            "Welcome to our Summit Event page! Discover a world of knowledge, inspiration, and networking opportunities as we bring together industry leaders, innovators, and visionaries at our Summit."}
        </p>
        {/* <button className="px-12 py-3 capitalize rounded-m text-xl bg-brightNavyBlue text-white block">
          View summit
        </button> */}
      </div>
    </section>
  );
}
const mainSectionTextStyle = ctl(`
  text-7xl
  font-black
  capitalize
`);
