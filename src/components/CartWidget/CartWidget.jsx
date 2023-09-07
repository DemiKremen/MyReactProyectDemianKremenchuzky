import './stylesWidget.css'
import {RiShoppingCartFill} from 'react-icons/ri'

const CartWidget = () => {

    const itemCount = 4;

    return (
        <div className="cart-widget">
            <RiShoppingCartFill size={20} />
            {itemCount > 0 && (
                <button className="notification">
                    {itemCount}
                </button>
            )}
        </div>
    );
};

export default CartWidget;
