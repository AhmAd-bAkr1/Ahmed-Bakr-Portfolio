import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// https://vitejs.dev/config/
export default defineConfig({
    base: "/Stakepool-Frontend/",
    plugins: [react()],
    build: {
        chunkSizeWarningLimit: 1600,
    },
});