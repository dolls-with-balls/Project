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
            <div className={styles.btn} style={{marginTop: 40}}>
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
              <button className={styles.button}>></button>
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
                  }}
                >
                  Эвент дээр хамтрах
                </div>
              </div>
              <button className={styles.button}>></button>
            </div>
            <div style={{marginTop: 50}}>
              <img src={apple} style={{ width: 130 }}></img>
              <img src={samsung} style={{ width: 130, marginLeft: 20 }}></img>
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
        <div className={styles.bottom}></div>
      </div>
    </>
  );
};
