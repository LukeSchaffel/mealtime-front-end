import { Link, useLocation } from 'react-router-dom'
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import styles from './Details.module.css'

const FridayDetails = (props) => {

  return(
  <>
    <h1 className={styles.topAndBottom}>Friday's Menu</h1>
    <div className={styles.container}>
    {props.profile?.friday?.map((recipe, idx) => (
      <RecipeCard 
      key={idx}
      recipe={recipe} 
      user={props.user}
      handleRemoveRecipeFromDay={props.handleRemoveRecipeFromDay}
      profile={props.user.profile}
      day={'friday'}
      />
    ))}
    </div>
    <a href="/schedule" className='atag'>
      <h1 className={styles.topAndBottom}>Back to schedule</h1>
      </a>
  </>
  )
}

export default FridayDetails;