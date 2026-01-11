// components/parallax/ParallaxSection.tsx
import React, { useEffect, useRef } from 'react'

// Toggle to enable/disable parallax globally
const PARALLAX_ENABLED = false

interface ParallaxSectionProps {
	children: React.ReactNode
	speed?: number
	className?: string
	direction?: 'up' | 'down' | 'left' | 'right'
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
	children,
	className = '',
}) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// If feature disabled → do nothing, skip GSAP logic completely
		if (!PARALLAX_ENABLED) return

		// If you re-enable parallax in the future,
		// put your GSAP ScrollTrigger code back here.
	}, [])

	// Render children normally
	return (
		<div ref={ref} className={className}>
			{children}
		</div>
	)
}
