import comment from "../assets/unread3.png";
import style from "../style/comments.module.css";
import { client } from "../client";
import { Button } from "@mantine/core";
import { useRef } from "react";

export const Comments = () => {
  const userName = useRef();
  const userComment = useRef();

  const postComment = () => {
    client.post("/create", {
      creator: userName.current.value,
      text: userComment.current.value,
    });
  };
  return (
    <div className={style.commentSection}>
      <div className={style.title}>
        <img
          src={comment}
          alt="comment"
          style={{ width: "30px", height: "30px" }}
        />
        <h5>Сэтгэгдэл бичих (0)</h5>
      </div>

      <div className={style.inputContainer}>
        <input
          placeholder="Таны нэр"
          type="text"
          className={style.input}
          ref={userName}
        />
        <textarea
          placeholder="Санал сэтгэгдэл"
          className={style.textArea}
          ref={userComment}
        />
      </div>

      <Button
        variant="default"
        color="gray"
        style={{ width: "400px", color: "grey" }}
      >
        Сэтгэгдэл бичих
      </Button>
    </div>
  );
};
