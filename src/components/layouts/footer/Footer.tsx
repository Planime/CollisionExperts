import { footerNavs } from '@assets/footer-nav.data'
import Container from '@components/container/Container'
import Logo from '@components/logo/Logo'
import SocialBtn from '@components/ui/social-btn/SocialBtn'
import { useScrollStore } from '@store/scroll.store'
import clsx from 'clsx'

const Footer = () => {
	const { scrollToSection } = useScrollStore()

	const handleScrollClick = (id?: string) => {
		if (!id) return
		scrollToSection(id)
	}

	return (
		<footer className='bg-[#0D1113]'>
			<Container>
				<div className='grid gap-8 py-8 text-white md:grid-cols-2 md:py-10 lg:grid-cols-4 lg:py-12'>
					<div className='flex flex-col gap-8 border-b border-white/5 pb-8 md:gap-11 md:border-none md:pb-0 lg:gap-14'>
						<div className='text-center md:text-start'>
							<Logo />
						</div>

						<div className='flex gap-8 md:flex-col'>
							<div className='text-lg font-semibold leading-[140%] md:text-xl lg:text-2xl'>
								Free estimate? <br /> We are in touch
							</div>

							<div className='ml-auto flex items-center gap-3 md:ml-0'>
								<a
									href='https://www.instagram.com/collision_experts_/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<SocialBtn icon='instagram' theme='dark' />
								</a>

								<a
									href='https://www.facebook.com/profile.php?id=61577860139495'
									target='_blank'
									rel='noopener noreferrer'
								>
									<SocialBtn icon='facebook' theme='dark' />
								</a>
							</div>
						</div>
					</div>

					{footerNavs.map((item, index) => (
						<div
							key={index}
							className='group flex flex-col gap-6 not-last:border-b not-last:border-white/5 not-last:pb-8 md:gap-8 md:border-none md:pb-0 md:last:col-span-2'
						>
							<div className={clsx('text-white', !item.title && 'opacity-0')}>
								<b>{item.title ?? 'Other'}</b>
							</div>

							<div className='flex flex-col gap-3 group-last:grid group-last:grid-cols-2 md:gap-4'>
								{item.list.map((link, i) =>
									link.id ? (
										<button
											key={i}
											type='button'
											className='text-left cursor-pointer hover:text-white/80 transition'
											onClick={() => handleScrollClick(link.id)}
										>
											{link.title}
										</button>
									) : (
										<span
											key={i}
											className='text-left text-white/60 cursor-default'
										>
											{link.title}
										</span>
									)
								)}
							</div>
						</div>
					))}
				</div>
			</Container>

			<div className='bg-[#222223]'>
				<Container>
					<div className='flex flex-col items-center justify-between gap-3 py-4 max-md:text-center md:flex-row'>
						<div className='leading-normal text-white/70'>
							© Collision Experts 2025 | All rights reserved
						</div>
						<a className='leading-normal text-white/70' href='/privacy' target='_blank'>
							Privacy Policy
						</a>
					</div>
				</Container>
			</div>
		</footer>
	)
}

export default Footer
