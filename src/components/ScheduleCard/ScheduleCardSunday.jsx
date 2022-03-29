import { Link } from 'react-router-dom'

function ScheduleCardSunday({schedule, user, handleDeleteRecipe}) {
  return(
    
    <div className="card">
      <img 
        src={`https://picsum.photos/id/1061/300`}
        alt="A delicious meal"
        className="card-img-top" 
      />
      <Link
            to='/schedule/sunday'
          >
            <h1>Sunday</h1>
          </Link>
    </div>
  )
}

export default ScheduleCardSunday;