import { Link, useLocation } from 'react-router-dom'
import { useState,  } from 'react'
import styles from './RecipeCard.module.css'

function RecipeCard({recipe, user, handleDeleteRecipe, handleAddRecipeToDay, profile, handleRemoveRecipeFromDay, day}) {
    const [ loggedIn, setLoggedIn  ] = useState(user ? true : false)
    const [ hiddenDiv, setHiddenDiv ] = useState (handleRemoveRecipeFromDay ? true : false)
    
  return(
    
    <div id={styles.cardStyle} className="card">
      
      <img 
      src={recipe.picture ? recipe.picture : `https://amalghosh.com/assets/food13.jpg`} 
      alt="Recipe"
      className="card-img-top" 
      />
      
      <div className="card-body">
        {loggedIn ? 
        <h2 className="card-text">
        <Link
          to={`/recipes/${recipe._id}`}
        >
          {recipe.name}
        </Link></h2>
        :
        <>
        <h2>{recipe.name}</h2>
        <p>Please <Link to="/login">log in</Link> to see recipe details</p>
        </>
        }
        {recipe.calories ?
        <p className="card-text">Calories: {recipe.calories}</p>
        :null
        }
        {recipe.prepTime ?
        <p className="card-text">Preparation time {recipe.prepTime}</p>
        :null
        }
        <p className="card-text">Restaurants {recipe.restaurants?.length}</p>
      </div>
      
        {loggedIn &&
          user.profile === recipe.creator?._id  ?
            <div className="card-footer">
              <Link
                className='btn btn-sm btn-primary'
                to='/schedule'
                state={{recipe}}
                user={user}
                id={styles.addToSchedule}
              >
                Add to schedule
              </Link>
              <Link
              className='btn btn-sm btn-primary'
              to='/restaurants/myRestaurants'
              state={{recipe}}
            >
              Add Restaurant
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
          
          <div className="card-footer" hidden={hiddenDiv}>
            <p className="card-text" > {recipe.creator?.name ? recipe.creator?.name : 'Ninja'}'s recipe</p>
          </div>
          
        }
        {handleRemoveRecipeFromDay ?
        <button
        className="btn btn-sm btn-primary"
          type="submit"
          onClick={()=> handleRemoveRecipeFromDay(recipe._id, profile, day)}
        >Remove From Menu</button>
        :null
        } 
    </div>
  )
}

export default RecipeCard;