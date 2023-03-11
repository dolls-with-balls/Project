import { createContext, useState, useEffect, useRef } from "react";
import { client } from "../client";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const [lastPost, setLastPost] = useState([]);

  useEffect(() => {
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
      value={{ user, setUser, post, setPost, lastPost, lastPost, setLastPost }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
