import styles from "../style/footer.module.css";
import logo from "../assets/logo.png";
import apple from "../assets/apple.png";
import samsung from "../assets/samsung.png";

export const Footer = () => {
  return (
    <>
      <div className={styles.all}>
        <div className={styles.top}>
          <div className={styles.left}>
            <img src={logo} style={{ width: 150, height: 20 }}></img>
            <div className={styles.btn} style={{ marginTop: 40 }}>
              <div style={{ margin: 25 }}>
                <div style={{ fontSize: 10, color: "gray" }}>
                  Хамтран ажиллах хүсэлт илгээх
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: 15,
                    margin: 5,
                    marginLeft: 0,
                  }}
                >
                  Контент нийтлүүлэх
                </div>
              </div>
              <button className={styles.button}>{">"}</button>
            </div>
            <div className={styles.btn} style={{ marginTop: 20 }}>
              <div style={{ margin: 25 }}>
                <div style={{ fontSize: 10, color: "gray" }}>
                  Хамтран ажиллах хүсэлт илгээх
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: 15,
                    margin: 5,
                    marginLeft: 0,
                    cursor: "pointer",
                  }}
                >
                  Эвент дээр хамтрах
                </div>
              </div>
              <button className={styles.button} style={{ cursor: "pointer" }}>
                {">"}
              </button>
            </div>
            <div style={{ marginTop: 50 }}>
              <img src={apple} style={{ width: 130 }}></img>
              <img src={samsung} style={{ width: 130, marginLeft: 20 }}></img>
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
                <div className={styles.p2}>Булангууд</div>
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
              <div className={styles.gol}></div>
              <div className={styles.baruun}></div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}></div>
      </div>
    </>
  );
};
