import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
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
      <img src={props.img} alt={props.title} />

      <h2> {props.title} </h2>
      <p> {props.text} </p>
      <Link to={props.link}>
        Learn More <BsArrowRight />
      </Link>
    </article>
  );
}

export default WWDCaed;
