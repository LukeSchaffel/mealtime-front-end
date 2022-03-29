import { Link } from 'react-router-dom'
import { useState } from 'react'

function RestaurantCard({restaurant, user, handleDeleteRestaurant}) {
  const [ loggedIn, setLoggedIn  ] = useState(user ? true : false)
    
  return(
    
    <div className="card">
      <img 
        src={restaurant.picture ? restaurant.picture : `https://picsum.photos/id/1060/300`} 
        alt="Restaurant"
        className="card-img-top" 
      />
      <div className="card-body">
        <h2 className="card-text">
          <Link
            to={`/restaurants/${restaurant._id}`}
          >
            {restaurant.name}
          </Link></h2>
        <p className="card-text">location: {restaurant.location} </p>
        {restaurant.link ?
        <p className="card-text">link: {restaurant.link}</p>
        :null
        }
        {restaurant.meals ?
        <p className="card-text">Meals {restaurant.meals}</p>
        :null
        }
      </div>
      {loggedIn &&
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