import React from "react";
import RecipeRotator from "./RecipeRotator";
import { useState } from "react";
import EditForm from "./EditForm"


function Recipe({recipe, setRecipes, categories}) {

    const [toggle, setToggle] = useState(false)

    function handleEditClick() {
        setToggle(!toggle)


    }

    function handleDelete(id) {
        console.log("clicked")
        console.log(id)
        fetch(`http://localhost:9292/recipes/${id}`, {
            method: "DELETE",
            headers: {
                "Conent-Type": "application/json"
            }
        })
        setRecipes((prevrecipies) => prevrecipies.filter((recipe) => recipe.id !== id))
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
            setRecipes((prevrecipies) => prevrecipies.map((rec) => rec.id === json.id ? json : rec ))
            console.log(json)
        })
    }

    return (
        <div className="recipe">
            <button className="edit-button" onClick={handleEditClick}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete(recipe.id)}>x</button>
             {toggle && <EditForm categories={categories} recipe={recipe}></EditForm>}
            <strong><p>{recipe.name}</p></strong>
            <img className="recipeimage" src={recipe.image} alt="rec"></img><br></br>
            <label>Last Cooked On</label>
            <p>{recipe.last_cooked_on}</p>
           <RecipeRotator recipe={recipe}></RecipeRotator>
         <button onClick={() => handleClick(recipe)} className="made-button">Made Today</button>
        
        </div>
    )
}

export default Recipe