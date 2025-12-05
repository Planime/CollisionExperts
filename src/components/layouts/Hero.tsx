import Container from '@components/container/Container'
import { Button } from '@components/ui/button/Button'
import { useScrollStore } from '@store/scroll.store'
import { motion } from 'framer-motion'

const Hero = () => {
	const { scrollToSection } = useScrollStore()

	const handleScrollToBlock = (id: string) => {
		scrollToSection(id)
	}

	// анимация справа -> влево
	const item = {
		hidden: { opacity: 0, x: 180 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.7, // медленнее
				ease: 'easeOut' // плавнее
			}
		}
	}

	return (
		<Container className='relative' isRight>
			<section className='flex h-screen max-h-[897px] max-w-[682px] flex-col items-start justify-end gap-8 py-[50px] md:justify-center md:gap-10 lg:gap-12'>
				{/* Обёртка с последовательной анимацией */}
				<motion.div
					initial='hidden'
					animate='show'
					transition={{ staggerChildren: 0.35 }} // задержка между элементами
					className='flex flex-col gap-8 md:gap-10 lg:gap-12'
				>
					<motion.h1
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						variants={item}
						transition={{ duration: 0.6 }}
						className='text-[30px] font-semibold md:text-[48px] lg:text-[56px]'
					>
						PROFESSIONAL COLLISION ESTIMATES & CLAIM HANDLING
					</motion.h1>

					<motion.div
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						variants={item}
						transition={{ duration: 0.6 }}
						className='flex flex-col gap-3 md:gap-6'
					>
						<motion.h3
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							variants={item}
							transition={{ duration: 0.6 }}
							className='text-lg leading-normal font-medium md:text-xl lg:text-2xl'
						>
							Accident damage?
						</motion.h3>

						<motion.p
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							variants={item}
							transition={{ duration: 0.6 }}
							className='text-sm leading-normal md:text-base'
						>
							We handle everything from independent estimates,
							supplements, total loss evaluations, diminished
							value, and loss of use claims. Our team works
							directly with your insurance company to fight for
							the true value of your claim
						</motion.p>
					</motion.div>

					<motion.div
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						variants={item}
					>
						<Button onClick={() => handleScrollToBlock('payment')}>
							Contact us
						</Button>
					</motion.div>
				</motion.div>

				<div className='pointer-events-none absolute top-0 -z-1 aspect-1206/897 max-xl:left-0 max-xl:w-full max-md:h-[463px] xl:right-0 xl:h-full'>
					<span className='absolute inset-0 bg-[linear-gradient(180deg,rgba(250,250,250,0)_62.88%,#FAFAFA_100%),linear-gradient(250.13deg,rgba(255,255,255,0)_19.11%,#FAFAFA_79.15%)]' />
					<img
						className='h-[454px] w-full object-cover md:h-full'
						src='hero-bg.webp'
						srcSet='hero-bg.webp 1x, hero-bg@2x.webp'
					/>
				</div>
			</section>
		</Container>
	)
}

export default Hero
