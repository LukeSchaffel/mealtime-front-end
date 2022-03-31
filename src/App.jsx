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
import Schedule from './pages/Schedule/Schedule'
import Restaurants from './pages/Restaurants/Restaurants'
import * as recipeService from './services/recipes'
import AddRestaurant from './pages/AddRestaurant/AddRestaurant'
import * as restaurantService from './services/restaurants'
import * as profileService from './services/profileService'
import RecipeDetails from './pages/RecipeDetails/RecipeDetails'
import FridayDetails from './pages/ScheduleDetails/FridayDetails'
import MondayDetails from './pages/ScheduleDetails/MondaydDetails'
import TuesdayDetails from './pages/ScheduleDetails/TuesdayDetails'
import WednesdayDetails from './pages/ScheduleDetails/WednesdayDetails'
import ThursdayDetails from './pages/ScheduleDetails/ThursdayDetails'
import SaturdayDetails from './pages/ScheduleDetails/SaturdayDetails'
import SundayDetails from './pages/ScheduleDetails/SundayDetails'
import Profile from './pages/Profile/Profile'
import EditRecipe from './pages/EditRecipe/EditRecipe'
import EditRestaurant from './pages/EditRestaurant/EditRestaurant'
import MyRestaurants from './pages/MyRestaurants/MyRestaurants'


const App = () => {
  const [recipes, setRecipes] = useState([])
  const [schedules, setSchedules] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  useEffect(()=> {
    if (user) { 
     profileService.getProfile(user.profile)
     .then(profile => {
       setProfile(profile)
     })}
   }, [user])

  useEffect(()=> {
    
      recipeService.getAll()
      .then(allRecipes => setRecipes(allRecipes))
    
  }, [])

  useEffect(()=> {
    
      restaurantService.getAll()
      .then(allRestaurants => setRestaurants(allRestaurants))
    
  }, [])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(schedules => setSchedules(schedules))
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

  const handleUpdateRecipe = updateRecipeData => {
    recipeService.update(updateRecipeData)
    .then(updatedRecipe => {
      const newRecipesArray = recipes.map(recipe => recipe._id === updatedRecipe._id ? updatedRecipe : recipe)
      setRecipes(newRecipesArray)
      navigate('/recipes')
    })
  }

  const handleAddRestaurantToRecipe = (recipeId, restaurant) => {
    recipeService.addRestaurantToRecipe(recipeId, restaurant)
    .then(updatedRecipe => {
      const newRecipesArray = recipes.map(recipe => recipe._id === updatedRecipe._id ? updatedRecipe : recipe)
      setRecipes(newRecipesArray)
      navigate(`/recipes/${recipeId}`)
    })
  }

  const updateAfterRemoveRestaurant = (newRecipe) => {
      const newRecipesArray = recipes.map(recipe => recipe._id === newRecipe._id ? newRecipe : recipe)
      setRecipes(newRecipesArray)
    }

  const handleAddRestaurant= async newRestaurantData => {
    const newRestaurant = await restaurantService.create(newRestaurantData)
    setRestaurants([...restaurants, newRestaurant])
    navigate('/restaurants')
  }

  const handleUpdateRestaurant = updateRestaurantData => {
    restaurantService.update(updateRestaurantData)
    .then(updatedRestaurant => {
      const newRestaurantsArray = restaurants.map(restaurant => restaurant._id === updatedRestaurant._id ? updatedRestaurant : restaurant)
      setRestaurants(newRestaurantsArray)
      navigate('/restaurants')
    })

  }

  const handleAddRecipeToDay = (recipe, profile, day) => {profileService.addRecipeToDay(recipe, profile, day)
    .then(updatedProfile => {
      profileService.getProfile(user.profile)
      .then(profile => {
      setProfile({...profile})
      navigate(`/schedule/${day}`)
     })}
    )}
  

  const handleRemoveRecipeFromDay = 
  (recipeId, profile, day) => {
    profileService.removeRecipeFromDay(recipeId, profile, day)
    .then(updatedProfile => {
      setProfile({...updatedProfile})
      navigate(`/schedule/${day}`)

    })
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
              
              <Restaurants
                handleDeleteRestaurant={handleDeleteRestaurant}
                restaurants={restaurants}
                user={user} 
              />
              
            }
          />
          <Route 
          path='/restaurants/myRestaurants'
          element={
            <MyRestaurants 
              restaurants={restaurants} 
              user={user}
              handleAddRestaurantToRecipe={handleAddRestaurantToRecipe}
            />
          } 
        />
           <Route
            path='/schedule'
            element={
              user ?
              <Schedule
                schedules={schedules}
                user={user} 
                handleAddRecipeToDay={handleAddRecipeToDay}
              />
              :
              <Navigate to='/login' />
            }
          />

            <Route 
             path='/editRestaurant'
             element={<EditRestaurant 
              restaurants={restaurants}
              user={user}
              handleUpdateRestaurant={handleUpdateRestaurant}
             
             />}
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
          handleDeleteRestaurant={handleDeleteRestaurant}
          updateAfterRemoveRestaurant={updateAfterRemoveRestaurant}
          />}
        />
        <Route
        path='/schedule/friday'
        element={<FridayDetails 
          user={user}
          handleAddRecipeToDay={handleAddRecipeToDay}
          profile={profile}
          handleRemoveRecipeFromDay={handleRemoveRecipeFromDay}
          />}
        />
        <Route
        path='/schedule/monday'
        element={<MondayDetails 
          user={user}
          handleAddRecipeToDay={handleAddRecipeToDay}
          profile={profile}
          handleRemoveRecipeFromDay={handleRemoveRecipeFromDay}
          />}
        />
        <Route
        path='/schedule/tuesday'
        element={<TuesdayDetails 
          user={user}
          handleAddRecipeToDay={handleAddRecipeToDay}
          profile={profile}
          handleRemoveRecipeFromDay={handleRemoveRecipeFromDay}
          />}
        />
        <Route
        path='/schedule/Wednesday'
        element={<WednesdayDetails 
          user={user}
          handleAddRecipeToDay={handleAddRecipeToDay}
          profile={profile}
          handleRemoveRecipeFromDay={handleRemoveRecipeFromDay}
          />}
        />
        <Route
        path='/schedule/thursday'
        element={<ThursdayDetails 
          user={user}
          handleAddRecipeToDay={handleAddRecipeToDay}
          profile={profile}
          handleRemoveRecipeFromDay={handleRemoveRecipeFromDay}
          />}
        />
        <Route
        path='/schedule/saturday'
        element={<SaturdayDetails 
          user={user}
          handleAddRecipeToDay={handleAddRecipeToDay}
          profile={profile}
          handleRemoveRecipeFromDay={handleRemoveRecipeFromDay}
          />}
        />
        <Route
        path='/schedule/sunday'
        element={<SundayDetails 
          user={user}
          handleAddRecipeToDay={handleAddRecipeToDay}
          profile={profile}
          handleRemoveRecipeFromDay={handleRemoveRecipeFromDay}
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
          element={user ? <Profile 
            user={user} 
            recipes={recipes}
            restaurants={restaurants}
            handleDeleteRecipe={handleDeleteRecipe}
            handleDeleteRestaurant={handleDeleteRestaurant}
            /> : <Navigate to="/login" />}
        />
        <Route 
            path='/edit'
            element={
              <EditRecipe
                handleUpdateRecipe={handleUpdateRecipe}
              />
            }
          />
      </Routes>
      </main>
    </>
  )
}

export default App
