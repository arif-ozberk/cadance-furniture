import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

// Styles
import styles from "../../styles/shared_components/AuthButtons.module.scss";


const SignUpButton = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();


    return (
        !isAuthenticated && 
        (<button
            className={`${styles.loginButton} ${styles.authButton}`}
            onClick={() => loginWithRedirect({
                authorizationParams: {
                    screen_hint: "signup"
                }
            })}
        >
            Üye Ol
        </button>)
    );
}

export default SignUpButton;