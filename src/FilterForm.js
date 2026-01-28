import React from "react";
// import {useState} from "react";

function FilterForm({recipes, setRecipes, categories, setSelectedCategory, selectedCategory}) {

// const [selectedCategory, setSelectedCategory] = useState("")

function handleChange(e) {
    setSelectedCategory(e.target.value)
}



    return (
        <div className="filter-form">
            <form>
                <label>Filter Recipes</label><br></br>
                <select onChange={(e) => handleChange(e)} type="select" value={selectedCategory}>
                    <option value="">Select a Category</option>
                {categories.map((category) =>(
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
                </select>
                
                <input type="submit" value="submit"></input>
            </form>

        </div>
    )
}

export default FilterForm