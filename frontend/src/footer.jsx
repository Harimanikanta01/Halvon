import React from "react";
import AOS from "aos";
import { useEffect } from "react";
function EcommerceFooter() {
    useEffect(()=>{
       AOS.init({
        duration:2000,
        once:false
       }) 
    })
  return (
    <footer style={styles.footer} data-aos="fade-in">
      <div style={styles.container}>

        
        <div style={styles.section}>
          <h3 style={styles.title}>About Us</h3>
          <p style={styles.text}>
            We bring you the latest products at unbeatable prices.
            Shop smart, live better.
          </p>
        </div>

       
        <div style={styles.section}>
          <h3 style={styles.title}>Customer Service</h3>
          <a href="/help" style={styles.link}>Help Center</a>
          <a href="/shipping" style={styles.link}>Shipping & Returns</a>
          <a href="/order-tracking" style={styles.link}>Order Tracking</a>
        </div>

     
        <div style={styles.section}>
          <h3 style={styles.title}>Categories</h3>
          <a href="/electronics" style={styles.link}>Electronics</a>
          <a href="/fashion" style={styles.link}>Fashion</a>
          <a href="/home" style={styles.link}>Home & Kitchen</a>
        </div>

      
        <div style={styles.section}>
          <h3 style={styles.title}>Follow Us</h3>
          <div style={styles.socialLinks}>
            <a href="https://facebook.com" style={styles.social}>Facebook</a>
            <a href="https://instagram.com" style={styles.social}>Instagram</a>
            <a href="https://twitter.com" style={styles.social}>Twitter</a>
          </div>
        </div>

      </div>

   
      <div style={styles.bottom}>
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "40px 20px 20px",
    marginTop: "40px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  section: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "16px",
    marginBottom: "10px",
    fontWeight: "bold",
    borderBottom: "2px solid #f39c12",
    paddingBottom: "5px",
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#ccc",
  },
  link: {
    color: "#bbb",
    textDecoration: "none",
    fontSize: "14px",
    marginBottom: "6px",
    transition: "color 0.3s",
  },
  socialLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  social: {
    color: "#f39c12",
    textDecoration: "none",
    fontSize: "14px",
  },
  bottom: {
    borderTop: "1px solid #444",
    textAlign: "center",
    paddingTop: "15px",
    marginTop: "20px",
    fontSize: "13px",
    color: "#bbb",
  },
};

export default EcommerceFooter;
