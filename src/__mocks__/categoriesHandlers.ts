import { HttpResponse, delay, http } from 'msw'
import { mockCategories } from './categoriesMocks'
import { mockStore } from './storeMocks'
import { API_URL } from '../shared/contentful'
import { mockDelay } from '../shared/msw/mswUtils'

const getCategories = http.get(`${API_URL}/entries`, async ({ request }) => {
	const url = new URL(request.url)
	const contentType = url.searchParams.get('content_type') || ''
	const filter = url.searchParams.get('fields.slug[match]')

	await delay(mockDelay())

	if (contentType === 'category') {
		if (filter) {
			if (filter === 'broken-category') {
				return new HttpResponse(null, {
					status: 404,
					statusText: 'Not Found',
				})
			}

			return HttpResponse.json(mockStore(filter))
		}
		return HttpResponse.json(mockCategories)
	}
})

export default [getCategories]
