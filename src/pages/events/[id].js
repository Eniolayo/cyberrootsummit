import Image from "next/image";
import Link from "next/link";
import React from "react";
const contentful = require("contentful");

import { AboutEvent, EventSponsors, SpeakerSection } from "@/components/Event";
import ExpertAdvice from "@/components/expertadvice";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { IntroContent } from "@/components/Home";
import convertTime from "@/utils/convertTime";

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
  accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
});

export default function Events({ postRes }) {
  console.log(postRes, "postRes");
  const eventDate = new Date(postRes.fields.dateAndTime);
  const [pastEvents, setPastEvents] = React.useState([]);

  const dateFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: "full" });
  React.useEffect(() => {
    setPastEvents(postRes.metadata.tags[0].sys.id === "finished");
  }, [postRes]);
  return (
    <div>
      <Header />
      <IntroContent Heading={postRes.fields.eventName} />
      <AboutEvent
        title={postRes.fields.eventName}
        description={postRes.fields.description}
        location={postRes.fields.location}
        date={dateFormatter.format(eventDate)}
        startTime={convertTime(postRes.fields.dateAndTime.slice(11, 16))}
        endTime={convertTime(postRes.fields.endDateAndTime.slice(11, 16))}
        eventImage={postRes.fields.eventImage.fields.file.url.slice(2)}
      />
      {pastEvents && <SpeakerSection data={postRes.fields.speakers} />}
      <section className="mb-6 flex">
        {pastEvents ? (
          <Link
            href={`/gallery/${postRes.sys.id}`}
            className="text-center w-fit mx-auto block border border-brightNavyBlue text-brightNavyBlue px-6 py-3 rounded-m"
          >
            View Gallery
          </Link>
        ) : (
          <div className="flex justify-between w-full">
            <Link
              href={`/events/register/${postRes.sys.id}`}
              className="text-center w-fit mx-auto block border border-brightNavyBlue text-brightNavyBlue px-6 py-3 rounded-m"
            >
              Register For Event
            </Link>
            <Link
              href={`/events/sponsor/${postRes.sys.id}`}
              className="text-center w-fit mx-auto block border bg-brightNavyBlue text-white px-6 py-3 rounded-m"
            >
              Sponsor Registration
            </Link>
          </div>
        )}
      </section>
      <ExpertAdvice />
      {/* <EventSponsors /> */}
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
