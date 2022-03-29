import { Link } from 'react-router-dom'

function ScheduleCardFriday({schedule, user, handleDeleteRecipe}) {
  return(
    
    <div className="card">
      <img 
        src={`https://picsum.photos/id/1060/300`}
        alt="A delicious meal"
        className="card-img-top" 
      />
     <Link
            to='/schedule/friday'
          >
            <h1>Friday</h1>
          </Link>
    </div>
  )
}

export default ScheduleCardFriday;