import React from "react";
import { addProduct } from "../../../../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { message } from "antd";

export default function ProductItem(props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addProduct({ ...props, quantity: 1 }));
    message.success("Added to cart.");
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
