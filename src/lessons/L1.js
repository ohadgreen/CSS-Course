import React from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import './L1.css';

export const L1 = (props) => {
    return (
        <div className="main-page">
        <Header />
        <Body />
        <Footer />
        </div>
    );
}
