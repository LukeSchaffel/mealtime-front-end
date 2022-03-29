import styles from './Schedule.module.css'
import ScheduleCardFriday from "../../components/ScheduleCard/ScheduleCardFriday";
import ScheduleCardMonday from "../../components/ScheduleCard/ScheduleCardMonday";
import ScheduleCardSaturday from '../../components/ScheduleCard/ScheduleCardSaturday';
import ScheduleCardSunday from '../../components/ScheduleCard/ScheduleCardSunday';
import ScheduleCardTuesday from '../../components/ScheduleCard/ScheduleCardTuesday';
import ScheduleCardWednesday from '../../components/ScheduleCard/ScheduleCardWednesday';
import ScheduleCardThursday from '../../components/ScheduleCard/ScheduleCardThursday';
const Schedule = (props) => {
  return ( 
    <>
    <h1>Schedules</h1>
      <div className={styles.container}>
       <ScheduleCardSunday/>
       <ScheduleCardMonday/>
       <ScheduleCardTuesday/>
       <ScheduleCardWednesday/>
       <ScheduleCardThursday/>
       <ScheduleCardFriday/>
       <ScheduleCardSaturday/>
      </div>
    </> 
  );
}

export default Schedule;