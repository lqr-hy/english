import type { VocabModeProps } from './types'
import PlayIcon from './PlayIcon'

interface EnZhModeProps extends VocabModeProps {
  showTranslation: boolean
  onReveal: () => void
}

function EnZhMode({ word, playAudio, favoriteMap, onToggleFavorite, showTranslation, onReveal }: EnZhModeProps) {
  return (
    <>
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
      </div>
      {showTranslation ? (
        <div className="vocab-word-trans">
          {word.trans.map((t, i) => <p key={i}>{t}</p>)}
        </div>
      ) : (
        <button
          type="button"
          className="vocab-reveal-area"
          onClick={onReveal}
        >
          点击查看释义（Space）
        </button>
      )}
    </>
  )
}

export default EnZhMode
