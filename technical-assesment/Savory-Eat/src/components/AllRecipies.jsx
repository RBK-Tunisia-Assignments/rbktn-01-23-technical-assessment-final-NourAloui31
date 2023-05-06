import React ,{useEffect, useState}from "react";
import "../index.scss";
//import d from '../data/data.json'
import axios from 'axios'


const AllRecepies = () => {


  const [data,setData]=useState([])

  useEffect(()=>fetchData(),[])

  function fetchData(){
    axios.get("http://localhost:4000/api/menuItems/getAll")
    .then(reslt=>{
      console.log(reslt.data)
      setData(reslt.data)
    })
  }
  
  return (
    
    <div className="card-container">
    {data.map(item=>{
    return (
      <div className="card">
        <button className="delete">delete</button>
        <button className="update">update </button>

        <>
          <div className="header">
            <img
             src={item.recepie_Image}
             alt=""
            />
          </div>
          <div className="text">
            <h1 className="food">{item.recepie_Name}</h1>
            <i> {item.Cook_Time} Mins</i> <br />
            <i>{item.Serves}</i>
          </div>
        </>
      </div>
    )}
      )}
      

  
    </div>
  );
};

export default AllRecepies;
