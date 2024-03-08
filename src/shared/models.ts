export type ContentfulCategory = {
	name: string
	image: {
		sys: {
			id: string
		}
		fields: {
			file: {
				url: string
			}
		}
	}
	slug: string
	prevCategory?: NextCategory
	nextCategory?: NextCategory
}

type NextCategory = {
	fields: ContentfulCategory
}

export type ContentfulStore = {
	stores: Array<{
		fields: {
			name: string
			image: {
				fields: {
					file: {
						url: string
					}
				}
			}
			phone: string
		}
	}>
}

export type ContentfulCategoryStores = ContentfulCategory & ContentfulStore

export type ContentfulResponse<T> = {
	items: Array<{
		fields: T
		sys: {
			id: string
		}
	}>
}

export type Category = {
	name: string
	slug: string
	imageUrl: string
	prevCategorySlug?: string
	nextCategorySlug?: string
}

export type Store = {
	name: string
	phone: string
	imageUrl: string
}
