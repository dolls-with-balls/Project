import style from "../style/newsDetail.module.css";
import newsImg from "../Assets/unread.png";
import profile from "../Assets/unreadp.jpeg";
import { Container } from "react-bootstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

export const NewsDetail = () => {
  return (
    <div className={style.container}>
      {/* <Header/> */}
      <div>
        <Container>
          <>
            <div className={style.titleContainer}>
              <div className={style.category}>
                <div style={{ color: "#0078f6" }}>TECHWORM</div>
                <div style={{ color: "#6d7378" }}>2 САРЫН 28, 2023</div>
                <span className={style.dot} />
                <div style={{ color: "#6d7378" }}>3min</div>
              </div>
              <h1 className={style.title}>
                Апп тойм: Ask Y - Чанартай боловсролыг сурагч бүрд
              </h1>
            </div>
            <img src={newsImg} alt="newsImg" className={style.img} />
          </>
          <>
            <div className={style.socialSection}>
              <div className={style.profile}>
                <img src={profile} alt="profile" className={style.profilePic} />
                <div className={style.author}>
                  <div style={{ color: "#6d7378" }}>Нийтэлсэн:</div>
                  <div>Unread Today</div>
                </div>
              </div>
              <div className={style.reviewSection}>
                <div
                  style={{ color: "#6d7378", fontize: "13px", width: "160px" }}
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
              <div className={style.socials}>
                <TiSocialFacebook style={{ width: "35px", height: "35px" }} />
                <TiSocialTwitter style={{ width: "35px", height: "35px" }} />
                <TiSocialLinkedin style={{ width: "35px", height: "35px" }} />
              </div>
            </div>
          </>
        </Container>
      </div>
    </div>
  );
};
