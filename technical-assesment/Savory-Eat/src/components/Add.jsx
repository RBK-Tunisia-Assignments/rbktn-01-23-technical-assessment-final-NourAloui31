import React, { useState } from "react";
import "../App.css";
import axios from 'axios' 

const Add = () => {
  const [name,setName]=useState("")
  const [cookT,setCookT]=useState()
  const [prepT,setPrepT]=useState()
  const [serves,setServes]=useState()
  const [category,setCategory]=useState("")
  const [description,setDescription]=useState("")
  const [ingredients,setIngredients]=useState("")
  const [image,setImage]=useState("")


  function addData(body){
    axios.post("http://localhost:4000/api/menuItems/add",body)
    .then (rslt=>{console.log(rslt)})
  }

  return (
    <form>
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" defaultValue={name} onChange={(e)=>{setName(e.target.value)} }/>
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" defaultValue={cookT} onChange={(e)=>{setCookT(e.target.value)} } />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" defaultValue={prepT} onChange={(e)=>{setPrepT(e.target.value)} } />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" defaultValue={serves} onChange={(e)=>{setServes(e.target.value)} }/>
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" defaultValue={category} onChange={(e)=>{setCategory(e.target.value)} }/>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" defaultValue={description} onChange={(e)=>{setDescription(e.target.value)} }/>
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" defaultValue={ingredients} onChange={(e)=>{setIngredients(e.target.value)} }/>
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" defaultValue={image} onChange={(e)=>{setImage(e.target.value)} }/>
      </div>
      <button className="create-recipe-btn" onClick={()=>
        addData({
    cookT,
    prepT,
    name,
    serves,
    category,
    image,
    description,
    ingredients
    })
      }>Create Recipe</button>
    </div>
    </form>
  );
};
export default Add;
