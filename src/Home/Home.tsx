import React from "react";

import Welcome from "./Welcome/Welcome";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import AboutUs from "./AboutUs/AboutUs";
import OurTeam from "./OurTeam/OurTeam";
import RealLifeStories from "./RealLifeStories/RealLifeStories";
import ClientsStories from "./ClientsStories/ClientsStories";
import AreYouReady from "./AreYouReady/AreYouReady";
import ContactUs from "./ContactUs/ContactUs";

function Home() {
  return (
    <div className="Home">
      <Welcome />
      <WhatWeDo />
      <AboutUs />
      <OurTeam />
      <RealLifeStories />
      <ClientsStories />
      <AreYouReady />
      <ContactUs />
    </div>
  );
}

export default Home;