import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PersonCard from "./PersonCard";
import { useEffect, useState } from "react";
function OurTeam() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const slidesToShow = () => {
    if (windowSize < 640) return 1;
    else if (windowSize < 1024) return 2;
    else if (windowSize >= 1024) return 3;
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow(),
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => (
      <div className="slick-dots">
        <ul className="btns"> {dots} </ul>
      </div>
    ),

    customPaging: () => <div className="btn"></div>,
  };

  const pesonsData: {
    img: string;
    name: string;
    title: string;
  }[] = [
    {
      img: "/ourTeam/prsn1.png",
      name: "Martin Cox",
      title: "CEO & Founder",
    },
    {
      img: "/ourTeam/prsn2.png",
      name: "Andrew Fudnell",
      title: "Chief Commercial Officer",
    },
    {
      img: "/ourTeam/prsn3.png",
      name: "Stevie Panesar",
      title: "Chief Information Officer",
    },
    {
      img: "/ourTeam/prsn1.png",
      name: "Martin Cox",
      title: "CEO & Founder",
    },
    {
      img: "/ourTeam/prsn2.png",
      name: "Andrew Fudnell",
      title: "Chief Commercial Officer",
    },
  ];

  return (
    <div className="our-team">
      <div className="container mx-auto">
        <div className="our-team-smry">
          <h2>Meet our team</h2>
          <div className="texts">
            <p>
              At GC Partners, our dedicated team is composed of seasoned
              professionals who bring diverse skill sets and extensive
              experience to the table. Here are some of our key team members and
              their roles:
            </p>
            <Link to={"#"} className="btn2">
              View More
            </Link>
          </div>
        </div>
        <div className="slideshow">
          <Slider {...settings} className="persons">
            {pesonsData.map((person) => (
              <PersonCard
                name={person.name}
                img={person.img}
                title={person.title}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
