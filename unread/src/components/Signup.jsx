import React from "react";
import "../style/signup.css"
export const Signup = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            overflow: "hidden"
        }}>
            <div className="sign-up-container" >
                <div className="left-side-background"></div>
                <div className="email-pass-etc">
                    <h2>Sign up</h2>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <input type="text" placeholder="Confirm Password" />
                    <button className="signup-button">
                        Sign up
                    </button>
                    <a href="/login">Already have an account?</a>
                </div>
            </div>
        </div>
    )
}