import './App.css';
import React, {useEffect ,useState} from 'react';
import Recipe from './Recipe';

const App=()=>{
  const APP_ID='ca0cdcce';
  const APP_KEY='adbfd1a770a389823a22f18c118c3e69';
  

  const [recipes ,setRecipes]=useState([])
  


useEffect(()=>{
  getRecipes();

} ,[])

const getRecipes=async ()=>{
  const response=await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data= await response.json();
  setRecipes(data.hits)
  console.log(data.hits)

};

  return(
    <div className="App">
    <h1>Hello Recipe</h1>
    <form className="search-form">
    <input type="text" className="search-bar"></input>
    <button  className="search-button">Search</button>
    </form>
    {recipes.map(recipe=>(

      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      >
      
      </Recipe>
    ))}
    
    </div>
  );

}

export default App;
