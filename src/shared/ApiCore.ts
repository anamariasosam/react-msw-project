import axios from 'axios'
import { ACCESS_TOKEN } from './contentful'

// https://dev.to/mmcshinsky/a-simple-approach-to-managing-api-calls-1lo6
export default class ApiCore {
	private _getUrl: (route?: string) => string

	constructor(url: string) {
		this._setHeaders()
		this._getUrl = (route?: string) => (route ? `${url}/${route}` : url)
	}

	private _setHeaders() {
		axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`
		axios.defaults.headers.common['Content-Type'] =
			'application/vnd.contentful.management.v1+json'
	}

	protected async get<TAxiosResponse>({
		params,
		route,
	}: { params?: object; route?: string } = {}) {
		const url = this._getUrl(route)

		const { data } = await axios.get<TAxiosResponse>(url, { params })
		return data
	}

	protected async post<TAxiosResponse>({
		payload,
		route,
	}: {
		payload: object
		route?: string
	}) {
		const url = this._getUrl(route)

		const { data } = await axios.post<TAxiosResponse>(url, payload)
		return data
	}
}
