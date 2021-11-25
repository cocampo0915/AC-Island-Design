import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './header.module.css';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <img src="/favicon.ico" style={{ height: '8vh' }} />
                <Navbar />
            </header>
        </>
    )
}

export default Header;