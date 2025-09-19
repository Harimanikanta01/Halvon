import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import Aos from "aos";
function She(){
const [data,setData]=useState([])
const backendurl=process.env.REACT_APP_URL
const Ab=async()=>{
    const res=await axios.get(`${backendurl}/sheget`)
    setData(res.data)
}
useEffect(()=>{
    Ab()
},[])
useEffect(()=>{
    Aos.init({
        duration: 2000, 
      once: false,
    })
})
    return(
        <div data-aos="fade-up">
            <h3 className="Ul">The Style She Rules</h3>
{
    data.map((data)=>(
        <Link to="/women">
        <img className="she1" src={data.image} prop="no data"/></Link>
    ))
}
        </div>
    )
}
export default She