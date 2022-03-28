import { Link } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Profile = (props) => {
  return ( 
    <>
      <main>
        <h1>Welcome, {props.user.name}</h1>
        <h2>{props.user.email}</h2>
        {props.recipes.map(recipe => (
         <div>
           {recipe.creator._id === props.user.profile ? 
           <RecipeCard
           key={recipe._id}
           recipe={recipe}
           handleDeleteRecipe={props.handleDeleteRecipe}
           user={props.user} />
           : null}
          
          </div>
          
        ))}
      </main>

    </> 
  );
}
 
export default Profile;