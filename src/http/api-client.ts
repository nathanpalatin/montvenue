import { getCookie, setCookie } from 'cookies-next'
import { CookiesFn } from 'cookies-next/lib/types'
import ky from 'ky'

let isRefreshing = false
let refreshSubscribers: Array<(token: string) => void> = []

interface RefreshTokenResponse {
	token: string
	refreshToken: string
}
function onRefreshed(token: string) {
	refreshSubscribers.forEach(callback => callback(token))
	refreshSubscribers = []
}

export const api = ky.create({
	prefixUrl: process.env.NEXT_PUBLIC_API_URL,
	hooks: {
		beforeRequest: [
			async request => {
				let cookieStore: CookiesFn | undefined

				if (typeof window === 'undefined') {
					const { cookies: serverCookies } = await import('next/headers')
					cookieStore = serverCookies
				}

				const token = getCookie('token', { cookies: cookieStore })

				if (token) {
					request.headers.set('Authorization', `${token}`)
				}
			}
		],
		afterResponse: [
			async (_request, _options, response) => {
				if (response.status === 401) {
					const originalRequest = _request

					if (!isRefreshing) {
						isRefreshing = true
						const refreshToken = getCookie('refreshToken')

						try {
							const refreshResponse = await ky
								.patch(`${process.env.NEXT_PUBLIC_API_URL}/token/refresh`, {
									json: { refreshToken }
								})
								.json<RefreshTokenResponse>()

							const newToken = refreshResponse.token
							const newRefreshToken = refreshResponse.refreshToken

							setCookie('token', newToken)
							setCookie('refreshToken', newRefreshToken)

							onRefreshed(newToken)

							originalRequest.headers.set('Authorization', `${newToken}`)
							return ky(originalRequest)
						} catch (error) {
							console.error('Failed to refresh token', error)
						} finally {
							isRefreshing = false
						}
					} else {
						return new Promise(resolve => {
							refreshSubscribers.push((newToken: string) => {
								originalRequest.headers.set('Authorization', `${newToken}`)
								resolve(ky(originalRequest))
							})
						})
					}
				}
			}
		]
	}
})
