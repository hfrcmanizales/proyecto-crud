import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    // Solo afecta desarrollo local, pero lo dejamos por buenas prácticas
    historyApiFallback: true,
  }
})