import React from "react";
import { IntroContent } from "@/components/Home";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ExpertAdvice from "@/components/expertadvice";

function Events() {
  return (
    <div>
      <Header />
      <IntroContent />
      <AboutEvent />
      <SpeakerSection />
      <ExpertAdvice />
      <section className="bg-brightNavyBlue py-10 space-y-5 mt-6 text-white">
        <h3 className="text-center font-bold text-4xl">Sponsors</h3>
        <div className="flex justify-center items-center gap-36">
          <div className="w-[200px] relative h-[70px]">
            <Image
              priority
              src="/pecb-logo.svg"
              fill
              objectFit="contain"
              alt="pecb-logo"
            />
          </div>
          <div className="w-[280px] h-[85px] relative">
            <Image
              src="/comptia_logo.png"
              alt="comptia logo"
              objectFit="contain"
              fill
            />
          </div>
          <div className="w-[200px] relative h-[70px]">
            <Image
              priority
              src="/pecb-logo.svg"
              fill
              objectFit="contain"
              alt="pecb-logo"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
function SpeakerSection() {
  return (
    <section className="w-[92%] space-y-10 max-w-[1500px] mx-auto py-12 ">
      <h3 className="capitalize text-brightNavyBlue text-center font-black text-4xl">
        speakers
      </h3>
      <div className="flex justify-center gap-10">
        {Speakers()}
        {Speakers()}
        {Speakers()}
      </div>
    </section>
  );
  function Speakers() {
    return (
      <div>
        <div className="relative w-[300px] h-[330px]">
          <Image src="/demo-speaker.png" alt="demo-speaker" fill />
        </div>
        <h5 className="text-brightNavyBlue capitalize mt-4">john doe</h5>
        <p className="capitalize text-xl italic">ceo blacksheep and co</p>
      </div>
    );
  }
}

function AboutEvent() {
  return (
    <section className="w-[92%] space-y-10 max-w-[1500px] mx-auto py-12 ">
      <h3 className="capitalize text-brightNavyBlue text-center font-black text-4xl">
        About the event
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="font-light">November 12, 2023 @ 12.00pm - 5.00pm </p>
          <h4 className="text-4xl font-black">CYBERSUMMIT 2023 </h4>
          <p className="font-light">
            <span className="font-bold">Cyberroot Building</span> Old Take Away,
            Adebayo, Ado-Ekiti.
          </p>
          <div className="font-light space-y-2 mt-7">
            <p>
              Small businesses are often targets for cyber-attacks because they
              are perceived as easy targets. A cybersecurity event desig...Small
              businesses are often targets for cyber-attacks because they are
              perceived as easy targets. A cybersecurity event desig..
            </p>
            <p>
              Small businesses are often targets for cyber-attacks because they
              are perceived as easy targets. A cybersecurity event desig....
            </p>
            <p>
              Small businesses are often targets for cyber-attacks because they
              are perceived as easy targets. A cybersecurity event desig...
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative w-[414px] before:block before:absolute before:bg-brightNavyBlue -translate-x-7 before:translate-x-7 before:translate-y-7 before:rounded-bl-large before:h-full before:w-full h-[322px] ml-auto">
            <Image
              src="/man-in-showing-expertise.png"
              alt="man-in-showing-expertise"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Events;
