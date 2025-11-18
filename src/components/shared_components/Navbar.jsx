import React from 'react'
import { Link } from 'react-router';

// Styles
import styles from "../../styles/shared_components/Navbar.module.scss";

// Components
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import LogoutButton from './LogoutButton';


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link className={styles.logo} to="/" >CADANCE <span>DESIGN STUDIO</span></Link>

            <div className={styles.authButtonsSection}>
                <SignUpButton />
                <LoginButton />
                <LogoutButton />
            </div>
        </div>
    );
}

export default Navbar;