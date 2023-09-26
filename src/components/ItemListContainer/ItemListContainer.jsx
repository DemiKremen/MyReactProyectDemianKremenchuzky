import React from 'react';
import { Link } from 'react-router-dom';
import './stylesList.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <div className='container'>
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
        </div>
    );
}

export default ItemListContainer;