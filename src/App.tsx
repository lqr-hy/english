import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.scss'
import { vocabBooks } from './utils/vocab'

type Category = {
  id: string
  label: string
}

const categories: Category[] = [
  { id: 'nce', label: '新概念' },
  { id: 'bec', label: '商务英语' },
  { id: 'industry', label: '行业英语' },
  // { id: 'toefl', label: 'TOEFL' },
  // { id: 'ielts', label: 'IELTS' },
  // { id: 'pet', label: 'PET' },
  // { id: 'gmat', label: 'GMAT' },
  // { id: 'gre', label: 'GRE' },
  // { id: 'ket', label: 'KET' },
  // { id: 'sat', label: 'SAT' },
  // { id: 'pte', label: 'PTE' },
  // { id: 'toeic', label: 'TOEIC' },
  // { id: 'cefr', label: 'CEFR' },
  // { id: 'fce', label: 'FCE' },
  // { id: 'oxford', label: '牛津版' },
  // { id: 'other', label: '其他' },
]

function BooksIcon() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true" fill="none">
      <rect x="4" y="10" width="10" height="30" rx="2" fill="#c97b4b" />
      <rect x="17" y="6" width="10" height="34" rx="2" fill="#7c6fcd" />
      <rect x="30" y="12" width="10" height="28" rx="2" fill="#4caf82" />
      <rect x="4" y="38" width="36" height="3" rx="1.5" fill="#cbb89a" />
    </svg>
  )
}

function App() {
  const [activeCategory, setActiveCategory] = useState('nce')

  return (
    <main className="page home-page">
      <section className="card home-card">
        <h1>英语学习</h1>

        <div className="home-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={cat.id === activeCategory ? 'home-cat-chip active' : 'home-cat-chip'}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {activeCategory === 'nce' && (
          <>
            <div className="home-content-grid">
              <Link to="/learn" className="home-content-card">
                <div className="home-content-card-icon">
                  <BooksIcon />
                </div>
                <div className="home-content-card-body">
                  <strong>新概念英语</strong>
                  <span>NCE1–NCE4 音频课程</span>
                  <em className="home-word-count">4 册全集</em>
                </div>
              </Link>
              <Link to="/industry" className="home-content-card home-content-card--industry">
                <div className="home-content-card-icon home-content-card-icon--pcb">
                  <BooksIcon />
                </div>
                <div className="home-content-card-body">
                  <strong>专业英语：PCB 与 BMS</strong>
                  <span>设计、制造、测试与交付沟通</span>
                  <em className="home-word-count">606 个专业术语</em>
                </div>
              </Link>
            </div>
            <p className="home-entry-hint">也可以从上方“行业英语”分类进入全部行业内容。</p>
          </>
        )}

        {activeCategory === 'bec' && (
          <div className="home-content-grid">
            {vocabBooks.filter((book) => book.domain === 'business').map((book) => (
              <Link key={book.id} to={`/vocab/${book.id}`} className="home-content-card">
                <div className="home-content-card-icon">
                  <BooksIcon />
                </div>
                <div className="home-content-card-body">
                  <strong>{book.name}</strong>
                  <span>{book.description}</span>
                  <em className="home-word-count">{book.totalWords.toLocaleString()} 词</em>
                </div>
              </Link>
            ))}
          </div>
        )}

        {activeCategory === 'industry' && (
          <>
            <div className="home-section-heading">
              <div>
                <h2>从术语到真实工作场景</h2>
                <p>每个词库均基于开源技术文档或公开对话语料整理，适合技术阅读、客户沟通和口语练习。</p>
              </div>
              <Link to="/resources" className="btn-light">查看资源索引</Link>
            </div>
            <div className="home-content-grid">
              {vocabBooks
                .filter((book) => ['pcb', 'bms', 'reception'].includes(book.id))
                .map((book) => (
                  <Link key={book.id} to={`/vocab/${book.id}`} className="home-content-card">
                    <div className={`home-content-card-icon home-content-card-icon--${book.domain}`}>
                      <BooksIcon />
                    </div>
                    <div className="home-content-card-body">
                      <strong>{book.name}</strong>
                      <span>{book.description}</span>
                      <em className="home-word-count">{book.totalWords} 个精选核心词</em>
                    </div>
                  </Link>
                ))}
            </div>
          </>
        )}

        {activeCategory !== 'nce' && activeCategory !== 'bec' && activeCategory !== 'industry' && (
          <p className="muted home-coming-soon">该分类内容即将推出。</p>
        )}
      </section>
    </main>
  )
}

export default App
