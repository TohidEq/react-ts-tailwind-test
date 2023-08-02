import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
function NavMobile() {
  // Nav-mobile sliding Cotroller
  const [btn, setBtn] = useState<boolean>(false);

  return (
    <div className="block lg:hidden">
      <nav className="nav-mobile">
        <div className="nav-item">
          <Link to={"/"} className="nav-title">
            <h1>
              <span className="text-honey">GC</span> PARTNERS
            </h1>
          </Link>
        </div>

        <div className="nav-item">
          <button
            className=" hover:scale-[105%] nav-btn"
            onClick={() => setBtn(!btn)}
          >
            {btn ? <BiRightArrow /> : <BiLeftArrow />}
          </button>
        </div>
      </nav>

      <div className={`nav-side ${btn}`} dir="rtl">
        <div className="nav-item">
          <div className="nav-links">
            <NavLink to={"/"} end>
              Home
            </NavLink>
            <NavLink to={"/services"}>Services</NavLink>
            <NavLink to={"/Partners"}>Partners</NavLink>
            <NavLink to={"/About"}>About</NavLink>
          </div>
        </div>

        <div className="nav-item">
          <div className="user-status">
            <Link to={"/sign-in"} className="btn1">
              Sign In
            </Link>
            <Link to={"/sign-up"} className="btn2">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMobile;

/** 




*/
