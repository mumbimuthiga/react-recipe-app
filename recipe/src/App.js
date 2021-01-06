import './App.css';
import React, {useEffect ,useState} from 'react';
import Recipe from './Recipe';

const App=()=>{
  const APP_ID='ca0cdcce';
  const APP_KEY='adbfd1a770a389823a22f18c118c3e69';
  

  const [recipes ,setRecipes]=useState([])
  const [search ,setSearch]=useState('');
  const [query ,setQuery]=useState('chicken');
  


useEffect(()=>{
  getRecipes();

} ,[query])

const getRecipes=async ()=>{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data= await response.json();
  setRecipes(data.hits)
  console.log(data.hits)

};
const updateSearch=e=>{
setSearch(e.target.value);
console.log(search)
}
const getSearch=e=>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return(
    <div className="App">
   
    <form onSubmit={getSearch} className="search-form">
    <input type="text" className="search-bar" value={search} onChange={updateSearch}></input>
    <button  className="search-button">Search</button>
    </form>
    <div className="recipes">
    {recipes.map(recipe=>(

      <Recipe 
     
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      >
     
      
      </Recipe>
    ))}
    </div>
    
    </div>
  );

}

export default App;
