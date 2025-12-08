import Container from '@components/container/Container'
import Heading from '@components/heading/Heading'

const Contacts = () => {
	return (
		<section>
			<Container>
				<Heading>Contacts</Heading>

				<div className='mt-6 mb-8 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-8 md:mb-11 md:gap-y-10 lg:mt-10 lg:mb-14 lg:grid-cols-3 lg:gap-y-12'>

					{/* CALL SECTION */}
					<div className='flex flex-col gap-3 md:gap-4'>
						<div className='leading-[140%] text-[#6B6B6B]'>Call us:</div>

						<a
							href='tel:9169997975'
							className='flex items-center gap-3 rounded-lg px-4 py-2.5 hover:bg-black/[0.04] transition cursor-pointer'
						>
							{/* Phone Icon */}
							<svg
								width='18'
								height='18'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='text-[#555]'
							>
								<path
									d='M15.8332 13.3167C14.8415 13.3167 13.8748 13.1583 12.9582 12.85C12.6748 12.7583 12.3582 12.825 12.1498 13.0333L10.7998 14.3833C8.58317 13.2417 6.78317 11.45 5.6415 9.21667L6.98317 7.86667C7.1915 7.65833 7.25817 7.34167 7.1665 7.05833C6.85817 6.14167 6.69984 5.175 6.69984 4.18333C6.69984 3.7 6.29984 3.3 5.8165 3.3H4.1665C3.68317 3.3 3.28317 3.7 3.28317 4.18333C3.28317 11.0583 8.9415 16.7167 15.8165 16.7167C16.2998 16.7167 16.6998 16.3167 16.6998 15.8333V14.1833C16.6998 13.7 16.2998 13.3167 15.8332 13.3167Z'
									fill='currentColor'
								/>
							</svg>

							<span className='text-base font-semibold text-[#111]'>
								916-999-7975
							</span>
						</a>
					</div>

					{/* EMAIL SECTION */}
					<div className='flex flex-col gap-3 max-md:order-1 md:gap-4'>
						<div className='leading-[140%] text-[#6B6B6B]'>Email us:</div>

						<a
							href='mailto:collisionexperts.claims@gmail.com'
							className='flex items-center gap-3 rounded-lg px-4 py-2.5 hover:bg-black/[0.04] transition cursor-pointer break-all'
						>
							{/* Email Icon */}
							<svg
								width='18'
								height='18'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='text-[#555]'
							>
								<path
									d='M3.3335 4.16663H16.6668C17.1088 4.16663 17.5002 4.55804 17.5002 4.99996V15C17.5002 15.4419 17.1088 15.8333 16.6668 15.8333H3.3335C2.89158 15.8333 2.50016 15.4419 2.50016 15V4.99996C2.50016 4.55804 2.89158 4.16663 3.3335 4.16663ZM16.6668 6.08329L10.0002 10.4166L3.3335 6.08329V15H16.6668V6.08329ZM10.0002 8.83329L16.4668 4.16663H3.5335L10.0002 8.83329Z'
									fill='currentColor'
								/>
							</svg>

							<span className='text-base font-semibold text-[#111]'>
								collisionexperts.claims@gmail.com
							</span>
						</a>
					</div>

					{/* SOCIAL MEDIA */}
					<div className='flex flex-col gap-3 max-md:order-3 md:gap-4'>
						<div className='leading-[140%] text-[#6B6B6B]'>
							Social media:
						</div>
						<div className='flex items-center gap-3'>
							<a
								href='https://www.instagram.com/collision_experts_/'
								target='_blank'
								className='hover:text-accent hover:border-accent flex aspect-square w-11 shrink-0 items-center justify-center rounded-full border border-[#EAEAEA] transition duration-200'
							>
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M10.0006 7.39707C8.56699 7.39707 7.39707 8.56699 7.39707 10.0006C7.39707 11.4342 8.56699 12.6041 10.0006 12.6041C11.4342 12.6041 12.6041 11.4342 12.6041 10.0006C12.6041 8.56699 11.4342 7.39707 10.0006 7.39707ZM17.8092 10.0006C17.8092 8.92246 17.8189 7.8541 17.7584 6.77792C17.6978 5.52792 17.4127 4.41855 16.4986 3.50449C15.5826 2.58847 14.4752 2.30527 13.2252 2.24472C12.1471 2.18417 11.0787 2.19394 10.0025 2.19394C8.92441 2.19394 7.85605 2.18417 6.77988 2.24472C5.52988 2.30527 4.4205 2.59042 3.50644 3.50449C2.59042 4.4205 2.30722 5.52792 2.24667 6.77792C2.18613 7.85605 2.19589 8.92441 2.19589 10.0006C2.19589 11.0768 2.18613 12.1471 2.24667 13.2232C2.30722 14.4732 2.59238 15.5826 3.50644 16.4967C4.42246 17.4127 5.52988 17.6959 6.77988 17.7564C7.858 17.817 8.92636 17.8072 10.0025 17.8072C11.0807 17.8072 12.149 17.817 13.2252 17.7564C14.4752 17.6959 15.5846 17.4107 16.4986 16.4967C17.4146 15.5807 17.6978 14.4732 17.7584 13.2232C17.8209 12.1471 17.8092 11.0787 17.8092 10.0006ZM10.0006 14.0064C7.78378 14.0064 5.99472 12.2174 5.99472 10.0006C5.99472 7.78378 7.78378 5.99472 10.0006 5.99472C12.2174 5.99472 14.0064 7.78378 14.0064 10.0006C14.0064 12.2174 12.2174 14.0064 10.0006 14.0064ZM14.1705 6.76621C13.6529 6.76621 13.235 6.34824 13.235 5.83066C13.235 5.31308 13.6529 4.89511 14.1705 4.89511C14.6881 4.89511 15.1061 5.31308 15.1061 5.83066C15.1062 5.95356 15.0821 6.07528 15.0351 6.18886C14.9882 6.30243 14.9193 6.40563 14.8324 6.49253C14.7455 6.57944 14.6423 6.64834 14.5287 6.69531C14.4151 6.74227 14.2934 6.76636 14.1705 6.76621Z'
										fill='currentColor'
									/>
								</svg>
							</a>

							<a
								href='https://www.facebook.com/profile.php?id=61577860139495'
								target='_blank'
								className='hover:text-accent hover:border-accent flex aspect-square w-11 shrink-0 items-center justify-center rounded-full border border-[#EAEAEA] transition duration-200'
							>
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M7.66464 17.9163H10.998V11.2413H14.0013L14.3313 7.92467H10.998V6.24967C10.998 6.02866 11.0858 5.8167 11.242 5.66042C11.3983 5.50414 11.6103 5.41634 11.8313 5.41634H14.3313V2.08301H11.8313C10.7262 2.08301 9.66643 2.52199 8.88502 3.3034C8.10362 4.0848 7.66464 5.14461 7.66464 6.24967V7.92467H5.99797L5.66797 11.2413H7.66464V17.9163Z'
										fill='currentColor'
									/>
								</svg>
							</a>
						</div>
					</div>

					{/* WORK SCHEDULE */}
					<div className='flex flex-col gap-3 md:gap-4'>
						<div className='leading-[140%] text-[#6B6B6B]'>Work schedule:</div>
						<span className='leading-[140%]'>
							Mon-Fri: 10:00 AM – 6:00 PM <br />
							Saturday: 10:00 AM – 2:00 PM <br />
							<span className='font-semibold'>Sunday – closed</span>
						</span>
					</div>

					{/* ADDRESS */}
					<div className='flex flex-col gap-3 max-md:order-2 md:gap-4'>
						<div className='leading-[140%] text-[#6B6B6B]'>Address:</div>
						<span className='leading-[140%] font-semibold'>
							6315 Watt Ave #117, North Highlands, CA 95660
						</span>
					</div>
				</div>

				{/* MAP */}
				<div className='h-[358px] w-full overflow-hidden rounded-3xl md:h-[428px] md:rounded-[36px]'>
					<iframe
						className='h-full w-full rounded-xl'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.5824184315484!2d-121.3841336!3d38.6814639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad9634cb06aff%3A0xdd2466a2ab8b21bd!2sCollision%20Experts!5e0!3m2!1sen!2sus&hl=en'
						allowFullScreen
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					/>
				</div>
			</Container>
		</section>
	)
}

export default Contacts
