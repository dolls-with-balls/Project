import React, { useRef } from "react";
import "../style/login.css"
import { client } from "../client";
import {useNavigate} from "react-router-dom"

export const Login = () => {
    const navigate=useNavigate();
    const username=useRef();
    const password=useRef();

    async function Login(){
        const usernameInput=username.current.value;
        const passwordInput=password.current.value;

        await client.post("/login",{username:usernameInput , password:passwordInput})
            .then(async(res)=>{
                if(res){
                    localStorage.setItem("token" , res.data);
                    navigate("/")
                }
            }).catch((err)=>{
                console.log(err);
            })
    }

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
                    <input type="text" placeholder="Username" ref={username}/>
                    <input type="text" placeholder="Password" ref={password}/>
                    <button onClick={Login} className="login-button">
                        Log in
                    </button>
                    <a href="/login">Don't have an account?</a>
                </div>
            </div>
        </div>
    )
}