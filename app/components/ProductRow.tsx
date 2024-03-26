interface Iproduct {
  product: { catagory: string; price: string; stocked: boolean; name: string };
}

export default function ProductRow(props: Iproduct) {
  const name = props.product.stocked ? (
    props.product.name
  ) : (
    <span className="text-red-800">{props.product.name}</span>
  );
  return (
    <div>
      <tr className="flex gap-20">
        <td>{name}</td>
        <td>{props.product.price}</td>
      </tr>
    </div>
  );
}
