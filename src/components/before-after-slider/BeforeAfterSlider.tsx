import React, { useEffect, useRef, useState } from 'react'

import type { BeforeAfterSliderProps } from './before-after-slider.types'

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
	before,
	after
}) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [position, setPosition] = useState(50)
	const isDragging = useRef(false)

	const handleMove = (clientX: number) => {
		if (!containerRef.current) return
		const rect = containerRef.current.getBoundingClientRect()
		const newPos = ((clientX - rect.left) / rect.width) * 100
		setPosition(Math.min(100, Math.max(0, newPos)))
	}

	const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
		if (!containerRef.current) return
		isDragging.current = true
		if ('clientX' in e) handleMove(e.clientX)
		else if (e.touches.length > 0) handleMove(e.touches[0].clientX)
	}

	const handleMouseUp = () => {
		isDragging.current = false
	}

	const handleMouseMove = (e: MouseEvent) => {
		if (!isDragging.current) return
		handleMove(e.clientX)
	}

	const handleTouchMove = (e: TouchEvent) => {
		if (!isDragging.current) return
		if (e.touches.length > 0) handleMove(e.touches[0].clientX)
	}

	useEffect(() => {
		window.addEventListener('mouseup', handleMouseUp)
		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('touchmove', handleTouchMove)
		window.addEventListener('touchend', handleMouseUp)

		return () => {
			window.removeEventListener('mouseup', handleMouseUp)
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('touchmove', handleTouchMove)
			window.removeEventListener('touchend', handleMouseUp)
		}
	}, [])

	return (
		<div
			ref={containerRef}
			className='relative aspect-1180/505 w-full overflow-hidden rounded-2xl shadow-lg select-none'
			onMouseDown={handleMouseDown}
			onTouchStart={handleMouseDown}
		>
			{/* Фоновое (after) изображение */}
			<img
				src={after}
				alt='After'
				className='absolute inset-0 h-full w-full object-cover'
				draggable={false}
			/>

			{/* Верхнее (before) изображение */}
			<div
				className='absolute inset-0'
				style={{
					clipPath: `inset(0 ${100 - position}% 0 0)`
				}}
			>
				<img
					src={before}
					alt='Before'
					className='absolute inset-0 h-full w-full object-cover'
					draggable={false}
				/>
			</div>

			{/* Вертикальный разделитель */}
			<div
				className='absolute top-0 bottom-0 flex items-center justify-center'
				style={{
					left: `${position}%`,
					transform: 'translateX(-50%)'
				}}
			>
				<div className='relative h-full w-[3px] bg-white shadow-md'>
					<div className='absolute top-1/2 left-1/2 flex aspect-square w-8 -translate-1/2 cursor-grab items-center justify-between rounded-full bg-white p-1.5 active:cursor-grabbing md:w-16 md:p-3'>
						<svg
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9.00241 0.764787C9.00239 0.863323 8.98295 0.960888 8.9452 1.05191C8.90745 1.14293 8.85213 1.22562 8.78241 1.29525L4.94691 5.13047C4.8308 5.24654 4.7387 5.38434 4.67586 5.53601C4.61302 5.68768 4.58068 5.85023 4.58068 6.0144C4.58068 6.17857 4.61302 6.34113 4.67586 6.4928C4.7387 6.64447 4.8308 6.78227 4.94691 6.89834L8.77791 10.7291C8.91453 10.8705 8.99013 11.0599 8.98842 11.2566C8.98671 11.4532 8.90783 11.6413 8.76877 11.7803C8.62972 11.9194 8.44161 11.9983 8.24496 12C8.04831 12.0017 7.85886 11.9261 7.71741 11.7895L3.88641 7.95876C3.37132 7.44275 3.08203 6.74347 3.08203 6.0144C3.08203 5.28534 3.37132 4.58605 3.88641 4.07005L7.72241 0.234325C7.82733 0.129546 7.96095 0.0582164 8.1064 0.0293506C8.25184 0.000483811 8.40258 0.0153773 8.53956 0.0721467C8.67655 0.128915 8.79363 0.225014 8.87601 0.348296C8.95839 0.47158 9.00238 0.616514 9.00241 0.764787Z'
								fill='currentColor'
							/>
						</svg>
						<svg
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2.99759 0.764787C2.99761 0.863323 3.01705 0.960888 3.0548 1.05191C3.09255 1.14293 3.14787 1.22562 3.21759 1.29525L7.05309 5.13047C7.1692 5.24654 7.2613 5.38434 7.32414 5.53601C7.38698 5.68768 7.41932 5.85023 7.41932 6.0144C7.41932 6.17857 7.38698 6.34113 7.32414 6.4928C7.2613 6.64447 7.1692 6.78227 7.05309 6.89834L3.22209 10.7291C3.08547 10.8705 3.00988 11.0599 3.01158 11.2566C3.01329 11.4532 3.09217 11.6413 3.23123 11.7803C3.37028 11.9194 3.55839 11.9983 3.75504 12C3.95169 12.0017 4.14114 11.9261 4.28259 11.7895L8.11359 7.95876C8.62868 7.44275 8.91797 6.74347 8.91797 6.0144C8.91797 5.28534 8.62868 4.58605 8.11359 4.07005L4.27759 0.234325C4.17267 0.129546 4.03905 0.0582164 3.8936 0.0293506C3.74816 0.000483811 3.59742 0.0153773 3.46044 0.0721467C3.32345 0.128915 3.20637 0.225014 3.12399 0.348296C3.04161 0.47158 2.99762 0.616514 2.99759 0.764787Z'
								fill='currentColor'
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BeforeAfterSlider
