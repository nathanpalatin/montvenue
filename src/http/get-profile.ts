'use server'

import { api } from './api-client'

interface GetProfileResponse {
	user: {
		id: string
		name: string | null
		role: string
		username: string
		avatar: string | null
	}
}

export async function getProfile() {
	const result = await api.get(`users/profile`).json<GetProfileResponse>()

	return result
}
