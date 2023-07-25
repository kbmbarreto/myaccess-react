import { useState, useEffect } from "react";
import React from "react";
import logoImage from '../../assets/java.png';
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import './styles.css';

export default function Passwords() {

    const [passwords, setPasswords] = useState([]);
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    const history = useHistory();

    async function logout() {
        localStorage.clear();
        history.push('/');
    }

    async function editPassword(id) {
        try {
            history.push(`/password/new/${id}`);
        } catch(ex) {
            alert('Erro ao editar registro, tente novamente.')
        }
    }

    async function deletePassword(id) {
        try {
            await api.delete(`password/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            setPasswords(passwords.filter(password => password.id !== id));
        } catch(ex) {
            alert('Erro ao deletar registro, tente novamente.')
        }
    }

    useEffect(() => {
        async function fetchPasswords() {
            try {
                const response = await api.get('password/${userIdResponse}', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPasswords(response.data);
            } catch (ex) {
                // Tratar erros, se necessário
            }
        }
        fetchPasswords();
    }, [token]);

    return (
        <div className="password-container">
            <header>
                <img src={logoImage} alt="Java" />
                <span>Bem-vindo, <strong>{email && email.charAt(0).toUpperCase() + email.slice(1)}</strong>!</span>
                <Link className="button" to="passwords/new/0">Cadastrar nova senha</Link>
                <button onClick={logout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Senhas cadastradas</h1>
            <ul>
                {passwords.map(password => (
                    <li key={password.id}>
                        <strong>Descrição:</strong>
                        <p>{password.description}</p>
                        <strong>Url:</strong>
                        <p>{password.url}</p>
                        <strong>Usuário:</strong>
                        <p>{password.username}</p>
                        <strong>Senha:</strong>
                        <p>{password.password}</p>
                        <strong>Anotações:</strong>
                        <p>{password.notes}</p>

                        <button onClick={() => editPassword(password.id)} type="button">
                            <FiEdit size={20} color="#a8a8b3" />
                        </button>

                        <button onClick={() => deletePassword(password.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
