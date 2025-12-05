import Container from '@components/container/Container'
import Heading from '@components/heading/Heading'

const Contacts = () => {
	return (
		<section>
			<Container>
				<Heading>Contacts</Heading>
				<div className='mt-6 mb-8 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-8 md:mb-11 md:gap-y-10 lg:mt-10 lg:mb-14 lg:grid-cols-3 lg:gap-y-12'>
					<div className='flex flex-col gap-3 md:gap-4'>
						<div className='leading-[140%] text-[#6B6B6B]'>
							Contacts
						</div>
						<div className='flex flex-col gap-3'>
							<a
								href='tel:+380684838387'
								className='leading-[140%] font-semibold'
							>
								916-999-7975
							</a>

						</div>
					</div>
					<div className='flex flex-col gap-3 max-md:order-1 md:gap-4'>
						<div className='leading-[140%] text-[#6B6B6B]'>
							Email:
						</div>
						<div className='flex flex-col gap-3'>
							<a
								href='mailto:barberhub@gmail.com'
								className='leading-[140%] font-semibold'
							>
								collisionexperts.claims@gmail.com
							</a>
						</div>
					</div>
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
								href='https://www.tiktok.com/en/'
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
										d='M13.8335 4.85C13.264 4.19961 12.95 3.3645 12.9501 2.5H10.3751V12.8333C10.3557 13.3927 10.1197 13.9226 9.71705 14.3112C9.31438 14.6999 8.77646 14.917 8.2168 14.9167C7.03346 14.9167 6.05013 13.95 6.05013 12.75C6.05013 11.3167 7.43346 10.2417 8.85846 10.6833V8.05C5.98346 7.66667 3.4668 9.9 3.4668 12.75C3.4668 15.525 5.7668 17.5 8.20846 17.5C10.8251 17.5 12.9501 15.375 12.9501 12.75V7.50833C13.9943 8.25821 15.2479 8.66054 16.5335 8.65833V6.08333C16.5335 6.08333 14.9668 6.15833 13.8335 4.85Z'
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
					<div className='flex flex-col gap-3 md:gap-4'>
						<div className='leading-[140%] text-[#6B6B6B]'>
							Work schedule:
						</div>
						<div className='flex flex-col gap-3'>
							<span className='leading-[140%]'>
								Mon-Fri: 10:00 AM to 6:00 PM <br />{' '}
							Saturday: 10:00 AM to 2:00 PM <br />{' '}
								<span className='font-semibold'>
									Sunday - closed
								</span>
							</span>
						</div>
					</div>
					<div className='flex flex-col gap-3 max-md:order-2 md:gap-4'>
						<div className='leading-[140%] text-[#6B6B6B]'>
							Address:
						</div>
						<div className='flex flex-col gap-3'>
							<span className='leading-[140%] font-semibold'>
								6315 Watt Ave #117, North Highlands, CA 95660
							</span>
						</div>
					</div>
				</div>
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
