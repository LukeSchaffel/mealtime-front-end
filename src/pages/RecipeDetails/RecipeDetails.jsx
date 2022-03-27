import { useState, useEffect } from 'react';
import { getDetails } from '../../services/recipes' 
import { useParams } from 'react-router-dom';



const RecipeDetails = ({user}) => {

  const [recipeDetails, setRecipeDetails] = useState({})
  const { recipeId } = useParams()

  useEffect(() => {
    getDetails(recipeId)
    .then(recipeData => setRecipeDetails(recipeData))
  }, [])

  return (
    <>
    <h1>recipe details</h1>
    <h3>{recipeDetails.name}</h3>
    <p>{recipeDetails.instructions}</p>
    </>

  )

}

export default RecipeDetails