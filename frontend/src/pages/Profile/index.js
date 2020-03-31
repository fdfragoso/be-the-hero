import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [cases, setCases] = useState([]);

    const ngoName = localStorage.getItem('ngoName');
    const ngoId = localStorage.getItem('ngoId');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ngoId,  
            }
        }).then(response => {
            setCases(response.data);
        })
    }, [ngoId]);

    async function handleDeleteCase(id) {
        try {
            await api.delete(`cases/${id}`, {
              headers: {
                Authorization: ngoId,
              }
            });
        } catch (err) {
            alert('Error to delete case. Please try again');
        }
    }
     
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                    <span>Welcome, {ngoName}</span>

                <Link className="button" to="/cases/new">Register new case</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Registered cases</h1>

            <ul>
                {cases.map(_case => (
                    <li key={_case.id}>
                        <strong>CASE:</strong>
                        <p>{_case.title}</p>

                        <strong>DESCRIPTION:</strong>
                        <p>{_case.description}</p>
                        
                        <strong>VALUE:</strong>
                        <p>{Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' }).format(_case.value)}</p>

                        <button onClick={() => handleDeleteCase(_case.id)} type="button">  
                            <FiTrash2 size={20} color={"#a8a8b3"} />                 
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}