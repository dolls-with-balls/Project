import style from "../style/Home.module.css";
import newsImg from "../Assets/unread2.png";
import newsImg2 from "../Assets/unreadHome.png";
import profile from "../Assets/unread3.jpeg";
// import newsImg from "../Assets/unread.png";
// import profile from "../Assets/unread3.jpeg";
import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataProvider";
import { CarouseL } from "../components/Carousel";
import { Header } from "../components/Header";

import { client } from "../client";

export const Home = () => {
  const { setUser, setPost, lastPost, setLastPost, post } =
    useContext(DataContext);

  useEffect(() => {
    client
      .get("/verify")
      .then(async (res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });

    client
      .get("/getPosts")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setLastPost([post[post.length - 1]]);
  }, [post]);

  console.log(lastPost)
  return (
    <>
      <div className={style.container}>
        <Header />
        <div className={style.backG}>
          <img src={newsImg} alt="backG" className={style.background} />
          <div className={style.gradient} />
        </div>
        <div className={style.innerContainer}>
          <div className={style.imgContainer}>
            <img src={newsImg2} alt="newsImg" className={style.img} />
          </div>
          <div className={style.titleSection}>
            <div className={style.glowingTitle}>Өнөөдөр</div>
            <div className={style.title}>Newest</div>
            <div className={style.title2}>
              {lastPost[0] && lastPost[0].title}
            </div>
            <div className={style.profile}>
              <img src={profile} alt="profile" className={style.profilePic} />
              <div className={style.author}>
                <div style={{ color: "grey" }}>
                  {lastPost[0] && lastPost[0].creatorId.username}
                </div>
                <div className={style.info}>
                  <div style={{ color: "white" }}>
                    {lastPost[0] && lastPost[0].createdAt}
                  </div>
                  <span className={style.dot} />
                  <div style={{ color: "white" }}>10 мин</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.carouselContainer}>
        <CarouseL />
      </div>
      {/* <Footer/> */}
    </>
  );
};
