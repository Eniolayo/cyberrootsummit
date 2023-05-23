import Image from "next/image";
import Link from "next/link";
import React from "react";
const contentful = require("contentful");

import { AboutEvent, EventSponsors, SpeakerSection } from "@/components/Event";
import ExpertAdvice from "@/components/expertadvice";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { IntroContent } from "@/components/Home";
import { Text } from "@/components/ui";
import convertTime from "@/utils/convertTime";

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
  accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
});

export default function Events({ postRes }) {
  console.log(postRes, "postRes");
  const eventMonth = new Date(postRes.fields.dateAndTime).getMonth();
  const eventDay = new Date(postRes.fields.dateAndTime).getDay();
  const eventYear = new Date(postRes.fields.dateAndTime).getFullYear();
  const options = { month: "long" };

  return (
    <div>
      <Header />
      <IntroContent Heading={postRes.fields.eventName} />
      <AboutEvent
        title={postRes.fields.eventName}
        description={postRes.fields.description}
        location={postRes.fields.location}
        date={{
          eventDay,
          eventMonth: new Intl.DateTimeFormat("en-US", options).format(
            eventMonth
          ),
          eventYear,
        }}
        startTime={convertTime(postRes.fields.dateAndTime.slice(11, 16))}
        endTime={convertTime(postRes.fields.endDateAndTime.slice(11, 16))}
      />
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
      <EventSponsors />
      <Footer />
    </div>
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
