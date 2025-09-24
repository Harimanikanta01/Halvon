import React, { useEffect } from "react";
import axios from "axios";
import { useState,useMemo } from "react";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import './New.css';
function Womens(){
const [data,setData]=useState([])
const backendurl=(process.env.REACT_APP_URL).replace(/\/+$/, "");
const Ab=async()=>{
    const res=await axios.get(`${backendurl}/womensget`)
    setData(res.data)
}
const navigate=useNavigate()
const Click=((id)=>{
  console.log(id)
navigate(`/womensop/${id}`)
})
const [input,setInput]=useState(
    {
      "name":""
    }
  )
   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
    });
  }, []);
  const click=((e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  })
  const input1=useMemo(()=>input.name,[input])
useEffect(()=>{
    Ab()
},[])
useEffect(()=>{
    AOS.init({
        duration: 2000, 
      once: false,
    })
})
    return(
        <>
        <div className='Main'data-aos="fade-down">
    <div className="App">
      <h2>Fashi</h2>
      <header className="App-header">
       <ul>
       <li><input onClick={()=>console.log(input)} onChange={click} name="name" className='Input1' type='search'placeholder='search'></input></li>
        
        <li>categories</li>
        <li>brands</li>
       
       
        
      
        <li>cart</li>
        <li>login</li>
        <li>signup</li>
       </ul>
      </header>
    </div>
  
    </div>
        <div data-aos="fade-up">
         
{
    data.map((data)=>(
        <div className="Ko">
       <button className="Ma" onClick={()=>Click(data._id)}>
            <div className="Mk">
            <img  className="main123" src={data.img1}></img>
     <h3 style={{color:"orange"}}>{data.name}</h3>
            
        <h5 className="text " >{data.price}</h5> 
       
        </div> </button> </div>
        
    ))
}
        </div></>
    )
}
export default Womens