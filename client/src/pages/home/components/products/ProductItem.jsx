import React from "react";

export default function ProductItem() {
  return (
    <div className="product-item border-2 hover:shadow-lg cursor-pointer transition-all duration-300 select-none">
      <div className="product-image">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?resize=1200:*"
          alt="product"
          className="h-28 object-cover w-full border-b-2"
        />
      </div>
      <div className="product-details flex flex-col items-center p-3">
        <div className="product-name font-bold">Product Name</div>
        <div className="product-price">Product Price</div>
      </div>
    </div>
  );
}
