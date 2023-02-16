import React from "react";
import "../style/login.css"
export const Login = () => {
    return (
        <>
            <div className="sign-up-container" >
                <div className="left-side-background"></div>
                <div className="email-pass-etc">
                    <h2>Log in</h2>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <button className="signup-button">
                        Log in
                    </button>
                    <a href="/signup">Don't have an account?</a>
                </div>
            </div>
        </>
    )
}