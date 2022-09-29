/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'


import {useSelector, useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import {setProducts as listProducts, addToCart , subtractFromCart} from "../../redux/shop/shop-actions";

import CartIcon from "../../assets/images/cartblack.png"
import "./cartwidget.scss"

import { Cart , Store} from "../../redux/types";
import Paystack from '../../components/Paystack/Paystack';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


const CartWidget = () => {

  const dispatch = useDispatch();

  const carts = useSelector((state:Store) => state.shop.cart);

 const [input, setInput] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  console.log("bagcarts", carts);
  useEffect(() => {
   dispatch(listProducts(carts));
  }, [dispatch, cartCount]);
 
 useEffect(() => {
    let count = 0;
    carts.forEach((item:Cart) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [carts, cartCount]);


  useEffect(() => {
   let totalAmount = 0 ;
   let amount;

    carts.forEach((item:Cart) => {
      amount = item.price * item.qty
      totalAmount += amount;
    });

    setTotal(totalAmount);
  }, [carts, cartCount]);


  const  addToCartHandler = (id:number) => {
    dispatch(addToCart(id));
    // navigate("/cart");
    console.log("added to cart");
  }
    
  const subtractFromCartHandler = (id:number) => {
    dispatch(subtractFromCart(id));
    // navigate("/cart");
    console.log("remove from cart");
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
     <div>
        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-gray-700 ">
        
           <img src={CartIcon} alt="carticon" className="customIcon -mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          {cartCount > 0 ?
           <span className="badge">
             {cartCount}
           </span> : <></>}
         
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        
        <Menu.Items className="absolute right-0 z-10 mt-2 w-60  origin-top-right  rounded-md bg-white shadow-lg focus:outline-none">
          <div className="p-2">
          <span className="pb-8"><b>My Bag,</b> {cartCount} items</span>
          {carts.map((cart:Cart) => (
         <div key={cart.id}>
              <div className="mt-2 mb-4 grid gap-4 grid-cols-2">
              {cart.qty > 0 ?(
                  <>
                  <div className="pt-9">
                  <p style={{fontSize:"12px"}}> {cart.title}</p>
                  <p style={{fontSize:"12px"}}> ${cart.price}</p>
                  <p style={{fontSize:"12px"}}> Size:</p>
                  <div className="mt-2 grid grid-cols-4">
                  <div style={{fontSize:"12px"}} className="w-4 h-4 flex justify-center items-center cursor-pointer text-black border border-black"> XS</div>
                  <div style={{fontSize:"12px"}} className="w-4 h-4 flex justify-center items-center cursor-pointer text-black border border-black"> S</div>
                  <div style={{fontSize:"12px"}} className="w-4 h-4 flex justify-center items-center cursor-pointer text-black border border-black"> M</div>
                  <div style={{fontSize:"12px"}} className="w-4 h-4 flex justify-center items-center cursor-pointer text-black border border-black"> L </div>
                  </div>
                  <p className="pt-2" style={{fontSize:"12px"}}> Color:</p>
                  <div className="mt-2 grid gap-0 grid-cols-3">
                  <button type="button" style={{fontSize:"12px"}} className="w-4 h-4 flex justify-center items-center cursor-pointer text-black border border-black bg-green-600"></button>
                  <button type="button" style={{fontSize:"12px"}} className="w-4 h-4 flex justify-center items-center cursor-pointer text-black border border-black bg-green-600"></button>
                  <button type="button" style={{fontSize:"12px"}} className="w-4 h-4 flex justify-center items-center cursor-pointer text-black border border-black bg-green-600"></button>
                 
                  </div>
                  </div>

                  <div className="image w-48 h-48">
                  <span onClick={() => addToCartHandler(cart.id)} style={{fontSize:"14px"}} className="plus box"> +</span>
                  <span style={{fontSize:"12px"}} className='quantity'>{cart.qty}</span>
                    <img className="w-24 h-32" src={cart.image} />
                  <span onClick={() => subtractFromCartHandler(cart.id)} style={{fontSize:"12px"}} className="subtract box"> -</span>
                  </div>
                   </>):(<></>)  
                  }
                
              </div>
            
            
            </div>
          )
          )}
              {/* display total */}
               <div className="">
                <span>Total</span>
                <span className="float-right mr-3">${total}</span>
               </div>

               <div className="flex pb-4">
                <Link className="py-1 px-4 mr-2 border border-black" to="./">View Bag</Link>
                {/* <Link className="py-1 px-4 ml-2 bg-green-500 text-white" to="./">Checkout</Link> */}
                <Paystack
                
                totalAmount={total}
                Text={"Checkout"}
                />

               </div>

             </div>
         
         
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default CartWidget;