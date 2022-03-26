

const Recipes = (props) => {
  return ( 
    <>
    <h1>All Recipes</h1>
      <div>
        {props.recipes.map(recipe => {
          // <RecipeCard
          //   key={recipe._id}
          //   recipe={recipe}
          //   handleDeleteRecipe={props.handleDeleteRecipe}
          //   user={user} />
          })}
      </div>
    </> 
  );
}
 
export default Recipes;