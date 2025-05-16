import React from "react";

export default function Navbar({ cartCount }) {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <img
          src="https://your-logo-url.com/logo.png"
          alt="Logo"
          style={styles.logo}
        />
        <a href="#about" style={styles.link}>About</a>
        <a href="#services" style={styles.link}>Services</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>

      <div style={styles.right}>
        <a href="#login" style={styles.link}>Login</a>
        <div style={styles.cart}>
          Cart: <span style={styles.cartCount}>{cartCount}</span>
        </div>
        <button style={styles.searchButton}>Search</button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#222",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  logo: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  cart: {
    fontWeight: "bold",
  },
  cartCount: {
    marginLeft: "5px",
    backgroundColor: "red",
    borderRadius: "50%",
    padding: "2px 8px",
    color: "white",
  },
  searchButton: {
    padding: "5px 10px",
    fontSize: "14px",
    cursor: "pointer",
  },
};
