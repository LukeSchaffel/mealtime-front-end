import { Link, useLocation } from 'react-router-dom'
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import styles from './Details.module.css'
const MondayDetails = (props) => {
  
  return(
    <>
    <h1>Monday's Menu</h1>
    <div className={styles.container}>
    {props.profile?.monday?.map((recipe, idx) => (
      <RecipeCard 
      key={idx}
      recipe={recipe} 
      user={props.user}
      handleRemoveRecipeFromDay={props.handleRemoveRecipeFromDay}
      profile={props.user.profile}
      day={'monday'}
      />
    ))}
    </div>
    <Link to='/schedule'className='nohover'>
      <h1>Back to schedule</h1>
    </Link>   
    </>
    )
}
 
export default MondayDetails;