import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero"/>

                    <h1>Sign up</h1>
                    <p>
                        Sign up and help people find cases from NGOs.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Sign up
                    </Link>
                </section>

                <form>
                    <input placeholder="NGO Name" />
                    <input type="email" placeholder="Email" />
                    <input placeholder="Whatsapp" />

                    <div className="input-group">
                        <input placeholder="City" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}