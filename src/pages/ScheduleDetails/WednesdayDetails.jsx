import { Link } from 'react-router-dom'
const WednesdayDetails = () => {
  return(
    <>
    <h1>Menu</h1>
    <Link
        to='/schedule'
      >
        <h1>Back to schedule</h1>
      </Link>


    </>
  )  
}
 
export default WednesdayDetails;