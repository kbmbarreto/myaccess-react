import React from "react";
import './style.css';
import logoImage from '../../assets/java.png';
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";

export default function Passwords() {
    return (
        <div className="password-container">
            <header>
                <img src={logoImage} alt="Java" />
                <span>Bem-vindo, <strong>Kleber</strong>!</span>
                <Link className="button" to="passwords/new">Cadastrar nova senha</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Senhas cadastradas</h1>
            <ul>
                <li>
                    <strong>Descrição:</strong>
                    <p>Santander</p>
                    <strong>Url:</strong>
                    <p>https://santander.com.br</p>
                    <strong>Usuário:</strong>
                    <p>1234567-8</p>
                    <strong>Senha:</strong>
                    <p>000000</p>
                    <strong>Anotações:</strong>
                    <p>Senha eletrônica: 777777</p>

                    <button type="button">
                        <FiEdit size={20} color="#a8a8b3" />
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Descrição:</strong>
                    <p>Santander</p>
                    <strong>Url:</strong>
                    <p>https://santander.com.br</p>
                    <strong>Usuário:</strong>
                    <p>1234567-8</p>
                    <strong>Senha:</strong>
                    <p>000000</p>
                    <strong>Anotações:</strong>
                    <p>Senha eletrônica: 777777</p>

                    <button type="button">
                        <FiEdit size={20} color="#a8a8b3" />
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Descrição:</strong>
                    <p>Santander</p>
                    <strong>Url:</strong>
                    <p>https://santander.com.br</p>
                    <strong>Usuário:</strong>
                    <p>1234567-8</p>
                    <strong>Senha:</strong>
                    <p>000000</p>
                    <strong>Anotações:</strong>
                    <p>Senha eletrônica: 777777</p>

                    <button type="button">
                        <FiEdit size={20} color="#a8a8b3" />
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Descrição:</strong>
                    <p>Santander</p>
                    <strong>Url:</strong>
                    <p>https://santander.com.br</p>
                    <strong>Usuário:</strong>
                    <p>1234567-8</p>
                    <strong>Senha:</strong>
                    <p>000000</p>
                    <strong>Anotações:</strong>
                    <p>Senha eletrônica: 777777</p>

                    <button type="button">
                        <FiEdit size={20} color="#a8a8b3" />
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}