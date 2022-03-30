import RecipeCard from "../../components/RecipeCard/RecipeCard";
import styles from './Recipes.module.css'


const Recipes = (props) => {
  return ( 
    <>
    <main>
      <h1>All Recipes</h1>
        <div id={styles.recipeDiv}>
          {props.recipes.map(recipe => (
            <RecipeCard
              key={recipe._id}
              recipe={recipe}
              handleDeleteRecipe={props.handleDeleteRecipe}
              user={props.user} />
          ))}
        </div>
    </main> 
    </> 
  );
}
 
export default Recipes;