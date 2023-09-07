import './stylesList.css';
import logo from '../../assets/logo.png';


const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <div className='container'>
                <img className='logo' src={logo} alt="" />
                <hr />
                <a href="/about">{greeting}</a>
                <a href="/about"> About Me</a>
                <a href="/contact"> Contact </a>
                <button onClick={() => handleConsole ()}>Download CV</button>
            </div>
        </div>
    );
}

export default ItemListContainer;