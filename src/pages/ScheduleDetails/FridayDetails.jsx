
import { Link } from 'react-router-dom'
import RecipeCard from '../../components/RecipeCard/RecipeCard';

const FridayDetails = (props) => {
  console.log(props)
  return(
  <>
   
    <h1>Menu</h1>

    <div>
    {props.profile?.friday?.map(recipe => (
      <RecipeCard recipe={recipe} 
      user={props.user}
      
      />
    ))}
    </div>

          <Link
            to='/schedule'
            class='nohover'>
            <h1>Back to schedule</h1>
          </Link>

       
  </>

  )
  
  
  

}

export default FridayDetails;