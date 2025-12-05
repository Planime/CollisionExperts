// Improved Block.tsx with smoother opacity/scale easing
import Container from '@components/container/Container'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { type FC, useEffect, useRef } from 'react'

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger)
}

type BlockProps = {
	title: string
	imgUrl: string
	subtitle: string
	description: string
	imgUrl2x?: string
	id?: string
}

const Block: FC<BlockProps> = ({
	description,
	title,
	imgUrl,
	imgUrl2x,
	subtitle,
	id
}) => {
	const sectionRef = useRef<HTMLDivElement | null>(null)
	const containerRef = useRef<HTMLDivElement | null>(null)

	const serviceTextRef = useRef<HTMLDivElement | null>(null)
	const titleRef = useRef<HTMLHeadingElement | null>(null)
	const subtitleRef = useRef<HTMLParagraphElement | null>(null)
	const textBlockRef = useRef<HTMLDivElement | null>(null)
	const imageBlockRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!sectionRef.current) return

		const ctx = gsap.context(() => {
			const textTl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 85%',
					end: 'center 60%',
					toggleActions: 'play none none reverse'
				}
			})

			textTl
				.fromTo(
					serviceTextRef.current,
					{ x: 100, opacity: 0 },
					{ x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
				)
				.fromTo(
					titleRef.current,
					{ x: 150, opacity: 0 },
					{ x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
					'-=0.4'
				)
				.fromTo(
					subtitleRef.current,
					{ x: 200, opacity: 0 },
					{ x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
					'-=0.8' // запускаем раньше
				)

			const contentTl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 75%',
					end: 'center 40%',
					toggleActions: 'play none none reverse'
				}
			})

			contentTl
				.fromTo(
					textBlockRef.current,
					{ y: 60, opacity: 0, scale: 0.96 },
					{
						y: 0,
						opacity: 1,
						scale: 1,
						duration: 1.05,
						ease: 'power3.out'
					}
				)
				.fromTo(
					imageBlockRef.current,
					{ y: 80, opacity: 0, scale: 0.96 },
					{
						y: 0,
						opacity: 1,
						scale: 1,
						duration: 1.15,
						ease: 'power3.out'
					},
					'-=0.7'
				)
		}, sectionRef)

		return () => ctx.revert()
	}, [])

	return (
		<section
			id={id}
			className='service-section relative flex items-center py-10 md:py-12'
			ref={sectionRef}
		>
			<div
				ref={containerRef}
				className='parallax-content inset-0 flex h-full w-full items-center'
			>
				<Container className='flex h-full flex-col justify-center'>
					<div className='mb-6 md:mb-8 lg:mb-10'>
						<div className='flex flex-col gap-3 text-center md:gap-4 md:text-left'>
							<div className='flex flex-col gap-2 md:gap-3'>
								<div
									ref={serviceTextRef}
									className='text-sm leading-normal text-gray-600 uppercase md:text-base'
								>
									our service
								</div>
								<h2
									ref={titleRef}
									className='text-2xl leading-tight font-semibold md:text-3xl lg:text-4xl xl:text-5xl'
								>
									{title}
								</h2>
							</div>
							<p
								ref={subtitleRef}
								className='mx-auto max-w-3xl text-base text-lg leading-relaxed md:mx-0 lg:text-xl'
							>
								{subtitle}
							</p>
						</div>
					</div>

					<div className='flex flex-col items-stretch gap-4 md:flex-row md:gap-6 lg:gap-8'>
						<div
							ref={textBlockRef}
							className='flex-[0_0_44%] rounded-4xl bg-[#F0F1F3] p-8 text-center md:aspect-square md:p-12 md:text-left lg:p-[72px]'
						>
							<p className='leading-normal'>{description}</p>
						</div>

						<div
							ref={imageBlockRef}
							className='aspect-video flex-1 overflow-hidden rounded-3xl md:aspect-auto md:min-h-[350px]'
						>
							<img
								className='h-full w-full object-cover'
								src={imgUrl}
								srcSet={
									imgUrl2x
										? `${imgUrl} 1x, ${imgUrl2x} 2x`
										: undefined
								}
								alt={title}
							/>
						</div>
					</div>
				</Container>
			</div>
		</section>
	)
}

export default Block
