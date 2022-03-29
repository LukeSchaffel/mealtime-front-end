import { Link } from 'react-router-dom'

function ScheduleCardSaturday({schedule, user, handleDeleteRecipe}) {
  return(
    
    <div className="card">
      <img 
        src={`https://picsum.photos/id/1067/300`}
        alt="A delicious meal"
        className="card-img-top" 
      />
      <h1>Saturday</h1>
    </div>
  )
}

export default ScheduleCardSaturday;