import { Link } from "react-router-dom";

function AreYouReady() {
  return (
    <div className="rls ryr">
      <div className="container mx-auto">
        <div className="rls-smry ryr-smry">
          <h1>Ready to Transform Your Financial Success? Get Started Today!</h1>
          <p>
            At GC Partners, we are ready to empower you with comprehensive
            financial solutions tailored to your unique needs. Take the first
            step towards achieving your financial goals by contacting our team
            today.
          </p>
          <Link to={"/"} className="btn2">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AreYouReady;
