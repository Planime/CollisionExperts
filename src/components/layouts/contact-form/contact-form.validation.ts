import { EMAIL_REGEX, PHONE_REGEX } from '@constants/regex'
import { z } from 'zod'

export const contactFormSchema = z.object({
	name: z.string().nonempty('Name is required'),
	attachment: z.any().optional(),
	email: z
		.string()
		.nonempty('Email is required')
		.regex(EMAIL_REGEX, 'Invalid email address'),

	phone: z
		.string()
		.optional()
		.or(z.literal('')) // разрешаем пустую строку
		.refine(val => !val || PHONE_REGEX.test(val), 'Invalid phone number'),

	message: z.string().nonempty('Field is required'),
	honeypot: z.string().optional(),

	privacyPolicy: z.boolean().refine(val => val === true, {
		message: 'You must agree to the Privacy Policy'
	}),

	captchaToken: z.string().optional()
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
