import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";

type Props = {
  img: string;
  title: string;
  text: string;
  link: string;
};

const RealLifeStoryCard = (props: Props) => {
  return (
    <div className="rls-card">
      <div
        className={`rls-img`}
        style={{ backgroundImage: "url(" + props.img + ")" }}
      >
        <div className="gradient">
          <div className="texts">
            <h3>{props.title}</h3>
            <h4>{props.text}</h4>
            <div>
              <Link to={props.link}>
                Learn More <TiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealLifeStoryCard;
