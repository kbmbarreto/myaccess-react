import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
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

    const { passwordId } = useParams();

    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    let userIdResponse = null;

    const history = useHistory();

    useEffect(() => {
        if (passwordId === '0') return;
        else loadPassword();
    }, [passwordId])

    async function loadPassword() {
        try {
            const response = await api.get(`password/${passwordId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            setId(response.data.id);
            setDescription(response.data.description);
            setUrl(response.data.url);
            setUsername(response.data.username);
            setPassword(response.data.password);
            setNotes(response.data.notes);
            setUser(userIdResponse);
        } catch (ex) {
            alert('Falha ao carregar registro, tente novamente.')
            history.push('/passwords');
        }
    }

    useEffect(() => {
        if (passwordId === '0') return;
        else loadPassword();

        async function fetchUserId() {
            try {
                const response = await api.get(`user/email/${email}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                userIdResponse = (response.data.id);
            } catch (ex) {
                alert('Falha ao buscar o ID do usuário.');
                console.error('Falha ao buscar o ID do usuário: ' + ex);
            }
        }

        fetchUserId();
    }, [passwordId, email, token]);

    async function saveOrUpdate(e) {
        e.preventDefault();

        const data = {
            description,
            url,
            username,
            password,
            notes,
            user,
        }

        try {
            if (passwordId === '0') {
                await api.post('password', data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            } else {
                data.id = id;
                await api.put(`password/${passwordId}`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
            history.push('/passwords');
        } catch (ex) {
            alert('Falha ao adicionar novo registro, tente novamente.')
        }
    }

    return (
        <div className="newpassword-container">
            <div className="content">
                <section className="form">
                    <img src={logo} alt="Logo" />
                    <h1>{passwordId === '0' ? 'Adicionar novo' : 'Editar'} registro</h1>
                    <p>Adicione as informações e clique em '{passwordId === '0' ? "Adicionar" : "Editar"}'.</p>
                    <Link className="back-link" to="/passwords">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para a tela inicial
                    </Link>
                </section>
                <form onSubmit={saveOrUpdate}>
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

                    <button className="button" type="submit">{passwordId === '0' ? 'Adicionar' : 'Editar'}</button>
                </form>
            </div>
        </div>
    );
}