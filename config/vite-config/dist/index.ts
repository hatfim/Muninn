import path from 'node:path'

import react from '@vitejs/plugin-react-swc'
import { UserConfig } from 'vite'

export const defaultConfig: UserConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
