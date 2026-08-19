import { Link } from 'react-router-dom'
import './ResourcesPage.scss'

type Resource = {
  name: string
  url: string
  description: string
}

type ResourceGroup = {
  title: string
  description: string
  resources: Resource[]
}

const resourceGroups: ResourceGroup[] = [
  {
    title: 'PCB 与电子模块',
    description: '学习元件、原理图、封装、制造与调试相关的真实技术英语。',
    resources: [
      { name: 'Awesome Electronics', url: 'https://github.com/kitspace/awesome-electronics', description: '电子工程学习资源总导航。' },
      { name: 'SparkFun KiCad Libraries', url: 'https://github.com/sparkfun/SparkFun-KiCad-Libraries', description: '元件、符号与封装命名参考。' },
      { name: 'KiCad Documentation', url: 'https://docs.kicad.org/', description: 'PCB 设计流程与工具链英文文档。' },
    ],
  },
  {
    title: 'BMS 与电池管理',
    description: '围绕电芯监测、均衡、保护、充放电和安全建立专业词汇体系。',
    resources: [
      { name: 'foxBMS', url: 'https://github.com/foxBMS/foxbms-2', description: '完整的开源电池管理系统与技术文档。' },
      { name: 'LibreSolar BMS Firmware', url: 'https://github.com/LibreSolar/bms-firmware', description: 'BMS 固件、接口与保护逻辑参考。' },
      { name: 'Battery University', url: 'https://batteryuniversity.com/', description: '电池原理与安全概念的公开英文资料。' },
    ],
  },
  {
    title: '商务接待与客户沟通',
    description: '将接待、预约、会议、住宿及投诉处理转化为可练习的对话场景。',
    resources: [
      { name: 'Taskmaster', url: 'https://github.com/google-research-datasets/Taskmaster', description: '酒店、餐馆等任务型对话语料。' },
      { name: 'MultiWOZ', url: 'https://github.com/budzianowski/multiwoz', description: '预订、出行、餐饮等多领域对话数据。' },
      { name: 'British Council Business English', url: 'https://learnenglish.britishcouncil.org/business-english', description: '公开的商务沟通与礼貌表达课程。' },
    ],
  },
]

function ResourcesPage() {
  return (
    <main className="page">
      <section className="card resources-card">
        <div className="top-row">
          <div>
            <h1>行业英语资源索引</h1>
            <p className="muted">优先使用原始公开来源阅读真实英语，再回到站内完成词汇学习与复习。</p>
          </div>
          <Link to="/" className="btn-light">返回首页</Link>
        </div>

        <div className="resources-grid">
          {resourceGroups.map((group) => (
            <section key={group.title} className="resource-group">
              <h2>{group.title}</h2>
              <p>{group.description}</p>
              <ul>
                {group.resources.map((resource) => (
                  <li key={resource.url}>
                    <a href={resource.url} target="_blank" rel="noreferrer">
                      <strong>{resource.name}</strong>
                      <span>{resource.description}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ResourcesPage
