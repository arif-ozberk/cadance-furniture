import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

// Styles
import styles from "../styles/page_styles/projectsPage_styles/ProjectsPage.module.scss";

// Wrappers
import PageWrapper from '../wrappers/PageWrapper';


const ProjectsPage = () => {

    const { user, isAuthenticated } = useAuth0();

    return (
        <PageWrapper>
            ProjectsPage
            {isAuthenticated && <p>{JSON.stringify(user)}</p>}
        </PageWrapper>
    );
}

export default ProjectsPage;