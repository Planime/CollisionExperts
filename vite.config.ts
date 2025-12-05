import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@screens': path.resolve(__dirname, 'src/screens'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@icons': path.resolve(__dirname, 'src/icons'),
			'@config': path.resolve(__dirname, 'src/config'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@constants': path.resolve(__dirname, 'src/constants')
		}
	}
})
