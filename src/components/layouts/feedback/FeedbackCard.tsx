import clsx from 'clsx'
// import type { FC } from 'react'
import type { FC } from 'react'

// type FeedbackCardProps = {
// 	review: {
// 		title: string
// 		description: string
// 		name: string
// 		avatarColor: string
// 		rating: number
// 	}
// }
// const FeedbackCard: FC<FeedbackCardProps> = ({ review }) => {
// 	const totalStars = 5
// 	return (
// 		<div className='flex h-full flex-col gap-6 rounded-3xl bg-[#FAFAFA] p-8'>
// 			<div className='aspect-square w-6'>
// 				<img src='quotes.svg' alt='quote' className='object-fit' />
// 			</div>
// 			<div className='flex-1'>
// 				<div className='mb-3 leading-normal font-semibold'>
// 					{review.title}
// 				</div>
// 				<div
// 					dangerouslySetInnerHTML={{ __html: review.description }}
// 					className='leading-normal'
// 				/>
// 			</div>
// 			<div>
// 				<div className='flex items-center gap-4'>
// 					<div
// 						className={clsx(
// 							'flex aspect-square w-14 shrink-0 items-center justify-center rounded-full text-2xl font-bold text-white md:w-16'
// 						)}
// 						style={{
// 							backgroundColor:
// 								review.avatarColor || 'var(--accent)'
// 						}}
// 					>
// 						{review.name.slice(0, 1)}
// 					</div>
// 					<div className='flex flex-col gap-2'>
// 						<div className='text-xs font-bold md:text-sm'>
// 							{review.name}
// 						</div>
// 						<div className='grid w-[88px] grid-cols-5 gap-0.5'>
// 							{Array.from({ length: totalStars }, (_, i) => {
// 								const isActive = i < review.rating
// 								return (
// 									<svg
// 										key={i}
// 										width='16'
// 										height='16'
// 										viewBox='0 0 16 16'
// 										fill='none'
// 										xmlns='http://www.w3.org/2000/svg'
// 									>
// 										<path
// 											d='M8.00128 2L9.56795 5.84L13.7079 6.14667L10.5346 8.82667L11.5279 12.8533L8.00128 10.6667L4.47462 12.8533L5.46795 8.82667L2.29462 6.14667L6.43462 5.84L8.00128 2Z'
// 											fill={
// 												isActive ? '#1C68FF' : '#DBDBDB'
// 											}
// 										/>
// 										<path
// 											d='M8.00128 2L6.43462 5.84L2.29462 6.14667L5.46795 8.82667L4.47462 12.8533L8.00128 10.6667M8.00128 2L9.56795 5.84L13.7079 6.14667L10.5346 8.82667L11.5279 12.8533L8.00128 10.6667'
// 											stroke={
// 												isActive ? '#1C68FF' : '#DBDBDB'
// 											}
// 											strokeWidth='2.28571'
// 											strokeLinecap='round'
// 											strokeLinejoin='round'
// 										/>
// 									</svg>
// 								)
// 							})}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default FeedbackCard
type FeedbackCardProps = {
	review: {
		title: string
		description: string
		name: string
		avatarColor: string
		rating: number
	}
}
const FeedbackCard: FC<FeedbackCardProps> = ({ review }) => {
	const totalStars = 5

	return (
		<div className='flex h-full flex-col gap-6 rounded-3xl bg-[#FAFAFA] p-8'>
			<div className='aspect-square w-6'>
				<img src='quotes.svg' alt='quote' className='object-fit' />
			</div>

			<div className='flex-1'>
				<div className='mb-3 leading-normal font-semibold'>
					{review.title}
				</div>
				<div
					dangerouslySetInnerHTML={{ __html: review.description }}
					className='leading-normal'
				/>
			</div>

			<div>
				<div className='flex items-center gap-4'>
					<div
						className={clsx(
							'flex aspect-square w-14 shrink-0 items-center justify-center rounded-full text-2xl font-bold text-white md:w-16'
						)}
						style={{
							backgroundColor:
								review.avatarColor || 'var(--accent)'
						}}
					>
						{review.name.slice(0, 1)}
					</div>
					<div className='flex flex-col gap-2'>
						<div className='text-xs font-bold md:text-sm'>
							{review.name}
						</div>
						<div className='grid w-[88px] grid-cols-5 gap-0.5'>
							{Array.from({ length: totalStars }, (_, i) => {
								const isActive = i < review.rating
								return (
									<svg
										key={i}
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M8.00128 2L9.56795 5.84L13.7079 6.14667L10.5346 8.82667L11.5279 12.8533L8.00128 10.6667L4.47462 12.8533L5.46795 8.82667L2.29462 6.14667L6.43462 5.84L8.00128 2Z'
											fill={
												isActive ? '#1C68FF' : '#DBDBDB'
											}
										/>
										<path
											d='M8.00128 2L6.43462 5.84L2.29462 6.14667L5.46795 8.82667L4.47462 12.8533L8.00128 10.6667M8.00128 2L9.56795 5.84L13.7079 6.14667L10.5346 8.82667L11.5279 12.8533L8.00128 10.6667'
											stroke={
												isActive ? '#1C68FF' : '#DBDBDB'
											}
											strokeWidth='2.28571'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeedbackCard
