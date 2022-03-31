import { Link, useLocation } from 'react-router-dom'
import RecipeCard from '../../components/RecipeCard/RecipeCard';
const WednesdayDetails = (props) => {
  return(
    <>
    <h1>Menu</h1>
    <div>
    {props.profile?.wednesday?.map(recipe => (
      <RecipeCard recipe={recipe} 
      user={props.user}
      handleRemoveRecipeFromDay={props.handleRemoveRecipeFromDay}
      profile={props.user.profile}
      day={'wednesday'}
      />
    ))}
    </div>
    <Link to='/schedule'className='nohover'>
      <h1>Back to schedule</h1>
    </Link>   
  </>
  )  
}
 
export default WednesdayDetails;