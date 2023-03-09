import style from "../style/Home.module.css";
import newsImg from "../assets/unread2.png";
import newsImg2 from "../assets/unreadHome.png";
import profile from "../assets/unread3.jpeg";
import { Header } from "../components/Header";

export const Home = () => {
  return (
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
          <div className={style.title}>TECHWORM</div>
          <div className={style.title2}>
            Апп тойм: Ask Y - Чанартай боловсролыг сурагч бүрд
          </div>
          <div className={style.profile}>
            <img src={profile} alt="profile" className={style.profilePic} />
            <div className={style.author}>
              <div style={{ color: "grey" }}>Bully Maguire</div>
              <div className={style.info}>
                <div style={{ color: "white" }}>3 сарын 2, 2023 </div>
                <span className={style.dot} />
                <div style={{ color: "white" }}>10 мин</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
};
