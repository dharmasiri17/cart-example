import React from "react";

const categories = [
  "PBA Systems", "APPLE", "TELEVISION (TV)", "Console & Handheld Gaming",
  "Graphics Tablets", "Laptop", "Power Banks, Laptop & Monitor Accessories",
  "Processor", "Motherboards", "Memory (RAM)", "Graphics Card",
  "POWER SUPPLY, UPS & SURGE PROTECTORS", "Cooling & Lighting",
  "STORAGE & NAS", "CASINGS", "MONITORS", "Speakers, Headsets & Ear-Buds",
  "Keyboard,Mouse & Gamepad (Controller)", "Printers", "Gaming Chairs",
  "Cables & Connectors", "External Storage", "Live Streaming & Recording",
  "Expansion Cards & Networking", "OS & Software", "Gaming Desktops",
  "Projectors", "ALL in One Systems"
];

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.ul}>
        {categories.map((item, index) => (
          <li key={index} style={styles.li}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "250px",
    backgroundColor: "#f4f4f4",
    height: "100vh",
    padding: "20px",
    overflowY: "auto",
    borderRight: "1px solid #ccc",
    position: "fixed",
    top: 0,
    left: 0,
    marginTop: "60px", // adjust if your navbar height is different
  },
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  li: {
    padding: "10px 5px",
    cursor: "pointer",
    borderBottom: "1px solid #ddd",
    fontSize: "14px",
  },
};
