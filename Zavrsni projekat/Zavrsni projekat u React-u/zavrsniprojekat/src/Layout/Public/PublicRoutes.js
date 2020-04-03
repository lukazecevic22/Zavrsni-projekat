import React from 'react';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
// import { Login } from '../Public/Components/Login';
// import { Register } from '../Public/Components/Register';


const PublicRoutes = () => {

    return (
        <>
        <Login />,
        <Register />
        </>
    )
}

export default PublicRoutes