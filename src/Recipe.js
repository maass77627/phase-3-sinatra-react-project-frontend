import React from "react";
import RecipeRotator from "./RecipeRotator";

function Recipe({rec, setRecipes}) {

    function handleClick(rec) {
        let id = rec.id
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
         {/* <h1>this is the rec</h1> */}
         <strong><p>{rec.name}</p></strong>
         <img className="recipeimage" src={rec.image} alt="rec"></img><br></br>
         <label>Last Cooked On</label>
         <p>{rec.last_cooked_on}</p>
           <RecipeRotator rec={rec}></RecipeRotator>
         <button onClick={() => handleClick(rec)}>Made Today</button>
        </div>
    )
}

export default Recipe