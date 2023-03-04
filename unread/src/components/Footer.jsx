import styles from "../style/footer.module.css";
import logo from "../assets/logo.png";
import apple from "../assets/apple.png";
import samsung from "../assets/samsung.png";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { GrSoundcloud } from "react-icons/gr";

export const Footer = () => {
  return (
    <>
      <div className={styles.all}>
        {/* <div className={styles.all1}> */}
        <div className={styles.top}>
          <div className={styles.left}>
            <img
              src={logo}
              style={{ width: 150, height: 20}}
            ></img>
            <div className={styles.btn} style={{ marginTop: 40 }}>
              <div className={styles.text1}>
                <div style={{ fontSize: 10, color: "gray" }}>
                  Хамтран ажиллах хүсэлт илгээх
                </div>
                <div className={styles.text2}>Контент нийтлүүлэх</div>
              </div>
              <button className={styles.button}>{">"}</button>
            </div>
            <div className={styles.btn} style={{ marginTop: 20 }}>
              <div className={styles.text1}>
                <div style={{ fontSize: 10, color: "gray" }}>
                  Хамтран ажиллах хүсэлт илгээх
                </div>
                <div className={styles.text2}>Эвент дээр хамтрах</div>
              </div>
              <button className={styles.button} style={{ cursor: "pointer" }}>
                {">"}
              </button>
            </div>
            <div className={styles.img}>
              <img src={apple} className={styles.pic1}></img>
              <img src={samsung} className={styles.pic2}></img>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.p}>
              <div className={styles.p1}>Редакцын бодлого</div>
              <div className={styles.p1}>•</div>
              <div className={styles.p1}>Блог </div>
              <div className={styles.p1}>•</div>
              <div className={styles.p1}>Ажлын байр</div>
              <div className={styles.p1}>•</div>
              <div className={styles.p1}>Холбогдох</div>
            </div>
            <div className={styles.p3}>
              © 2015-2023 Анрид Медиа ХХК. Бүх эрх хуулиар хамгаалагдсан.
              Контентуудыг зөвшөөрөлгүйгээр болон дурдалгүйгээр нийтлэх, хэвлэх,
              эш татахыг хориглоно.
            </div>
            <div className={styles.bulan}>
              <div className={styles.zuun}>
                <h5 style={{ color: "#0078f6" }}>Булангууд</h5>
                <div className={styles.p2}>Онцлох бизнес</div>
                <div className={styles.p2}>Techworm</div>
                <div className={styles.p2}>Би хэрхэн ажилладаг вэ?</div>
                <div className={styles.p2}>Мэдүүштэй</div>
                <div className={styles.p2}>Чөлөөт</div>
                <div className={styles.p2}>Номын тухай</div>
                <div className={styles.p2}>7 хоногийн тойм</div>
                <div className={styles.p2}>Өртөөлөгчид</div>
                <div className={styles.p2}>Аравт</div>
                <div className={styles.p2}>Тогтвортой хөгжил</div>
              </div>
              <div className={styles.gol}>
                <div className={styles.p2}>Тайлбарлах нь</div>
                <div className={styles.p2}>А-Я</div>
                <div className={styles.p2}>10 ертөнц, 10 өнцөг </div>
                <div className={styles.p2}>Би хүүхдээ ингэж өсгөдөг </div>
                <div className={styles.p2}>Танилц, миний амьтан</div>
                <div className={styles.p2}>Таатай оффис</div>
                <div className={styles.p2}>Зочин нийтлэлчийн булан</div>
                <div className={styles.p2}>8 минутын улс төр</div>
                <div className={styles.p2}>Study Hacks</div>
              </div>
              <div className={styles.baruun}>
                <h5 style={{ color: "#0078f6" }}>Компани</h5>
                <p className={styles.p4}>
                  Улаанбаатар 14240 <br /> СБД, 8-р хороо,Амарын <br /> гудамж,
                  <br />
                  Тэнгэрлиг медиа групп
                </p>
                <div className={styles.p4}>+976 99111111</div>
                <div className={styles.p4} style={{ paddingTop: 30 }}>
                  Зочлох:
                </div>
                <a className={styles.link} href="http://www.unread.media/">
                  www.unread.media
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <AiFillFacebook className={styles.facebook}></AiFillFacebook>
          <IoLogoTwitter id={styles.twitter}></IoLogoTwitter>
          <AiOutlineInstagram id={styles.ig}></AiOutlineInstagram>
          <FaLinkedinIn id={styles.in}></FaLinkedinIn>
          <AiFillYoutube id={styles.yt}></AiFillYoutube>
          <GrSoundcloud id={styles.sc}></GrSoundcloud>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
