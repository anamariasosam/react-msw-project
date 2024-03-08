import DirectoryService from './DirectoryService'

export default class AssetsService extends DirectoryService {
	constructor() {
		super('assets')
	}

	async getAssets(params: Record<string, unknown>) {
		const assets = await this.get<{
			items: Array<{
				sys: {
					id: string
				}
				fields: {
					file: {
						url: string
					}
				}
			}>
		}>({ params })

		return assets.items.reduce(
			(acc, asset) => {
				acc[asset.sys.id] = asset.fields.file.url || ''
				return acc
			},
			{} as Record<string, string>,
		)
	}
}
