"use client";

import { useState } from "react";

export default function FAQCard() {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen(!isOpen); // this is called toggle effect (true, false, true, false....)
  };
  return (
    <>
      {/* heading */}
      <div
        className="bg-blue-800 w-[810px] mx-auto cursor-pointer"
        onClick={onClickHandler}
      >
        <h1 className="text-white px-2 py-4 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </h1>
      </div>

      {/* description */}
      <div
        className={`bg-blue-950 w-[810px] mx-auto overflow-hidden duration-1000 ${
          isOpen ? "max-h-48" : "max-h-0"
        }`}
      >
        <p className="text-white px-2 py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          porro veniam, animi odit vero, iusto suscipit fugiat itaque
          perferendis tempora quam ratione a? Consectetur quisquam autem,
          reiciendis quam vitae aliquid.Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Corporis porro veniam, animi odit vero, iusto
          suscipit fugiat itaque perferendis tempora quam ratione a? Consectetur
          quisquam autem, reiciendis quam vitae aliquid.
        </p>
      </div>
    </>
  );
}
