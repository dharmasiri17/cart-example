import React from "react";

const ProductCard = () => {
  const product = {
    name: "Gaming Mouse",
    price: 7400,
    image:
      "https://png.pngtree.com/png-clipart/20240520/original/pngtree-wireless-gaming-mouse-png-image_15140813.png",
  };

  const handleAddToCart = () => {
    alert(`${product.name} added to cart! 🛒`);
    // Later you can connect this to context or redux
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2>{product.name}</h2>
      <p>Rs. {product.price}</p>
      <button onClick={handleAddToCart} style={styles.button}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  card: {
    background: "#fff",
    borderRadius: "10px",
    padding: "20px",
    width: "300px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: "10px",
  },
  button: {
    background: "#0d6efd",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProductCard;
