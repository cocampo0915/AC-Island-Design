import React from 'react';
import { Element } from 'react-scroll';
import styles from './whatweoffer.module.css';

const WhatWeOffer = () => {
    return (
        <>
            <Element name="what-we-offer">
                <section id="what-we-offer" className={styles.container}>
                    <div className={styles.textContent}>
                        <h2>What We Offer</h2>
                        <p>Request help designing your island on our boards or even have our staff try to locate a specific design that just keeps eluding you. Enjoy a large collection of design guides and references as well as having the option to submit your own!</p>
                    </div>
                    <div className={styles.imgContent}>
                        <div className={styles.images}>
                            <img className={styles.img1} src="/ACID_Discord/ACID_Discord_06.png" alt="discord comment from a server user" />
                            <img className={styles.img2} src="/ACID_Discord/ACID_Discord_07.png" alt="discord comment from a server user" />
                            <img className={styles.img3} src="/ACID_Discord/ACID_Discord_08.png" alt="discord comment from a server user" />
                        </div>

                        <div className={styles.circle1}></div>
                        <div className={styles.circle2}></div>
                        <div className={styles.circle3}></div>
                    </div>
                </section>
            </Element>
        </>
    )
}

export default WhatWeOffer;