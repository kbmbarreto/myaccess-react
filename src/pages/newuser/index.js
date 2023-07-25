import React, { useState } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import './styles.css';
import logo from '../../assets/lock.png';

export default function NewUser() {
    const [id, setId] = useState(null);
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { userId } = useParams();
    const history = useHistory();

    async function saveUser(e) {
        e.preventDefault();

        const data = {
            user,
            email,
            password
        };

        try {
            const response = await api.post('user', data);
            if (response.status === 201) {
                alert('Usuário cadastrado com sucesso!');
                history.push('/');
            } else {
                alert('Erro ao salvar usuário, tente novamente.');
            }
        } catch (ex) {
            alert('Erro ao salvar usuário, tente novamente.');
        }
    }

    return (
        <div className="new-user-container">
            <div className="content">
                <section className="form">
                    <img src={logo} alt="Logo" />
                    <h1>Cadastre-se</h1>
                    <p>Adicione as informações e clique em 'Cadastrar'.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para a tela inicial
                    </Link>
                </section>
                <form onSubmit={saveUser}>
                    <input placeholder="Nome"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                    <input placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    );
}
