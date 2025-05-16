import React, { useState } from "react";
import api from "../services/api.js";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/products", { name, price });
      alert("✅ " + res.data.message);
    } catch (error) {
      alert("❌ Failed to add product");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
