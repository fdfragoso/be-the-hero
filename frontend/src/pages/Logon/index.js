import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero"/>

                <form>
                    <h1>Sing in</h1>

                    <input placeholder="Your ID" />
                    <button type="submit">Enter</button>

                    <FiLogIn size={16} color="#E02041"/>
                    <a href="/register">Sign up</a>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}