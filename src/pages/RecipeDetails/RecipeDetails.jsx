import { useState, useEffect } from 'react';
import { getDetails } from '../../services/recipes' 
import { Link, useParams } from 'react-router-dom';



const RecipeDetails = ({user, handleDeleteRecipe}) => {

  const [recipe, setRecipe] = useState({})
  const { recipeId } = useParams()

  useEffect(() => {
    getDetails(recipeId)
    .then(recipeData => setRecipe(recipeData))
  }, [])

  return (
    <>
    <h1>{recipe.name}</h1>
    {recipe.picture ?
      <img 
        src={recipe.picture}
        alt="A delicious meal"
        className="card-img-top" 
      />
      : null
      }
    <h3>{recipe.ingredients}</h3>
    <h3>{recipe.calories}</h3>
    <h3>{recipe.prepTime}</h3>
    <h3>{recipe.instructions}</h3>
    {
      user.profile === recipe.creator?._id ?
        <div>
          <Link
            className='btn btn-sm btn-primary'
            to='/profiles/profile/schedule'
          >
            Add to schedule
          </Link>
          <Link
            className='btn btn-sm btn-warning'
            to='/edit'
            state={{recipe}}
           >
            Edit
          </Link>
          <button
            className="btn btn-sm btn-danger m-left"
            onClick={()=> handleDeleteRecipe(recipe._id)}
          >
            Delete
          </button>
        </div>
      :
        <div>
          <h4 className="card-text"> {recipe.creator?.name ? recipe.creator?.name : 'Ninja'}'s recipe</h4>
        </div>
      }
    </>

  )

}

export default RecipeDetails