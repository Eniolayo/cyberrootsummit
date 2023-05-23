import Image from "next/image";
import Link from "next/link";
import React from "react";
const contentful = require("contentful");

import ctl from "@netlify/classnames-template-literals";

import ExpertAdvice from "@/components/expertadvice";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { IntroContent } from "@/components/Home";

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
  accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
});

export default function Events({ postRes }) {
  console.log(postRes, "postRes");

  return (
    <div>
      <Header />
      <IntroContent Heading={postRes.fields.eventName} />
      <AboutEvent />
      <SpeakerSection data={postRes.fields.speakers} />
      <section className="mb-6 flex">
        <Link
          href={"/gallery/1pTFVCZgEXLzdaeK22E5NE"}
          className="text-center w-fit mx-auto block border border-brightNavyBlue text-brightNavyBlue px-6 py-3 rounded-m"
        >
          View Gallery
        </Link>
        <Link
          href={"/events/register/1pTFVCZgEXLzdaeK22E5NE"}
          className="text-center w-fit mx-auto block border border-brightNavyBlue text-brightNavyBlue px-6 py-3 rounded-m"
        >
          Register For Event
        </Link>
      </section>
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
function SpeakerSection({ data = [] }) {
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
          />
        ))}
      </div>
    </section>
  );
  function Speakers({ name, img, title }) {
    return (
      <div>
        <div className="relative w-[300px] h-[330px]">
          <Image src={"http://" + img} alt={title} fill />
        </div>
        <h5 className="text-brightNavyBlue capitalize mt-4">{name}</h5>
        <p className="capitalize text-xl italic">{title}</p>
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
      <div className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-between">
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
          <div className={ImageSectionWrapperStyle}>
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

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "summit",
  });
  const posts = await res.items;

  const paths = posts.map((item) => {
    return {
      params: { id: `${item.sys.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const currentUrl = params.id;

  const postRes = await client.getEntry(currentUrl);
  return {
    props: { postRes },
  };
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
