import { CONTENTFUL_CLIENT } from '../shared/contentful'
import {
	Category,
	ContentfulCategory,
	ContentfulCategoryStores,
	ContentfulResponse,
	Store,
} from '../shared/models'
import AssetsService from './AssetsService'
import DirectoryService from './DirectoryService'

export class CategoryService extends DirectoryService {
	constructor() {
		super('entries?content_type=category')
	}

	async getCategories() {
		const entry = await this.get<ContentfulResponse<ContentfulCategory>>()
		const assets = await new AssetsService().getAssets({
			'sys.id[in]': entry.items
				.map(({ fields: { image } }) => image.sys.id)
				.join(','),
		})

		const parsedCategories = entry.items.map(
			({ fields: { name, slug, image } }) => {
				const category: Category = {
					name,
					slug,
					imageUrl: assets[image.sys.id],
				}
				return category
			},
		)

		return parsedCategories.sort((a, b) => a.name.localeCompare(b.name))
	}

	async getStoresByCategory(categorySlug: string) {
		const { items } = await CONTENTFUL_CLIENT.getEntries({
			content_type: 'category',
			'fields.slug[match]': categorySlug,
		})
		const { fields } = items[0]

		if (CategoryService._isCategoryStore(fields)) {
			const { stores, ...category } = fields

			const parsedStores: Array<Store> = stores.map(
				({ fields: { name, phone, image } }) => {
					return {
						name,
						phone: CategoryService._formatPhone(phone),
						imageUrl: image.fields.file.url,
					}
				},
			)

			const parsedCategory: Category = {
				name: category.name,
				slug: category.slug,
				imageUrl: category.image.fields.file.url,
				prevCategorySlug: category.prevCategory?.fields.slug,
				nextCategorySlug: category.nextCategory?.fields.slug,
			}

			return {
				stores: parsedStores.sort((a, b) => a.name.localeCompare(b.name)),
				category: parsedCategory,
			}
		}
	}

	createCategory(payload: { name: string; slug: string; imageUrl: string }) {
		return this.post<ContentfulResponse<Category>>({ payload })
	}

	private static _formatPhone(phone: Store['phone']) {
		const phoneFormated = phone.split('')
		phoneFormated.splice(3, 0, ' ')
		phoneFormated.splice(7, 0, ' ')
		phoneFormated.unshift('(+57) ')
		return phoneFormated.join('')
	}

	private static _isCategoryStore(
		value: unknown,
	): value is ContentfulCategoryStores {
		return (value as ContentfulCategoryStores).stores !== undefined
	}
}
