import React from "react";
import '../style/header.css'
import headerLogo from '../assets/logo.png'
export const Header = () => {
    return (
        <>
        <div className="header-container">
            <div className="left-side-header">
                <div className="logo-search">

                    <img className="logo" src={headerLogo} alt="" />
                    <p style={{
                        fontSize: "20px",
                        margin: "0px"
                    }}>|</p>
                <input className="search" type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="right-side-header">
                <div className="nom61n-tuhai">
                <p>Дараагийн нийтлэл:</p>
                <h4>НОМЫН ТУХАЙ</h4>
                </div>
                <button>Өнөөдөр орно <li className="dot"/></button>
            </div>
        </div>
        </>
    )
}