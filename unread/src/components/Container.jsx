import styles from "../styles/Container.module.css";
import { AiFillEye } from "react-icons/ai";
import { IoIosText } from "react-icons/io";

export const Container = () => {
  return (
    <div className={styles.allcard}>
      <div className={styles.cards}>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.card1}>
              <div className={styles.minute}>9мин</div>
              <div className={styles.text}>
                <div
                  style={{
                    color: "#fff",
                    opacity: 0.6,
                    fontSize: 12,
                    paddingLeft: 10,
                    marginLeft: 10,
                  }}
                >
                  7 Хоногийн Тойм
                </div>
                <div style={{ display: "flex", paddingLeft: 10 }}>
                  <h4 style={{ color: "#eee", margin: 10 }}>
                    MWC-ийн сонин + ChatGPT-ийн
                  </h4>
                  <div className={styles.icon}>
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
            <div className={styles.card2}>
              <div className={styles.minute}>3мин</div>
              <div className={styles.text}>
                <div
                  style={{
                    color: "#fff",
                    opacity: 0.6,
                    fontSize: 12,
                    paddingLeft: 10,
                    marginLeft: 10,
                  }}
                >
                  Чөлөөт
                </div>
                <div style={{ display: "flex", paddingLeft: 10 }}>
                  <h4 style={{ color: "#eee", margin: 10 }}>
                    Танилцуулах нь: Геотехникийн
                  </h4>
                </div>
              </div>
            </div>
            <div className={styles.card3}>
              <div className={styles.minute}>3мин</div>
              <div className={styles.text}>
                <div
                  style={{
                    color: "#fff",
                    opacity: 0.6,
                    fontSize: 12,
                    paddingLeft: 10,
                    marginLeft: 10,
                  }}
                >
                  Чөлөөт
                </div>
                <div style={{ display: "flex", paddingLeft: 10 }}>
                  <h4 style={{ color: "#eee", margin: 10 }}>
                    Танилцуулах нь: Геотехникийн
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.card4}>
              <div className={styles.minute}>3мин</div>
              <div className={styles.text}>
                <div
                  style={{
                    color: "#fff",
                    opacity: 0.6,
                    fontSize: 12,
                    paddingLeft: 10,
                    marginLeft: 10,
                  }}
                >
                  Чөлөөт
                </div>
                <div style={{ display: "flex", paddingLeft: 10 }}>
                  <h4 style={{ color: "#eee", margin: 10 }}>
                    Танилцуулах нь: Геотехникийн
                  </h4>
                </div>
              </div>
            </div>
            <div className={styles.card5}>
              <div className={styles.minute}>3мин</div>
              <div className={styles.text}>
                <div
                  style={{
                    color: "#fff",
                    opacity: 0.6,
                    fontSize: 12,
                    paddingLeft: 10,
                    marginLeft: 10,
                  }}
                >
                  Чөлөөт
                </div>
                <div style={{ display: "flex", paddingLeft: 10 }}>
                  <h4 style={{ color: "#eee", margin: 10 }}>
                    Танилцуулах нь: Геотехникийн
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.card6}>
              <div className={styles.minute}>3мин</div>
              <div className={styles.text}>
                <div
                  style={{
                    color: "#fff",
                    opacity: 0.6,
                    fontSize: 12,
                    paddingLeft: 10,
                    marginLeft: 10,
                  }}
                >
                  Чөлөөт
                </div>
                <div style={{ display: "flex", paddingLeft: 10 }}>
                  <h4 style={{ color: "#eee", margin: 10 }}>
                    Танилцуулах нь: Геотехникийн
                  </h4>
                </div>
              </div>
            </div>
            <div className={styles.card7}>
              <div className={styles.minute}>3мин</div>
              <div className={styles.text}>
                <div
                  style={{
                    color: "#fff",
                    opacity: 0.6,
                    fontSize: 12,
                    paddingLeft: 10,
                    marginLeft: 10,
                  }}
                >
                  Чөлөөт
                </div>
                <div style={{ display: "flex", paddingLeft: 10 }}>
                  <h4 style={{ color: "#eee", margin: 10 }}>
                    Танилцуулах нь: Геотехникийн
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
