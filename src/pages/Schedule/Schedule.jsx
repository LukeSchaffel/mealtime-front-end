import styles from './Schedule.module.css'
import ScheduleCardFriday from "../../components/ScheduleCard/ScheduleCardFriday";
import ScheduleCardMonday from "../../components/ScheduleCard/ScheduleCardMonday";
import ScheduleCardSaturday from '../../components/ScheduleCard/ScheduleCardSaturday';
import ScheduleCardSunday from '../../components/ScheduleCard/ScheduleCardSunday';
import ScheduleCardTuesday from '../../components/ScheduleCard/ScheduleCardTuesday';
import ScheduleCardWednesday from '../../components/ScheduleCard/ScheduleCardWednesday';
import ScheduleCardThursday from '../../components/ScheduleCard/ScheduleCardThursday';
import { useLocation } from 'react-router-dom';

const Schedule = (props) => {
  let location = useLocation()
  let recipe = location.state?.recipe
  
  
  return ( 
    <>
      <div className={styles.container}>
       <ScheduleCardSunday 
       recipe={recipe}
       handleAddRecipeToDay={props.handleAddRecipeToDay}
       profile={props.user.profile}
       />
       <ScheduleCardMonday 
       recipe={recipe}
       handleAddRecipeToDay={props.handleAddRecipeToDay}
       profile={props.user.profile}
       />
       <ScheduleCardTuesday
       recipe={recipe}
       handleAddRecipeToDay={props.handleAddRecipeToDay}
       profile={props.user.profile}
       />
       <ScheduleCardWednesday
       recipe={recipe}
       handleAddRecipeToDay={props.handleAddRecipeToDay}
       profile={props.user.profile}
       />
       <ScheduleCardThursday
       recipe={recipe}
       handleAddRecipeToDay={props.handleAddRecipeToDay}
       profile={props.user.profile}
       />
       <ScheduleCardFriday 
       recipe={recipe}
       handleAddRecipeToDay={props.handleAddRecipeToDay}
       profile={props.user.profile}
       />
       <ScheduleCardSaturday
       recipe={recipe}
       handleAddRecipeToDay={props.handleAddRecipeToDay}
       profile={props.user.profile}
       />
      </div>
    </> 
  );
}

export default Schedule;