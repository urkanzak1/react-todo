import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig(({ mode }) => ({
    // depending on your application, base can also be "/"
    base: '',
    plugins: [react(), viteTsconfigPaths()],
    css: {
        modules: {
            localsConvention: 'camelCase',
            generateScopedName: mode === 'development' ? (name, filename) => 'example' : undefined,
        },
    },
    server: {
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 8000
        port: 8000,
        host: 'localhost'
    },
    resolve: {
        alias: {
            '~bootstrap': path.resolve('', 'node_modules/bootstrap'),
        }
    }
}))