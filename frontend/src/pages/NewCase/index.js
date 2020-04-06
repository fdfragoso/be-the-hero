import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function NewCase() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ngoId = localStorage.getItem('ngoId');

    const history = useHistory();

    async function handleNewCase(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('cases', data, {
                headers: {
                    Authorization: ngoId,
                }
            })

            history.push('/profile'); 
        } catch (err) {
            alert('Error to save a new case. Please try again.')
        }
    }

    return (
        <div className="new-case-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be the hero"/>

                <h1>Register new case</h1>
                <p>
                    Describe the case to find some hero to help you out.
                </p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" />
                    Back to main page
                </Link>
            </section>

            <form onSubmit={handleNewCase}>
                <input 
                    placeholder="Case Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)} 
                />
                <textarea 
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input 
                    placeholder="Value in DKK"
                    value={value}
                    onChange={e => setValue(e.target.value)}                

                <button className="button" type="submit">Sign Up</button>
            </form>
        </div>
    </div>
    );
}