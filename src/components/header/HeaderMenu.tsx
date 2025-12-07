import { navMenu } from '@assets/navMenu.data'
import StripeButton from '@components/layouts/contact-form/StripeCheckoutButton'
import { useBreakpoint } from '@hooks/useBreakpoint'
import { useOutsideClick } from '@hooks/useOutsideClick'
import { useScrollStore } from '@store/scroll.store'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'

const HeaderMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
	const { scrollToSection } = useScrollStore()
	const { isLg } = useBreakpoint()
	const subMenuRef = useRef<HTMLLIElement | null>(null)

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	useOutsideClick(subMenuRef, () => setActiveSubMenu(null))

	const handleToggleMenu = () => setIsOpen(prev => !prev)

	const handleMenuClick = (item: any, e?: React.MouseEvent) => {
		e?.stopPropagation()

		if (item.submenu) {
			setActiveSubMenu(prev => (prev === item.title ? null : item.title))
			return
		}

		if (item.id) {
			scrollToSection(item.id)
			setIsOpen(false)
		}

		setActiveSubMenu(null)
	}

	return (
		<>
			{/* MOBILE OVERLAY */}
			<span
				className={clsx(
					'fixed inset-0 bg-black/50 transition-all duration-200 lg:hidden',
					isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
				)}
				onClick={handleToggleMenu}
			/>

			<nav>
				{/* MOBILE BURGER BUTTON */}
				<button
					className="flex flex-col items-center justify-center p-1 lg:hidden"
					onClick={handleToggleMenu}
				>
					<svg width="24" height="24" viewBox="0 0 24 24">
						<path
							d="M4 5H16M4 12H20M4 19H12"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>

				{/* MENU CONTAINER */}
				<div
					className={clsx(
						'fixed top-0 right-0 flex h-screen w-4/5 flex-col items-end gap-8 bg-white px-4 py-7 transition-transform duration-200 ease-in',
						'lg:static lg:flex lg:h-auto lg:min-w-0 lg:translate-x-0 lg:flex-row lg:items-center lg:bg-transparent lg:p-0',
						isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
					)}
				>
					{/* CLOSE BUTTON (mobile) */}
					<button
						className="h-6 w-6 p-1 text-black lg:hidden"
						onClick={handleToggleMenu}
					>
						✕
					</button>

					<ul className="flex w-full flex-col items-end gap-5 lg:flex-row lg:items-center xl:gap-8">
						{navMenu.map(item => {
							const isActive = item.submenu && activeSubMenu === item.title

							return (
								<li
									ref={isActive ? subMenuRef : null}
									key={item.title}
									className="relative w-full cursor-pointer lg:w-auto"
									onClick={e => handleMenuClick(item, e)}
								>
									{/* MAIN TITLE */}
									<span className="group hover:text-accent flex w-full items-center justify-between gap-1 text-nowrap lg:justify-start">
										<span className="relative">
											{item.title}

											{/* UNDERLINE EFFECT */}
											<span className="bg-primary group-hover:bg-accent absolute top-full left-1/2 hidden h-px w-0 transition-[width] duration-150 group-hover:w-1/2 lg:block" />
											<span className="bg-primary group-hover:bg-accent absolute top-full right-1/2 hidden h-px w-0 transition-[width] duration-150 group-hover:w-1/2 lg:block" />
										</span>

										{/* ARROW FOR SUBMENU */}
										{item.submenu && (
											<svg
												className={clsx(
													isActive && 'rotate-180',
													'transition duration-200'
												)}
												width="16px"
												height="16px"
												viewBox="0 0 24 24"
												fill="none"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
													fill="currentColor"
												/>
											</svg>
										)}
									</span>

									{/* SUBMENU */}
									<AnimatePresence>
										{item.submenu && isActive && (
											<motion.ul
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -10 }}
												transition={{ duration: 0.2 }}
												className={clsx(
													'flex w-full flex-col rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-200 lg:absolute lg:top-[calc(100%+16px)] lg:min-w-[260px]',
													isLg ? 'p-2' : 'static px-0 pt-4'
												)}
											>
												{item.submenu.map(sub => (
													<li
														key={sub.title}
														className="
															px-4 py-2 text-gray-800 text-sm font-medium
															hover:bg-gray-100 hover:text-black
															border-b border-gray-200 last:border-b-0
															transition-colors cursor-pointer
														"
														onClick={e => {
															e.stopPropagation()
															setIsOpen(false)
															setActiveSubMenu(null)
															scrollToSection(sub.id)
														}}
													>
														{sub.title}
													</li>
												))}
											</motion.ul>
										)}
									</AnimatePresence>
								</li>
							)
						})}

						{/* STRIPE BUTTON */}
						<li className="w-full">
							<StripeButton />
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default HeaderMenu
