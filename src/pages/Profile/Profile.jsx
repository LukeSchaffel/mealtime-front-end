import styles from './Profile.module.css'
import { Link } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { useState,  } from 'react'

const Profile = (props) => {
  const [ showRecipes, setShowRecipes ] = useState(false)
  const [ showRestaurants, setShowRestaurants ] = useState(false)
  const toggleRecipes = () => !showRecipes ? setShowRecipes(true) : setShowRecipes(false)
  const toggleRestaurants = () => !showRestaurants ?
  setShowRestaurants(true) : setShowRestaurants(false)
  return ( 
    <>
      <main>
        <h1>Welcome {props.user.name}</h1>
        <div id={styles.email}>
          <h2>{props.user.email}</h2>
          
          <Link to="/changePassword">Change Password</Link>
        </div>
        <a href="/schedule" className='tag'><button
        type="submit"
        className="btn btn-primary"
        formAction='/schedule' >
          <h4>Schedule</h4>
        </button></a>
        <button 
        type="button"
        className="btn btn-primary"
        id="show-hide-recipes" 
        onClick={toggleRecipes}
        hidden={showRestaurants}
        >
          {!showRecipes ? 
          <h4>My Recipes</h4> 
          :
          <h4>Hide My Recipes</h4>
          }
        </button>
        
        {showRecipes ? 
          <div id={styles.recipeDiv}> 
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


        <button 
        type="button"
        className="btn btn-primary"
        id="show-hide-restaurants" 
        onClick={toggleRestaurants}
        hidden={showRecipes}
        >
          {!showRestaurants ? 
          <h4>My Restaurants</h4> 
          :
          <h4>Hide My Restaurants</h4>
          }
        </button>

        {showRestaurants ?  
        <div id={styles.restaurantDiv}>
          {props.restaurants.map(restaurant=> (
            restaurant.creator._id === props.user.profile ?
            <RestaurantCard
              key={restaurant._id} 
              restaurant={restaurant} 
              handleDeleteRestaurant={props.handleDeleteRestaurant}
              user={props.user}
              />
              :null
              ))}
            </div>
          :null}


   
      </main>

    </> 
  );
}
 
export default Profile;