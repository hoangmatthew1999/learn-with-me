import React, {useState} from "react";
import "./login.css"

    const LoginForm = () => {

        const [popupStyle, showPopup] = useState("hide")

        const popup = () => {
            showPopup("login-popup")
            setTimeout(() => showPopup("hide"), 3000)
        }
        return (
            <div className = "cover">
                <h1>Learn With Us</h1>
                <input type ="text" placeholder ="username" />
                <input type ="password" placeholder ="password" />
            

            <div className="alt-login">
                <div className="Sign-Up"> Sign-Up</div>
                <div className="login-btn" onClick={popup}>Login</div>
            </div>

            <div className= {popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or Password incorrect</p>

            </div>
            </div>

        )


    }
    export default LoginForm