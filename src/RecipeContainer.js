import React from "react";
import Recipe from "./Recipe";


function RecipeContainer({recipes, setRecipes}) {
    console.log(recipes)
    

    return (
        <div className="RecipeContainer">
          <h1 className="recipecontainer-title">Recipes</h1>
           
          {recipes.map((rec) => <Recipe setRecipes={setRecipes} key={rec.id} rec={rec}></Recipe>)}
        </div>
    )
}

export default RecipeContainer