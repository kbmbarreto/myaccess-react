import React from "react";
import './styles.css';

import logo from '../../assets/java.png';
import padlock from '../../assets/lock.png';

export default function Login() {
    return (
       <div className="login-container">
            <section className="form">
            <img src={logo} alt="Logo"/>

            <form>
                <h1>MyAccess v2</h1>
                <input placeholder="Seu usuário"/>
                <input type="password" placeholder="Sua senha"/>

                <button className="button" type="submit">Entrar</button>
            </form>

            </section>

            <img src={padlock} alt="Login"/>

       </div>
    );
}