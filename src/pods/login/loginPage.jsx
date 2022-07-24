
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from "../../layouts/navBar.jsx";
import { useContext} from "react";
import { AuthContext } from "../../core/auth/index.js";

export const LoginPage = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    //Habilitamos replace a true para que no se pueda volver hacia atrás
    const onLogin = () => {
        login('juan');
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