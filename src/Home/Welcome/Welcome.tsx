import React from "react";
import crlc from "../../assets/crlc.svg";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-gradient">
        <div className="welcome-text">
          <h1 className="welcome-title">
            <img className="absolute" src={crlc} alt="" />
            <h3 className="relative">
              Financial Solutions Crafted for Success
            </h3>
          </h1>
          <p>
            Accelerate Your Business's Financial Performance with GC Partners'
            Proven Strategies and Expertise
          </p>
          <button className="btn2">Get Started </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
