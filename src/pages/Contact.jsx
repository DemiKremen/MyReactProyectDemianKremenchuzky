import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import serviciosData from "../components/servicios";
import BotonSumarRestar from '../components/Boton/BotonAñadirRestar';
import '../components/StyleContact/Contact.css';

const Contact = () => {
    const [servicios, setServicios] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setServicios(serviciosData);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            {isLoading ? (
                <h3>Cargando...</h3>
                
            ) : (
                        <div className="servicios-container">
                            {servicios.map((servicio, index) => (
                        <div key={index} className="servicio-card">
                            <h3>{servicio.titulo}</h3>
                            <p>{servicio.descripcion}</p>
                            <p>Categoría: {servicio.categoria}</p>
                            <BotonSumarRestar />
                            <Link to={`/servicio/${servicio.id}`} className="ver-mas-button">
                                Ver Más
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Contact;
