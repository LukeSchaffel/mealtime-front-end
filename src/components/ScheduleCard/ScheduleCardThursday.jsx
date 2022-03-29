import { Link } from 'react-router-dom'

function ScheduleCardThursday({schedule, user, handleDeleteRecipe}) {
  return(
    
    <div className="card">
      <img 
        src={`https://picsum.photos/id/1062/300`}
        alt="A delicious meal"
        className="card-img-top" 
      />
      <Link
            to='/schedule/Thursday'
          >
            <h1>Thursday</h1>
          </Link>
    </div>
  )
}

export default ScheduleCardThursday;