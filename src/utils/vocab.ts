export type WordEntry = {
  name: string
  trans: string[]
  usphone: string
  ukphone: string
  example?: string
}

export type VocabBook = {
  id: string
  name: string
  description: string
  totalWords: number
  jsonFile: string
  domain?: 'business' | 'pcb' | 'bms' | 'reception'
}

export const WORDS_PER_CHAPTER = 20

const withBase = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export const vocabBooks: VocabBook[] = [
  {
    id: 'bec2',
    name: '商务英语',
    description: '商务英语常见词',
    totalWords: 2753,
    jsonFile: withBase('dict/BEC_2_T.json'),
    domain: 'business',
  },
  {
    id: 'bec3',
    name: 'BEC',
    description: 'BEC考试常见词',
    totalWords: 2825,
    jsonFile: withBase('dict/BEC_3_T.json'),
    domain: 'business',
  },
  {
    id: 'pcb',
    name: 'PCB 与电子模块英语',
    description: '按 12 个专业主题组织：原理图、SI/PI、制造、PCBA、EMC 等',
    totalWords: 320,
    jsonFile: withBase('dict/PCB_T.json'),
    domain: 'pcb',
  },
  {
    id: 'bms',
    name: 'BMS 电池管理英语',
    description: '按 12 个专业主题组织：电化学、估算、热管理、测试与合规等',
    totalWords: 320,
    jsonFile: withBase('dict/BMS_T.json'),
    domain: 'bms',
  },
  {
    id: 'reception',
    name: '商务接待英语',
    description: '来访、预约、会议、酒店与客户沟通核心词',
    totalWords: 100,
    jsonFile: withBase('dict/RECEPTION_T.json'),
    domain: 'reception',
  },
]

export const vocabBookMap: Record<string, VocabBook> = Object.fromEntries(
  vocabBooks.map((b) => [b.id, b]),
)

export const getChapterCount = (totalWords: number): number =>
  Math.ceil(totalWords / WORDS_PER_CHAPTER)

export const getChapterId = (bookId: string, chapterNum: number): string =>
  `${bookId}-ch${chapterNum}`

export const getWordAudioUrl = (word: string): string =>
  `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(word)}&type=1`

const wordCache: Record<string, WordEntry[]> = {}

export const loadBookWords = async (book: VocabBook): Promise<WordEntry[]> => {
  if (wordCache[book.id]) {
    return wordCache[book.id]
  }
  const res = await fetch(book.jsonFile)
  if (!res.ok) {
    throw new Error(`Failed to load ${book.jsonFile}: ${res.status}`)
  }
  const data = (await res.json()) as WordEntry[]
  wordCache[book.id] = data
  return data
}

export const getChapterWords = (allWords: WordEntry[], chapterNum: number): WordEntry[] => {
  const start = (chapterNum - 1) * WORDS_PER_CHAPTER
  return allWords.slice(start, start + WORDS_PER_CHAPTER)
}
