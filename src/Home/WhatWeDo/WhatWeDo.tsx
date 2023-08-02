import WWDCaed from "./WWDCaed";

function WhatWeDo() {
  const testData: {
    img: string;
    title: string;
    text: string;
    link: string;
  }[] = [
    {
      img: "whatWeDo/img1.png",
      title: "Mass Payment Solutions",
      text: "Streamline your international payment processes with our secure and efficient solutions. We offer fast and cost-effective transfers, multi-currency accounts, and more",
      link: "/somethingx1",
    },
    {
      img: "whatWeDo/img2.png",
      title: "Risk Management Strategies",
      text: "we can help you save more money and keep you on your toes. by investing your funds, the money you have today can be more useful.",
      link: "/somethingx2",
    },
    {
      img: "whatWeDo/img3.png",
      title: "MutFinancial Planning and Advisoryions",
      text: "we can help you save more money and keep you on your toes. by investing your funds, the money you have today can be more useful.",
      link: "/somethingx3",
    },
  ];

  return (
    <div className="wwd">
      <div className="wwd-smry">
        <span>What We Do</span>
        <h1>
          Financial journey
          <br />
          starts here
        </h1>
        <p>
          We understand the challenges businesses face in today's ever-changing
          landscape, and our goal is to help you navigate those challenges and
          seize opportunities for growth.
        </p>
      </div>
      <article className="wwd-cards">
        {testData.map((res) => (
          <WWDCaed
            img={res.img}
            title={res.title}
            text={res.text}
            link={res.link}
          />
        ))}
      </article>
    </div>
  );
}

export default WhatWeDo;
