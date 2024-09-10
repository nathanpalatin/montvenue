'use server'

import { z } from 'zod'

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Por favor, insira um e-mail válido.' }),
})
export async function forgotPassword(data: FormData) {
  const result = forgotPasswordSchema.safeParse(Object.fromEntries(data))
  console.log(result)
}
