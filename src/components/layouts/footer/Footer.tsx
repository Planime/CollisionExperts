import { footerNavs } from '@assets/footer-nav.data'
import Container from '@components/container/Container'
import Logo from '@components/logo/Logo'
import SocialBtn from '@components/ui/social-btn/SocialBtn'
import { useScrollStore } from '@store/scroll.store'
import clsx from 'clsx'

// ✅ импорт стора

const Footer = () => {
	const { scrollToSection } = useScrollStore()

	const handleScrollClick = (id?: string) => {
		if (!id) return // если айди нет, ничего не делаем
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
							<div className='text-lg leading-[140%] font-semibold text-white md:text-xl lg:text-2xl'>
								Free estimate? <br /> We are in touch
							</div>
							<div className='ml-auto flex items-center gap-3 md:ml-0'>
								<SocialBtn icon='instagram' theme='dark' />
								<SocialBtn icon='tiktok' theme='dark' />
								<SocialBtn icon='facebook' theme='dark' />
							</div>
						</div>
					</div>

					{footerNavs.map((item, index) => (
						<div
							key={index}
							className='group flex flex-col gap-6 not-last:border-b not-last:border-white/5 not-last:pb-8 md:gap-8 md:border-none md:pb-0 md:last:col-span-2'
						>
							<div
								className={clsx(
									'text-white',
									!item.title && 'opacity-0'
								)}
								aria-hidden={!item.title}
							>
								<b>{item.title ? item.title : 'Other'}</b>
							</div>

							<div className='flex flex-col gap-3 group-last:grid group-last:grid-cols-2 md:gap-4'>
								{item.list.map((link, i) => (
									<button
										key={i}
										type='button'
										className={clsx(
											'cursor-pointer text-left',
											// eslint-disable-next-line @typescript-eslint/ban-ts-comment
											// @ts-ignore

											!link.id && 'cursor-default'
										)}
										onClick={() =>
											// eslint-disable-next-line @typescript-eslint/ban-ts-comment
											// @ts-ignore
											handleScrollClick(link.id)
										}
									>
										{link.title}
									</button>
								))}
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
						<a
							className='leading-normal text-white/70'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
						>
							Privacy Policy
						</a>
					</div>
				</Container>
			</div>
		</footer>
	)
}

export default Footer
