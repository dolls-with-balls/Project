import React, { useContext } from "react";
import style from "../style/headerwhite.module.css";
import headerLogo from "../Assets/logoblack.png";
import Dropdown from "react-bootstrap/Dropdown";

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { DataContext } from "../contexts/DataProvider";
import { Link } from "react-router-dom";
export const HeaderWhite = () => {
  const { user, setUser } = useContext(DataContext);

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem("token");
  };

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
              <AiFillFacebook className={style.fb} />
            </a>
            <a href="">
              <AiOutlineInstagram className={style.ig} />
            </a>
            <a href="">
              <AiOutlineTwitter className={style.tw} />
            </a>
            <a href="">
              <FaLinkedinIn className={style.ln} />
            </a>
          </div>
          {user.length !== 0 && (
            <div className={style.dropdown}>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    background: "transparent",
                    color: "black",
                    border: "none",
                  }}
                >
                  {user && user.username}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className={style.menu}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/profile/${user._id}`}
                    >
                      Profile
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/create"
                    >
                      Create post
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      onClick={logout}
                    >
                      Logout
                    </Link>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
