import { Link, NavLink } from "react-router-dom";

import { useState } from "react";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function NavMobile() {
  // Nav-mobile sliding Cotroller
  const [btn, setBtn] = useState<boolean>(false);
  // 1. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
  // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
  // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
  const targetElement = document.querySelector("#App");
  const showTargetElement = () => {
    // ... some logic to show target element

    // 2. Disable body scroll
    disableBodyScroll(targetElement!);
  };

  const hideTargetElement = () => {
    // ... some logic to hide target element

    // 3. Re-enable body scroll
    enableBodyScroll(targetElement!);
  };

  //  IF U NEEDED THIS FUNCTION, UNCOMMENT AND USE
  //  ---NEED TO IMPORT ``` {clearAllBodyScrollLocks} from "body-scroll-lock" ```
  // function componentWillUnmount() {
  //   // 4. Useful if we have called disableBodyScroll for multiple target elements,
  //   // and we just want a kill-switch to undo all that.
  //   // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
  //   // clicks a link which takes him/her to a different page within the app.
  //   clearAllBodyScrollLocks();
  // }

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

        <div className="nav-item nav-btn">
          <button
            onClick={() => {
              setBtn(!btn);
              btn ? hideTargetElement() : showTargetElement();
            }}
            className={`nav ${btn ? "open" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
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
