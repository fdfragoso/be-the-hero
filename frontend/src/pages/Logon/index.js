import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ngoId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        }
        catch (err) {
            alert('Failed to sing in. Please, try again.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Sing in</h1>

                    <input 
                        placeholder="Your ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Enter</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Sign up
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}