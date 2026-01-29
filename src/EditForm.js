import React from "react";
import { useState } from "react";


function EditForm({recipe, categories}) {
    console.log(recipe)

    const [formData, setFormData] = useState({
        name: recipe.name,
        ingredients: recipe.ingredients,
        directions: recipe.directions,
        cook_time: recipe.cook_time,
        image: recipe.image,
        category_id: recipe.category_id,
        last_cooked_on: recipe.last_cooked_on
        })



        function handleChange(e) {
            let name = e.target.name
            let value = e.target.value
            setFormData({...formData, [name]: value})

        }

        function handleSubmit(e) {
            e.preventDefault()
                  let id = recipe.id
            fetch(`http://localhost:9292/recipes/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Could not complete the request")
            })
            .then((json) => {
                console.log(json)
            })
            .catch((error) =>{
                console.error(error)
                alert("Request failed, try again")
            })
            
        }



    return (

        <div className="edit-form">
            <form onSubmit={handleSubmit}>
                <label>Name:</label><br></br>
                <input onChange={(e) => handleChange(e)} type="text" name="name" value={formData.name}></input><br></br>
                <label>Ingredients:</label><br></br>
                <input onChange={(e) => handleChange(e)} type="text" name="ingredients" value={formData.ingredients}></input><br></br>
                <label>Directions:</label><br></br>
                <input onChange={(e) => handleChange(e)} type="text" name="directions" value={formData.directions}></input><br></br>
                <label>Cook Time:</label><br></br>
                <input onChange={(e) => handleChange(e)} type="text" name="cook_time" value={formData.cook_time}></input><br></br>
                <label>Image:</label><br></br>
                <input onChange={(e) => handleChange(e)} type="text" name="image" value={formData.image}></input><br></br>
                <label>Last Cooked On:</label><br></br>
                <input onChange={(e) => handleChange(e)} type="text" name="last_cooked_on" value={formData.last_cooked_on}></input><br></br>
                <label>Category</label><br></br>
                <select onChange={(e) => handleChange(e)} type="select" name="category_id" value={formData.category_id}>
                    <option>Select Category</option>  
                {categories.map((category) => (
                    <option  key={category.id} value={category.id}>{category.name}</option>
                ))}
                </select>
                <input type="submit" value="submit" ></input>

            </form>

        </div>
    )
}

export default EditForm