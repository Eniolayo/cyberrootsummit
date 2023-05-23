import React from "react";

import ContactInformation from "@/components/ContactUs/ContactInformation";
import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import Header from "@/components/header";
import { Heading, Text } from "@/components/ui";

export default function ContactUs() {
  return (
    <div>
      <Header />
      <main className="text-center py-10">
        <Heading
          variant={"lg"}
          styles={"font-semibold text-brightNavyBlue"}
          level={"h2"}
        >
          lets work together
        </Heading>
        <Text styles={"capitalize text-darkSilver"}>
          tell us about yourself and we’ll figure out the best solution fo you
          and your organization needs
        </Text>
        <section className="flex flex-col-reverse md:flex-row gap-10 max-w-[1500px] w-[92%] mx-auto py-14">
          <ContactInformation />
          <ContactUsForm />
        </section>
      </main>
    </div>
  );
}
