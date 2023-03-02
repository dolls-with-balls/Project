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
    <>
      <div className="header-container">
        <div className="left-side-header">
          <div className="logo-search">
            <img className="logo" src={headerLogo} alt="" />
            <p
              style={{
                fontSize: "20px",
                margin: "0px",
                color: "gainsboro"
              }}
            >
              |
            </p>
            <div className="search">
              <BiSearch className="search-icon" />
              <input
                className="search-bar"
                type="text"
                placeholder="Хайлт хийх"
              />
            </div>
          </div>
        </div>
        <div className="right-side-header">
          <div className="navbar-content">
            <div className="nom61n-tuhai">
              <p>Дараагийн нийтлэл:</p>
              <h4>НОМЫН ТУХАЙ</h4>
            </div>
            <button>
              Өнөөдөр орно <li className="dot" />
            </button>
          </div>
          <div className="icon-container">
            <AiFillFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <AiOutlineTwitter className="icon" />
            <FaLinkedinIn className="icon" />
          </div>
        </div>
      </div>
    </>
  );
};
