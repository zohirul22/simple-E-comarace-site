import React from 'react';
import Product from '../Products/Product';
import './Shoe.css'

const Shoe = (props) => {
   const { img,id ,name,price ,handelAddToCart}= props;

  
   
    return (
        <div className='shoes' >

           <div  >
            <img src={img} alt="" />
            <h1>Id:{id}</h1>
            <h2>Name:{name}</h2>
            <h3>Price:{price}</h3>
            </div>

            <button onClick={ () =>handelAddToCart(props)}>
                <h1>Add To Cart</h1>
            </button>
        </div>

        
    );
};

export default Shoe;