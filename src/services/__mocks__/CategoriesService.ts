import { mockParsedCategories } from '../../__mocks__/categoriesMocks'
import { Category, Store } from '../../shared/models'
import DirectoryService from '../DirectoryService'

export class CategoryService extends DirectoryService {
	constructor() {
		super('entries?content_type=category')
	}

	getCategories() {
		return new Promise<Array<Category>>(resolve => {
			setTimeout(() => {
				resolve(mockParsedCategories)
			}, 500)
		})
	}

	getStoresByCategory(categorySlug: string) {
		const randomId = Date.now().toString()
		return new Promise<
			{ stores: Array<Store>; category: Category } | undefined
		>(resolve => {
			setTimeout(() => {
				resolve({
					stores: ['FFCDE3', 'DDFFBB', '8CE9FF'].map((color, i) => {
						return {
							name: `Tienda ${i + 1}`,
							phone: `12345678${i + 1}`,
							imageUrl: `https://placehold.co/150x150/${color}/fff`,
						}
					}),
					category: {
						name: categorySlug?.toUpperCase() || 'Category Name',
						slug: categorySlug || 'category-name',
						imageUrl: 'https://placehold.co/150x150/E470FF/fff',
						prevCategorySlug: `prev-cat-${randomId}`,
						nextCategorySlug: `next-cat-${randomId}`,
					},
				})
			}, 500)
		})
	}

	createCategory(category: Category) {
		return Promise.resolve(category)
	}
}
