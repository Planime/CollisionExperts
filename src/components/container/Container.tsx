import clsx from 'clsx'
import type { CSSProperties, FC, PropsWithChildren } from 'react'

import type { ContainerProps } from './container.types'

interface ExtendedContainerProps extends ContainerProps {
	isRight?: boolean
}

const Container: FC<PropsWithChildren<ExtendedContainerProps>> = ({
	children,
	maxWidth,
	className,
	isRight = false
}) => {
	const width = maxWidth ?? 1180
	const padding = 16 // px-4 -> 16px

	const style: CSSProperties = isRight
		? {
				// прижать содержимое к правому краю, но слева минимум 16px
				paddingLeft: `max(16px, calc((100% - ${width}px) / 2 + ${padding}px))`,
				paddingRight: `${padding}px`,
				maxWidth: '100%'
			}
		: {
				// центрированный контейнер с внутренними паддингами
				maxWidth: `${width + padding * 2}px`,
				paddingLeft: `${padding}px`,
				paddingRight: `${padding}px`,
				margin: '0 auto'
			}

	return (
		<div className={clsx(className)} style={style}>
			{children}
		</div>
	)
}

export default Container
