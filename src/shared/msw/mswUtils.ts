export function mockDelay(devDelay = 1000, testDelay = 0) {
	return import.meta.env.MODE === 'test' ? testDelay : devDelay
}
