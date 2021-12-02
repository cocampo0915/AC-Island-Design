import React from 'react';
import { Element } from 'react-scroll';
import styles from './testimonials.module.css';

const Testimonials = () => {
    return (
        <>
            <Element name="testimonials">
                <section id="testimonials" className={styles.section}>
                    <h2>See what some of our members have to say!</h2>
                    <img className={styles.img} src="/ACID_Discord/ACID_Discord_02.png" alt="discord comment from a server user" />
                    <img className={styles.img} src="/ACID_Discord/ACID_Discord_01.png" alt="discord comment from a server user" />
                    <img className={styles.img} src="/ACID_Discord/ACID_Discord_03.png" alt="discord comment from a server user" />
                    <img className={styles.img} src="/ACID_Discord/ACID_Discord_05.png" alt="discord comment from a server user" />
                </section>
            </Element>
        </>
    )
}

export default Testimonials;