import Slider from "react-slick";
import StoryCard from "./StoryCard";
import { useEffect, useRef, useState } from "react";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
function ClientsStories() {
  const slick: any = useRef();
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
        <div className="line"></div>
        <ul className="btns"> {dots} </ul>
      </div>
    ),

    customPaging: () => <div className="btn"></div>,
  };

  const storiesData: {
    img: string;
    name: string;
    text: string;
    stars: number;
  }[] = [
    {
      img: "/clients/prsn1.png",
      name: "Emily Davis",
      text: "I cannot thank GC Partners enough for their exceptional financial services. Their team guided us through complex international transactions.",
      stars: 5,
    },
    {
      img: "/clients/prsn2.png",
      name: "John Thompson",
      text: "We turned to GC Partners for their cash flow optimization solutions, and they delivered outstanding results.",
      stars: 4,
    },
    {
      img: "/clients/prsn3.png",
      name: "Mark Roberts",
      text: "The team at GC Partners is simply exceptional. Their commitment to understanding our unique needs and delivering customized financial solutions is unparalleled.",
      stars: 3,
    },
    {
      img: "/clients/prsn1.png",
      name: "Mark Sina",
      text: "The team at GC Partners is simply exceptional. Their commitment to understanding our unique needs and delivering customized financial solutions is unparalleled.",
      stars: 2,
    },
    {
      img: "/clients/prsn2.png",
      name: "Alex Roberts",
      text: "The team at GC Partners is simply exceptional. Their commitment.",
      stars: 1,
    },
  ];

  return (
    <div className="clnt-stry">
      <div className="clnt-stry-smry">
        <span>Testimonials</span>
        <h2>
          Clients Share Their <br />
          Success Stories
        </h2>
      </div>

      <div className="slideshow">
        <Slider ref={slick} {...settings} className="stories">
          {storiesData.map((story) => (
            <StoryCard
              img={story.img}
              name={story.name}
              text={story.text}
              stars={story.stars}
            />
          ))}
        </Slider>
        <div className="slider-btns ">
          <button
            className="left"
            onClick={() => {
              slick.current?.slickPrev();
            }}
          >
            <BiLeftArrowAlt />
          </button>

          <button
            className="right"
            onClick={() => {
              slick.current?.slickNext();
            }}
          >
            <BiRightArrowAlt />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientsStories;
