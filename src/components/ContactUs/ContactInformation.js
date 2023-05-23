import { Icon } from "@iconify/react";

import { Heading, Text } from "../ui";

export default function ContactInformation() {
  return (
    <div className="h-[450px] md:w-[35%] px-10 rounded-m py-8 text-left bg-gradient-to-br from-[#146BDF] from-36.2% to-[#002F6D] to-102.41% grid justify-between text-white">
      <section>
        <Heading level={"h3"} variant={"md"} styles={"font-semibold"}>
          Contact Information
        </Heading>
        <Text styles={"text-chineseSilver"}>
          Say something to start a live chat!
        </Text>
      </section>
      <section className="space-y-4">
        <div className="flex items-center gap-4">
          <Icon icon="gg:phone" className="text-2xl" />
          <Text variant={"md"}>+(234)8144106279</Text>
        </div>
        <div className="flex items-center gap-4">
          <Icon icon="ic:baseline-email" className="text-2xl" />
          <Text variant={"md"}>info@cyberootltd.com</Text>
        </div>
        <div className="flex items-start gap-4">
          <Icon icon="mdi:location" className="text-3xl" />
          <Text variant={"md"}>
            Adamolekun Estate Old Take Away, Adebayo, Ado-Ekiti.{" "}
          </Text>
        </div>
      </section>
      <div className="flex items-end gap-5">
        {["mdi:twitter", "mdi:instagram", "ic:baseline-discord"].map((item) => (
          <div className="bg-white p-1 rounded-full" key={item}>
            <Icon icon={item} className="text-brightNavyBlue text-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
