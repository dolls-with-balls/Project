import { Link } from "react-router-dom";
import style from "../style/card.module.css";

export const Card = ({ title, creatorId, _id }) => {
  return (
    <Link
      to={`/news/${_id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className={style.container}>
        <h1 className={style.title}>{title}</h1>
        <h6>Creator : {creatorId && creatorId.username}</h6>
      </div>
    </Link>
  );
};
