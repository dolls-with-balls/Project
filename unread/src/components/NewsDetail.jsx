import style from "../style/newsDetail.module.css";
import newsImg from "../Assets/unread.png";
import profile from "../Assets/unreadp.jpeg";
import newsImg2 from "../Assets/unread2.jpg";
import comment from "../Assets/unread3.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Container, Form } from "react-bootstrap";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { Button } from "@mantine/core";

export const NewsDetail = () => {
  return (
    <div className={style.container}>
      {/* <Header/> */}
      <div className={style.innerContainer}>
        <Container>
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

          <div className={style.socialSection}>
            <div className={style.leftSide}>
              <div className={style.profile}>
                <img src={profile} alt="profile" className={style.profilePic} />

                <div className={style.author}>
                  <div style={{ color: "#6d7378" }}>Нийтэлсэн:</div>
                  <div>localhost:3000</div>
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
                <div>С. Мөнх-Эрдэнэ</div>
              </div>
            </div>

            <div>
              <div className={style.mainNews}>
                <div className={style.texts}>
                  Монгол улсад 2021 оны байдлаар ЕБС-ын нэг багшид дунджаар 20
                  сурагч оногдож байгаа гэх судалгааны дүн бий. Хичээлийн 40
                  минутын хугацаанд багш зөвхөн үндсэн сэдвээ тайлбарлаж, гэрийн
                  даалгавараа өгөөд таарах нь түгээмэл үзэгдэл. Бодит байдал
                  дээр багш сурагч нэг бүртэй тулж ажиллан тэдэнд тулгараад буй
                  саад бэрхшээл, үзэж буй хичээлээс ойлгомжгүй үлдсэн зүйлс дээр
                  тодорхой заавар, зөвлөгөө өгөөд явах боломж бололцоо ч хомс
                  байдаг нь нууц биш.
                </div>

                <div className={style.texts}>
                  Боловсролын салбар дахь энэхүү нийтлэг дүр зургаас үүдэн
                  сурагчдын хичээлийн хоцрогдол, хичээлдээ сонирхолгүй болох,
                  дуртай хичээлээ тодорхойлж чадалгүй байсаар хүсэл сонирхлоо
                  олохгүй байх зэрэг томоохон асуудлууд бий болж байна. Гэхдээ
                  асуудал бүрд шийдэл бий. Дээрх асуудлыг хялбараар шийдэхэд
                  туслах Ask Y апп нь сурагчдын хүндрэл бэрхшээлийг хамтдаа
                  даван туулах үйлсийг эхлүүлжээ.
                </div>

                <h3 style={{ color: "#0078f6" }}>ASK Y ГЭЖ ЮУ ВЭ?</h3>
                <div className={style.texts}>
                  Ask Y апп нь ерөнхий боловсролын сургуулийн 6-12-р ангийн
                  сурагчдад зориулсан боловсролыг дэмжих апп юм. Сурагчдад
                  хамгийн их асуулт бий болж, асуудал тулгардаг хичээлүүд болох
                  математик, физик, химийн хичээлүүдээс сонгоод асуух зүйлсээ
                  текст болон зурган хэлбэрээр оруулаад салбартаа тэргүүлэгч 90
                  гаруй багш нараас тодорхой хариултуудыг авах боломжтой.
                </div>
              </div>

              <img src={newsImg2} alt="newsImg2" className={style.img} />
            </div>
          </div>
        </Container>
        <div className={style.commentSection}>
          <div className={style.title}>
            <img
              src={comment}
              alt="comment"
              style={{ width: "30px", height: "30px" }}
            />
            <h4>Сэтгэгдэл бичих (0)</h4>
          </div>
          <div>
            <Form style={{ width: "400px" }}>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" />
              </Form.Group>
            </Form>
            <Button
              variant="default"
              color="gray"
              style={{ width: "400px", color: "grey" }}
            >
              Сэтгэгдэл бичих
            </Button>
          </div>
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
};
