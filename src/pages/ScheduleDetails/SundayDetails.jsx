import { Link, useLocation } from 'react-router-dom'
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import styles from './Details.module.css'
const SundayDetails = (props) => {
  return(
    <>
    <h1>Sunday's Menu</h1>
    <div className={styles.container}>
    {props.profile?.sunday?.map((recipe, idx) => (
      <RecipeCard 
      key={idx}
      recipe={recipe} 
      user={props.user}
      handleRemoveRecipeFromDay={props.handleRemoveRecipeFromDay}
      profile={props.user.profile}
      day={'sunday'}
      />
    ))}
    </div>
    <Link to='/schedule'className='nohover'>
      <h1>Back to schedule</h1>
    </Link>   
  </>
  )  
}
 
export default SundayDetails;