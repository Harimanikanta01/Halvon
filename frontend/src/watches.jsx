import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
function Watches(){
const backendurl=process.env.REACT_APP_URL
const [data,setData]=useState([])
const Ab=async()=>{
    const res=await axios.get(`${backendurl}/watchesget`)
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
            <h3 className="Ul">Best of Watches</h3>
{
    data.map((data)=>(
        <Link to="/main1">
        <img className="watches1" src={data.image} prop="no data"/></Link>
    ))
}
        </div>
    )
}
export default Watches