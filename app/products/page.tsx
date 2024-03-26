"use client";
import React, { useState } from "react";
import ProductTable from "../components/ProductTable";

const product = [
  { catagory: "fruits", price: "$1", stocked: true, name: "Apple" },
  { catagory: "fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { catagory: "fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { catagory: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { catagory: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { catagory: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function Products() {
  const [inStocOnly, setInStocOnly] = useState(false);
  const [text, setText] = useState("");
  // console.log(inStocOnly);
  // console.log(text);
  return (
    <>
      {/* filterablesearch Bar */}
      <div className=" border border-black my-2  max-w-[400px] mx-auto mt-11">
        <div className="border border-blue-900  my-2 mx-2 ">
          <div className="mx-6 my-6">
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Searching..."
              className="border-black border py-1 px-2 mb-4 outline-none rounded-lg "
            />
            <div className="flex gap-x-4">
              <input
                type="checkbox"
                checked={inStocOnly}
                onChange={(e) => {
                  setInStocOnly(e.target.checked);
                }}
              />

              <p>Only show Products in Stock</p>
            </div>
          </div>
        </div>

        {/* <Filterabletable /> */}
        <ProductTable product={product} inStocOnly={inStocOnly} text={text} />
      </div>
    </>
  );
}
