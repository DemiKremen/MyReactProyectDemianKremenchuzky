import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import './styles.css';
import serviciosData from '../servicios';


const Navbar = () => {

    const categoriasUnicas = [...new Set(serviciosData.map(servicio => servicio.categoria))];

    return (
        <div className='navbar'>
            <Link to='/' className='navbar-brand'>
                <Logo />
            </Link>
            <div className='navbar-categories'>
                {categoriasUnicas.map((categoria, index) => (
                    <Link to={`/categoria/${categoria}`} className='navbar-category' key={index}>
                        {categoria}
                    </Link>
                ))}
            </div>
            <CartWidget />
        </div>
    );
};

export default Navbar;