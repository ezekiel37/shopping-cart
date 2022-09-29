//css
import "./home.scss";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//components

import ProductContainer from "../../components/ProductContainer/ProductContainer";

//actions
import { setProducts as listProducts } from "../../redux/shop/shop-actions";

//types
import { Product , Store } from "../../redux/types";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state:Store) => state.shop.products);

  // const {products , loading, error} = getProducts

  useEffect(() => {
    dispatch(listProducts(products));
  }, [dispatch]);
  return (
    <div className="w-full">
      <h2 className="title"> Category Name</h2>
      <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {products.map((product:Product) => (
          <div key={product.id}>
           <ProductContainer prod= {product}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
