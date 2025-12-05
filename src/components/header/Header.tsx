import Container from '@components/container/Container'
import Logo from '@components/logo/Logo'
import { Button } from '@components/ui/button/Button'
import { useScrollStore } from '@store/scroll.store'

import HeaderMenu from './HeaderMenu'

const Header = () => {
	const { scrollToSection } = useScrollStore()

	const handleScrollToBlock = (id: string) => {
		scrollToSection(id)
	}
	return (
		<header className='fixed top-0 left-0 z-10 w-full px-2 md:px-[52px]'>
			<Container>
				<div className='relative z-1 flex h-14 items-center gap-5 py-1.5 md:h-20 md:gap-8 md:py-3'>
					<span className='clip-custom absolute top-0 left-1/2 -z-10 h-full w-[calc(100%+48px)] -translate-x-1/2 md:w-[calc(100%+104px)]' />

					<Logo />

					<div className='ml-auto lg:mr-auto lg:ml-0'>
						<HeaderMenu />
					</div>
					<Button
						variant='light'
						size='md'
						className='max-md:h-10 max-md:w-10 max-md:p-2.5'
						onClick={() => handleScrollToBlock('payment')}
					>
						<img src='phone.svg' alt='call' className='lg:hidden' />
						<span className='hidden lg:inline'>contact us</span>
					</Button>
				</div>
			</Container>
		</header>
	)
}

export default Header
