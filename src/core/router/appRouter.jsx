import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../../scenes/homePage.jsx';
import { LoginPage } from '../../pods/login/loginPage';
import {AboutPage} from "../../scenes/aboutPage.jsx";
import {PrivateRouter} from "./privateRouter";



export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="/*" element={<PrivateRouter />} />
            </Routes>
        </>
    )
}