import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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

            <button className='btn-info' onClick={ () =>handelAddToCart(props)}>
                <p className='btn-p'>Add To Cart</p>
                <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>

        
    );
};

export default Shoe;