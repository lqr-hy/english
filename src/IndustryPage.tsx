import { Link } from 'react-router-dom'
import './IndustryPage.scss'
import { vocabBooks } from './utils/vocab'

const professionalBooks = vocabBooks.filter((book) => book.id === 'pcb' || book.id === 'bms')

function IndustryPage() {
  return (
    <main className="page">
      <section className="card industry-card">
        <div className="top-row">
          <div>
            <h1>PCB 与 BMS 专业英语</h1>
            <p className="muted">围绕工程设计、制造、测试、质量和交付沟通整理的专业术语库。</p>
          </div>
          <Link to="/resources" className="btn-light">术语来源</Link>
        </div>

        <div className="industry-book-grid">
          {professionalBooks.map((book) => (
            <Link key={book.id} to={`/vocab/${book.id}`} className={`industry-book-card industry-book-card--${book.domain}`}>
              <span className="industry-book-label">{book.domain === 'pcb' ? 'PCB / PCBA' : 'BMS / Battery'}</span>
              <h2>{book.name}</h2>
              <p>{book.description}</p>
              <strong>{book.totalWords.toLocaleString()} 个专业术语</strong>
              <span className="industry-book-action">进入学习 →</span>
            </Link>
          ))}
        </div>

        <p className="industry-note">
          当前词库按 12 个专业主题覆盖关键工作流程；所有术语来源和许可证说明可在资源索引中查看。
        </p>
      </section>
    </main>
  )
}

export default IndustryPage
