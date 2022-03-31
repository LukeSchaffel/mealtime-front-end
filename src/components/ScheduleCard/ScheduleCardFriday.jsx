import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function ScheduleCardFriday(props) {
  let location = useLocation()
  

  return(
    
    <div className="card">
      <img 
        src={`https://picsum.photos/id/1060/300`}
        alt="A delicious meal"
        className="card-img-top" 
      />
      {!location.state?.recipe ?    
          <Link
            to='/schedule/friday'
          >
           <h1>Friday</h1>
          </Link>
        :
          <button
              className="btn btn-sm btn-primary"
              type="submit"
              onClick={()=> props.handleAddRecipeToDay(location.state.recipe, props.profile, "friday")}
              >
              Add To Friday
              </button>
        }
      
    </div>
  )
}

export default ScheduleCardFriday;