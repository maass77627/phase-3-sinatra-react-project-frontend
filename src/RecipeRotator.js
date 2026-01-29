import React from "react";
// import { useState } from "react";

function RecipeRotator({rec}) {
    console.log(new Date())
   console.log(Date.now())
   console.log(new Date().toLocaleDateString("en-US"))

  let date = new Date().toLocaleDateString("en-US")
  console.log(date)

    return (

        <div className="recipe-rotator">
            
            
            
            <i style={{color: "green"}} className="fa-regular fa-face-laugh"></i>
            <i style={{color: "red"}} className="fa-regular fa-face-frown"></i>
            <i style={{color: "yellow"}} className="fa-regular fa-face-meh"></i>

            
        </div>
    )
}

export default RecipeRotator