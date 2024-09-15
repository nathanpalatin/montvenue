import { getCookie } from 'cookies-next'
import { CookiesFn } from 'cookies-next/lib/types'
import ky from 'ky'

export const api = ky.create({
	prefixUrl: process.env.NEXT_PUBLIC_API_URL,
	hooks: {
		beforeRequest: [
			async request => {
				let token: string | undefined

				if (typeof window === 'undefined') {
					const { cookies } = await import('next/headers')
					token = cookies().get('token')?.value
				} else {
					token = getCookie('token') as string | undefined
				}

				if (token) {
					request.headers.set('Authorization', `Bearer ${token}`)
				}
			}
		]
	}
})
