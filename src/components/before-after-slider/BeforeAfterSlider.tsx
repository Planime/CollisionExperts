import React from 'react'

const BeforeAfterSlider = ({ before, after }) => {
	return (
		<div className="relative aspect-1180/505 w-full overflow-hidden rounded-2xl shadow-lg select-none">
			<img
				src={after}
				alt="After"
				className="absolute inset-0 h-full w-full object-cover"
				draggable={false}
			/>

			<div
				className="absolute inset-0"
				style={{ clipPath: `inset(0 50% 0 0)` }}
			>
				<img
					src={before}
					alt="Before"
					className="absolute inset-0 h-full w-full object-cover opacity-70"
					draggable={false}
				/>
			</div>
		</div>
	)
}

export default BeforeAfterSlider
