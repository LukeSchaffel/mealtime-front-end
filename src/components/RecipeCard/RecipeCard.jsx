import { Link } from 'react-router-dom'

function RecipeCard({recipe, user, handleDeleteRecipe}) {
  return(
    
    <div className="card">
      {recipe.picture ?
      <img 
        src={recipe.picture}
        alt="A delicious meal"
        className="card-img-top" 
      />
      : null
      }
      <div className="card-body">
        <h2 className="card-text">{recipe.name}</h2>
        <p className="card-text">Ingredients: {recipe.ingredients} </p>
        {recipe.calories ?
        <p className="card-text">Calories: {recipe.calories}</p>
        :null
        }
        {recipe.prepTime ?
        <p className="card-text">Preparation time {recipe.prepTime}</p>
        :null
        }
      </div>
      {
        user.profile === recipe.creator?._id ?
          <div className="card-footer">
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
        <div className="card-footer">
          <p className="card-text"> {recipe.creator?.name ? recipe.creator?.name : 'Ninja'}'s recipe</p>
        </div>
      }
      
    </div>
  )
}

export default RecipeCard;