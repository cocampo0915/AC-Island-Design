import React from 'react';
import { Link } from 'react-scroll';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link
                            activeClass="active"
                            to="about-us"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >About Us</Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="what-we-offer"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >What We Offer</Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="join-server"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >Join Our Server!</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;