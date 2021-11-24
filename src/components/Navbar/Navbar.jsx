import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <>

            <Link
                activeClass="active"
                to="about-us"
                spy={true}
                smooth={true}
                duration={500}
            >About Us</Link>
            <Link
                activeClass="active"
                to="what-we-offer"
                spy={true}
                smooth={true}
                duration={500}
            >What We Offer</Link>
            <Link
                activeClass="active"
                to="join-server"
                spy={true}
                smooth={true}
                duration={500}
            >Join Our Server!</Link>
        </>
    )
}

export default Navbar;