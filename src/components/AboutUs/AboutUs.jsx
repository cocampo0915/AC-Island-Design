import React from 'react';
import { Element } from 'react-scroll';
import JoinButton from '../JoinButton/JoinButton';
import styles from './aboutus.module.css'

const AboutUs = () => {
    return (
        <>
            <Element name="about-us">
                <section id="about-us" className={styles.container}>
                    <div className={styles.imgContent}>
                        <img className={styles.img} src="/ACID Image Content/2021112011324800-02CB906EA538A35643C1E1484C4B947D.jpg" alt="picture of interior room in Animal Crossing, there are mannequin heads with hats, shoes, and various clothing items on hangers" />
                    </div>
                    <div className={styles.textContent}>
                        <h2>About Us</h2>
                        <p>Featuring well over 50 categories and 20,000+ designs we have the largest library on the internet of custom design patterns for your every possible need. Easily searchable with each creation linked and credited where possible there's almost nothing you won't be able to find!</p>
                    </div>
                </section>
            </Element>
        </>
    )
}

export default AboutUs;