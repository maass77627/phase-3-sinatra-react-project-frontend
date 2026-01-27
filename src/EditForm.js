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
        category_id: recipe.category_id
        })



        function handleChange(e) {
            let name = e.target.name
            let value = e.target.value
            setFormData({...formData, [name]: value})

        }

        function handleSubmit(e) {
            e.preventDefault()
            fetch()
        }



    return (

        <div className="edit-form">
            <form>
                <input onChange={(e) => handleChange(e)} type="text" name="name" value={formData.name}></input>
                <input onChange={(e) => handleChange(e)} type="text" name="ingredients" value={formData.ingredients}></input>
                <input onChange={(e) => handleChange(e)} type="text" name="directions" value={formData.directions}></input>
                <input onChange={(e) => handleChange(e)} type="text" name="cook_time" value={formData.cook_time}></input>
                <input onChange={(e) => handleChange(e)} type="text" name="image" value={formData.image}></input>
                <select onChange={(e) => handleChange(e)} type="select" name="category_id" value={formData.category_id}>
                    <option>Select Category</option>  
                {categories.map((category) => {
                    <option  key={category.id} value={category.id}>{category.name}</option>
                })}
                </select>
                <input type="submit" value="submit" ></input>

            </form>

        </div>
    )
}

export default EditForm