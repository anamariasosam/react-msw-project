import 'tachyons/css/tachyons.css'

import ReactDOM from 'react-dom/client'

import React from 'react'
import App from './App'

async function enableMocking() {
	if (import.meta.env.MODE === 'msw') {
		const { worker } = await import('./shared/msw/mswWorker')

		document.title = `🤖 ${document.title}`

		return worker.start()
	}
}

enableMocking().then(() => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	)
})
