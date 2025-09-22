import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Aos from "aos";
function Best(){
const [data,setData]=useState([])
const backendurl=process.env.REACT_APP_URL
const Ab=async()=>{
    const res=await axios.get(`${backendurl}/bestget`)
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
            <h3 className="Ul">Best of All</h3>
{
    data.map((data)=>(
        <img className="best1" src={data.image} prop="no data"/>
    ))
}
        </div>
    )
}
export default Best