import React from 'react'
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import { connect } from "react-redux";
import { addToCart } from "../../redux/shop/shop-actions";
import { useParams } from "react-router-dom";

//types
import { Product , Store } from "../../redux/types";

interface SingleProduct{
  products: Product[]
}

const SingleProductPage = ({products}:SingleProduct) => {
  const { id } = useParams();
  const singleProduct = products.find((product:any) => product.id = id);

  // console.log(current)
  return (
    <div><ProductContainer
         prod = {singleProduct}
    /></div>
  )
}


const mapStateToProps = (state:Store) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(SingleProductPage);

