import { Button } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import React from "react";

export default function CartItem() {
  return (
    <div className="cart-item flex flex-row justify-between gap-4 items-center border-b pb-2">
      <div className="cart-detail flex flex-[2] gap-2">
        <div className="cart-item-image">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?resize=1200:*"
            alt="product"
            className="w-16 object-cover"
          />
        </div>
        <div className="cart-item__details">
          <div className="cart-item__name">
            <b>Burger</b>
          </div>
          <div className="cart-item__price">$12 x 2</div>
        </div>
      </div>
      <div className="cart-item__quantity flex-1">
        <div className="cart-item__quantity--buttons flex flex-row justify-center  gap-1">
          <Button
            type="primary"
            size="small"
            icon={<PlusCircleOutlined />}
            className="cart-item__quantity--button flex justify-center items-center text-white"
          ></Button>
          <div className="cart-item__quantity--number font-bold">2</div>
          <Button
            type="primary"
            size="small"
            icon={<MinusCircleOutlined />}
            className="cart-item__quantity--button flex justify-center items-center text-white"
          ></Button>
        </div>
      </div>
    </div>
  );
}
