import React from "react";
import "../App.css"
import "../index.scss";

const Onerecepie = ({ one,delRecepie }) => {
  return (
    <div>
      <button className="delete" onClick={()=>{delRecepie(one.recepie_Id)}}>delete</button>
        <button className="update">update </button>

        <>
          <div className="header">
            <img
             src={one.recepie_Image}
             alt=""
            />
          </div>
          <div className="text">
            <h1 className="food">{one.recepie_Name}</h1>
            <i> {one.Cook_Time} Mins</i> <br />
            <i>{one.Serves}</i>
          </div>
        </>
    </div>
  );
};

export default Onerecepie;
