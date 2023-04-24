/* eslint-disable react/button-has-type */
// Write your code here.
const WinOrLoseCard = props => {
  const {topScore, onPlayAgain} = props
  const onClickedPlayAgain = () => {
    onPlayAgain()
  }
  if (topScore === 12) {
    return (
      <div>
        <h1>You Won</h1>
        <p>Best Score: 12/12</p>
        <button onClick={onClickedPlayAgain}>Play Again</button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    )
  }
  return (
    <div>
      <h1>You Lose</h1>
      <h1>Your Score: {topScore}</h1>
      <button onClick={onClickedPlayAgain}>Play Again</button>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
    </div>
  )
}

export default WinOrLoseCard
