import React from 'react';
import styles from './joinbutton.module.css';

const JoinButton = () => {
    function handleClick() {
        window.open('https://discord.gg/8avKM8T', '_blank')
    }

    return (
        <>
            <button className={styles.button} onClick={handleClick} target="_blank">Click here to join!</button>
        </>
    )
}

export default JoinButton;