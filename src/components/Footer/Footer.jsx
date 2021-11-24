import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <p className={styles.text}>Copyright &copy; 2021 Animal Crossing: Island Design.</p>
                <p className={styles.text}>All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer;