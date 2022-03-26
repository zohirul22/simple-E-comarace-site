import React from 'react';
import './Shoe.css'

const Shoe = (props) => {
   const { img,id ,name,price}= props;
   
    return (
        <div className='shoes' >

           <div  >
            <img src={img} alt="" />
            <h1>Id:{id}</h1>
            <h2>Name:{name}</h2>
            <h3>Price:{price}</h3>
            </div>

            <div className="cart-btn">
                <h1>Add To Cart</h1>
            </div>
        </div>

        
    );
};

export default Shoe;