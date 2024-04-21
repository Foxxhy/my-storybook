import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }: { mode: never}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    // base: process.env.VITE_ENVIRONNEMENT === 'prod' ? '/my-storybook' : '',
    plugins: [react()],
    // build: {
    //   outDir: '../../docs'
    // }
  })
}
