import style from "../style/createNews.module.css";
import { Container, Button } from "react-bootstrap";
import { client } from "../client";
import { useContext, useRef } from "react";
import { DataContext } from "../contexts/DataProvider";
import { useNavigate } from "react-router-dom";
import { HeaderWhite } from "./HeaderWhite";
export const CreateNews = () => {
  const title = useRef();
  const main = useRef();
  const nav = useNavigate();
  const { user, setPost, post, error, setError } = useContext(DataContext);

  const create = () => {
    console.log(user);
    if (user.length === 0) setError("you must log in");
    client
      .post("/createPost", {
        title: title.current.value,
        mainNews: main.current.value,
        creatorId: user && user._id,
      })
      .then((res) => {
        nav("/");
        setPost([...post, res.data]);
        AddToUser(res);
        setError("");
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
    <>
      <HeaderWhite />
      <div className={style.container}>
        <Container>
          <div className={style.inputSection}>
            <div className={style.warningSection}>
              <div style={{ color: "red", fontWeight: "500" }}>
                {error && error}
              </div>
            </div>
            <input placeholder="title" className={style.input} ref={title} />
            <textarea
              placeholder="main"
              className={style.textarea}
              ref={main}
            />
          </div>
          <div className={style.buttonSection}>
            <Button variant="success" onClick={create}>
              Post
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};
