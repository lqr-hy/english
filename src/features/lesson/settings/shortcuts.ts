export type ShortcutItem = {
  key: string
  mac: string
  win: string
  desc: string
}

export const SHORTCUT_ITEMS: ShortcutItem[] = [
  { key: 'panel-toggle-main', mac: 'Command + ,', win: 'Ctrl + ,', desc: '打开或关闭学习设置面板（推荐）' },
  { key: 'panel-toggle-alt', mac: '`', win: '`', desc: '打开或关闭学习设置面板（备用）' },
  { key: 'panel-close', mac: 'Esc', win: 'Esc', desc: '关闭学习设置面板' },
  { key: 'play-pause', mac: 'Space', win: 'Space', desc: '播放或暂停当前句（非默写模式）' },
  { key: 'tap-play', mac: 'P', win: 'P', desc: '点读当前句（非默写模式）' },
  { key: 'chapter-replay', mac: 'Command + K', win: 'Ctrl + K', desc: '从本章第一句重播' },
  { key: 'view-mode-both', mac: 'Command + 1', win: 'Ctrl + 1', desc: '显示模式：中英文' },
  { key: 'view-mode-hide', mac: 'Command + 2', win: 'Ctrl + 2', desc: '显示模式：隐藏内容' },
  { key: 'view-mode-en', mac: 'Command + 3', win: 'Ctrl + 3', desc: '显示模式：显示英文默写中文' },
  { key: 'view-mode-zh', mac: 'Command + 4', win: 'Ctrl + 4', desc: '显示模式：显示中文默写英文' },
  { key: 'dictation-play', mac: 'Command + J', win: 'Ctrl + J', desc: '播放当前句音频（所有默写模式）' },
  { key: 'line-nav', mac: '↑ / ↓', win: '↑ / ↓', desc: '切换上一句 / 下一句' },
  { key: 'backspace', mac: 'Backspace', win: 'Backspace', desc: '删除未确认字符（英文默写模式）' },
]
