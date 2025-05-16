// Products.js
export default function Products({ addToCart }) {
  const sampleProduct = { id: 1, name: "Mouse", price: 7400 };
  
  return (
    <div>
      <h2>{sampleProduct.name}</h2>
      <button onClick={() => addToCart(sampleProduct)}>Add to Cart</button>
    </div>
  );
}
