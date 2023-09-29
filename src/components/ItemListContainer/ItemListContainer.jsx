import React, { useState, useEffect } from 'react';
import serviciosData from '../servicios'; 
import ItemList from '../ItemList/ItemList'; 
import { useParams } from 'react-router-dom';


function ItemListContainer() {
    const { categoria } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const productosFiltrados = categoria
                ? serviciosData.filter(servicio => servicio.categoria === categoria)
                : serviciosData;
            setProductos(productosFiltrados);
        }, 1000);
    }, [categoria]);

    return (
        <div>
            <h2>Categoría: {categoria || "Todos los productos"}</h2>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;
