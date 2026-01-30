import React from "react";
// import { useState } from "react";

function RecipeRotator({recipe}) {

    console.log(recipe)
    console.log(recipe.days_since_last_cooked)

   const days = recipe.days_since_last_cooked
   let icon
   let message
    if (days <= 30) {
     icon = <i style={{ color: "red" }} className="fa-regular fa-face-frown"></i>
     message = `Last cooked ${days} days ago, wait to cook again`
    } else if (days <= 60) {
   icon = <i style={{ color: "yellow" }} className="fa-regular fa-face-meh"></i>
   message = `Last cooked ${days} days ago, its ok to cook again`
   } else {
    icon = <i style={{ color: "green" }} className="fa-regular fa-face-laugh"></i>
    message = `Last cooked ${days} days ago, cook me now!`
   }
 
    return (

        <div className="recipe-rotator">
            
          <p>{message}</p>
          <p>{icon}</p>  
            
            
            
        </div>
    )
}

export default RecipeRotator