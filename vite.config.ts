import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths()],
  resolve: {
    alias: [
      {
        find: '@presentation',
        replacement: path.resolve('./src/presentation')
      },
      {
        find: '@main',
        replacement: path.resolve('./src/main')
      },
      {
        find: '@data',
        replacement: path.resolve('./src/data')
      },
      {
        find: '@infra',
        replacement: path.resolve('./src/infra')
      },
      {
        find: '@domain',
        replacement: path.resolve('./src/domain')
      }
    ]
  }
})
