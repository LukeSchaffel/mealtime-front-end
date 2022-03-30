import { useState, useEffect, useRef } from 'react';
import { getDetails, addReview, removeRestaurantFromRecipe } from '../../services/recipes' 
import { Link, useParams } from 'react-router-dom';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import styles from './RecipeDetails.module.css'



const RecipeDetails = ({user, handleDeleteRecipe, handleDeleteRestaurant, updateAfterRemoveRestaurant}) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
	const [formData, setFormData] = useState({
		content:''
	})
  const [recipe, setRecipe] = useState({})
  const { recipeId } = useParams()

  useEffect(() => {
    getDetails(recipeId)
    .then(recipeData => setRecipe(recipeData))
  }, [])

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const handleAddReview = async (id, newRecipeData) => {
    const newRecipe = await addReview(id, newRecipeData)
    setRecipe({ ...newRecipe })
    setFormData({content: ''})
  }

  const handleRemoveRestaurantFromRecipe = (recipeId, restaurantId) => {
    removeRestaurantFromRecipe(recipeId, restaurantId)
    .then(newRecipe => {
      setRecipe({ ...newRecipe })
      updateAfterRemoveRestaurant(newRecipe)
    })
  }

  const handleSubmit = evt => {
		evt.preventDefault()
		handleAddReview(recipeId, formData)
	}

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
    <h3>Ingredients: {recipe.ingredients}</h3>
    <h3>Calories: {recipe.calories}</h3>
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
        <>
        <div>
          <h4 className="card-text"> {recipe.creator?.name ? recipe.creator?.name : 'Ninja'}'s recipe</h4>
        </div>
        <form 
          id="add-review-form"
          autoComplete="off" ref={formElement} onSubmit={handleSubmit}
        >
          <label htmlFor="content-textarea">Review:</label>
          <textarea name="content"    id="content-textarea" value={formData.content}
						onChange={handleChange}
            required>
          </textarea>
          <button type="submit" disabled={!validForm}>Add Review</button>
        </form>
        </>
      }
      
        {recipe.restaurants?.map((restaurant, idx) => 
       <div key={idx} className={styles.container}>
        <RestaurantCard
        
        restaurant={restaurant} 
        handleDeleteRestaurant={handleDeleteRestaurant}
        user={user}
        />
        {user.profile === recipe.creator?._id ?
          <button
          className="btn btn-sm btn-primary"
          type="submit"
          onClick={()=> handleRemoveRestaurantFromRecipe(recipe._id, restaurant._id)}
          >
         Remove
          </button>
          :
          null
        }
        
        </div>
        )}
      
      <h1>Reviews</h1>
      { recipe.reviews?.length ?
          <table>
            <thead>
              <tr>
               <th>Date</th>
               <th>Review</th>
               <th>Critic</th>
              </tr>
            </thead>
            <tbody>
              {recipe.reviews.map(review => {
                return <tr key ={review._id}>
                  <td>{review.createdAt?.slice(0,10)}</td>
                  <td>{review.content}</td>
                  <td>{review.creator.name}</td>
                </tr>
              })}
            </tbody>
          </table>
       :
        <h3>No Reviews Yet</h3>
       } 
    </>

  )

}

export default RecipeDetails