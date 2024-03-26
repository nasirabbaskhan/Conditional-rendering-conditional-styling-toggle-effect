import ProductCatagoryRows from "./ProductCatagoryRows";
import ProductRow from "./ProductRow";

interface Iprops {
  inStocOnly: boolean;
  text: string;
  product: {
    catagory: string;
    price: string;
    stocked: boolean;
    name: string;
  }[];
}
export default function ProductTable(props: Iprops) {
  const rows: any = [];
  let lastCatagory: string = "";
  props.product.forEach((product) => {
    if (product.name.toLowerCase().indexOf(props.text.toLowerCase()) == -1) {
      return;
    }
    if (props.inStocOnly && !product.stocked) {
      return;
    }

    if (product.catagory !== lastCatagory) {
      rows.push(<ProductCatagoryRows catagory={product.catagory} />);
    }

    rows.push(<ProductRow product={product} />);
    lastCatagory = product.catagory;
  });

  return (
    <div>
      <table>
        <thead>
          <tr className="flex gap-20">
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
