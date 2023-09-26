import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Home, Contact, ServicioDetalle} from '../pages/index'

const Navigation = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
          path: '/servicio/:id',
          element: <ServicioDetalle />
      }
        
    ]);

    return (
        <RouterProvider router={routes} />
    );
}

export default Navigation;