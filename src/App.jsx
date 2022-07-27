
import { AppRouter } from "./core/router/AppRouter.jsx";
import {AuthProvider} from "./core/auth";
import {AppTheme} from "./theme/";


function App() {


    // Usamos el contexto de Autenticación para obtener el estado de autenticación
    // Está muy arriba para tener acceso al estado de autenticación en cualquier parte de la aplicación
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}

export default App
