import './stylesWidget.css'
import {RiShoppingCartFill} from 'react-icons/ri'

const CartWidget = () => {

    const itemCount = 4;

    return (
        <div className="cart-widget">
                <button onClick={() => handleConsole ()}>Download CV</button>
        </div>
    );
};

export default CartWidget;
