import React from "react";
// import { useState } from "react";

function RecipeRotator({rec}) {
    // const today = new Date()
    // const cookedDate = new Date(rec.last_cooked_on)
    
    // const milisecondsInDay = 1000 * 60 * 60 * 24;
    // let time = cookedDate - today
    // let difference = Math.floor(time/milisecondsInDay)
    // console.log(difference)
   

    return (

        <div className="reciperotator">
            {/* {time} */}
            
            
            <i style={{color: "green"}} className="fa-regular fa-face-laugh"></i>
            <i style={{color: "red"}}className="fa-regular fa-face-frown"></i>
            <i style={{color: "yellow"}}className="fa-regular fa-face-meh"></i>

            
        </div>
    )
}

export default RecipeRotator