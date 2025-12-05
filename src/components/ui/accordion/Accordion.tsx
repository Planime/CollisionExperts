import clsx from 'clsx'
import { type FC, useState } from 'react'

type AccordionItem = {
	title: string
	description: string
}

type AccordionProps = {
	items: AccordionItem[]
	isMultiple?: boolean
}

const Accordion: FC<AccordionProps> = ({ items, isMultiple = false }) => {
	const [openIndexes, setOpenIndexes] = useState<number[]>([])

	const toggleAccordion = (index: number) => {
		if (isMultiple) {
			// Множественное открытие
			setOpenIndexes(prev =>
				prev.includes(index)
					? prev.filter(i => i !== index)
					: [...prev, index]
			)
		} else {
			// Только один открытый
			setOpenIndexes(prev => (prev[0] === index ? [] : [index]))
		}
	}

	return (
		<div className='flex flex-col gap-4'>
			{items.map((item, index) => {
				const isOpen = openIndexes.includes(index)
				return (
					<div
						key={index}
						className={clsx(
							'transform rounded-2xl p-6 transition duration-200 ease-out md:p-8',
							isOpen && 'shadow-three'
						)}
					>
						<button
							onClick={() => toggleAccordion(index)}
							className='flex w-full cursor-pointer items-center justify-between gap-4 text-start text-lg leading-[140%] font-medium md:text-xl lg:text-2xl'
						>
							<span>{item.title}</span>
							<span className='border-accent flex aspect-square w-12 shrink-0 items-center justify-center rounded-lg border'>
								<svg
									className='fill-accent'
									width='16'
									height='16'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect
										y='7'
										width='16'
										height='1.5'
										rx='1'
										className='origin-center transform transition duration-200 ease-out'
									/>
									<rect
										y='7'
										width='16'
										height='1.5'
										rx='1'
										className={clsx(
											'origin-center rotate-90 transform transition duration-200 ease-out',
											isOpen && '!rotate-180'
										)}
									/>
								</svg>
							</span>
						</button>
						<div
							className={clsx(
								'grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out',
								isOpen
									? 'grid-rows-[1fr] opacity-100'
									: 'grid-rows-[0fr] opacity-0'
							)}
						>
							<div className='overflow-hidden'>
								<div className='mt-4 border-t border-[#EAEAEA] pt-6 leading-[140%] md:mt-6'>
									{item.description}
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Accordion
