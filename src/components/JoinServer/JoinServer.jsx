import React from 'react';
import { Element } from 'react-scroll';
import JoinButton from '../JoinButton/JoinButton';
import styles from './joinserver.module.css';

const JoinServer = () => {
    return (
        <>
            <Element name="join-server">
                <section id="join-server" className={styles.section}>
                    <h2>Join Our Server Today!</h2>
                    <JoinButton />
                </section>
            </Element>
        </>
    )
}

export default JoinServer;