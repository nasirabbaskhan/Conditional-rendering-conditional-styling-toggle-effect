import React from "react";

export default function ProductCatagoryRows(props: { catagory: string }) {
  return (
    <div>
      <tr>
        <th className="space-x-2">{props.catagory}</th>
      </tr>
    </div>
  );
}
