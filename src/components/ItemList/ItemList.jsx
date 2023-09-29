import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import serviciosData from '../servicios'; 
import { useParams } from 'react-router-dom';
import './ItemList.css'; 

function ItemList({ productos }) {
    return (
        <div className="item-list-container"> {}
            {productos.map(producto => (
                <div className="item" key={producto.id}> {}
                    <h3>{producto.titulo}</h3>
                    <p>{producto.descripcion}</p>
                    <Link to="/">Volver</Link>
                </div>
            ))}
        </div>
    );
}

export default ItemList;
