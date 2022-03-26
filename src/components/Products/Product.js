import React, { useEffect, useState } from 'react';
import Shoe from '../Shoes/Shoe';
import './Product.css'

const Product = () => {
const [products , setProducts]= useState([]);
const[cart , setCart] =useState([])
 const [shoe , setShoe] = useState([])



const handelAddToCart =(product)=>{
  const newCart =[...cart , product]
  setCart(newCart)
}

const remove =() =>{
setShoe();
}

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
               handelAddToCart ={handelAddToCart}
             ></Shoe>)
         } 
         
</div>


            <div className="cart-container">
           <h1>Select and Remove Shoes </h1>
           {
               cart.map((item)=><h1 className='item' 
                key ={item.id}>
                   {item.name}
                   </h1>)
           }
               <button onClick={remove}  className='btn'>CHOOCE 1 fOR ME</button>
               <button  className='btn'>CHOOCE again</button>
               </div>
    </div>
    );
};

export default Product;