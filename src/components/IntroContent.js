import ctl from "@netlify/classnames-template-literals";
import Image from "next/image";

import { Heading, Text } from "./ui";

export default function IntroContent() {
  return (
    <section className="bg-summit-gallery-bg bg-cover bg-no-repeat py-5 h-[80vh]">
      <div className="grid items-center h-full text-white content-center gap-5 [&>*]:mx-auto [&>*]:text-center w-[90%] mx-auto">
        <Heading level={"h2"} variant={"3xl"} styles={"font-black"}>
          gallery
        </Heading>
        <Text variant={"m"} styles={"max-w-[700px]"}>
          Welcome to our Event Gallery page! Browse through photos and videos of
          our immersive and engaging events, featuring unique themes,
          high-quality entertainment, and delicious food and drinks
        </Text>
      </div>
    </section>
  );
}
const mainSectionTextStyle = ctl(`
  text-7xl
  font-black
  capitalize
`);
