import { Link } from "react-router-dom";

type Props = {
  links: {
    title: string;
    link: string;
  }[];
};

const FooterLinks = (props: Props) => {
  return (
    <div className="links">
      {props.links.map((link) => (
        <Link to={link.link}>{link.title}</Link>
      ))}
    </div>
  );
};

export default FooterLinks;
