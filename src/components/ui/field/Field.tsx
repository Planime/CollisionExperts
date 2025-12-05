import clsx from 'clsx'
import type { FC } from 'react'

import type { FieldProps } from './field.types'

const baseClass =
	'rounded-lg border border-[#D2D2D2] bg-white p-4 text-sm outline-none placeholder:text-[#737373] focus:border-accent transition'

const Field: FC<FieldProps> = ({
	label,
	error,
	isTextarea,
	registration,
	...props
}) => {
	return (
		<div className='flex flex-col gap-1'>
			{label && <label className='text-sm font-medium'>{label}</label>}
			{isTextarea ? (
				<textarea
					className={clsx(
						baseClass,
						'h-[90px] resize-none md:h-[120px]'
					)}
					{...registration}
					{...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
				/>
			) : (
				<input
					type='text'
					className={clsx(baseClass, 'h-12 md:h-14')}
					{...registration}
					{...(props as React.InputHTMLAttributes<HTMLInputElement>)}
				/>
			)}
			{error && <span className='text-xs text-red-500'>{error}</span>}
		</div>
	)
}

export default Field
