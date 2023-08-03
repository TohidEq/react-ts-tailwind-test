import { Link } from "react-router-dom";
import JoidUsCard from "./JoidUsCard";

function JoinUs() {
  const worksData: {
    title: string;
    text: string;
    link: string;
  }[] = [
    {
      title: "Transaction Monitoring and KYC Onboarding Officer",
      text: "Overview Are you ready to start your career in a rapidly progressing...",
      link: "/",
    },
    {
      title: "Operations Officer",
      text: "Overview Are you ready to start your career in a rapidly progressing...",
      link: "/",
    },
    {
      title: "Operations Manager",
      text: "Overview Are you ready to start your career in a rapidly progressing...",
      link: "/",
    },
  ];

  return (
    <div className="join-us-base">
      <div className="container mx-auto">
        <div className="join-us">
          <div className="join-us-smry">
            <span>Join Our Team</span>
            <h1>Careers at GC Partners</h1>
            <p>
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do you best work.
            </p>
            <Link to={"/join-us"} className="btn1">
              Read More
            </Link>
          </div>

          <div className="join-us-cards">
            {worksData.map((work) => (
              <JoidUsCard
                title={work.title}
                text={work.text}
                link={work.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
