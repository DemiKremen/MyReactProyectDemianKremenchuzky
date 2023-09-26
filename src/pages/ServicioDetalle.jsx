// ServicioDetalle.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import serviciosData from "../components/servicios";
import '../components/StyleContact/ServicioDetalle.css'
import BotonSumarRestar from '../components/Boton/BotonAñadirRestar';

const ServicioDetalle = () => {
    const { id } = useParams();

    const servicio = serviciosData.find((servicio) => servicio.id === id);


    return (
        <div>
            <Navbar />
            <div className="servicio-detalle">
                <h3>{servicio.titulo}</h3>
                <p>{servicio.descripcion}</p>
            </div>
            <BotonSumarRestar/>
        </div>
    );
};

export default ServicioDetalle;
