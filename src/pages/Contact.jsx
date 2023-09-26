// Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import serviciosData from "../components/servicios";
import BotonSumarRestar from '../components/Boton/BotonAñadirRestar';
import '../components/StyleContact/Contact.css';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="servicios-container">
                {serviciosData.map((servicio, index) => (
                    <div key={index} className="servicio-card">
                        <h3>{servicio.titulo}</h3>
                        <p>{servicio.descripcion}</p>
                        <BotonSumarRestar />
                        <Link to={`/servicio/${servicio.id}`} className="ver-mas-button">
                        Ver Más
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;

