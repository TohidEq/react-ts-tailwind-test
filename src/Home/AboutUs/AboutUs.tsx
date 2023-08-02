import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us" dir="rtl">
      <div className="about-us-img"></div>

      <div className="about-us-smry" dir="ltr">
        <div className="about-us-gradient">
          <span>About Us</span>
          <h1>Our Mission</h1>
          <p>
            From 2003, we are a leading financial service provider dedicated to
            empowering businesses and individuals to achieve their financial
            goals. Our mission is to deliver exceptional financial solutions,
            strategic guidance, and unparalleled customer service to help our
            clients thrive in a rapidly evolving financial landscape.
          </p>
          <Link to={"/about-us"} className="btn2">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
