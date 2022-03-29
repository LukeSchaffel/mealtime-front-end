import { Link } from 'react-router-dom'

function ScheduleCardMonday({schedule, user, handleDeleteRecipe}) {
  return(
    
    <div className="card">
      <img 
        src={`https://picsum.photos/id/1062/300`}
        alt="A delicious meal"
        className="card-img-top" 
      />
    <Link
            to='/schedule/monday'
          >
            <h1>Monday</h1>
          </Link>
    </div>
  )
}

export default ScheduleCardMonday;