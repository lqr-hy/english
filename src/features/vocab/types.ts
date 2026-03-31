import type { WordEntry } from '../../utils/vocab'

export type StudyMode = 'card' | 'en-zh' | 'zh-en' | 'quiz' | 'challenge'

export interface VocabModeProps {
  word: WordEntry
  words: WordEntry[]
  currentIndex: number
  bookId: string
  chapterId: string
  chapterNum: number
  favoriteMap: Record<string, boolean>
  playAudio: (word: string) => void
  onToggleFavorite: (word: WordEntry) => void
  markVisited: (index: number) => void
}

export function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export const formatTime = (seconds: number): string => {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export const ERROR_PREVIEW_MS = 220
export const AUTO_ADVANCE_MS = 400
export const normalizeInput = (v: string) => v.toLowerCase().replace(/[^a-z0-9']/g, '')
