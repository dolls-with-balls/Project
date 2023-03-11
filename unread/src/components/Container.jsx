import styles from "../styles/Container.module.css";
import { AiFillEye } from "react-icons/ai";
import { IoIosText } from "react-icons/io";

export const Container = () => {
  return (
    <>
      <div className={styles.cards}>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.card1}>
              <div className={styles.minute}>9мин</div>
              <div className={styles.text}>
                <div style={{ color: "#fff", opacity: 0.6, fontSize: 12 }}>
                  7 Хоногийн Тойм
                </div>
                <div style={{ display: "flex" }}>
                  <h4 style={{ color: "#eee" }}>
                    MWC-ийн сонин + ChatGPT-ийн хэрэглээ + Tesla-ийн төлөвлөгөө
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      float: "right",
                      marginTop: 50,
                      marginRight: 10,
                    }}
                  >
                    <AiFillEye style={{ color: "#fff", opacity: 0.6 }} />
                    <div style={{ color: "#fff", opacity: 0.6 }}>2435</div>
                  </div>
                  <div
                    style={{ display: "flex", marginTop: 50, marginRight: 10 }}
                  >
                    <IoIosText style={{ color: "#fff", opacity: 0.6 }} />
                    <div style={{ color: "#fff", opacity: 0.6 }}>0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.card2}></div>
            <div className={styles.card3}>f</div>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.card4}>f</div>
            <div className={styles.card5}>f</div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.card6}>f</div>
            <div className={styles.card7}>f</div>
          </div>
        </div>
      </div>
    </>
  );
};
