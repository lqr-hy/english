import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  console.log('command:', command)
  return {
    base: '/english/',
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] })
    ],
  }
})