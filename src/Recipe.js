import React from "react";
import RecipeRotator from "./RecipeRotator";
// import Button from 'react-bootstrap/Button';
// import { useState } from "react";
// import EditForm from "./EditForm"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function Recipe({recipe, setRecipes, categories, handleEditClick}) {
    console.log(recipe.days_since_last_cooked)
    console.log(recipe.greeting)
    console.log(recipe.days_since_last_cooked)

    const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Recipe Details</Popover.Header>
      <Popover.Body>
            <label>Ingredients:</label>
            <p>{recipe.ingredients}</p>
            <label>Directions:</label>
            <p>{recipe.directions}</p>
            <label>Cook Time:</label>
            <p>{recipe.cook_time}</p>

      </Popover.Body>
    </Popover>
  );

    function handleDelete(id) {
        console.log("clicked")
        console.log(id)
        fetch(`http://localhost:9292/recipes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        setRecipes((prevRecipies) => prevRecipies.filter((recipe) => recipe.id !== id))
    }



    function handleClick(recipe) {
        let id = recipe.id
        let today = new Date().toISOString().split("T")[0]
        fetch(`http://127.0.0.1:9292/recipes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({last_cooked_on: today})
        })
        .then((response) => response.json())
        .then((json) => {
            setRecipes((prevRecipies) => prevRecipies.map((rec) => rec.id === json.id ? json : rec ))
            console.log(json)
        })
    }

    return (
        <>
         <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover} rootClose>
        <div  className="recipe">




            <button className="edit-button" onClick={() => handleEditClick(recipe)}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete(recipe.id)}>x</button>
            <strong><p>{recipe.name}</p></strong>

             
            
            <img  className="recipeimage" src={recipe.image} alt="rec"></img><br></br>
            {/* <label>Ingredients:</label>
            <p>{recipe.ingredients}</p>
            <label>Directions:</label>
            <p>{recipe.directions}</p>
            <label>Cook Time:</label>
            <p>{recipe.cook_time}</p> */}
            
            <label>Last Cooked On</label>
            <p>{recipe.last_cooked_on}</p>
           <RecipeRotator recipe={recipe}></RecipeRotator>
         <button onClick={() => handleClick(recipe)} className="made-button">Made Today</button>
         {/* {toggle && <EditForm categories={categories} recipe={recipe}></EditForm>} */}
       
        </div>
         </OverlayTrigger>
         </>
        
         
    )
}

export default Recipe