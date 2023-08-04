import { AiFillStar } from "react-icons/ai";

type Props = {
  img: string;
  name: string;
  text: string;
  stars: number; // ( 1 ~ 5 )
};

const StoryCard = (props: Props) => {
  return (
    <div className="story-card">
      <div
        className={`img`}
        style={{ backgroundImage: "url(" + props.img + ")" }}
      ></div>
      <div className="texts">
        <h3 className="name">{props.name}</h3>
        <div className={`stars star-${props.stars}`}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default StoryCard;
