
import React from 'react';
import {NavBar} from "../layouts/navBar";

export const AboutPage = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h1>About</h1>
                <hr />
                <p>
                    This is the about page.
                </p>
            </div>
        </>

    )
}