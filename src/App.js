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
  const [categories, setCategories] = useState([])
  const[ toggle, setToggle] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")

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

   useEffect(() => {
    fetch(`http://127.0.0.1:9292/categories`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setCategories(json)
    })

  }, [])

  console.log(recipes)
  let filteredRecipes = selectedCategory ? recipes.filter((recipe) => recipe.category_id === Number(selectedCategory)) : recipes
  
console.log(filteredRecipes)
  return (
    <div className="App">

      <Nav></Nav>
      <FilterForm setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} categories={categories} recipes={recipes} setRecipes={setRecipes}></FilterForm>
     {toggle && <RecipeForm categories={categories} setCategories={setCategories} setRecipes={setRecipes} recipes={recipes}></RecipeForm>}
     <button onClick={handleClick}>Add A New Recipe</button>
     <RecipeContainer categories={categories} recipes={filteredRecipes} setRecipes={setRecipes}></RecipeContainer>
     
    <Footer></Footer>
    </div>
    
  );
}

export default App;
