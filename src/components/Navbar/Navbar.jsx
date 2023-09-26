import CartWidget from '../CartWidget/CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Logo from '../Logo/Logo.jsx'
import './styles.css';

const Navbar = () => {

    const handleConsole = () => console.log ('Descargar CV')


    return(
        <div className= 'navbar'>
            <Logo/>
            <ItemListContainer/>
            <CartWidget/>
        </div>
    )
    
}

export default Navbar