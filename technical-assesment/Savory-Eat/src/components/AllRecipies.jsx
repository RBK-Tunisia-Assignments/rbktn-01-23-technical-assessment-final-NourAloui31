import React ,{useEffect, useState}from "react";
import "../index.scss";
//import d from '../data/data.json'
import axios from 'axios'
import Onerecepie from "./OneRecipie";


const AllRecepies = () => {

  const [data,setData]=useState([])

  useEffect(()=>fetchData(),[])

  function fetchData(){
    axios.get("http://localhost:4000/api/recepies/getAll")
    .then(reslt=>{
      console.log(reslt.data)
      setData(reslt.data)
    })
  }
  
  function delRecepie(id){
    axios.delete(`http://localhost:4000/api/recepies/${id}`)
    .then(reslt=>{
      console.log(reslt.data)
      window.location.reload()
      
    })
  }

  return (
    
    <div className="card-container">
    {data.map(one=>{
        return (
          <div className="card">
            <Onerecepie one={one} delRecepie={delRecepie}/>
          </div>
        )}
    )}
      
    </div>
  );
};

export default AllRecepies;
