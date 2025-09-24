import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel styles
import { useNavigate } from "react-router-dom";
function Womensopen() {
  const backendurl=(process.env.REACT_APP_URL).replace(/\/+$/, "");
  const [data, setData] = useState([]);
  const { id } = useParams();
const navigate=useNavigate()
  const Ab = async () => {
    try {
      const res = await axios.get(`${backendurl}/womens/${id}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
 
const addCart = async (name, price, img1) => {
  const name1 = localStorage.getItem("name1");
  if (!name1) {
    alert("User not logged in");
    return;
  }
  try {
    const res = await axios.post(`${backendurl}/cartpost`, {
      name,
      price,
      img1,
      name1,
    });
    console.log("Cart added:", res.data);
    alert("added to cart")
  } catch (err) {
    console.error("Error adding to cart:", err.response?.data || err.message);
  }
};

  const [input, setInput] = useState({ name: "" });

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    Ab();
  }, []);

  const click = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const input1 = useMemo(() => input.name, [input]);

  return (
    <>
      <div
        className="Main"
        data-aos="fade-down"
        style={{
          padding: "20px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div className="App">
          <h2 style={{ color: "#333" }}>Fashi</h2>
          <header className="App-header">
            <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
              <li>
                <input
                  onClick={() => console.log(input)}
                  onChange={click}
                  name="name"
                  style={{
                    padding: "8px",
                    borderRadius: "8px",
                    border: "1px solid #aaa",
                  }}
                  type="search"
                  placeholder="search"
                />
              </li>
              <li>categories</li>
              <li>brands</li>
              <li>cart</li>
              <li>login</li>
              <li>signup</li>
            </ul>
          </header>
        </div>
      </div>

     
      <div
        className="Card"
        data-aos="fade-up"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
          gap: "50px",
        }}
      >
       
        <div style={{ flex: "1", maxWidth: "400px",marginLeft:"50px" }}>
          <Carousel autoPlay>
            <img src={data.img1} alt="img1" />
            <img src={data.img2} alt="img2" />
            <img src={data.img3} alt="img3" />
          </Carousel>
        </div>

       
        <div style={{ flex: "1", padding: "20px" }}>
          <h3
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            {data.name}
          </h3>
          <h4
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "28px",
              marginBottom: "30px",
            }}
          >
            {data.price}
          </h4>

          
          <div style={{ display: "flex", gap: "20px" }}>
            <button
              style={{
                backgroundColor: "#ff4d4f",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "12px 20px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Buy Now
            </button>
            <button onClick={()=>addCart(data.name,data.price,data.img1)}
              style={{
                backgroundColor: "#333",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "12px 20px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Cart
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "50px", marginLeft: "5%" }}>
        <h4
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: "40px",
          }}
        >
          Reviews
        </h4>
      </div>
    </>
  );
}

export default Womensopen;
