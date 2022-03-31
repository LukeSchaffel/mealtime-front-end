import { Link, useLocation } from 'react-router-dom'
import RecipeCard from '../../components/RecipeCard/RecipeCard';
const TuesdayDetails = (props) => {
  return(
    <>
    <h1>Menu</h1>
    <div>
    {props.profile?.tuesday?.map(recipe => (
      <RecipeCard recipe={recipe} 
      user={props.user}
      handleRemoveRecipeFromDay={props.handleRemoveRecipeFromDay}
      profile={props.user.profile}
      day={'tuesday'}
      />
    ))}
    </div>
    <Link to='/schedule'class='nohover'>
      <h1>Back to schedule</h1>
    </Link>   
  </>
  )  
}
 
export default TuesdayDetails;