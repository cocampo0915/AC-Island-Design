import React from 'react';
import { Element } from 'react-scroll';
import styles from './testimonials.module.css';

const Testimonials = () => {
    return (
        <>
            <Element name="testimonials">
                <section id="testimonials" className={styles.section}>
                    <h2>See what some of our members have to say!</h2>
                </section>
            </Element>
        </>
    )
}

export default Testimonials;