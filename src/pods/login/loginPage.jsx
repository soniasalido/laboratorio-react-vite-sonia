import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { NavBar } from "../../layouts/navBar.jsx";
import { useContext} from "react";
import { AuthContext } from "../../core/auth/index.js";
import {AuthLayout} from "../../layouts/AuthLayout.jsx";
import { users } from "../../data/users.MockData.js";
import { useForm } from "../../core/customHooks/useForm.jsx";


export const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);


    //Definimos un formulario, con un estado inicial que es un objeto que contiene el estado de los atributos que forman el formulario
    //Necesita importar useForm
    const [ formValues, handleInputChange ] = useForm({
        idUsuario: '',
        password: ''
    });


    //Desestructuramos las propiedades del estado del formulario para que sea más sencillo su uso
    const { idUsuario,  password } = formValues;


    //Definimos una función para cuando se envía el formulario
    //Habilitamos replace a true para que no se pueda volver hacia atrás
    const handleSubmit = () => {

        const user = users.find( user => user.idUsuario === idUsuario && user.password === password );
        if(user) {
            login(user.idUsuario);
            navigate('/members',
                {replace: true}
            );
        }
    }

    return (
        <>
            <NavBar />
            <AuthLayout title="Authentication Page">
                <hr />

                <form>
                    <Grid container sx={{ minWidth: 'md' }}>
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="ID"
                                autoFocus
                                type="text"
                                name="idUsuario"
                                placeholder="Tu ID"
                                fullWidth
                                autoComplete="off"
                                value={ idUsuario }
                                onChange={ handleInputChange }
                            />
                        </Grid>

                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="*****"
                                value={ password }
                                onChange={ handleInputChange }
                            />
                        </Grid>

                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button
                                    variant='contained' fullWidth
                                    onClick={ handleSubmit }
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button variant='contained' fullWidth>
                                    <Google />
                                    <Typography sx={{ ml: 1 }}>Google</Typography>
                                </Button>
                            </Grid>
                        </Grid>


                        <Grid container direction='row' justifyContent='end'>
                            <Link component={ RouterLink } color='inherit' to="/auth/register">
                                Crear una cuenta
                            </Link>
                        </Grid>

                    </Grid>


                </form>

            </AuthLayout>
        </>
    )
}