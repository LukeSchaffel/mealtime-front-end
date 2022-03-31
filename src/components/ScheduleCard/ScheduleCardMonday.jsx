import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function ScheduleCardMonday(props) {
  let location = useLocation()
  return(
    <div className="card">
      <img 
        src={`https://picsum.photos/id/1062/300`}
        alt="A delicious meal"
        className="card-img-top" 
        />
          <Link to='/schedule/monday'>
            <button
              className="btn btn-sm btn-primary"
              type="submit"
              onClick={()=> props.handleAddRecipeToDay(location.state.recipe, props.profile, "monday")}
              >
              Add To Monday
              </button>
          </Link>
    </div>
  )
}

export default ScheduleCardMonday;