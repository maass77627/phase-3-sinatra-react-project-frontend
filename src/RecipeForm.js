import React from "react";
import { useState } from "react";

function RecipeForm({setRecipes, recipes}) {
    console.log(recipes)
const [formData, setFormData] = useState({
    name: "",
    image: "",
    last_cooked_on: "",
})


function handleChange(e) {
    let name = e.target.name
    let value = e.target.value
    setFormData({...formData, [name]: value})
}


         function handleSubmit(e) {
            e.preventDefault() 
            console.log(formData)
         fetch(`http://127.0.0.1:9292/recipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((json) => {
            setRecipes({...recipes, json})
            console.log(json)
        })

         }


    return (
        <div className="recipe-form">
           <form onSubmit={(e) => handleSubmit(e)}>
            <label>Name:</label>
            <input onChange={handleChange} type="text" name="name" value={formData.name} ></input><br></br>
            <label>Image:</label>
            <input onChange={handleChange} type="text" name="image" value={formData.image}></input><br></br>
            <label>Last Cooked On:</label>
            <input onChange={handleChange} type="date" name="last_cooked_on" value={formData.last_cooked_on} ></input><br></br>
            <input type="submit" value="submit"></input>

           </form>


        </div>
    )
}

export default RecipeForm