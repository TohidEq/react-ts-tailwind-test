import React from "react";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
type Props = {
  img: string;
  title: string;
  text: string;
  link: string;
};

function WWDCaed(props: Props) {
  console.log(props.img);

  return (
    <article className="wwd-card">
      <div>
        <img src={props.img} alt={props.title} />
        <div className="texts">
          <h2> {props.title} </h2>
          <p> {props.text} </p>
        </div>
      </div>
      <div>
        <Link to={props.link}>
          Learn More <TiArrowRight />
        </Link>
      </div>
    </article>
  );
}

export default WWDCaed;
