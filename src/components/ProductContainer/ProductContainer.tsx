import "./product.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import productone from "../../assets/images/productone.png";
import cartgreen from "../../assets/images/cartgreen.png";

import {addToCart } from "../../redux/shop/shop-actions";
import {Product} from "../../redux/types";
import { relative } from "path";


const ProductContainer = ({prod}:any) => {
 const {id, title, price, image, stock} = prod;
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const  addToCartHandler = (id:number) => {
    dispatch(addToCart(id));
    // navigate("/cart");
    console.log("added to cart");
  }

  return (
    <>
     
      <div className={stock === 0 ? "disabled opacity-50":"product-card"}>
        {/* <div className="product-image cursor-pointer"> */}

        {/* <p className={stock === 0 ? "stock" : "hidden"}>Out of Stock</p>
          <img  src={image} alt="Product One" /> */}
          <div className="product-image cursor-pointer" style={{backgroundImage: `url(${image})`}}>
          <p className={stock === 0 ? "stock" : "hidden"}>Out of Stock</p>
          </div>
         
        {/* </div> */}
        
        <div className="product-icon">
          <img onClick={()=>addToCartHandler(id)} src={cartgreen} alt="icon" />
        </div>
        <div className="product-text">
        
          <p>{title}</p>
          <span>${price}.00</span>
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
