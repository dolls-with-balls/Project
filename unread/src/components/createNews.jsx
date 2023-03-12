import style from "../style/createNews.module.css";
import { Container, Button } from "react-bootstrap";
import { client } from "../client";
import { useContext, useRef } from "react";
import { DataContext } from "../contexts/DataProvider";
import { useNavigate } from "react-router-dom";
export const CreateNews = () => {
  const title = useRef();
  const main = useRef();
  const nav = useNavigate();
  const { user, setPost, post, postId, setPostId } = useContext(DataContext);

  const create = () => {
    client
      .post("/createPost", {
        title: title.current.value,
        mainNews: main.current.value,
        creatorId: user && user._id,
      })
      .then((res) => {
        console.log(res.data);
        setPost([...post, res.data]);
        AddToUser(res);
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const AddToUser = (res) => {
    client
      .put("/user", {
        userId: user._id,
        postId: res.data._id,
      })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={style.container}>
      <Container>
        <div className={style.inputSection}>
          <input placeholder="title" className={style.input} ref={title} />
          <textarea placeholder="main" className={style.textarea} ref={main} />
        </div>
        <div className={style.buttonSection}>
          <Button variant="success" onClick={create}>
            Post
          </Button>
        </div>
      </Container>
    </div>
  );
};
