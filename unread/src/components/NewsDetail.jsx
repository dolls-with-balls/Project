import style from "../style/newsDetail.module.css";
import newsImg from "../Assets/unread2.png";
import profile from "../Assets/unreadp.jpeg";
import newsImg2 from "../Assets/unread2.jpg";
import comment from "../Assets/unread3.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Container } from "react-bootstrap";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { HeaderWhite } from "./HeaderWhite";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import { Comments } from "./Comments";
export const NewsDetail = () => {
  const params = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (data)
      client
        .get(`/getPost/${params.id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  return (
    <div className={style.container}>
      <HeaderWhite />
      <div className={style.innerContainer}>
        <Container>
          <div className={style.titleContainer}>
            <div className={style.category}>
              <div style={{ color: "#0078f6" }}>NEWEST</div>
              <div style={{ color: "#6d7378" }}>{data && data.createdAt}</div>
              <span className={style.dot} />
              <div style={{ color: "#6d7378" }}>3min</div>
            </div>
            <h1 className={style.title}>{data && data.title}</h1>
          </div>
          <img src={newsImg} alt="newsImg" className={style.img} />

          <div className={style.socialSection}>
            <div className={style.leftSide}>
              <div className={style.profile}>
                <img src={profile} alt="profile" className={style.profilePic} />

                <div className={style.author}>
                  <div style={{ color: "#6d7378" }}>Нийтэлсэн:</div>
                  <div>{data.creatorId && data.creatorId.username}</div>
                </div>
              </div>

              <div className={style.a}>
                <div className={style.reviewSection}>
                  <div
                    style={{
                      color: "#6d7378",
                      fontize: "13px",
                      width: "160px",
                    }}
                  >
                    Хандалт / Сэтгэгдэл:
                  </div>

                  <div className={style.reviews}>
                    <div className={style.review}>
                      <VisibilityIcon />
                      <div>420</div>
                    </div>

                    <div className={style.review}>
                      <ChatBubbleIcon />
                      <div>69</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.socials}>
              <TiSocialFacebook
                style={{ width: "35px", height: "35px", cursor: "pointer" }}
              />
              <TiSocialTwitter
                style={{ width: "35px", height: "35px", cursor: "pointer" }}
              />
              <TiSocialLinkedin
                style={{ width: "35px", height: "35px", cursor: "pointer" }}
              />
            </div>
          </div>

          <div className={style.mainNewsSection}>
            <div className={style.author} style={{ height: "90px" }}>
              <hr style={{ width: "80px", opacity: "0.6" }} />
              <div style={{ width: "130px" }}>
                <div style={{ color: "#6d7378" }}>Нийтлэлд оролцсон:</div>
                <div>{data.creatorId && data.creatorId.username}</div>
              </div>
            </div>

            <div>
              <div className={style.mainNews}>
                <div className={style.texts}>{data && data.mainNews}</div>
              </div>
            </div>
          </div>
        </Container>
        <Comments />
      </div>

      {/* <Footer/> */}
    </div>
  );
};
