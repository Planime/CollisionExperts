import Container from '@components/container/Container'
import Logo from '@components/logo/Logo'
import { useScrollStore } from '@store/scroll.store'
import HeaderMenu from './HeaderMenu'

const Header = () => {
	const { scrollToSection } = useScrollStore()

	const handleScrollToBlock = (id: string) => {
		scrollToSection(id)
	}

	return (
		<header className="fixed top-0 left-0 z-10 w-full px-2 md:px-[52px] bg-white">
			<Container>
				<div className="relative z-1 flex h-14 items-center gap-3 py-1.5 md:h-20 md:gap-8 md:py-3">

					{/* Background shape */}
					<span className="clip-custom absolute top-0 left-1/2 -z-10 h-full w-[calc(100%+48px)] -translate-x-1/2 md:w-[calc(100%+104px)]" />

					{/* LOGO */}
					<Logo />

					{/* DESKTOP MENU */}
					<div className="hidden lg:flex lg:ml-8 lg:mr-auto">
						<HeaderMenu />
					</div>

					{/* RIGHT SIDE BUTTONS */}
					<div className="ml-auto flex items-center gap-2">

						{/* CONTACT US (icon only on mobile) */}
						<button
							type="button"
							onClick={() => handleScrollToBlock('payment')}
							className="
								inline-flex items-center gap-2
								rounded-full border border-[#1F4FFF]
								bg-white px-4 py-2
								text-sm font-semibold text-[#1F4FFF]
								hover:bg-[#1F4FFF] hover:text-white
								transition
								max-md:h-10
							"
						>
							{/* Chat Icon */}
							<svg
								viewBox="0 0 24 24"
								className="h-5 w-5"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
							</svg>

							{/* TEXT HIDDEN ON MOBILE */}
							<span className="max-md:hidden">Contact Us</span>
						</button>

						{/* CALL US BUTTON (optional to remove text also) */}
						<a
							href="tel:9169997975"
							className="
								inline-flex items-center gap-2
								rounded-full bg-[#2FB45A] px-4 py-2
								text-sm font-semibold text-white
								hover:bg-[#28A24F]
								transition
								max-md:h-10
							"
						>
							<svg
								viewBox="0 0 24 24"
								className="h-5 w-5"
								fill="none"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.18L9 11a16 16 0 0 0 6 6l1.76-1.27a2 2 0 0 1 2.18-.45 17.3 17.3 0 0 1 2.34.72A2 2 0 0 1 22 16.92Z" />
							</svg>

							<span className="max-md:hidden">Call Us</span>
						</a>

						{/* MOBILE MENU */}
						<div className="lg:hidden">
							<HeaderMenu />
						</div>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
