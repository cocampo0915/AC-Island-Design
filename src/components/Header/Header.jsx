import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './header.module.css';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <img src="/ACID_Logo_Green-revised 1.png" />
                <Navbar />
            </header>
        </>
    )
}

export default Header;