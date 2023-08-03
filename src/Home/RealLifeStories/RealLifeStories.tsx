import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RealLifeStoryCard from "./RealLifeStoryCard";

function RealLifeStories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    title: string;
    text: string;
    link: string;
  }[] = [
    {
      img: "/bed2.png",
      title: "Simba Sleep",
      text: "FX & International payments",
      link: "/",
    },
    {
      img: "/bed2.png",
      title: "Simba Sleep",
      text: "FX & International payments",
      link: "/",
    },
    {
      img: "/bed2.png",
      title: "Simba Sleep",
      text: "FX & International payments",
      link: "/",
    },
  ];

  return (
    <div className="rls">
      <div className="container mx-auto">
        <div className="rls-smry">
          <span>Case Studies</span>
          <h1>
            Real-Life Success
            <br />
            Stories
          </h1>
          <p>
            We understand the challenges businesses face in today's
            ever-changing landscape, and our goal is to help you navigate those
            challenges and seize opportunities for growth.
          </p>
        </div>
        <div className="slideshow">
          <Slider {...settings} className="rls-cards">
            {pesonsData.map((person) => (
              <RealLifeStoryCard
                img={person.img}
                title={person.title}
                text={person.text}
                link={person.link}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default RealLifeStories;
