import React ,{useState}from "react";
import "../index.scss";
import d from '../data/data.json'


const AllRecepies = () => {

  const [data,setData]=useState(d)

  
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
