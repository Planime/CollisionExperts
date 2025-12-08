import { useScrollStore } from '@store/scroll.store'

const Logo = () => {
	const { scrollToSection } = useScrollStore()

	return (
		<div
			className="cursor-pointer select-none flex items-center gap-3"
			onClick={() => scrollToSection('root')}
		>
			<img
				src="/bannerlogo.png"  // <-- only the shield icon (transparent PNG)
				alt="Collision Experts Shield"
				className="h-10 w-auto md:h-12 object-contain"
				loading="lazy"
			/>

			<div className="leading-[110%] font-bold uppercase text-red-600 text-[16px] md:text-[20px]">
				Collision <br /> Experts
			</div>
		</div>
	)
}

export default Logo
