import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxSectionProps {
	children: React.ReactNode
	speed?: number
	className?: string
	direction?: 'up' | 'down' | 'left' | 'right'
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
	children,
	speed = 50,
	className = '',
	direction = 'up'
}) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const element = ref.current
		if (!element) return

		gsap.to(element, {
			y: direction === 'up' ? -speed : direction === 'down' ? speed : 0,
			x:
				direction === 'left'
					? -speed
					: direction === 'right'
						? speed
						: 0,
			ease: 'none',
			scrollTrigger: {
				trigger: element,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			}
		})

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		}
	}, [speed, direction])

	return (
		<div ref={ref} className={className}>
			{children}
		</div>
	)
}
