import clsx from 'clsx'
import type { FC, PropsWithChildren } from 'react'

import type { ButtonProps } from './button.types'

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	className,
	size,
	variant,
	...props
}) => {
	return (
		<button
			type='button'
			{...props}
			className={clsx(
				'border-accent inline-flex cursor-pointer items-center justify-center border px-8 py-3 text-xs font-semibold uppercase transition duration-200 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
				size === 'md'
					? 'h-12 rounded-lg md:h-14'
					: 'h-14 rounded-xl md:h-[72px]',
				variant === 'light'
					? 'text-accent hover:bg-accent bg-white hover:text-white'
					: 'bg-accent hover:text-accent text-white hover:bg-white',
				className
			)}
		>
			{children}
		</button>
	)
}
