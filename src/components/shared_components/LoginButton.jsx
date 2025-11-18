import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

// Styles
import styles from "../../styles/shared_components/AuthButtons.module.scss";


const LoginButton = () => {
    
    const { loginWithRedirect, isAuthenticated } = useAuth0();


    return (
        !isAuthenticated && 
        (<button
            className={`${styles.loginButton} ${styles.authButton}`}
            onClick={() => loginWithRedirect()}
        >
            Giriş Yap
        </button>)
    );
}

export default LoginButton;