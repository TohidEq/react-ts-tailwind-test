type Props = {
  img: string;
  name: string;
  title: string;
};

const PersonCard = (props: Props) => {
  return (
    <div className="person-card">
      <div
        className={`person-img`}
        style={{ backgroundImage: "url(" + props.img + ")" }}
      >
        <div className="gradient">
          <div className="texts">
            <h3>{props.name}</h3>
            <h4>{props.title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
