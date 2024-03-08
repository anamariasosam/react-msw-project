export const mockStore = (categorySlug: string | null) => {
	const randomId = Date.now().toString()
	return {
		items: [
			{
				fields: {
					image: {
						fields: {
							file: {
								url: 'https://placehold.co/150x150/E470FF/fff',
							},
						},
					},
					name: categorySlug?.toUpperCase() || 'Category Name',
					slug: categorySlug || 'category-name',
					prevCategory: {
						fields: {
							name: 'Previous Category',
							slug: `prev-cat-${randomId}`,
						},
					},
					nextCategory: {
						fields: {
							name: 'Next Category',
							slug: `next-cat-${randomId}`,
						},
					},
					stores: ['FFCDE3', 'DDFFBB', '8CE9FF'].map((color, i) => {
						return {
							fields: {
								name: `Tienda ${i + 1}`,
								phone: '123456789',
								image: {
									fields: {
										file: {
											url: `https://placehold.co/150x150/${color}/fff`,
										},
									},
								},
							},
						}
					}),
				},
			},
		],
	}
}
