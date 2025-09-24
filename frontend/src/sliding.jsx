import React, { useEffect } from "react"
import { useState} from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './New.css'

function Sliding(){
    const backendurl=(process.env.REACT_APP_URL).replace(/\/+$/, "");
    const navigate=useNavigate()
const Click=((id)=>{
    console.log(id)
    if(id==="6899f047aa2c80c954321220"){
navigate("/main1")
    }
    if(id==="6899efc6aa2c80c95432121a" ||id==="6899effcaa2c80c95432121c"){
navigate("/women")
    }
    if(id==="6899f01eaa2c80c95432121e"){
        navigate("/men")
    }
})
const [response,setResponse]=useState([])
const cd= async()=>{
const res=await axios.get(`${backendurl}/slidingget`)
setResponse(res.data)
}
useEffect(()=>{
    cd()
},[])
useEffect(()=>{
    AOS.init({
        duration:3000,
        once:true
    })
})

    return(
        <div aos-data="fade-in" >
            <Carousel className="car" infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        autoPlay={true}
>
            {
response.map((data) => (
    <button className="Ma" onClick={()=>Click(data._id)}>
  <img className="slidingimg" src={data.image} alt="sorry"/></button>
))

            }

</Carousel>
        </div>
    )
}
export default Sliding