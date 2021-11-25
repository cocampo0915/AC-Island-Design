import React from "react";
import JoinButton from "../JoinButton/JoinButton";
import styles from './home.module.css';

const Home = () => {
    return (
        <>
            <section id="home" className={styles.container}>
                <div className={styles.textItems}>
                    <h1>Animal Crossing</h1>
                    <h1>Island Design</h1>
                    <p>AC: Island Design is a Discord based resource for
                        user-created custom designs in Animal Crossing: New Horizons.</p>
                    <h2>Join Our Server Today!</h2>
                    <JoinButton />
                </div>
                <div className={styles.imgItems}>
                    <div className={styles.imgContent}>
                        <img className={styles.img} src="/ACID Image Content/2021112809593500-02CB906EA538A35643C1E1484C4B947D.jpg" alt="picture of interior room in Animal Crossing" />
                    </div>
                    <div className={styles.imgContent}>
                        <img className={styles.img} src="/ACID Image Content/2021112715524400-02CB906EA538A35643C1E1484C4B947D.jpg" alt="picture of interior room in Animal Crossing" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;