import React from "react";
import "../style/header.css";
import headerLogo from "../assets/logo.png";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-center">
        <div className="header-nav">
          <div className="header-search">
            <a href="/">
              <img className="logo" src={headerLogo} alt="" />
            </a>
            <span className="divider"></span>
            <form className="header-form" action="/search">
              <BiSearch className="search-icon"/>
              <input className="search-bar" placeholder="Хайлт хийх" type="text" />
            </form>
          </div>
          <div className="header-flip">
            <span className="opacity05">Дараагийн нийтлэл:</span>
            <span className="next-article-category">Номын тухай</span>
            <button className="header-button">Өнөөдөр орно <li className="dot"></li></button>
          </div>
          <div className="social-links">
            <AiFillFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <AiOutlineTwitter className="icon" />
            <FaLinkedinIn className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
