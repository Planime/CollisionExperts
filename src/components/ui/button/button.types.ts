import type { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
	className?: string
	variant?: 'light'
	size?: 'md'
} & ButtonHTMLAttributes<HTMLButtonElement>
