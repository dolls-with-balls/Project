import style from "../style/commentCard.module.css";

export const CommentCard = ({ creator, text }) => {
  return (
    <div className={style.container}>
      <div className={style.avatar}>
        <div className={style.profilePic}>
          <div className={style.letter}>{creator && creator.slice(0, 1)}</div>
        </div>
        <div className={style.name}>{creator && creator}</div>
      </div>
      <div className={style.info}>
        <div className={style.text}>{text && text}</div>
      </div>
    </div>
  );
};
