import React from "react";
import style from "../style/headerwhite.module.css";
import headerLogo from "../assets/logo1.png";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
export const HeaderWhite = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.headerCenter}>
        <div className={style.headerNav}>
          <div className={style.headerSearch}>
            <a href="/">
              <img className={style.logo} src={headerLogo} alt="" />
            </a>
            <span className={style.divider}></span>
            <form className={style.headerForm} action="/search">
              <BiSearch className={style.searchIcon} />
              <input
                className={style.searchBar}
                placeholder="Хайлт хийх"
                type="text"
              />
            </form>
          </div>
          <div className={style.headerFlip}>
            <span className={style.opacity05}>Дараагийн нийтлэл:</span>
            <span className={style.nextArticleCategory}>Номын тухай</span>
            <button className={style.headerButton}>
              Өнөөдөр орно <li className={style.dot}></li>
            </button>
          </div>
          <div className={style.socialLinks}>
            <a href="">
              <AiFillFacebook
                className={style.fb}
              />
            </a>
            <a href="">
              <AiOutlineInstagram
                className={style.ig}
              />
            </a>
            <a href="">
              <AiOutlineTwitter
                className={style.tw}
              />
            </a>
            <a href="">
              <FaLinkedinIn
                className={style.ln}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};