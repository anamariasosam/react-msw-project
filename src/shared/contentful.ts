import { createClient } from 'contentful'

const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE
export const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_TOKEN

export const CONTENTFUL_CLIENT = createClient({
	space: SPACE_ID,
	accessToken: ACCESS_TOKEN,
})

export const API_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`
