import comment from "../Assets/unread3.png";
import style from "../style/comments.module.css";
import { client } from "../client";
import { Button } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentCard } from "./commentCard";

export const Comments = () => {
  const userName = useRef();
  const userComment = useRef();
  const params = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    client.get(`/getPost/${params.id}`).then((res) => {
      setComments(res.data.comments);
    });
  }, [comments]);

  const postComment = () => {
    client
      .post("/create", {
        creator: userName.current.value,
        text: userComment.current.value,
      })
      .then((res) => {
        console.log(res.data);
        addToPost(res);
        setComments([...comments, res.data.comments]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToPost = (res) => {
    client
      .put("/add", {
        postId: params.id,
        commentId: res.data._id,
      })
      .catch((err) => {
        console.log(err);
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
        <h5>Сэтгэгдэл бичих ({comments.length})</h5>
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
        onClick={postComment}
      >
        Сэтгэгдэл бичих
      </Button>
      <div className={style.commetsContainer}>
        {comments &&
          comments.map((item, index) => {
            return <CommentCard {...item} key={index} />;
          })}
      </div>
    </div>
  );
};
