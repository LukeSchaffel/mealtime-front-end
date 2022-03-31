import { Link, useLocation } from 'react-router-dom'
import RecipeCard from '../../components/RecipeCard/RecipeCard';

const MondayDetails = (props) => {
  
  return(
    <>
    <h1>Menu</h1>
    <div>
    {props.profile?.monday?.map(recipe => (
      <RecipeCard recipe={recipe} 
      user={props.user}
      handleRemoveRecipeFromDay={props.handleRemoveRecipeFromDay}
      profile={props.user.profile}
      day={'monday'}
      />
    ))}
    </div>
    <Link to='/schedule'class='nohover'>
      <h1>Back to schedule</h1>
    </Link>   
    </>
    )
}
 
export default MondayDetails;