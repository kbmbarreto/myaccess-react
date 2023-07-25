import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import './styles.css';

import api from "../../services/api";

import logo from '../../assets/java.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    async function login(e) {
        e.preventDefault();

        const data = {
            email,
            password,
        };

        try {
            const response = await api.post('authenticate', data);

            localStorage.setItem('email', email);
            localStorage.setItem('token', response.data.token);

            history.push('/passwords');
        } catch(ex) {
            setErrorMessage('Falha no login, verifique suas credenciais e tente novamente.');
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <form onSubmit={login}>
                    <h1>MyAccess</h1>
                    <input
                        placeholder="Seu usuário"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <button className="button" type="submit">Entrar</button>
                </form>
                <Link to="/new/user" className="new-user-link">Não tem acesso? Cadastre-se!</Link>
            </section>

            <img src={logo} alt="Logo" />
        </div>
    );
}
