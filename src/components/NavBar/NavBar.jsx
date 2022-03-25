import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <header className="App-header">
        Logged in as {user.name}
        <nav>
          <NavLink to='/'>Puppy List</NavLink>
          <NavLink to='/add'>Add Puppy</NavLink>
          <NavLink to="/" onClick={handleLogout}>Log Out</NavLink>
          <NavLink to="/changePassword">Change Password</NavLink>
        </nav>
      </header>
      :
      <header className="App-header">
        Please Log In!
        <nav>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </nav>
      </header>
      }
    </>
  )
}

export default NavBar
