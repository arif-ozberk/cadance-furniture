import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";

// Pages
import LandingPage from "../pages/LandingPage";
import ProjectsPage from "../pages/ProjectsPage";
import BokPage from "../pages/BokPage";
import ZortPage from "../pages/ZortPage";


const routes = [
    {
        routePath: "/bok-page",
        routeElement: <BokPage />
    },
    {
        routePath: "/zort-page",
        routeElement: <ZortPage />
    },
    {
        routePath: "/projects-page",
        routeElement: <ProjectsPage />
    }
];


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={ <LandingPage /> } />

            {routes.map((routeItem) => (
                <Route key={routeItem.routePath} path={routeItem.routePath} element={routeItem.routeElement} />
            ))}
        </Route>
    )
)