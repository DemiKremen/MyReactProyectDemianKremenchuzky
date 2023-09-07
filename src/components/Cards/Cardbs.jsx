import 'bootstrap/dist/css/bootstrap.css';
import '../Cards/styleCard.css'

function Cardbs() {
    return (
        <div className="container">
            <div className="cards-container" style={{ display: "flex", justifyContent: "space-between", margin: "20px 0" }}>
                <div className="card card-1" style={{ width: "18rem", margin: "0 10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Diseño UX/UI</h5>
                        <p className="card-text">Diseño centrado en la experiencia del usuario y la interfaz de usuario para crear productos fáciles de usar.</p>
                        <button className="btnCard">Comprar Diseño</button>
                    </div>
                </div>
                <div className="card card-2" style={{ width: "18rem", margin: "0 10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Diseño Identitario</h5>
                        <p className="card-text">Creación de identidades de marca sólidas que reflejan la personalidad y los valores de una empresa o proyecto.</p>
                        <button className="btnCard">Comprar Diseño</button>
                    </div>
                </div>
                <div className="card card-3" style={{ width: "18rem", margin: "0 10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Diseño Web</h5>
                        <p className="card-text">Diseño de sitios web atractivos y funcionales que brindan una experiencia de usuario excepcional en línea.</p>
                        <button className="btnCard">Comprar Diseño</button>
                    </div>
                </div>
                <div className="card card-4" style={{ width: "18rem", margin: "0 10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Diseño Gráfico</h5>
                        <p className="card-text">Creación de elementos visuales impactantes, como logotipos, carteles y gráficos, para comunicar mensajes efectivos.</p>
                        <button className="btnCard">Comprar Diseño</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cardbs;