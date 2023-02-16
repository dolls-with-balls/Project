import React from "react";
import sideBackground from "../assets/side.png"
export const Signup = () => {
    return (
        <>
            <div style={{
                display: "flex",
                borderRadius: "25px",
                backgroundColor: "white",
                boxShadow: "0px 0px 15px -10px",
                height: "80%",
                width: "60%",
                overflow: "hidden"
            }}>
                <div style={{
                    width: "45%",
                    backgroundImage: `url(${sideBackground})`,
                    backgroundPositionX: "0",
                    backgroundSize: "120%"
                }}></div>
                <div style={{
                    width: "55%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "30px"
                }}>
                    <h2 style={{
                        margin: "0",
                        color: "#30D5C8"
                    }}>Sign up</h2>
                    <input style={{
                        outline: "none",
                        padding: "10px",
                        borderRadius: "25px",
                        boxShadow: "0px 0px 15px -8px",
                        border: "none"
                    }} type="text" placeholder="Email" />
                    <input style={{
                        outline: "none",
                        padding: "10px",
                        borderRadius: "25px",
                        boxShadow: "0px 0px 15px -8px",
                        border: "none"
                    }} type="text" placeholder="Password" />
                    <input style={{
                        outline: "none",
                        padding: "10px",
                        borderRadius: "25px",
                        boxShadow: "0px 0px 15px -8px",
                        border: "none"
                    }} type="text" placeholder="Confirm Password" />
                    <button style={{ outline: "none",
                        padding: "10px",
                        borderRadius: "25px",
                        boxShadow: "0px 0px 15px -8px",
                        border: "none", 
                        color: "white",
                        backgroundColor: "#30D5C8",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                        fontSize: "20px"}}>
                        Sign up
                    </button>
                </div>
            </div>
        </>
    )
}