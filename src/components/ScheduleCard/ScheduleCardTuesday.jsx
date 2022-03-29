import { Link } from 'react-router-dom'

function ScheduleCardTuesday({schedule, user, handleDeleteRecipe}) {
  return(
    
    <div className="card">
      <img 
        src={`https://picsum.photos/id/1060/300`}
        alt="A delicious meal"
        className="card-img-top" 
      />
      <h1>Tuesday</h1>
    </div>
  )
}

export default ScheduleCardTuesday;