import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function RestaurantCard({restaurant, user, handleDeleteRestaurant, handleAddRestaurantToRecipe}) {
  const [ loggedIn, setLoggedIn  ] = useState(user ? true : false)
  let location = useLocation()
  let addRestaurantElement;
  if (location.state?.recipe) {
    if((!location.state.recipe.restaurants.some(e => e._id===restaurant._id))) {
      addRestaurantElement = <button
      className="btn btn-sm btn-primary"
      type="submit"
      onClick={()=> handleAddRestaurantToRecipe(location.state.recipe._id, restaurant)}
      >
       Add this Restaurant
      </button>
    } else {
      addRestaurantElement = <p>This Restaurant is already added</p>
    }
  }


  return(
    
    <div className="card">
      <img 
        src={restaurant.picture ? restaurant.picture : `https://picsum.photos/id/1060/300`} 
        alt="Restaurant"
        className="card-img-top" 
      />
      <div className="card-body">
        <h2 className="card-text">
          {restaurant.name}
        </h2>
        <p className="card-text">location: {restaurant.location} </p>
        {restaurant.link ?
        <p className="card-text">link: {restaurant.link}</p>
        :null
        }
      </div>
      {location.state?.recipe ? 
          addRestaurantElement
          :
          loggedIn &&
            user.profile === restaurant.creator?._id ?
              <div className="card-footer">
                <Link
                  className='btn btn-sm btn-primary'
                  to='/profiles/profile/schedule'
                >
                  Add location
                </Link>
                <Link
                  className='btn btn-sm btn-warning'
                  to='/editRestaurant'
                  state={{restaurant}}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-danger m-left"
                  onClick={()=> handleDeleteRestaurant(restaurant._id)}
                >
                  Delete
                </button>
              </div>
            :
            <div className="card-footer">
              <p className="card-text"> {restaurant.creator?.name ? restaurant.creator?.name : 'Chef'}'s Restaurant</p>
            </div>
      }
      
    </div>
  )
}

export default RestaurantCard;