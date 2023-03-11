import React from "react";
import { addProduct } from "../../../../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ProductItem(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cart);
  const handleClick = () => {
    // console.log("clicked on", props);
    dispatch(addProduct(props));
  };

  return (
    <div
      className="product-item border-2 hover:shadow-lg cursor-pointer transition-all duration-300 select-none"
      onClick={handleClick}
    >
      <div className="product-image">
        <img
          src={props.productImage}
          alt="product"
          className="h-28 object-cover w-full border-b-2"
        />
      </div>
      <div className="product-details flex flex-col items-center p-3">
        <div className="product-name font-bold">{props.productName}</div>
        <div className="product-price">${props.productPrice}</div>
      </div>
    </div>
  );
}
