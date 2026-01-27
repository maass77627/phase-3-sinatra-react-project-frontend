import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./App.css";
import RecipeContainer from "./RecipeContainer";
import RecipeForm from "./RecipeForm";
import FilterForm from "./FilterForm";
import Footer from "./Footer";
// import EditForm from "./EditForm";

function App() {
const [recipes, setRecipes] = useState([])
  const[ toggle, setToggle] = useState(false)

  function handleClick() {
        setToggle(!toggle)
     }

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
      <FilterForm recipes={recipes} setRecipes={setRecipes}></FilterForm>
     {toggle && <RecipeForm setRecipes={setRecipes} recipes={recipes}></RecipeForm>}
     <button onClick={handleClick}>Add A New Recipe</button>
     <RecipeContainer recipes={recipes} setRecipes={setRecipes}></RecipeContainer>
     
    <Footer></Footer>
    </div>
    
  );
}

export default App;
