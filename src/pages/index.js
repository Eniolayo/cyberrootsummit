import axios from "axios";
import React from "react";

import { Footer, Header } from "@/components";
import { IntroContent } from "@/components/Home";
import EventsSample from "@/components/Home/ExampleEvents";
import { client } from "@/utils";

export default function Home({ posts }) {
  const [upcomingEvents, setUpcomingEvents] = React.useState([]);
  const [pastEvents, setPastEvents] = React.useState([]);

  // console.log(posts, "postss");

  React.useEffect(() => {
    setPastEvents(() =>
      posts.filter((each) => each.metadata.tags[0].sys.id === "finished")
    );
    setUpcomingEvents(() =>
      posts.filter((each) => each.metadata.tags[0].sys.id === "unfinished")
    );
  }, [posts]);

  // React.useEffect(() => {
  //   const contentType = "summit";
  //   const filterParameters = "fields.eventName=testing";
  //   // const filterParameters = "fields.eventName=2022Hackaton";
  //   async function hill(params) {
  //     const data = await fetchContentfulData(contentType, filterParameters);
  //     console.log(data);
  //   }
  // }, []);

  return (
    <>
      <main>
        <Header />
        <IntroContent />
        <EventSection upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
        <Footer />
      </main>
    </>
  );
}

function EventSection({ upcomingEvents, pastEvents }) {
  return (
    <section className="py-10 w-[92%] max-w-[1500px] mx-auto space-y-6">
      {[
        { title: "upcoming events", data: upcomingEvents, finished: false },
        { title: "past events", data: pastEvents, finished: true },
      ].map(({ title, data, finished }) => (
        <div key={title}>
          <h3 className="capitalize text-3xl font-bold">{title}</h3>
          <EventsSample data={data} finished={finished} />
        </div>
      ))}
    </section>
  );
}

const fetchContentfulData = async (contentType, filterParameters) => {
  const spaceId = process.env.NEXT_PUBLIC_SPACE;
  const environmentId = process.env.NEXT_PUBLIC_ENVIRONMENT;
  const accessToken = process.env.NEXT_PUBLIC_ACCESSTOKEN;

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?content_type=${contentType}&${filterParameters}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
    return null;
  }
};

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "summit",
  });
  const posts = await res.items;
  return {
    props: { posts },
  };
}
