import React from 'react';
import './Tshirt.css'

const Tshirt = ({tShirt,handleAddToCart}) => {
    const {price,name,picture } = tShirt;
    return (
        <div className='T-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: $ {price}</p>
            <button onClick={()=>handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;