import Welcome from "./Welcome/Welcome";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import AboutUs from "./AboutUs/AboutUs";
import OurTeam from "./OurTeam/OurTeam";
import RealLifeStories from "./RealLifeStories/RealLifeStories";
import ClientsStories from "./ClientsStories/ClientsStories";
import AreYouReady from "./AreYouReady/AreYouReady";
import ContactUs from "./ContactUs/ContactUs";
import JoinUs from "./JoinUs/JoinUs";
import DocumentMeta from "react-document-meta";

function Home() {
  const meta = {
    title: "GC Partners",
    description:
      "Financial Solutions Crafted for Success. Accelerate Your Business's Financial Performance with GC Partners' Proven Strategies and Expertise",
    canonical: "http://example.com/path/to/page",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "GC Partners,Performance,Strategies,more", //you can add your keywords here
      },
    },
  };

  return (
    <div className="Home">
      <DocumentMeta {...meta} />
      <Welcome />
      <WhatWeDo />
      <AboutUs />
      <OurTeam />
      <RealLifeStories />
      <JoinUs />
      <ClientsStories />
      <AreYouReady />
      <ContactUs />
    </div>
  );
}

export default Home;
