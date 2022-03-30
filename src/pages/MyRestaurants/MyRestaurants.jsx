import { Link, useLocation } from "react-router-dom";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import styles from './MyRestaurants.module.css'

const MyRestaurants = (props) => {
  let location = useLocation()
  let recipe = location.state.recipe
  return ( 
    <>
    <h1>My Restaurants</h1>
    {props.restaurants.length ? 
          <div className={styles.container}> 
            {props.restaurants.map(restaurant => (
              restaurant.creator._id === props.user.profile ? 
              <RestaurantCard
                key={restaurant._id}
                restaurant={restaurant}
                state={{recipe}}
                handleAddRestaurantToRecipe={props.handleAddRestaurantToRecipe}
                user={props.user} />
              : null
              ))}
          </div>
          :
          <h3>You have no restaurants yet</h3>
      }
    </>
   );
}
 
export default MyRestaurants;