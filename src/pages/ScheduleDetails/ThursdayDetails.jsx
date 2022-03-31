import { Link, useLocation } from 'react-router-dom'
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import styles from './Details.module.css'
const ThursdayDetails = (props) => {
  return(
    <>
    <h1>Thursday's Menu</h1>
    <div className={styles.container}>
    {props.profile?.thursday?.map((recipe, idx) => (
      <RecipeCard 
      key={idx}
      recipe={recipe} 
      user={props.user}
      handleRemoveRecipeFromDay={props.handleRemoveRecipeFromDay}
      profile={props.user.profile}
      day={'thursday'}
      />
    ))}
    </div>
    <Link to='/schedule'className='nohover'>
      <h1>Back to schedule</h1>
    </Link>   
  </>
  )  
}
 
export default ThursdayDetails;