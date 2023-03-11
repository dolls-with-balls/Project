import React, { useContext, useRef } from "react";
import style from "../style/login.module.css";
import { client } from "../client";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataProvider";

export const Login = () => {
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();

  const { setUser } = useContext(DataContext);

  async function Login() {
    await client
      .post("/login", {
        username: username.current.value,
        password: password.current.value,
      })
      .then(async (res) => {
        console.log(res);
        localStorage.setItem("token", res.data);
        client
          .get("/verify")
          .then(async (res) => {
            setUser(res.data.user);
          })
          .catch((err) => {
            console.log(err);
          });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={style.outsideContainer}>
      <div className={style.innerContainer}>
        <div className={style.signUpContainer}>
          <div className={style.leftSideBackground}></div>
          <div className={style.emailPassEtc}>
            <h2>Log in</h2>
            <input type="text" placeholder="Email" ref={username} />
            <input type="text" placeholder="Password" ref={password} />
            <button className={style.signupButton} onClick={Login}>
              Log in
            </button>
            <a href="/signup">Don't have an account?</a>
          </div>
        </div>
      </div>
    </div>
  );
};
