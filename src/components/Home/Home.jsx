import React, { useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();

  const [cart, setCart] = useState([]);

  const handleAddToCart = tShirts =>{
    const exits = cart.find(ts=> ts._id ===  tShirts._id);
    if(exits){
        toast('You have allready added this product');
    }
    else{
        const newCart = [...cart,tShirts];
        setCart(newCart)
    }
   
   
    //  console.log(newCart);
  }
  const handleRemoveFormCart = (id)=>{
    const remaining = cart.filter(ts =>ts._id !== id);
    setCart(remaining);
    // console.log(_id);
  }
    
    return (
      <div className='home-container'>
          <div className='tshirt-container'>
          {
            tShirts.map(tShirt =><Tshirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart ={handleAddToCart}
            ></Tshirt> )
          }
            
        </div>
        <div className='cart-container'>
            <Cart
            cart ={cart}
            handleRemoveFormCart={handleRemoveFormCart}
            ></Cart>

        </div>

      </div>
    );
};

export default Home;