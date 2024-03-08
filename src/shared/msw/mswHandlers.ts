import assetsHandlers from '../../__mocks__/assetsHandlers'
import categoriesHandlers from '../../__mocks__/categoriesHandlers'

export const handlers = [
	// http.all('*', async () => {
	// 	await delay(1000)
	// }),
	...categoriesHandlers,
	...assetsHandlers,
]
