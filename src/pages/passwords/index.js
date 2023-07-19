import { useState, useEffect } from "react";
import React from "react";
import logoImage from '../../assets/java.png';
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import './style.css';

export default function Passwords() {

    const [passwords, setPasswords] = useState([]);

    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    const history = useHistory();

    useEffect(() => {
        api.get('password/1', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(response => {
            setPasswords(response.data);
        })
    })

    return (
        <div className="password-container">
            <header>
                <img src={logoImage} alt="Java" />
                <span>Bem-vindo, <strong>{email.toLowerCase()}</strong> !</span>
                <Link className="button" to="passwords/new">Cadastrar nova senha</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Senhas cadastradas</h1>
            <ul>
                {passwords.map(password => (
                    <li>
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
                
                        <button type="button">
                        <FiEdit size={20} color="#a8a8b3" />
                        </button>
                
                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}