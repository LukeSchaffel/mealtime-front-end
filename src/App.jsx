import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddRecipe from './pages/AddRecipe/AddRecipe'
import Recipes from './pages/Recipes/Recipes'
import Restaurants from './pages/Restaurants/Restaurants'
import * as recipeService from './services/recipes'
import AddRestaurant from './pages/AddRestaurant/AddRestaurant'
import * as restaurantService from './services/restaurants'
import RecipeDetails from './pages/RecipeDetails/RecipeDetails'
import Profile from './pages/Profile/Profile'

const App = () => {
  const [recipes, setRecipes] = useState([])
  
  const [restaurants, setRestaurants] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  useEffect(()=> {
    if(user) {
      recipeService.getAll()
      .then(allRecipes => setRecipes(allRecipes))
    }
  }, [user])

  useEffect(()=> {
    if(user) {
      restaurantService.getAll()
      .then(allRestaurants => setRestaurants(allRestaurants))
    }
  }, [user])


  const handleDeleteRecipe = id => {
    recipeService.deleteOne(id)
    .then(deletedRecipe => setRecipes(recipes.filter(recipe => recipe._id !== deletedRecipe._id)))
    navigate('/recipes')
  }
  const handleDeleteRestaurant = id => {
    restaurantService.deleteOne(id)
    .then(deletedRestaurant => setRestaurants(restaurants.filter(restaurant => restaurant._id !== deletedRestaurant._id)))
    navigate('/restaurants')
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddRecipe = async newRecipeData => {
    const newRecipe = await recipeService.create(newRecipeData)
    setRecipes([...recipes, newRecipe])
    navigate('/recipes')
  }
  const handleAddRestaurant= async newRestaurantData => {
    const newRestaurant = await restaurantService.create(newRestaurantData)
    setRestaurants([...restaurants, newRestaurant])
    navigate('/restaunts')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <main>
      <Routes>
      <Route 
            path='/restaurants/add'
            element={
              <AddRestaurant 
              handleAddRestaurant={handleAddRestaurant} 
              />
            } 
          />
           <Route
            path='/restaurants'
            element={
              user ?
              <Restaurants
                handleDeleteRestaurant={handleDeleteRestaurant}
                restaurants={restaurants}
                user={user} 
              />
              :
              <Navigate to='/login' />
            }
          />
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
        path='/recipes'
        element={<Recipes 
          recipes={recipes} 
          user={user}
          handleDeleteRecipe={handleDeleteRecipe}
          />}
        />
        <Route 
          path='/recipes/add'
          element={
            <AddRecipe 
              handleAddRecipe={handleAddRecipe} 
            />
          } 
        />
        <Route
        path='/recipes/:recipeId'
        element={<RecipeDetails 
          user={user}
          handleDeleteRecipe={handleDeleteRecipe}
          />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route
          path="/profiles/profile"
          element={user ? <Profile user={user} recipes={recipes}/> : <Navigate to="/login" />}
        />
      </Routes>
      </main>
    </>
  )
}

export default App
