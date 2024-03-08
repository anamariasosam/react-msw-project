import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import Store from '../routes/Store'
import { renderWithQueryClient } from '../shared/testUtils'
import { describe, expect, test, vi } from 'vitest'

vi.mock('react-router-dom', async () => {
	const actual = await vi.importActual('react-router-dom')
	return {
		...actual,
		useParams: () => ({ slug: 'broken-category' }),
	}
})

describe('Store', () => {
	test('shows an error message if request fails', async () => {
		renderWithQueryClient(<Store />)
		await waitForElementToBeRemoved(() => screen.getByTestId('loading-spinner'))
		expect(screen.getByText(/Error/)).toBeInTheDocument()
	})
})
