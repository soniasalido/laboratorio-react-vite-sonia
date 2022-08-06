import { useState } from "react"

//Esto es un Custom HOOK que es usado para construir los formularios
//Inicializamos el estado inicial a un objeto vacío para que no de problemas si NO manda nada
//El estado inicial es un objeto exactamente igual al que se define en el Login con idUsuario y password
//initialState recibe idUsuario y password
export const useForm = ( initialState = {} ) => {

    //Definimos un formulario, con un estado inicial que es un objeto
    const [values, setValues] = useState(initialState);


    //Definimos un evento de cambio del elemento input que  definie lo que se hace cuando se activa
    //Establece los valores de estado del formulario
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    //Se retorna como un array, el primer valor es el estado del formulario,
    // y el segundo valor es la función completa de handleInputChange que es para registrar los valores del formulario
    return [ values, handleInputChange ];

}
