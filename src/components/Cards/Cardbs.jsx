import 'bootstrap/dist/css/bootstrap.css';
import '../Cards/styleCard.css'
import Demi from '../../assets/Demi.png';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { AiFillBehanceSquare } from 'react-icons/ai';

function Cardbs() {
    return (
        <div className="container-cards">
            <div className="cards-container">
                <div className="card card-1">
                    <div className="card-body-center">
                        <button className="btnCard">Bienvenidos! Yo soy <span className="icon"><BsFillArrowDownCircleFill size={20}/></span></button>
                        <h1 className="card-title text-color">DEMIAN KREMENCHUZKY</h1>
                        <h5 className="card-title text-color">Licenciado en diseño</h5>
                        <p className="card-text text-color">El diseño es una pieza clave para resaltar el valor de cualquier producto o servicio. Su presencia es fundamental para el éxito y el impacto que puede tener en las personas. <br /> Me identifico como alguien apasionado por la generación de ideas y soluciones para cada desafío, manteniéndome en constante búsqueda de aprendizaje y dominio de nuevos programas.</p> 
                    </div>
                </div>
                <div className="card card-2">
                    <div className="card-body card-2-iconos">
                    <img className='Demi' src={Demi} alt="" />
                    <div className='followicons'>
                        <p class="rotate-90">Follow Me</p>
                        <span className="icon"><AiFillInstagram size={25}/></span>    
                        <span className="icon"><BiLogoLinkedinSquare size={25}/></span>  
                        <span className="icon"><AiFillBehanceSquare size={25}/></span>                   
                    </div>
                    </div>
                </div>
            </div>
                <div class="card-frase">
                    <h5 className='borde-frase'>"El buen diseño es obvio. El gran diseño es transparente."</h5>
                    <h5>- Joe Sparano</h5>
                </div>
        </div>
        
    );
}

export default Cardbs;