// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, winOrLose} = props
  if (winOrLose) {
    return (
      <div className="nav-bar">
        <div className="nav-bar-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
      </div>
    )
  }
  return (
    <div className="nav-bar">
      <div className="nav-bar-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="nav-bar-score">
        <p className="score">Score: {score}</p>
        <p>Top Score: {topScore} </p>
      </div>
    </div>
  )
}

export default NavBar
