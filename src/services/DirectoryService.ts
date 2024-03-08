import ApiCore from '../shared/ApiCore'
import { API_URL } from '../shared/contentful'

export default class DirectoryService extends ApiCore {
	constructor(resource: string) {
		super(`${API_URL}/${resource}`)
	}
}
