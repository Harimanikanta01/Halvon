import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const token = localStorage.getItem("token");
   const Backendurl=(process.env.REACT_APP_URL).replace(/\/+$/, "");
    useEffect(() => {
        const fetchCart = async () => {
            if (!token) {
                alert("Please login first!");
                return;
            }

            try {
                const profileRes = await axios.get(`${Backendurl}/profile`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const name1 = profileRes.data.name;

                const cartRes = await axios.get(`${Backendurl}/cartget`);
                const filtered = cartRes.data.filter(item => item.name1 === name1);

                setCartItems(filtered);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCart();
    }, [token]);
    const Nlp=(id)=>{
 const abc = axios.delete(`${Backendurl}/${id}`)
console.log(abc.data)
alert("deleted succesfully")
setCartItems(prev=>prev.filter(items=>items._id!==id))
    }
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                    {cartItems.map((item, index) => (
                        <div key={index} style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '20px',
                            backgroundColor: 'white',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                        }}>
                            <img 
                                src={item.img1} 
                                alt={item.name} 
                                style={{ width: '100%', height: '200px', objectFit: 'contain', marginBottom: '15px' }} 
                            />
                            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{item.name}</h3>
                            <p style={{ color: '#e53935', fontWeight: 'bold', fontSize: '18px', margin: '0 0 15px 0' }}>${item.price}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <button onClick={()=>Nlp(item._id)}style={{ padding: '5px 10px', border: '1px solid #dc3545', color: '#dc3545', borderRadius: '4px', cursor: 'pointer' }}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
