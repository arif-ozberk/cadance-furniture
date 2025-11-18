import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

// Styles
import styles from "../../styles/shared_components/AuthButtons.module.scss";


const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated &&
        (<button
            className={`${styles.logoutButton} ${styles.authButton}`}
            onClick={() => logout()}
        >
            Çıkış Yap
        </button>)
    );
}

export default LogoutButton;