import React, { useEffect } from "react";
import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
function Icons(){
    const navigate=useNavigate()
const [data,setData]=useState([])
const [op,setOp]=useState([])
const backendurl=process.env.REACT_APP_URL
const Click=((id)=>{
setOp(id)
console.log(id)
if(id==="689a0144e6c826c20c77e760"){
navigate("/main1")
}
if(id==="689a00e2e6c826c20c77e758"){
    navigate("women/")
}
if(id==="689a00fde6c826c20c77e75a"){
    navigate('/men')
}
})

const Ab=async()=>{
    const res=await axios.get(`${backendurl}/iconsget`)
    setData(res.data)
}
useEffect(()=>{
    Ab()
},[])
    return(
        <div>
{
    data.map((data)=>(
        <button className="Ma" onClick={()=>Click(data._id)}>
        <img className="icons1" src={data.image} prop="no data"/></button>
    ))
}
        </div>
    )
}
export default Icons