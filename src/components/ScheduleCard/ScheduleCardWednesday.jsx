import { Link } from 'react-router-dom'

function ScheduleCardWednesday({schedule, user, handleDeleteRecipe}) {
  return(
    
    <div className="card">
      <img 
        src={`https://picsum.photos/id/1069/300`}
        alt="A delicious meal"
        className="card-img-top" 
      />
      <Link
            to='/schedule/wednesday'
          >
            <h1>Wednesday</h1>
          </Link>
    </div>
  )
}

export default ScheduleCardWednesday;