import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'

const CheckoutForm = () => {
	const stripe = useStripe()
	const elements = useElements()
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!stripe || !elements) return

		setLoading(true)

		// 1. Запрос к вашему бекенду для создания PaymentIntent
		const res = await fetch('/create-payment-intent', { method: 'POST' })
		const { client_secret } = await res.json()

		// 2. Подтверждение платежа
		const result = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement)!
			}
		})

		if (result.error) {
			alert(result.error.message)
		} else if (result.paymentIntent?.status === 'succeeded') {
			alert('Payment successful!')
		}

		setLoading(false)
	}

	return (
		<form onSubmit={handleSubmit}>
			<CardElement />
			<button type='submit' disabled={!stripe || loading}>
				Pay
			</button>
		</form>
	)
}

export default CheckoutForm
