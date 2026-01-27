import React from "react";
import { useState } from "react";


function EditForm({recipe}) {
    console.log(recipe)

    const [formData, setFormData] = useState({
        name: recipe.name,
        ingredients: recipe.ingredients,
        directions: recipe.directions,
        cook_time: recipe.cook_time,
        image: recipe.image,
        category_id: recipe.category_id
        })





    return (

        <div className="edit-form">
            <form>
                <input type="text" value={formData.name}></input>
                <input type="text" value={formData.ingredients}></input>
                <input type="text" value={formData.directions}></input>
                <input type="submit" ></input>

            </form>

        </div>
    )
}

export default EditForm