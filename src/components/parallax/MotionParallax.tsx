// components/parallax/MotionParallax.tsx
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface MotionParallaxProps {
	children: React.ReactNode
	speed?: number
	className?: string
	direction?: 'vertical' | 'horizontal'
}

export const MotionParallax: React.FC<MotionParallaxProps> = ({
	children,
	speed = 50,
	className = '',
	direction = 'vertical'
}) => {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start']
	})

	const y = useTransform(
		scrollYProgress,
		[0, 1],
		direction === 'vertical' ? [speed, -speed] : [0, 0]
	)

	const x = useTransform(
		scrollYProgress,
		[0, 1],
		direction === 'horizontal' ? [speed, -speed] : [0, 0]
	)

	return (
		<motion.div
			ref={ref}
			style={{
				y: direction === 'vertical' ? y : 0,
				x: direction === 'horizontal' ? x : 0
			}}
			className={className}
		>
			{children}
		</motion.div>
	)
}
