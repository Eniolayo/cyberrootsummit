import Image from "next/image";

import { Button, Heading } from "./ui";

export default function ExpertAdvice() {
  return (
    <section className="bg-brightNavyBlue relative  h-[600px] lg:h-[400px]">
      <div className="w-[92%] max-w-[1500px] mx-auto flex flex-col-reverse lg:flex-row h-full justify-between flex-1">
        <div className="h-full grid content-center justify-items-start gap-8">
          <Heading
            level={"h4"}
            variant={"md"}
            styles={"max-w-[500px] text-white"}
          >
            Protect your digital assets with our advanced cybersecurity
            solutions.
          </Heading>
          <Button variant={"tertiary"} style={"px-5 py-4"}>
            Get Expert Advice
          </Button>
        </div>
        <div className="relative lg:absolute right-0 mt-3 lg:mt-0 w-full lg:w-[50%] h-[800px] lg:h-[400px]">
          <Image
            src="/expert-advice-blog.png"
            alt="expert-advice-blog"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}
