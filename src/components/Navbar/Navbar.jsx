import CartWidget from '../cartWidget/cartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './styles.css';

const Navbar = () => {

    const handleConsole = () => console.log ('Descargar CV')


    return(
        <div className= 'navbar'>
            <ItemListContainer greeting= " Design " handleConsole= {handleConsole}/>
            <CartWidget/>
        </div>
    )
    
}

export default Navbar