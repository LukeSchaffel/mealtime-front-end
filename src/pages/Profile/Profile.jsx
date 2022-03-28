import { Link } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { useState,  } from 'react'

const Profile = (props) => {
  const [ showResults, setShowResults ] = useState(false)
  const onClick = () => !showResults ? setShowResults(true) : setShowResults(false)
  
  return ( 
    <>
      <main>
        <h1>Welcome {props.user.name}</h1>
        <h2>{props.user.email}</h2>
        <button onClick={onClick}>
          {!showResults ? <h4>My Meals</h4> 
          :
          <h4>Hide My Meals</h4>
          }
        </button>
        
        {showResults ? 
          <div> 
            {props.recipes.map(recipe => (
              recipe.creator._id === props.user.profile ? 
              <RecipeCard
              key={recipe._id}
              recipe={recipe}
              handleDeleteRecipe={props.handleDeleteRecipe}
              user={props.user} />
              : null
              ))}
          </div>
          :null
          }
   
      </main>

    </> 
  );
}
 
export default Profile;