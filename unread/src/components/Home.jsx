import style from "../designs/Home.module.css";
import home from "../assets/Home.png";

export const Home = () => {
  return (
    <div className={style.container}>
      {/* <Header/> */}
      <div className={style.innerContainer}>
        <div className={style.imgContainer}>
          <img src={home} className={style.img} alt="home" />
        </div>
        <div className={style.textContainer}>
          <div className={style.text2}>
            <div>Brand New</div>
          </div>
          <div className={style.text}>
            "The Apprentice" цуврал #10: Шилдэг таван оролцогчийн өрсөлдөөн
          </div>
          <div className={style.publisher}>
            <div>image</div>
            <div>Name</div>
            <div>date</div>
          </div>
        </div>
      </div>
      {/* <Header/> */}
    </div>
  );
};
