export default function ProductList() {
  const products = [
    { id: 1, name: "Pocky Strawberry", price: "$3.99" },
    { id: 2, name: "KitKat Matcha", price: "$4.49" },
    { id: 3, name: "Mochi Ice Cream", price: "$5.99" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {products.map(p => (
        <div key={p.id} className="border p-4 rounded shadow">
          <h2 className="font-bold">{p.name}</h2>
          <p>{p.price}</p>
        </div>
      ))}
    </div>
  );
}
