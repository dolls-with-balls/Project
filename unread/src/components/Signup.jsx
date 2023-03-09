import React, { useRef } from "react";
import { client } from "../client";
import "../style/signup.css"
import { useNavigate } from "react-router-dom"
import { AxiosError } from "axios";

export const Signup = () => {
    const navigate=useNavigate();
    const username=useRef();
    const email=useRef();
    const password=useRef();
    const confirmPassword=useRef();

    async function Signup () {
        const userInput=username.current.value;
        const emailInput=email.current.value;
        const passwordInput=password.current.value;
        const confirmPasswordInput=confirmPassword.current.value;


        await client.post("/signup",{email:emailInput, username:userInput , password:passwordInput , passwordConfirm:confirmPasswordInput})
            .then(async(res)=>{
                if(res){
                    navigate("/login");
                }
            }).catch((err)=>{
                console.log(err)
            })
       
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
                    <input type="text" placeholder="Username" ref={username}/>
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