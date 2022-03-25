import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <header className="App-header">
        Logged in as {user.name}
        <nav>
          <NavLink end to='/recipes' >All Recipes</NavLink>
          <NavLink end to='/restaurants'>All Restaurants</NavLink>
          <NavLink end to='/profiles/profile'>My profile</NavLink>
          <NavLink to='/profiles/profile/schedule'>Meal schedule</NavLink>
          <NavLink to='/recipes/add'>Add Recipe</NavLink>
          <NavLink to='/restaurants/add' >Add Restaurant</NavLink>
          <Link to='/' onClick={handleLogout}>Log Out</Link>
        </nav>
      </header>
      :
      <header className="App-header">
        Please Log In!
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
