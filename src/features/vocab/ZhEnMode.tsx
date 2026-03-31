import { useMemo, useState } from 'react'
import { evaluateDictation } from '../lesson/dictation'
import type { VocabModeProps } from './types'
import PlayIcon from './PlayIcon'

interface ZhEnModeProps extends VocabModeProps {
  dictFeedback: ReturnType<typeof evaluateDictation> | null
}

function ZhEnMode({ word, playAudio, favoriteMap, onToggleFavorite, dictFeedback }: ZhEnModeProps) {
  const [isHovering, setIsHovering] = useState(false)

  const pendingSegments = useMemo(() =>
    word.name.split('').map((ch) => ({ expected: ch, actual: '', status: 'pending' as const, hint: '', wordStart: false })),
    [word.name],
  )

  return (
    <>
      <div className="vocab-dict-prompt">
        {word.trans.map((t, i) => <p key={i}>{t}</p>)}
        <div className="vocab-word-phonetic">
          {word.usphone && <span>美 /{word.usphone}/</span>}
          {word.ukphone && <span>英 /{word.ukphone}/</span>}
        </div>
      </div>

      <div className="vocab-dict-display">
        <div className="dictation-highlight" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          {(dictFeedback?.segments ?? pendingSegments).map((seg, i) => {
            const text =
              seg.status === 'pending'
                ? (isHovering ? (seg.expected || ' ') : '_')
                : seg.status === 'wrong'
                  ? '_'
                  : (seg.actual || ' ')
            return (
              <span
                key={i}
                className={`token-${seg.status}${seg.wordStart ? ' token-word-start' : ''}${seg.status === 'pending' && isHovering ? ' reveal-hint' : ''}`}
              >
                {text}
              </span>
            )
          })}
        </div>
        <p className="vocab-dict-hint muted">Space / Cmd+J 播放发音</p>
      </div>

      <div className="vocab-dict-actions">
        <button type="button" className="line-icon-btn" onClick={() => playAudio(word.name)} aria-label="播放发音"><PlayIcon /></button>
        <button type="button" className={`line-fav-btn${favoriteMap[word.name] ? ' active' : ''}`} onClick={() => onToggleFavorite(word)} aria-label="收藏">★</button>
      </div>
    </>
  )
}

export default ZhEnMode
