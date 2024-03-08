import { HttpResponse, http } from 'msw'
import { mockAssets } from './assetsMocks'
import { API_URL } from '../shared/contentful'

const getAssets = http.get(`${API_URL}/assets`, () => {
	return HttpResponse.json(mockAssets)
})

export default [getAssets]
