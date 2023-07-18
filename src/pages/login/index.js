import React from "react";
import './styles.css';

import logo from '../../assets/java.png';

export default function Login() {
    return (
       <div className="login-container">
            <section className="form">

            <form>
                <h1>MyAccess</h1>
                <input placeholder="Seu usuário"/>
                <input type="password" placeholder="Sua senha"/>

                <button className="button" type="submit">Entrar</button>
            </form>

            </section>

            <img src={logo} alt="Logo"/>

       </div>
    );
}