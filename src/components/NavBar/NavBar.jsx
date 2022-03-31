import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <header className="App-header">
        <a href="/" className='tag'>MealTime</a> 
        <nav>
          <NavLink end to='/recipes' >Recipes</NavLink>
          <NavLink end to='/restaurants'>Restaurants</NavLink>
          <NavLink end to='/profiles/profile'>My profile</NavLink>
          <NavLink to='/schedule'>Meal schedule</NavLink>
          <NavLink to='/recipes/add'>Add Recipe</NavLink>
          <NavLink to='/restaurants/add' >Add Restaurant</NavLink>
          <Link to='/' onClick={handleLogout}>Log Out</Link>
        </nav>
      </header>
      :
      <header className="App-header">
      <a href="/" className='tag'>MealTime</a> 
        <nav>
          <NavLink to='/recipes'>All Recipes</NavLink>
          <NavLink to='/restaurants'>All Restaurants</NavLink>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </nav>
      </header>
      }
    </>
  )
}

export default NavBar
