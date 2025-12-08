import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@screens/Home'
import Privacy from '@screens/Privacy'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/privacy" element={<Privacy />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App