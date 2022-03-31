import styles from './Restaurant.module.css'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

const Restaurants = (props) => {
  return (
    <>
    <main>
      
      <div className={styles.container}>
        {props.restaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant._id} 
            restaurant={restaurant} 
            handleDeleteRestaurant={props.handleDeleteRestaurant}
            user={props.user}
          />
        ))}
      </div>
      </main>
    </>
  );
}

export default Restaurants;