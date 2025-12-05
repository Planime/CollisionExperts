import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<Toaster
				position='top-right'
				reverseOrder={false}
				toastOptions={{
					// Настройки по умолчанию для всех тостов
					className: 'text-xs',
					duration: 4000,
					style: {
						background: '#333',
						color: '#fff'
					}
				}}
			/>
		</QueryClientProvider>
	</StrictMode>
)
