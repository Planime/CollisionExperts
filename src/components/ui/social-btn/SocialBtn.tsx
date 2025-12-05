import clsx from 'clsx'
import type { FC, PropsWithChildren } from 'react'

import { Icon } from '../socialIcon'

import type { SocialBtnProps } from './social-btn.types'

const SocialBtn: FC<PropsWithChildren<SocialBtnProps>> = ({
	href = '#',
	icon,
	theme = 'light'
}) => {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={clsx(
				'hover:border-accent hover:text-accent flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border transition md:w-11',
				theme === 'dark'
					? 'border-[#1F2427] text-white'
					: 'text-primary border-[#EAEAEA]'
			)}
		>
			<Icon name={icon} className='h-5 w-5' />
		</a>
	)
}

export default SocialBtn
