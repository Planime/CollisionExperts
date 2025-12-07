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
                    	className='max-md:h-10 max-md:px-4
                                   max-md:bg-blue-500 max-md:text-white
                                   max-md:border-blue-600
                                   transition'
                    	onClick={() => handleScrollToBlock('payment')}
                    >
                    	<img src='phone.svg' alt='call' className='lg:hidden invert' />
                    	<span className='hidden lg:inline'>Contact Us</span>
                    	<span className='lg:hidden text-white'>Contact Us</span>
                    </Button>

					{/* CALL US (GREEN) BUTTON */}
					<a href="tel:9169997975">
						<Button
							size="md"
							className="max-md:h-10 max-md:px-4 flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 transition"
						>
							<img src="/phone.svg" alt="call" className="w-5 h-5 invert" />
							<span className="font-semibold hidden lg:inline">Call Us</span>
							<span className="lg:hidden">Call</span>
						</Button>
					</a>

				</div>
			</Container>
		</header>
	)
}

export default Header
