import clsx from 'clsx'
import type { FC, PropsWithChildren } from 'react'

type HeadingProps = {
	className?: string
}
const Heading: FC<PropsWithChildren<HeadingProps>> = ({
	className,
	children
}) => {
	return (
		<h2
			className={clsx(
				'text-2xl leading-[140%] font-semibold md:text-3xl lg:text-[40px]',
				className
			)}
		>
			{children}
		</h2>
	)
}

export default Heading
