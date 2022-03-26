import { Link } from 'react-router-dom'

function RecipeCard({user}) {
  return(
    <div className="card">
      <img 
        src="https://www.google.com/" 
        alt="A delicious meal"
        className="card-img-top" 
      />
      <div className="card-body">
        <h2 className="card-text"> Recipe name</h2>
        <p className="card-text">Ingredients</p>
        <p className="card-text">Calories</p>
        <p className="card-text">Preparation time</p>
      </div>
      {/* {
        user.profile === recipe.creator?._id ?
          <div className="card-footer">
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
        <div className="card-body">
          <p className="card-text"> {recipe.creator?.name ? recipe.creator?.name : 'Ninja'}'s recipe</p>
        </div>
      } */}
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
            >
              Edit
            </Link>
            <button
              className="btn btn-sm btn-danger m-left"
            >
              Delete
            </button>
          </div>
    </div>
  )
}

export default RecipeCard;