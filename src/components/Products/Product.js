import React, { useEffect, useState } from 'react';
import Shoe from '../Shoes/Shoe';
import './Product.css'


const Product = () => {
const [products , setProducts]= useState([]);

useEffect( ()=>{
fetch('data.json')
.then(res => res.json())
.then(data => setProducts(data))


} ,[])
   
    return (
    <div className="products">
<div className="product-container">
 {
      products.map(product => <Shoe 
                key ={product.id}
                id ={product.id} 
               name ={product.name}
               price = {product.price}
               img ={product.img}
             ></Shoe>)
         } 
         
</div>
            <div className="cart-container">
                <h2>shahin</h2>
            </div>

    </div>
    );
};

export default Product;