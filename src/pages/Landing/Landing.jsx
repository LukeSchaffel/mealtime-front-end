import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
     <h1>Hi {user ? user.name : 'There' }, Welcome To Mealtime, The Home Of Food, here You Can Add Your Favorite Recipes And Restaurants To Share With The World, You Can Also Have A Meal Planner That You Can Plan Meals For The Week.</h1>
    </main>
  )
}

export default Landing
