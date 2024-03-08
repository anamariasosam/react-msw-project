import { afterAll, afterEach, beforeAll, expect } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { server } from './src/shared/msw/mswServer'

beforeAll(() =>
	server.listen({
		onUnhandledRequest: 'error',
	}),
)
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

expect.extend(matchers)
