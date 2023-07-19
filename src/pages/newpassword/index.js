import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import './styles.css';
import logo from '../../assets/lock.png';

export default function NewPassword() {
    return (
        <div className="newpassword-container">
            <div className="content">
                <section className="form">
                    <img src={logo} alt="Logo" />
                    <h1>Adicionar novo registro</h1>
                    <p>Adicione as informações e clique em 'Adicionar'.</p>
                    <Link className="back-link" to="/passwords">
                        <FiArrowLeft size={16} color="#E02041" />
                        Home
                    </Link>
                </section>
                <form>
                    <input placeholder="Descrição" />
                    <input placeholder="Url" />
                    <input placeholder="Usuário" />
                    <input placeholder="Senha" />
                    <input placeholder="Anotações" />

                    <button className="button" type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    );
}