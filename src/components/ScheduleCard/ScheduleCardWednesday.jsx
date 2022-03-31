import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function ScheduleCardWednesday(props) {
  let location = useLocation()
  return(
    <div className="card">
      <img 
        src={`https://picsum.photos/id/1062/300`}
        alt="A delicious meal"
        className="card-img-top" 
        />
        {!location.state?.recipe ?    
        <Link to='/schedule/wednesday'>
          <h1>Wednesday</h1>
        </Link>
        :
        <button
          className="btn btn-sm btn-primary"
          type="submit"
          onClick={()=> props.handleAddRecipeToDay(location.state.recipe, props.profile, "wednesday")}
          > Add To Wednesday
        </button>
        }
    </div>
  )
}

export default ScheduleCardWednesday;