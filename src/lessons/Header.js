import React from 'react';
import './Header.css';

export const Header = (props) => {
    return (
            <header className="main-header">
                <div>
                    <a href="index.html" className="main-header__brand">uHost</a>
                </div>
                <nav className="main-nav">
                    <ul className="main-nav__items">
                        <li className="main-nav__item">
                            <a href="packages/index.html">Packages</a>
                        </li>
                        <li className="main-nav__item">
                            <a href="customers/index.html">Customers</a>
                        </li>
                        <li className="main-nav__item">
                            <a href="start-hosting/index.html">Start Hosting</a>
                        </li>
                    </ul>
                </nav>
            </header>
    );
}
