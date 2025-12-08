// import DragDropUploader from '@components/DragDropUploader'  // KEEP COMMENTED FOR LATER
import Container from '@components/container/Container'
import Heading from '@components/heading/Heading'
import { Button } from '@components/ui/button/Button'
import Field from '@components/ui/field/Field'
import { EMAIL_REGEX } from '@constants/regex'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useBreakpoint } from '@hooks/useBreakpoint'
import { useMutation } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { type SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { ImSpinner } from 'react-icons/im'

import type { ContactFormValuesProps } from './contact-form.types'
import {
	type ContactFormValues,
	contactFormSchema
} from './contact-form.validation'

// ======================================
// ENV
// ======================================
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// ======================================
// Convert File → Base64 (KEEP FOR LATER)
// Commented to avoid build errors
// ======================================
// const toBase64 = (file: File) =>
// 	new Promise<string>((resolve, reject) => {
// 		const reader = new FileReader()
// 		reader.readAsDataURL(file)
// 		reader.onload = () => resolve(reader.result as string)
// 		reader.onerror = error => reject(error)
// 	})

const ContactForm = () => {
	const recaptchaRef = useRef<ReCAPTCHA>(null)
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
	const { isMobile } = useBreakpoint()

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset
		// setValue   // <-- KEEP COMMENTED, attachments disabled
	} = useForm<ContactFormValuesProps>({
		mode: 'onChange',
		resolver: zodResolver(contactFormSchema)
	})

	// =====================================================
	// EmailJS SEND LOGIC (ATTACHMENTS DISABLED FOR FREE PLAN)
	// =====================================================
	const mutation = useMutation({
		mutationFn: async (data: ContactFormValues) => {
			if (!recaptchaValue) throw new Error('Please complete the reCAPTCHA')

			// =============================
			// ATTACHMENTS LOGIC (DISABLED)
			// =============================
			// const files = (data.attachment ?? []) as File[]
			// const base64Files = await Promise.all(files.map(f => toBase64(f)))
			// const attachments = base64Files.map((b64, i) => ({
			// 	 name: files[i].name,
			// 	 data: b64.split(',')[1]
			// }))

			// SEND EMAIL WITHOUT ATTACHMENTS
			const response = await emailjs.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				{
					from_name: data.name,
					from_email: data.email,
					phone: data.phone,
					message: data.message
					// attachments: JSON.stringify(attachments) // <— ENABLE WHEN PAID PLAN
				},
				EMAILJS_PUBLIC_KEY
			)

			return response
		},

		onSuccess: () => {
			toast.success('Message sent successfully!')

			reset(
				{
					name: '',
					email: '',
					phone: '',
					message: '',
					attachment: '',
					privacyPolicy: false,
					honeypot: ''
				},
				{ keepIsValid: false }
			)

			recaptchaRef.current?.reset()
			setRecaptchaValue(null)
			mutation.reset()
		},

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError: (error: any) => {
			console.log(error)
			toast.error(error.message || 'Failed to send message')
			recaptchaRef.current?.reset()
			setRecaptchaValue(null)
			mutation.reset()
		}
	})

	const onSubmit: SubmitHandler<ContactFormValues> = data => {
		if (data.honeypot) return
		mutation.mutate(data)
	}

	return (
		<section className="my-20 md:my-24 lg:my-28">
			<Container>
				<Heading className="mb-10 text-center">Contact Us</Heading>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-4 rounded-2xl bg-[#F0F1F3] p-8 md:rounded-3xl md:p-11 lg:p-14"
				>
					{/* Honeypot */}
					<input type="text" className="hidden" {...register('honeypot')} />

					{/* Inputs */}
					<div className="grid gap-4 md:grid-cols-3">
						<Field
							placeholder="John"
							label="Your name"
							error={errors.name?.message}
							registration={register('name')}
						/>

						<Field
							label="Your Phone"
							type="tel"
							placeholder="+1 (___) ___-____"
							error={errors.phone?.message}
							registration={register('phone')}
						/>

						<Field
							placeholder="example@gmail.com"
							label="Your Email"
							type="email"
							error={errors.email?.message}
							registration={register('email', {
								required: 'Email is required',
								pattern: {
									value: EMAIL_REGEX,
									message: 'Invalid email address'
								}
							})}
						/>
					</div>

					{/* Description */}
					<Field
						isTextarea
						placeholder="You can add some description here..."
						label="Description"
						error={errors.message?.message}
						registration={register('message')}
					/>

					{/* =================================================== */}
					{/* ATTACHMENTS BLOCK (DISABLED — FREE PLAN LIMITATION) */}
					{/* =================================================== */}
					{/*
					<div className="grid gap-4 md:grid-cols-2">
						<label htmlFor="attachment">
							<span className="text-sm font-medium">Attachments</span>
							<DragDropUploader
								onFilesChange={files =>
									setValue('attachment', files as any, {
										shouldValidate: true
									})
								}
							/>
						</label>
					</div>
					*/}

					{/* Privacy + reCAPTCHA */}
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div className="relative">
							<div className="flex items-center gap-2">
								<input
									type="checkbox"
									id="privacyPolicy"
									className="h-4 w-4"
									{...register('privacyPolicy', {
										required: 'You must agree to the Privacy Policy'
									})}
								/>
								<label htmlFor="privacyPolicy" className="text-sm">
									I agree to the{' '}
									<a
										href="/privacy"
										className="underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Privacy Policy
									</a>
								</label>
							</div>
						</div>

						<div className="relative">
							<ReCAPTCHA
								ref={recaptchaRef}
								size={isMobile ? 'compact' : 'normal'}
								sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
								onChange={value => setRecaptchaValue(value)}
							/>
						</div>
					</div>

					<Button type="submit" size="md" disabled={!isValid || mutation.isPending}>
						{mutation.isPending ? (
							<ImSpinner width={24} height={24} className="animate-spin" />
						) : (
							'Send'
						)}
					</Button>
				</form>
			</Container>
		</section>
	)
}

export default ContactForm
