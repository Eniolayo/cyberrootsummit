import { Icon } from "@iconify/react";
import ctl from "@netlify/classnames-template-literals";
import React from "react";

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
          {ContactInformation()}
          {ContactUsForm()}
        </section>
      </main>
    </div>
  );
}
const inputLabelStyle = ctl(`
   absolute 
   text-lg 
   top-3 
   group-focus-within:text-base 
   peer-valid:text-base 
   peer-valid:-top-3 
   peer-valid:text-philippineGray 
   group-focus-within:text-philippineGray 
   group-focus-within:-top-3 
   transition-all 
   left-0 
   pointer-events-none
`);
const inputStyle = ctl(`
    w-full 
    block 
    pt-4 
    pb-3 
    group/item 
    outline-none 
    border-b 
    text-lg
    group-focus-within:border-brightNavyBlue 
    focus-visible:outline-0 
    peer
`);
const inputWrapperStyle = ctl(`
    relative 
    group 
    border-philippineGray 
    flex-1
`);
const inputRadioStyle = ctl(`
    w-[18px] 
    h-[18px] 
    accent-brightNavyBlue
`);
const radioLabelStyle = ctl(`
    text-lg 
    flex 
    justify-center 
    items-center 
    gap-1
`);

function ContactUsForm() {
  return (
    <form className="flex-1 space-y-7">
      <section className="flex gap-9">
        <div className={inputWrapperStyle}>
          <input
            type="text"
            name="First Name"
            required
            className={inputStyle}
          />
          <label htmlFor="First Name" className={inputLabelStyle}>
            First Name
          </label>
        </div>
        <div className={inputWrapperStyle}>
          <input type="text" name="Last Name" required className={inputStyle} />
          <label htmlFor="Last Name" className={inputLabelStyle}>
            Last Name
          </label>
        </div>
      </section>
      <section className="flex gap-9">
        <div className={inputWrapperStyle}>
          <input type="text" name="Email" required className={inputStyle} />
          <label htmlFor="Email" className={inputLabelStyle}>
            Email
          </label>
        </div>
        <div className={inputWrapperStyle}>
          <input
            type="text"
            name="Phone Number"
            required
            className={inputStyle}
          />
          <label htmlFor="Phone Number" className={inputLabelStyle}>
            Phone Number
          </label>
        </div>
      </section>
      <section className="space-y-3">
        <Heading level={"h4"} variant={"m"} styles={"text-left"}>
          Select Subject?
        </Heading>
        <div className="flex gap-5 flex-wrap justify-center">
          {[
            "General Inquiry",
            "Service Inquiry",
            "Partnership Opportunities",
            "Career Opportunities",
          ].map((item) => (
            <label htmlFor={item} className={radioLabelStyle} key={item}>
              <input
                type="radio"
                name="Subject"
                id={item}
                className={inputRadioStyle}
              />
              {item}
            </label>
          ))}
        </div>
      </section>
      <section className={inputWrapperStyle}>
        <textarea className={`${inputStyle} resize-none`} rows={1} required />
        <label htmlFor="Message" className={inputLabelStyle}>
          Message
        </label>
      </section>
      <button className="ml-auto bg-brightNavyBlue py-3 text-lg text-white px-10 rounded-m block w-fit">
        Send Message
      </button>
    </form>
  );
}

function ContactInformation() {
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
/* 
linear-gradient(60.37deg, #146BDF 36.2%, #002F6D 102.41%);
bg-gradient-to-br from-[#146BDF] from-36.2% to-[#002F6D] to-102.41% 
*/
