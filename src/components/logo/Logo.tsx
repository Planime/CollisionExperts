import { useScrollStore } from '@store/scroll.store'

const Logo = () => {
	const { scrollToSection } = useScrollStore()
	return (
		<div
			className='cursor-pointer text-[17px] leading-[120%] font-bold uppercase md:text-xl'
			onClick={() => scrollToSection('root')}
		>
			Collision <br /> <span className='text-accent'>Experts</span>
		</div>
	)
}

export default Logo
