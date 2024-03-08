import { describe, expect, test } from 'vitest'
import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import Categories from '../routes/Categories'

import { mockCategories } from '../__mocks__/categoriesMocks'
import { renderWithQueryClient } from '../shared/testUtils'

const CATEGORIES = mockCategories.items.map(({ fields: { name } }) => name)

describe('Categories', () => {
	test('render a list of categories', async () => {
		renderWithQueryClient(<Categories />)

		await waitForElementToBeRemoved(() => screen.getByTestId('loading-spinner'))

		CATEGORIES.map(name => expect(screen.getByText(name)).toBeInTheDocument())
		expect(screen.getAllByRole('row')).toHaveLength(CATEGORIES.length)
	})
})
