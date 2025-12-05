// Updated Services.tsx with overlapping stack scroll
import { servicesList } from '@assets/services.data'
import Container from '@components/container/Container'
import { useBreakpoint } from '@hooks/useBreakpoint'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { type FC, useEffect, useRef } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Block from '../Block'

import type { ServicesProps } from './services.types'

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger)
}

const Services: FC<ServicesProps> = ({ isMobileSlider }) => {
	const { isMobile } = useBreakpoint()
	const shouldUseSlider = isMobile && isMobileSlider
	const servicesContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (shouldUseSlider || !servicesContainerRef.current) return

		const blocks =
			servicesContainerRef.current.querySelectorAll('.service-block')

		const ctx = gsap.context(() => {
			// Parallax + overlap stacking

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			blocks.forEach((block: any, index: number) => {
				// Base parallax
				gsap.to(block.querySelector('.parallax-content'), {
					yPercent: -20,
					ease: 'none',
					scrollTrigger: {
						trigger: block,
						start: 'top bottom',
						end: 'bottom top',
						scrub: 1.2
					}
				})

				// Overlap stack effect
				if (index > 0) {
					gsap.fromTo(
						block,
						{ y: -60, opacity: 0.85, scale: 0.98 },
						{
							y: 0,
							opacity: 1,
							scale: 1,
							scrollTrigger: {
								trigger: block,
								start: 'top 85%',
								end: 'top 50%',
								scrub: true
							}
						}
					)
				}

				// Fade/scale when leaving
				if (index < blocks.length - 1) {
					gsap.fromTo(
						block,
						{
							opacity: 1,
							scale: 1
						},
						{
							opacity: 0.75,
							scale: 0.97,
							ease: 'none',
							scrollTrigger: {
								trigger: block,
								start: 'bottom 85%',
								end: 'bottom 60%',
								scrub: 1.2
							}
						}
					)
				}
			})
		}, servicesContainerRef)

		return () => ctx.revert()
	}, [shouldUseSlider])

	return (
		<div id='service' className='relative' ref={servicesContainerRef}>
			{shouldUseSlider ? (
				<Container>
					<Swiper
						modules={[Pagination]}
						spaceBetween={16}
						slidesPerView={1}
						className='pb-9!'
						pagination={{ clickable: true }}
					>
						{servicesList.map(service => (
							<SwiperSlide
								key={service.title}
								className='h-auto!'
							>
								<Block
									title={service.title}
									imgUrl={service.imgUrl}
									imgUrl2x={service.imgUrl2x}
									subtitle={service.subtitle}
									description={service.description}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</Container>
			) : (
				<div className='flex flex-col'>
					{servicesList.map(service => (
						<div
							key={service.title}
							className='service-block relative z-10'
						>
							<Block
								id={service.id}
								title={service.title}
								imgUrl={service.imgUrl}
								imgUrl2x={service.imgUrl2x}
								subtitle={service.subtitle}
								description={service.description}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Services
