import React from "react";
import Recipe from "./Recipe";


function RecipeContainer({recipes, setRecipes}) {
    console.log(recipes)
    

    return (
        <div className="RecipeContainer">
          <h1 className="recipecontainer-title">Recipes</h1>
           
          {recipes.map((recipe) => <Recipe setRecipes={setRecipes} key={recipe.id} recipe={recipe}></Recipe>)}
        </div>
    )
}

export default RecipeContainer