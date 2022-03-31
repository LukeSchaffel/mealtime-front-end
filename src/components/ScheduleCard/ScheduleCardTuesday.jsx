import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function ScheduleCardTuesday(props) {
  let location = useLocation()
  return(
    <div className="card">
      <img 
        src={`https://picsum.photos/id/1062/300`}
        alt="A delicious meal"
        className="card-img-top" 
        />
          <Link to='/schedule/tuesday'>
            <button
              className="btn btn-sm btn-primary"
              type="submit"
              onClick={()=> props.handleAddRecipeToDay(location.state.recipe, props.profile, "tuesday")}
              >
              Add To Tuesday
              </button>
          </Link>
    </div>
  )
}

export default ScheduleCardTuesday;