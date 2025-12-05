const StripeButton = () => {
	const paymentLink = import.meta.env.VITE_STRIPE_PAYMENT_LINK
	const paymentSecretKey = import.meta.env.VITE_STRIPE_SECRET_KEY

	return (
		<div
			className='relative w-full cursor-pointer lg:w-auto'
			onClick={() =>
				window.open(`${paymentLink}/${paymentSecretKey}`, '_blank')
			}
		>
			<span className='hidden group hover:text-accent flex w-full items-center justify-between gap-1 text-nowrap lg:justify-start'>
				<span className='relative'>
					Claim Finished / Payment
					<span className='bg-primary group-hover:bg-accent absolute top-full left-1/2 hidden h-px w-0 transition-[width] duration-150 group-hover:w-1/2 lg:block' />
					<span className='bg-primary group-hover:bg-accent absolute top-full right-1/2 hidden h-px w-0 transition-[width] duration-150 group-hover:w-1/2 lg:block' />
				</span>
			</span>
		</div>
	)
}

export default StripeButton
