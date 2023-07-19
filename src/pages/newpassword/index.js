import React, {useState} from "react";
import { useHistory, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import './styles.css';
import logo from '../../assets/lock.png';

export default function NewPassword() {

    const [id, setId] = useState(null);
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notes, setNotes] = useState('');
    const [user, setUser] = useState('');

    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    const history = useHistory();

    async function newPassword(e) {
        e.preventDefault();

        const data = {
            description,
            url,
            username,
            password,
            notes,
            user,
        }

        const header = {
            Authorization: `Bearer ${token}`
        }

        try {
            const response = await api.post('password', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            history.push('/passwords');
        } catch(ex) {
            alert('Falha ao adicionar novo registro, tente novamente.')
        }
    }

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
                <form onSubmit={newPassword}>
                    <input placeholder="Descrição" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input placeholder="Url" 
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    />
                    <input placeholder="Usuário" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input placeholder="Senha" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input placeholder="Anotações" 
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                    />
                    <input placeholder="Usuário"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />

                    <button className="button" type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    );
}