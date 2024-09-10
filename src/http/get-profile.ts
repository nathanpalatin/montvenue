import { api } from './api-client'

interface GetProfileResponse {
  user: {
    id: string
    name: string | null
    email: string
    avatar: string | null
  }
}

export async function getProfile() {
  const result = await api.get('/user').json<GetProfileResponse>()

  return result
}
