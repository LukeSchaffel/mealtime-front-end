import { Link, useLocation } from 'react-router-dom'
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import styles from './Details.module.css'
const WednesdayDetails = (props) => {
  return(
    <>
    <h1 className={styles.topAndBottom}>Wednesday's Menu</h1>
    <div className={styles.container}>
    {props.profile?.wednesday?.map((recipe, idx) => (
      <RecipeCard 
      key={idx}
      recipe={recipe} 
      user={props.user}
      handleRemoveRecipeFromDay={props.handleRemoveRecipeFromDay}
      profile={props.user.profile}
      day={'wednesday'}
      />
    ))}
    </div>
    <Link to='/schedule'className='nohover'>
      <h1 className={styles.topAndBottom}>Back to schedule</h1>
    </Link>   
  </>
  )  
}
 
export default WednesdayDetails;