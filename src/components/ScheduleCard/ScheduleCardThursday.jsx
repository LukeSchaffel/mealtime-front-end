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
        {!location.state?.recipe ?    
        <Link to='/schedule/thursday'>
          <h1>Thursday</h1>
        </Link>
        :
        <button
          className="btn btn-sm btn-primary"
          type="submit"
          onClick={()=> props.handleAddRecipeToDay(location.state.recipe, props.profile, "thursday")}
          > Add To Thursday
        </button>
        }
    </div>
  )
}

export default ScheduleCardThursday;