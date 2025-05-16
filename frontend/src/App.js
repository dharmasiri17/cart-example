import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sideBar";
import './App.css';


function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <main className="main-content" style={{ marginLeft: "460px", padding: "20px", flexGrow: 1 }}>
          <h2>Welcome to the Store</h2>
          <p>Explore our products and add them to your cart!</p>
          {/* Add your product list or content here */}
        </main>
        </div>
        
      </div>
    </div>
  );
}

export default App;
