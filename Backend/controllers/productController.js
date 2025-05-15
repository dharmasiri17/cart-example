import Product from "../Model/Product.js";

// Create Product
export const createProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const newProduct = new Product({ name, price });
        const savedProduct = await newProduct.save();
        console.log("✅ Product saved:", savedProduct);
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ error: "Error saving product", details: error.message });
    }
};
 
// Get All Products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products", details: error.message });
    }
};
