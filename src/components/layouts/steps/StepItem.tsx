import type { FC } from 'react'

import type { StepItemProps } from './steps.types'

const StepItem: FC<StepItemProps> = ({ step, idx }) => {
	return (
		<div className='flex items-center gap-8 border-b border-[#F0F1F3] pb-8 last:border-none last:pb-0 md:flex-col md:items-baseline md:border-none md:pb-0'>
			<img
				className='object-fit-contain h-10 w-10 shrink-0 md:h-16 md:w-16'
				src={step.icon}
				alt={step.title}
			/>
			<div className='flex items-center gap-3 md:gap-5'>
				<div className='shadow-three text-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold md:h-16 md:w-16 md:text-xl lg:text-2xl'>
					{idx < 10 ? '0' : null}
					{idx + 1}
				</div>
				<div className='flex flex-col gap-1 leading-normal md:gap-3'>
					<h5 className='text-lg font-semibold md:text-xl lg:text-2xl'>
						{step.title}
					</h5>
					<p>{step.description}</p>
				</div>
			</div>
		</div>
	)
}

export default StepItem
