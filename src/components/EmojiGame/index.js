import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    isShuffled: false,
    initialClickedEmoji: [],
    score: 0,
    topScore: 0,
    winOrLose: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {initialClickedEmoji, score} = this.state
    console.log('initialClickedEmoji')
    console.log(initialClickedEmoji)
    console.log('score in state')
    console.log(score)
    if (initialClickedEmoji.includes(id)) {
      this.setState(prevState => {
        let topS = 0
        if (prevState.topScore < prevState.score) {
          topS = prevState.score
        } else {
          topS = prevState.topScore
        }
        return {
          isShuffled: false,
          topScore: topS,
          winOrLose: true,
        }
      })
    } else {
      this.setState(prevState => ({
        initialClickedEmoji: [...prevState.initialClickedEmoji, id],
        isShuffled: true,
        score: prevState.score + 1,
      }))
    }
  }

  onPlayAgain = () => {
    this.setState({
      isShuffled: true,
      winOrLose: false,
      initialClickedEmoji: [],
      score: 0,
    })
  }

  render() {
    let {emojisList} = this.props
    const {isShuffled, score, topScore, winOrLose} = this.state
    console.log('score in render')
    console.log(score)
    console.log(winOrLose)
    console.log(isShuffled)
    if (isShuffled) {
      emojisList = this.shuffledEmojisList()
    }
    if (winOrLose) {
      return (
        <div className="Emojis">
          <NavBar score={score} topScore={topScore} winOrLose={winOrLose} />
          <WinOrLoseCard topScore={score} onPlayAgain={this.onPlayAgain} />
        </div>
      )
    }
    console.log(emojisList)
    return (
      <div className="Emojis">
        <div>
          <NavBar score={score} topScore={topScore} winOrLose={winOrLose} />
        </div>
        <div className="emoji-container">
          <ul className="unordered-list">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emoji={eachEmoji}
                onClickEmoji={this.onClickEmoji}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
