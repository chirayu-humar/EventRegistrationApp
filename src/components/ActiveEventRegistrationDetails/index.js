// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus, allStatusList} = props

  const renderNotRegistered = () => (
    <div className="outerContainer">
      <img
        alt="yet to register"
        className="imageTemp"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button>Register Here</button>
    </div>
  )

  const renderForClosed = () => (
    <div className="outerContainer">
      <img
        alt="registrations closed"
        className="imageTemp"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  const renderForRegistered = () => (
    <div className="outerContainer">
      <img
        alt="registered"
        className="imageTemp"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderForInitial = () => (
    <div className="">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  switch (registrationStatus) {
    case allStatusList.initial:
      return renderForInitial()
    case allStatusList.registered:
      return renderForRegistered()
    case allStatusList.notRegistered:
      return renderNotRegistered()
    case allStatusList.closed:
      return renderForClosed()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
