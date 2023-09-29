import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Contact, Navbar, ServicioDetalle, ItemListContainer } from '../pages/index';

const Navigation = () => {
    const routes = createBrowserRouter([
        <Navbar />,
        {
            path: '/',
            element:
            <Contact />
        },
        {
            path: '/servicio/:id',
            element:                 
            <ServicioDetalle />
        },
        {
            path: '/categoria/:categoria',
            element:                 
            <ItemListContainer />
        }
    ]);

    return (
        <RouterProvider router={routes} />
    );
}

export default Navigation;
