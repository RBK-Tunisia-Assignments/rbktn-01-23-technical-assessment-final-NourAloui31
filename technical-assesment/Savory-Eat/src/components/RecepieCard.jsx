import React from "react";
import "../App.css";

const RecepieCard = ({one}) => {
  return (
    <>
      <div className="card">
        <button className="delete">delete</button>
        <button className="update">update </button>

        <>
          <div className="header">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="text">
            <h1 className="food">Pizza</h1>
            <i> 25 Mins</i> <br />
            <i>Serves: 5</i>
          </div>
        </>
      </div>
      
    </>
  );
};

export default RecepieCard;
