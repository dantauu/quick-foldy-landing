import { z } from 'zod'

const email = z.string().min(1, 'Введите почту').email('Неверная почта')

export const loginSchema = z.object({
  email,
  password: z.string().min(1, 'Введите пароль'),
})

export const registerSchema = z
  .object({
    name: z.string().trim().min(1, 'Введите имя'),
    email,
    password: z.string().min(8, 'Минимум 8 символом'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  })

export type LoginValues = z.infer<typeof loginSchema>
export type RegisterValues = z.infer<typeof registerSchema>
