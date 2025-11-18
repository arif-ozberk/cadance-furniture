import React from 'react'

// Styles
import "../styles/globals.scss";

// Components
import Navbar from '../components/shared_components/Navbar';


const PageWrapper = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default PageWrapper;