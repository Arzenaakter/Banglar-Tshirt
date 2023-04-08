import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFormCart}) => {
    // console.log(cart);
    return (
        <div>
           <h2>Order Summary : {cart.length}</h2>
           {
            cart.length === 0?<p className='purple'> Please add some products</p>: <p className='green'>Thanks for Adding</p>
           }
           {
            cart.map(tshirt => <p
            key={tshirt._id}
            >{tshirt.name} 
            <button onClick={()=>handleRemoveFormCart(tshirt._id)}>X</button>
            </p>)
           }
        </div>
    );
};

export default Cart;