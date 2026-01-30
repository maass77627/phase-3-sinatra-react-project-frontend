import React from "react";
import Recipe from "./Recipe";
import EditForm from "./EditForm";
import { useState } from "react"


function RecipeContainer({recipes, setRecipes, categories}) {
    console.log(recipes)

     const [editToggle, setEditToggle] = useState(false)
     const [editRecipe, setEditRecipe] = useState()
    
        function handleEditClick(recipe) {
            setEditRecipe(recipe)
            setEditToggle(!editToggle)
    
    
        }
    

    return (
        <div className="RecipeContainer">
          <h1 className="recipecontainer-title">Recipes</h1>
           {editToggle && <EditForm setRecipes={setRecipes} recipe={editRecipe} categories={categories} recipes={recipes}></EditForm>}
          {recipes.map((recipe) => <Recipe  handleEditClick={handleEditClick} categories={categories} setRecipes={setRecipes} key={recipe.id} recipe={recipe}></Recipe>)}
        </div>
    )
}

export default RecipeContainer