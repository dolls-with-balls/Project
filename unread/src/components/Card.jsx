import { Link } from "react-router-dom";
import cardImg from "../assets/img.jpg";
import style from "../style/card.module.css";

export const Card = ({ title, creatorId, _id }) => {
  return (
    <Link
      to={`/news/${_id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className={style.container}>
        <img src={cardImg} alt="cardImg" className={style.img} />
        <div className={style.innerContainer}>
          <div className={style.title}>
            <div>{title}</div>
            <div> Publisher : {creatorId && creatorId.username}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
