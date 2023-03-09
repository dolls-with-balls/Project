import React, { useRef } from "react";
import { client } from "../client";
import "../style/signup.css"

export const Signup = () => {
    const email=useRef();
    const password=useRef();
    const confirmPassword=useRef();

    async function Signup () {
        console.log(1)
        const emailInput=email.current.value;
        const passwordInput=password.current.value;
        const confirmPasswordInput=confirmPassword.current.value;


        if(passwordInput === confirmPasswordInput){
            await client.post("/signup",{email:emailInput , password:passwordInput})
                .then(async(res)=>{
                    console.log(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
        }
       
    }

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
                    <input type="text" placeholder="Email" ref={email}/>
                    <input type="text" placeholder="Password" ref={password}/>
                    <input type="text" placeholder="Confirm Password" ref={confirmPassword}/>
                    <button onClick={Signup} className="signup-button">
                        Sign up
                    </button>
                    <a href="/login">Already have an account?</a>
                </div>
            </div>
        </div>
    )
}