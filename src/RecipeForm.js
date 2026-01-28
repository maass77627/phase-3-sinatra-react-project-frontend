import React from "react";
import { useState } from "react";

function RecipeForm({setRecipes, recipes, categories, setCategories}) {
    console.log(recipes)
const [formData, setFormData] = useState({
    name: "",
    image: "",
    igredients: "",
    directions: "",
    cook_time: "",
    last_cooked_on: "",
    category_id: 3,
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
            setRecipes((prevRecipes) => [...prevRecipes, json])
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
            <label>Ingredients:</label>
            <input onChange={handleChange} type="text" name="ingredients" value={formData.ingredients}></input><br></br>
            <label>Directions:</label>
            <input onChange={handleChange} type="text" name="directions" value={formData.directions}></input><br></br>
            <label>Cook Time:</label>
            <input onChange={handleChange} type="text" name="cook_time" value={formData.cook_time}></input><br></br>
            

            

            <label>Last Cooked On:</label>
            <input onChange={handleChange} type="date" name="last_cooked_on" value={formData.last_cooked_on} ></input><br></br>
            <label>Select Recipe Category:</label>
            <select onChange={handleChange} name="category_id"  value={formData.category_id} >
                <option value="">Select Category</option>
           {categories.map((category) => (
            <option  key={category.id} value={category.id}>{category.name}</option>

           ))}
           </select>
            <input type="submit" value="submit"></input>

           </form>


        </div>
    )
}

export default RecipeForm