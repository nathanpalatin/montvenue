'use server'

import { api } from './api-client'

enum Role {
	ADMIN = 'admin',
	USER = 'user',
	SELLER = 'seller'
}

interface GetMembershipResponse {
	membership: {
		id: string
		role: Role
		organizationId: string
		userId: string
	}
}

export async function getMembership() {
	const result = await api.get(`users/profile`).json<GetMembershipResponse>()

	return result
}
