import { Link } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { useState, useEffect } from 'react'

const Profile = (props) => {
  const [ showResults, setShowResults ] = useState(false)
  const onClick = () => setShowResults(true) ? setShowResults(false) : setShowResults(true)

  const Results = (props) => {
  return <div> {props.recipes.map(recipe => (
      recipe.creator._id === props.user.profile ? 
        <RecipeCard
        key={recipe._id}
        recipe={recipe}
        handleDeleteRecipe={props.handleDeleteRecipe}
        user={props.user} />
        : null
    ))}
        </div>
  }





  const Results2 = (props) => (
    props.recipes.map(recipe => (
      <h2>{recipe.name}</h2>
    ))
    
  )



  return ( 
    <>
      <main>
        <button onClick={onClick}></button>
        
        {showResults ? 
        <div> 
          {props.recipes.map(recipe => (
            recipe.creator._id === props.user.profile ? 
            <RecipeCard
            key={recipe._id}
            recipe={recipe}
            handleDeleteRecipe={props.handleDeleteRecipe}
            user={props.user} />
            : null
            ))}
        </div>
        :null
          }
   
      </main>

    </> 
  );
}
 
export default Profile;