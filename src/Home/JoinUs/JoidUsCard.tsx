import { Link } from "react-router-dom";

import { BsArrowRightCircle } from "react-icons/bs";

type Props = {
  title: string;
  text: string;
  link: string;
};

const JoidUsCard = (props: Props) => {
  return (
    <div className="join-us-card-base">
      <div className="join-us-card">
        <div className="texts">
          <h2>{props.title}</h2>
          <h3>{props.text}</h3>
        </div>
        <Link to={props.link}>
          View Job <BsArrowRightCircle />
        </Link>
      </div>
    </div>
  );
};

export default JoidUsCard;
