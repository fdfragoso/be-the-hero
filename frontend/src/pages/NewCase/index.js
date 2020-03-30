import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewCase() {
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

            <form>
                <input placeholder="Case Title" />
                <textarea placeholder="Description" />
                <input placeholder="Value in DKK" />
                

                <button className="button" type="submit">Sign Up</button>
            </form>
        </div>
    </div>
    );
}