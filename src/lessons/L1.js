import React from 'react';
import './L1.css';

export const L1 = (props) => {
    return (
        <div className="main-page">
        <header className="main-header">
            <div>
                <a href="index.html">uHost</a>
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
            <section id="product-overview">
            <h1 className="h1">
                Get the Freedom You Deserve
          </h1>
        </section>
        <section id="">
            <h1 className="section-title">
                Choose Your Plan
        </h1>
        <h3>Make sure you get the most for your money</h3>
        </section>
        </div>
    );
}
