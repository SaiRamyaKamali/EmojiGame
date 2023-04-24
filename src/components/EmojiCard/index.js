/* eslint-disable react/button-has-type */
// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emoji
  const onClickedEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li>
      <button className="EmojiButton" onClick={onClickedEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
