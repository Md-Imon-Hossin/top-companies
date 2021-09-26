import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    const reducer = (previous, current) => previous + current.bil;
    const total = cart.reduce( reducer,0)
    return (
        <div className='cart-details'>
             <h2> Companies Added : {props.cart.length} </h2>
            <h3>Total Bil : {total}</h3>
            {
                cart.map(company=>(company.company)) 
            }
        </div>
    );
};
export default Cart;