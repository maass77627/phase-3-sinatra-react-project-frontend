import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./App.css";
import RecipeContainer from "./RecipeContainer";
import RecipeForm from "./RecipeForm";

function App() {

  const [recipes, setRecipes] = useState([])


  useEffect(() => {
    fetch(`http://127.0.0.1:9292/recipes`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setRecipes(json)
    })

  }, [])
  

  return (
    <div className="App">
      <Nav></Nav>
     <RecipeForm setRecipes={setRecipes} recipes={recipes}></RecipeForm>
     <RecipeContainer recipes={recipes} setRecipes={setRecipes}></RecipeContainer>
    </div>
    
  );
}

export default App;
