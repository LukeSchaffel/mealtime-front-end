import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function ScheduleCardThursday(props) {
  let location = useLocation()
  return(
    <div className="card">
      <img 
        src={`https://picsum.photos/id/1062/300`}
        alt="A delicious meal"
        className="card-img-top" 
        />
          <Link to='/schedule/thursday'>
            <button
              className="btn btn-sm btn-primary"
              type="submit"
              onClick={()=> props.handleAddRecipeToDay(location.state.recipe, props.profile, "thursday")}
              >
              Add To Thursday
              </button>
          </Link>
    </div>
  )
}

export default ScheduleCardThursday;