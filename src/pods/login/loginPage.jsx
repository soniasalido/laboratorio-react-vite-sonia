
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {NavBar} from "../../layouts/navBar.jsx";

export const LoginPage = () => {

    const navigate = useNavigate();

    //Habilitamos replace a true para que no se pueda volver hacia atrás
    const onLogin = () => {
        navigate('/members',
            {replace: true}
        );
    }


    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h1>Login</h1>
                <hr />

                <button
                    className="btn btn-primary"
                    onClick={ onLogin }
                >
                    Login
                </button>

            </div>
        </>
    )
}