import type { VocabModeProps } from './types'
import PlayIcon from './PlayIcon'

function CardMode({ word, playAudio, favoriteMap, onToggleFavorite }: VocabModeProps) {
  return (
    <div className="vocab-word-main">
      <div className="vocab-word-top-actions">
        <button type="button" className="line-icon-btn" onClick={() => playAudio(word.name)} aria-label="播放发音"><PlayIcon /></button>
        <button type="button" className={`line-fav-btn${favoriteMap[word.name] ? ' active' : ''}`} onClick={() => onToggleFavorite(word)} aria-label="收藏">★</button>
      </div>
      <h2 className="vocab-word-name">{word.name}</h2>
      <div className="vocab-word-phonetic">
        {word.usphone && <span>美 /{word.usphone}/</span>}
        {word.ukphone && <span>英 /{word.ukphone}/</span>}
      </div>
      <div className="vocab-word-trans">
        {word.trans.map((t, i) => <p key={i}>{t}</p>)}
      </div>
    </div>
  )
}

export default CardMode
