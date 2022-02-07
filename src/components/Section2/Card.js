import "./Card.css";

const Card = ({
  Title,
  description,
  style,
  styleb,
  stylec,
  imageUrl,
  ...props
}) => {
  return (
    <section>
      <div className="cards" style={style}>
        <div className="icon">
          <img src={imageUrl} alt="icon" />
        </div>
        <div className="Title2" style={stylec}>
          <h3 lassName="Title2">{Title}</h3>
          <p lassName="Title2" style={styleb}>
            {description}
          </p>
        </div>
        <div className="body">
          <ul>
            <li>
              <span>Quaerat vel</span>
            </li>
            <br />
            <li>
              <span>Qu amet consectetur</span>
            </li>
            <br />
            <li>
              <span>reprehenderit uaerat vel</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Card;
