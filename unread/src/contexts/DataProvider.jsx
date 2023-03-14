import { createContext, useState, useEffect, useRef } from "react";
import { client } from "../client";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const [lastPost, setLastPost] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // if (localStorage.getItem("token"))
      client
        .get("/verify")
        .then(async (res) => {
          setUser(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        post,
        setPost,
        lastPost,
        lastPost,
        setLastPost,
        error,
        setError,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
