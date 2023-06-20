// Write your code here
import './index.css'

const EventItem = props => {
  const {details, changeTheState} = props
  const {id, imageUrl, name, location, registrationStatus} = details

  const changeRegistration = () => {
    changeTheState(registrationStatus)
  }
  return (
    <li className="outerEventItem">
      {/* <div className="firstChild">
        <button type="button" onClick={changeRegistration}>
          <img alt="event" className="image" src={imageUrl} />
        </button>
      </div> */}
      <button type="button" onClick={changeRegistration}>
        <img alt="event" className="image" src={imageUrl} />
      </button>
      <div className="secondChild">
        <p>{name}</p>
        <p>{location}</p>
      </div>
    </li>
  )
}

export default EventItem
