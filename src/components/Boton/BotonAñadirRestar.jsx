import React, { useState } from 'react';

const BotonSumarRestar = () => {
  const [cantidad, setCantidad] = useState(0);

  const sumar = () => {
    setCantidad(cantidad + 1);
  };

  const restar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="boton-sumar-restar">
      <div>
        <span>Añadir Diseño al carrito: {cantidad}</span>
      </div>
      <div>
        <button className="btn-contador" onClick={sumar}>Sumar</button>
        <button className="btn-contador" onClick={restar}>Restar</button>
      </div>
    </div>
  );
};

export default BotonSumarRestar;
