import React from "react";
import "../style/login.css"
export const Login = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            marginTop: 20
        }}>
            <div className="sign-up-container" >
                <div className="left-side-background"></div>
                <div className="email-pass-etc">
                    <h2>Log in</h2>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <button className="login-button">
                        Log in
                    </button>
                    <a href="/login">Don't have an account?</a>
                </div>
            </div>
        </div>
    )
}